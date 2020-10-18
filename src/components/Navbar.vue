<template>
  <!-- 本元件綜合menu、sideBar兩元件，可參考兩個元件內的註解 -->
  <nav class="navbar navbar-expand-lg fixed-top text-left mb-3">
    <div class="container">
      <button
        type="button"
        class="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="isShow = !isShow"
      >
        <div class="toggler-icon">
          <span v-if="!isShow">
            <i class="fas fa-bars"></i>
          </span>
          <span v-else>
            <i class="fas fa-times text-muted"></i>
          </span>
        </div>
      </button>
      <div class="navbar-brand" @click="$router.push('/shop/home')">
        <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/BEsLDtsR4xR9fSivNCvRwFQz87a4kJIWjVVHUN3kt83cnnJhAn71b7w59KbS7SNrkYVcSo1EDDc0BqOvpiDipAcuGqLBTyRYCpoW6ejj1VEpXk6q8yqIN3rDsCu2gjiT.png" alt="logo" class="w-100">
      </div>
      <div class="mr-3">
        <a href="#" @click.prevent="goToCart" class="btn-cart">
          <div class="cart">
            <i class="text-muted fas fa-size fa-shopping-cart"></i>
            <span class="badge badge-pill badge-primary text-white">
             {{ cartAmount }}
            </span>
          </div>
        </a>
      </div>
      <div>
        <div class="dropdown">
          <button
            type="button"
            class="btn-sm btn-wishList btn-none dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="text-muted far fa-size fa-heart"></i>
          </button>
          <!-- 以下是願望清單(下拉式選單) -->
          <div id="dropdown" class="dropdown-menu drop-menu-right" data-stopPropagation="true">
            <div class="px-3 py-4">
              <table class="table table-sm px-3">
                <thead>
                  <tr>
                    <th scope="col">名稱</th>
                    <th scope="col" width="45" class="more-text">數量</th>
                    <th scope="col" width="65">單價</th>
                    <th scope="col" width="45">刪除</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in wishList" :key="index">
                    <td class="align-middle title" @click="getDetail(item.id)">{{ item.title }}</td>
                    <td class="align-middle more-text">1 {{ item.unit }}</td>
                    <td class="align-middle">NT.{{ item.price }}</td>
                    <td class="align-middle text-center">
                      <button
                        type="button"
                        class="text-muted btn-none"
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
                  @click="addWishListToCart">加入購物車</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav pl-5 mt-5">
          <div class="accordion mb-5" id="menuAccordion">
            <div v-for="(item, index) in categoryGuide" :key="index">
              <div class="d-flex mb-2 w-75" :id="'heading' + index">
                  <div class="text-hover">
                    <a href="#"  @click.prevent="switchPath(item.name)">
                      {{ item.zh }}
                    </a>
                  </div>
                    <button
                      type="button"
                      class="btn-none ml-auto"
                      data-toggle="collapse"
                      :data-target="'#collapse' + index"
                      aria-expanded="true"
                      :aria-controls="'#collapse' + index">+</button>
              </div>
              <div
                :id="'collapse' + index"
                class="collapse mb-2"
                :aria-labelledby="'heading' + index"
                data-parent="#menuAccordion"
              >
                <div>
                  <ul class="list-group text-left">
                    <li
                      v-for="(sub, id) in item.subCategory"
                      :key="id"
                      class="list-group-item text-hover"
                      @click="switchSubPath(item.name, sub.en)">
                      - {{ sub.zh }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="nav-item">
            <a class="nav-link" href="#" @click.prevent="$router.push('/shop/home')">Home</a>
          </div>
          <div class="nav-item">
            <a class="nav-link" href="#" @click.prevent="$router.push('/shop/columns')">Column</a>
          </div>
          <div class="nav-item">
            <a class="nav-link" href="#" @click.prevent="$router.push('/shop/about')">About</a>
          </div>
          <div class="nav-item">
            <a class="nav-link" href="#" @click.prevent="$router.push('/shop/info')">其他資訊</a>
          </div>
          <div class="nav-item">
            <a class="nav-link" href="#" @click.prevent="$router.push('/shop/storeInfo')">實體店資訊</a>
          </div>
          <div class="nav-item">
            <a class="nav-link" href="#" @click.prevent="$router.push('/')">vatta 形象頁</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
/* global $ */

export default {
  data() {
    return {
      categoryGuide: [
        {
          name: 'clothes',
          zh: '上衣',
          subCategory: [
            { en: 'short-sleeve', zh: '一般短袖' },
            { en: 'long-sleeve', zh: '一般長袖' },
            { en: 'knitting', zh: '針織' },
            { en: 'shirt', zh: '襯衫' },
          ],
        },
        {
          name: 'pants',
          zh: '褲',
          subCategory: [
            { en: 'shorts', zh: '一般短褲' },
            { en: 'trousers', zh: '一般長褲' },
            { en: 'long-jeans', zh: '牛仔長褲' },
            { en: 'short-jeans', zh: '牛仔短褲' },
          ],
        },
        {
          name: 'skirt',
          zh: '裙',
          subCategory: [
            { en: 'short-skirt', zh: '短裙' },
            { en: 'long-skirt', zh: '長裙' },
            { en: 'dress', zh: '連身裙' },
          ],
        },
      ],
      wishList: [],
      cartAmount: 0,
      isEmpty: true,
      isShow: false,
    };
  },
  methods: {
    switchPath(option) {
      this.$router.push({
        name: 'Products',
        params: { category: option },
      });
    },
    switchSubPath(cate, sub) {
      this.$router.push({
        name: 'SubProducts',
        params: {
          category: cate,
          subCategory: sub,
        },
      });
    },
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
      this.$bus.$emit('switchStatus', product.id);
      if (this.wishList.length === 0) {
        this.isEmpty = true;
      }
    },
    addWishListToCart() {
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
          title: '<h3 style="font-size: 18px">願望清單還有商品！<h3>',
          html:
            '<p style="font-size: 12px">點選「加入」，將願望商品加入購物車；<p>'
            + '<p style="font-size: 12px">或點選「不加入」，清空願望清單。<p>',
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
    this.getCart();
    this.getWishList();
    this.$bus.$on('getWishList', () => {
      this.$bus.$emit('wishListInfo', this.wishList);
    });
    this.$bus.$on('addCartAmount', () => {
      this.cartAmount += 1;
    });
  },
  beforeDestroy() {
    this.$bus.$off('addCartAmount');
    this.$bus.$off('wishListUpdate');
    this.$bus.$off('getWishList');
  },
};
</script>

<style lang="scss" scoped>
  ul {
    list-style: none;
    padding: 0;
    li {
      cursor: pointer;
    }
  }
  .navbar {
    display: none;
    background: rgba(255, 255, 255, 0.85);
  }
  .navbar-toggler {
    outline: none;
  }
  .toggler-icon {
    width: 1.5rem;
  }
  .navbar-brand {
    &:hover {
      opacity: 0.85;
      cursor: pointer;
    }
  }
  .dropdown-toggle {
    &::after {
      display: none;
    }
  }
  .dropdown-menu {
    border: none;
    background-color: transparent;
    .title {
      cursor: pointer;
      &:hover {
        color: #ffa010;
      }
    }
    .add-cart-btn {
      color: white;
      font-weight: bolder;
      letter-spacing: 0.1rem;
    }
  }
  .cart {
    position: relative;
    span {
      position: absolute;
      top: -0.3rem;
      right: -0.8rem;
      font-size: 0.6rem;
    }
  }
  .btn-none {
    background-color: transparent;
    border: none;
    outline: none;
    &:hover {
      color: #ffa010;
    }
  }
  .list-group-item {
    border: none;
    padding: 0.15rem 0.5rem;
  }
  .text-hover {
    transition: all 1s ease;
    transform: translate(0);
    color: black;
    text-decoration: none;
    a {
      color: gray;
      text-decoration: none;
    }
    &:hover {
      transform: translate(0.3rem);
      opacity: 0.4;
    }
  }
  .collapse .show {
    background: rgba(255, 255, 255, 0.85);
  }
@media (max-width: 992px) {
  .navbar {
    display: flex;
  }
  .navbar-brand {
    max-width: 6rem;
    margin: 0 auto;
  }
  .navbar-collapse {
    position: fixed;
    top: 3rem;
    left: 0;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
    background: rgba(255, 255, 255, 0.85);
    width: 50%;
    height: 100%;
  }
  .navbar-collapse.collapsing {
    left: -75%;
    transition: height 0s ease;
    margin-top: 1.2rem;
  }
  .navbar-collapse.show {
    left: 0;
    transition: left 300ms ease-in-out;
    margin-top: 1.2rem;
    backdrop-filter: blur(5px);
  }
  .navbar-toggler.collapsed ~ .navbar-collapse {
    transition: left 500ms ease-in-out;
  }
  .dropdown-menu {
    min-width: 50vw;
    background: rgba(255,255,255,0.85);
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(3px);
    border: none;
    margin-top: 2rem;
  }
  .drop-menu-right {
    right: 0;
    left: auto;
  }
  .fa-size {
    font-size: 1rem;
  }
}
@media (max-width: 768px) {
  .dropdown-menu {
    min-width: 80vw;
  }
}
@media (max-width: 576px) {
  .navbar-brand {
    max-width: 5rem;
  }
  .navbar-collapse {
    width: 80%;
    height: 100%;
  }
  .dropdown-menu {
    min-width: 90vw;
  }
  .cart {
    position: relative;
    span {
      top: -0.2rem;
      right: -0.45rem;
      font-size: 0.35rem;
    }
  }
  .fa-size {
    font-size: 0.85rem;
  }
}
@media (max-width: 360px) {
  .dropdown-menu {
    th, td {
      font-size: 0.8rem;
    }
    .more-text {
      display: none;
    }
    .add-cart-btn {
      font-size: 0.8rem;
      letter-spacing: 0.1rem;
    }
  }
}
</style>
