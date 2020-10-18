<template>
  <div>
    <Loading :active.sync="isLoading" />
    <div class="row d-flex justify-content-center bg-light">
      <div class="col-md-6 order-info py-3">
        <div class="card text-left">
          <h3 class="card-header">訂單明細</h3>
          <div class="card-body">
            <div class="d-flex mb-3">
              <div class="card-text width-control mr-auto">購買時間</div>
              <div class="card-text text-right">{{ order.created.datetime }}</div>
            </div>
            <div class="d-flex mb-3">
              <div class="card-text width-control mr-auto">商品數量</div>
              <div class="card-text">{{ order.products.length }} 件</div>
            </div>
            <div class="d-flex mb-4">
              <div class="card-text width-control mr-auto">總金額</div>
              <span>NT.{{ order.amount }}</span>
            </div>
            <hr />
            <div class="card mb-2 px-2 pt-2 pb-4" v-for="(item, i) in order.products" :key="i">
            <div class="card-body d-flex py-0">
              <div class="margin-control">
                  <img
                    :src="item.product.imageUrl[0]"
                    class="rounded d-block"
                    :alt="item.product.title">
              </div>
              <div class="text-left py-2">
                <div class="d-flex">
                  <h5 class="mr-auto">{{ item.product.title }}</h5>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 py-3">
        <div class="card text-left">
          <h3 class="card-header">收件人資訊</h3>
          <div class="card-body">
            <div class="d-flex mb-3">
              <div class="card-text width-control mr-auto">付款方式</div>
              <div class="card-text text-right">{{ order.payment }}</div>
            </div>
            <div class="d-flex mb-3">
              <div class="card-text width-control mr-auto">姓名</div>
              <div class="card-text text-right">{{ order.user.name }}</div>
            </div>
            <div class="d-flex mb-3">
              <div class="card-text width-control mr-auto">地址</div>
              <div class="card-text text-right">{{ order.user.address }}</div>
            </div>
            <div class="d-flex mb-3">
              <div class="card-text width-control mr-auto">電話</div>
              <div class="card-text text-right">{{ order.user.tel }}</div>
            </div>
            <div class="d-flex mb-3">
              <div class="card-text width-control mr-auto">e-mail</div>
              <div class="card-text text-right">{{ order.user.email }}</div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <button
            type="button"
            class="btn btn-primary btn-block text-white mt-5 w-50"
            @click="payOrder">確認付款</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      order: {
        user: {},
        products: [
          {
            product: {},
          },
        ],
      },
      orderId: '',
      isLoading: false,
    };
  },
  methods: {
    getDetailed(id) {
      this.isLoading = true;
      this.orderId = id;
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders/${id}`;
      this.$http.get(api).then((res) => {
        this.order = res.data.data;
        this.isLoading = false;
      });
    },
    payOrder() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders/${this.orderId}/paying`;
      this.$http.post(api)
        .then((res) => {
          if (res.data.data.paid) {
            this.isLoading = false;
            this.$swal({
              icon: 'success',
              title: '購買成功！',
              html: '<p style="font-size: 12px; margin-top: 1rem;">訂單已完成，此次購買的商品約 3 ~ 5 個工作天會送達，非常感謝您對 Vatta 二手小舖的支持！點選下方按鈕可回到商城首頁。</p>',
              confirmButtonText: '回到商城',
            }).then((result) => {
              if (result.isConfirmed) {
                this.$router.push('/shop/home');
              } else {
                this.$router.push('/shop/home');
              }
            });
          } else {
            this.isLoading = false;
            this.$swal({
              icon: 'error',
              title: '發生錯誤！',
              html: '<p style="font-size: 12px; margin-top: 1rem;">非常抱歉！發生預期外的系統錯誤，未能完成購買，請盡速與我們聯絡！</p>',
              confirmButtonText: '回到商城',
            }).then((result) => {
              if (result.isConfirmed) {
                this.$router.push('/shop/home');
              } else {
                this.$router.push('/shop/home');
              }
            });
          }
        })
        .catch(() => {
          this.isLoading = false;
          this.$swal({
            icon: 'error',
            title: '發生錯誤！',
            html: '<p style="font-size: 12px; margin-top: 1rem;">非常抱歉！發生預期外的系統錯誤，未能完成購買！請點選下方按鈕回到商城並重新操作。</p>',
            confirmButtonText: '回到商城',
          }).then((result) => {
            if (result.isConfirmed) {
              this.$router.push('/shop/home');
            } else {
              this.$router.push('/shop/home');
            }
          });
        });
    },
  },
  mounted() {
    this.orderId = this.$route.params.orderId;
    this.getDetailed(this.orderId);
  },
};
</script>

<style lang="scss" scoped>
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
  .width-control {
    min-width: 4.5rem;
  }
  .order-info {
    span {
      font-size: 1rem;
      letter-spacing: 0.2rem;
      color: #219ebc;
      text-align: right;
    }
    .margin-control {
      margin-right: 1.5rem;
      img {
        max-width: 6rem;
      }
    }
    h5 {
      font-size: 1rem;
      font-weight: bolder;
      letter-spacing: 0.2rem;
    }
  }
  button {
    font-weight: bolder;
    letter-spacing: 0.1rem;
  }
  @media (max-width: 768px) {
    .card-text {
      letter-spacing: 0;
    }
    .order-info {
      span {
        letter-spacing: 0.1rem;
      }
    }
  }
  @media (max-width: 414px) {
    .card-text {
      font-size: 0.9rem;
    }
    .order-info {
      .margin-control {
        margin-right: 1rem;
        img {
          max-width: 3.5rem;
        }
      }
      span {
        font-size: 0.9rem;
      }
      h5 {
        font-size: 0.9rem;
        letter-spacing: 0;
      }
    }
  }
</style>
