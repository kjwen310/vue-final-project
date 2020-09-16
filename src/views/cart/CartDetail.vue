<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#" @click.prevent="$router.push('/')">首頁</a>
        </li>
        <li class="breadcrumb-item active">
          購物車
        </li>
      </ol>
    </nav>
    <div class="mb-5">
      <div class="row">
        <div class="col-lg-6 col-md-8 cart-list bg-light py-3">
          <div v-if="cart.length === 0" class="card p-2">
            <div class="card-body d-flex align-items-center py-0">
              <div class="mr-5">
                <img
                 src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/BEsLDtsR4xR9fSivNCvRwFQz87a4kJIWjVVHUN3kt83cnnJhAn71b7w59KbS7SNrkYVcSo1EDDc0BqOvpiDipAcuGqLBTyRYCpoW6ejj1VEpXk6q8yqIN3rDsCu2gjiT.png"
                 class="rounded d-block m-4"
                 alt="default picture">
              </div>
              <div class="text-left py-2">
                <div class="d-flex">
                  <h5>購物車內沒有商品！</h5>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="card mb-2 px-2 pt-2 pb-4" v-for="(item, index) in cart" :key="index">
            <button
             type="button"
             class="close btn-block text-right p-0"
             aria-label="Close"
             @click="deleteCartProduct(item.product.id)">
              <span class="mr-1" aria-hidden="true">&times;</span>
            </button>
            <div class="card-body d-flex py-0">
              <div class="mr-5">
                <a href="#" @click.prevent="getDetail(item.product.id)">
                  <img
                   :src="item.product.imageUrl[0]"
                   class="rounded d-block"
                   :alt="item.product.title">
                </a>
              </div>
              <div class="text-left py-2">
                <div class="d-flex">
                  <h5 class="mr-auto">{{ item.product.title }}</h5>
                  <span>{{ `NT.${item.product.price}` }}</span>
                </div>
                <ul>
                  <li class="card-text">{{ `- 數量：1${item.product.unit}` }}</li>
                  <li class="card-text">{{ `- 內容：${item.product.content}` }}</li>
                </ul>
              </div>
            </div>
          </div>
          <div v-if="cart.length !== 0" class="text-right my-4 mr-2">
            <a href="#" class="delete-all" @click.prevent="deleteAllCart">刪除全部商品</a>
          </div>
        </div>
        <div class="col-md-4 cart-info bg-light py-3">
          <div class="card text-left">
            <h3 class="card-header">購物車資訊</h3>
            <div class="card-body">
              <div class="d-flex mb-3">
                <div class="card-text mr-auto">商品數量</div>
                <div class="card-text">{{ `${cart.length}件` }}</div>
              </div>
              <div class="d-flex mb-3">
                <div class="card-text mr-auto">金額小計</div>
                <div class="card-text">{{ `NT.${cartTotal}` }}</div>
              </div>
              <div class="d-flex mb-3">
                <div class="card-text mr-auto">運費小計</div>
                <div class="card-text">NT.0</div>
              </div>
              <hr />
              <div class="d-flex mb-5">
                <div class="card-text-total mr-auto">總計</div>
                <div v-if="cart.length === 0" class="price-style">NT.0</div>
                <div v-else class="price-style">{{ `NT.${cartTotal}` }}</div>
              </div>
              <button
               class="btn btn-primary btn-block text-white"
               :class="{disabled: cart.length === 0}"
               @click="switchPath"
               >前往結帳</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [],
      cartTotal: 0,
      isLoading: false,
      uuid: process.env.VUE_APP_UUID,
      apiPath: process.env.VUE_APP_APIPATH,
    };
  },
  methods: {
    getCart() {
      this.isLoading = true;
      const api = `${this.apiPath}${this.uuid}/ec/shopping`;
      this.$http
        .get(api)
        .then((res) => {
          this.cartTotal = 0;
          this.cart = res.data.data;
          this.cart.forEach((item) => {
            this.cartTotal += item.product.price;
          });
          this.isLoading = false;
        })
        .catch((err) => {
          this.isLoading = false;
          console.log(err);
        });
    },
    deleteCartProduct(id) {
      this.isLoading = true;
      const api = `${this.apiPath}${this.uuid}/ec/shopping/${id}`;
      this.$http
        .delete(api)
        .then(() => {
          this.isLoading = false;
          this.getCart();
        })
        .catch((err) => {
          this.isLoading = false;
          console.log(err);
        });
    },
    deleteAllCart() {
      const api = `${this.apiPath}${this.uuid}/ec/shopping/all/product`;
      this.$http
        .delete(api)
        .then(() => {
          this.isLoading = false;
          this.getCart();
        })
        .catch((err) => {
          this.isLoading = false;
          console.log(err);
        });
    },
    getDetail(productId) {
      this.$router.push({
        name: 'Product',
        params: { id: productId },
      });
    },
    switchPath() {
      this.$router.push({
        name: 'Order',
        params: {
          total: this.cartTotal,
          amount: this.cart.length,
        },
      });
    },
  },
  created() {
    this.getCart();
  },
};
</script>

<style lang="scss" scoped>
  .breadcrumb {
    font-size: 0.8rem;
    background-color: transparent;
    padding-left: 0;
  }
  .cart-list {
    button {
      outline: none;
    }
    img {
      max-width: 6rem;
    }
    h5 {
      font-size: 1rem;
      font-weight: bolder;
      letter-spacing: 0.2rem;
    }
    span {
      font-size: 1rem;
      letter-spacing: 0.2rem;
      color: #219ebc;
    }
    ul {
      list-style: none;
      padding: 0;
      li {
        font-size: 0.8rem;
        letter-spacing: 0.2rem;
      }
    }
    .delete-all {
      font-size: 1rem;
      color: gray;
      letter-spacing: 0.1rem;
      text-decoration: none;
    }
  }
  .cart-info {
    margin-left: 3rem;
    .card-header {
      font-size: 1rem;
      font-weight: bolder;
      letter-spacing: 0.2rem;
    }
    .card-text {
      font-size: 1rem;
      letter-spacing: 0.1rem;
      color: gray;
    }
    .card-text-total {
      font-size: 1rem;
      letter-spacing: 0.1rem;
      font-weight: bolder;
    }
    .price-style {
      font-size: 1rem;
      letter-spacing: 0.2rem;
      color: #219ebc;
    }
    button {
      font-weight: bolder;
      letter-spacing: 0.1rem;
    }
  }
  @media (max-width: 992px) {
    .cart-info {
      margin-left: 0;
    }
  }
  @media (max-width: 576px) {
    .cart-info {
      margin: 0 auto;
    }
  }
</style>
