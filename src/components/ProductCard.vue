<template>
  <div class="row">
    <loading :active.sync="isLoading"></loading>
    <div class="col-md-3 col-6 mb-3" v-for="(product) in products" :key="product.id">
        <div class="card">
          <div class="inner">
            <a href="#" @click.prevent="getDetail(product.id)">
              <img
                v-if="product.imageUrl[0]"
                class="card-img-top"
                :src="product.imageUrl[0]"
                :alt="product.title + '產品照'" />
              <img
                v-else
                class="card-img-top"
                src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/stCMCKGgvom5yjuAR3JlMHaHML7K8RaRl0ak6fIWbJGG1sgjj6AWb6ArORptKxaVrLdzggBHcMAgoS2CyN5WaXYsmSjtVOqQAtGzwyV5EKWZeJKb0rbuyKdDOjTvdNBW.png">
            </a>
            <button type="button" class="wish" @click="addToWishList(product)">
              <div v-if="product.isAddedToWishList === true">
                <i class="fas fa-heart text-primary"></i>
              </div>
              <div v-else>
                <i class="far fa-heart text-muted"></i>
              </div>
            </button>
            <button
              type="button"
              class="see-more"
              @click.prevent="getDetail(product.id)">
              <i class="fas fa-search"> see more</i>
            </button>
          </div>
          <div class="card-body px-0">
            <div class="card-title d-flex mb-0">
              <div class="mr-auto">
                <button type="button" class="p-0" @click.prevent="getDetail(product.id)">
                  <h5 class="text-left text-muted">{{ product.title }}</h5>
                </button>
              </div>
            </div>
            <div class="price-style card-text text-left my-0">
              <span class="mr-2">
                NT.{{ product.price }}
              </span>
              <span v-if="product.origin_price != 0" class="line-through text-muted">
                NT.{{ product.origin_price }}
              </span>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  /* 傳入篩選條件，
     number(首頁)、para(products主分類)、sub(subProducts次分類)、alsoLike(clothesDetail關聯商品) */
  props: ['number', 'para', 'sub', 'alsoLike'],
  data() {
    return {
      products: [],
      wishList: [],
      isLoading: false,
    };
  },
  methods: {
    getProducts() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products?paged=50`;
      this.$http.get(api).then((res) => {
        if (this.number) {
          this.products = res.data.data.filter((item) => item.category !== 'banner').filter(
            (item, index) => index < this.number,
          );
        } else if (this.para) {
          this.products = res.data.data.filter((item) => item.category === this.para);
        } else if (this.sub) {
          this.products = res.data.data.filter((item) => item.options.subCategory === this.sub);
        } else if (this.alsoLike) {
          // 利用array.sort(() => Math.random() - 0.5)，以近似隨機排列陣列
          this.products = res.data.data.filter(
            (item) => item.id !== this.alsoLike.id && item.category === this.alsoLike.category,
          ).sort(() => Math.random() - 0.5).filter((item, index) => index < 4);
        }
        // 判斷哪些商品已加入wishList
        this.products.forEach((item) => {
          this.$set(item, 'isAddedToWishList', false);
          this.wishList.forEach((wish) => {
            if (item.id === wish.id) {
              this.$set(item, 'isAddedToWishList', true);
            }
          });
        });
        this.isLoading = false;
      });
    },
    getDetail(productId) {
      this.$router.push({
        name: 'Product',
        params: { id: productId },
      });
    },
    addToWishList(product) {
      this.products.forEach((item) => {
        if (item.id === product.id) {
          this.$set(item, 'isAddedToWishList', !item.isAddedToWishList);
        }
      });
      this.$bus.$emit('wishListUpdate', product);
    },
  },
  watch: {
    // 當透過點選下方關聯產品而進入新的單一產品頁時，再次按照新的id判斷新的關聯產品
    'alsoLike.id': {
      handler() {
        this.getProducts();
      },
    },
  },
  created() {
    // 取得sidebar元件上的wishList資料，以便判斷卡片上愛心樣式
    this.$bus.$emit('getWishList');
    this.$bus.$on('wishListInfo', (wishList) => {
      this.wishList = wishList;
    });
  },
  beforeMount() {
    // 每次頁面更新時，重新取得目前的wishList資料，以判斷商品的願望狀態
    this.$bus.$emit('getWishList');
    this.$bus.$on('wishListInfo', (wishList) => {
      this.wishList = wishList;
    });
  },
  mounted() {
    // 監聽sidebar是否刪除願望，若有，則更新該商品的願望狀態
    this.$bus.$on('switchStatus', (id) => {
      this.products.forEach((item) => {
        if (item.id === id) {
          this.$set(item, 'isAddedToWishList', false);
        }
      });
    });
    this.getProducts();
  },
  beforeDestroy() {
    this.$bus.$off('wishListInfo');
    this.$bus.$off('updateStatus');
    this.$bus.$off('switchStatus');
  },
};
</script>

<style lang="scss" scoped>
  .card {
    border: none;
  }
  .inner {
    overflow: hidden;
    position: relative;
    img {
      transition: all 1s ease;
    }
    .wish {
      position: absolute;
      top: 0.6rem;
      right: 0.8rem;
      outline: none;
    }
    .fa-heart {
      font-size: 1.3rem;
      font-weight: lighter;
    }
    .see-more {
      position: absolute;
      top: 50%;
      right: 50%;
      opacity: 0;
      transform: translate(0);
      transition: all 0.8s ease;
      outline: none;
      .fas {
        font-size: 1.3rem;
        color: #ffa010;
        opacity: 0.85;
      }
    }
    &:hover {
      img {
        opacity: 0.6;
        transform: scale(1.08);
      }
      .see-more {
        opacity: 0.8;
        transform: translate(50%);
      }
    }
  }
  button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  h5 {
    font-size: 1rem;
    font-weight: bolder;
  }
  .price-style {
    font-size: 0.75rem;
    color: #219ebc;
    letter-spacing: 0.2rem;
    .line-through {
      text-decoration: line-through;
    }
  }
  @media (max-width: 768px) {
    .inner {
      .wish {
        right: 0.5rem;
      }
    }
  }
  @media (max-width: 414px) {
    .inner {
      .wish {
        top: 0.4rem;
        right: 0.3rem;
      }
      .fa-heart {
        font-size: 1rem;
      }
      .see-more {
        .fas {
          font-size: 1rem;
        }
      }
    }
  }
  @media (max-width: 320px) {
    h5 {
      font-size: 0.8rem;
    }
    .price-style {
      font-size: 0.45rem;
      letter-spacing: 0.1rem;
    }
  }
  @media (max-width: 280px) {
    .inner {
      .wish {
        top: 0.2rem;
        right: 0.18rem;
      }
      .fa-heart {
        font-size: 0.7rem;
      }
      .see-more {
        .fas {
          font-size: 0.7rem;
        }
      }
    }
    .price-style {
      letter-spacing: 0;
    }
  }
</style>
