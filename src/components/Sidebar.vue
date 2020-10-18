<template>
  <!-- 這個元件是右側的購物車、願望清單 -->
  <div class="sticky-top side-bar">
    <div>
      <a href="#" @click.prevent="goToCart" class="btn-cart">
        <div class="mt-3 mb-5">
          <i class="text-muted fas fa-shopping-cart"></i>
        </div>
        <span class="badge badge-pill badge-primary">
          {{ cartAmount }}
        </span>
      </a>
    </div>
    <div>
      <div class="dropleft">
        <button
          type="button"
          class="btn-sm dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"><i class="text-muted far fa-heart"></i></button>
        <div id="stopPropagation" class="dropdown-menu" data-stopPropagation="true">
          <div class="px-3 py-4">
            <table class="table table-sm px-3">
              <thead>
                <tr>
                  <th scope="col">名稱</th>
                  <th scope="col" width="50">數量</th>
                  <th scope="col" width="100">單價</th>
                  <th scope="col" width="50">刪除</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in wishList" :key="index">
                  <td class="align-middle title" @click="getDetail(item.id)">{{ item.title }}</td>
                  <td class="align-middle">1{{ item.unit }}</td>
                  <td class="align-middle">NT.{{ item.price }}</td>
                  <td class="align-middle text-center">
                    <button
                      type="button"
                      class="text-muted trash-btn"
                      @click="deleteWishItem(item)">
                      <i class="fas fa-trash-alt" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <p v-if="isEmpty">還沒有衣服加入願望清單喔！</p>
            <div v-else>
              <div class="dropdown-divider"></div>
              <button
                type="button"
                class="btn btn-primary btn-block add-cart-btn"
                @click="addWishListToCart(isGoToCart = false)">加入購物車</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global $ */
/* 此元件的 $bus 溝通，對象都是ProductCard元件 */

export default {
  data() {
    return {
      wishList: [],
      cartAmount: 0,
      // 判斷願望清單是否為空
      isEmpty: true,
    };
  },
  methods: {
    getWishList() {
      this.$bus.$on('wishListUpdate', (product) => {
        if (product.isAddedToWishList) {
          this.isEmpty = false;
          this.wishList.push(product);
          this.$bus.$emit('wishListInfo', this.wishList);
        } else {
          this.deleteWishItem(product);
        }
        // 點擊wishList區塊時，避免自動收合
        $('body').on('click', '[data-stopPropagation]', (e) => e.stopPropagation());
      });
    },
    deleteWishItem(product) {
      this.wishList = this.wishList.filter((item) => item.id !== product.id);
      // 通知productCard改變該商品的願望狀態，如刪除完後願望清單為空，則改變樣式
      this.$bus.$emit('switchStatus', product.id);
      if (this.wishList.length === 0) {
        this.isEmpty = true;
      }
    },
    addWishListToCart(isGoToCart) {
      this.isLoading = true;
      this.wishList.forEach((item) => {
        const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
        this.$http
          .post(api, {
            product: item.id,
            quantity: 1,
          })
          .then(() => {
            this.$bus.$emit('addCartAmount');
            if (isGoToCart) {
              this.$router.push('/cart/cartDetail');
            }
          });
      });
      this.wishList = [];
      this.isEmpty = true;
      this.isLoading = false;
    },
    getCart() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http
        .get(api)
        .then((res) => {
          this.cartAmount = res.data.data.length;
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    goToCart() {
      if (this.wishList.length === 0) {
        this.$router.push('/cart/cartDetail');
      } else {
        this.$swal({
          title: '願望清單中還有商品！',
          html:
            '點選「加入」，將願望商品加入購物車；'
            + '<br>'
            + '或點選「不要加入」，清空願望清單並前往購物車。',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: '加入',
          cancelButtonText: '不加入',
          reverseButtons: true,
        }).then((result) => {
          if (result.isConfirmed) {
            const isGoToCart = true;
            this.addWishListToCart(isGoToCart);
          } else {
            this.$router.push('/cart/cartDetail');
          }
        });
      }
    },
    getDetail(productId) {
      this.$router.push({
        name: 'Product',
        params: { id: productId },
      });
    },
  },
  created() {
    // 元件創立時先獲取購物車資料(取得商品數)，並開啟「更新願望清單資料」的監聽
    this.getCart();
    this.getWishList();
    // 開啟「其他元件請求取得願望清單資料」的監聽，並向外發送資料
    this.$bus.$on('getWishList', () => {
      this.$bus.$emit('wishListInfo', this.wishList);
    });
    /* 開啟「增加購物車數量」的監聽。由於二手衣只有一件，數量均為1，
       且因為此頁面無法刪除購物車商品，故可持續累加 */
    this.$bus.$on('addCartAmount', () => {
      this.cartAmount += 1;
    });
  },
  beforeDestroy() {
    // 取消監聽
    this.$bus.$off('addCartAmount');
    this.$bus.$off('wishListUpdate');
    this.$bus.$off('getWishList');
  },
};
</script>

<style lang="scss" scoped>
  .sticky-top {
    top: 2rem;
  }
  .side-bar {
    .btn-cart {
      position: relative;
      .fas {
        font-size: 1.5rem;
      }
      span {
        position: absolute;
        top: -0.4rem;
        right: -1.5rem;
        color: white;
      }
    }
    .dropdown-toggle {
      background-color: transparent;
      border: none;
      outline: none;
      .far {
        font-size: 1.5rem;
      }
      &::before {
        display: none;
      }
    }
    .dropdown-menu {
      min-width: 40vw;
      background: rgba(255,255,255,0.85);
      border: none;
      box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);
      backdrop-filter: blur(3px);
      .title {
        cursor: pointer;
        &:hover {
          color: #ffa010;
        }
      }
      .trash-btn {
        background-color: transparent;
        border: none;
        outline: none;
        .fas {
          &:hover {
            color: #ffa010;
          }
        }
      }
      .add-cart-btn {
        color: white;
        font-weight: bolder;
        letter-spacing: 0.1rem;
      }
    }
  }
  @media (max-width: 992px){
    .side-bar {
      display: none;
    }
  }
</style>
