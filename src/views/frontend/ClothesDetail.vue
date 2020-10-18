<template>
  <div class="top-margin">
    <loading :active.sync="isLoading"></loading>
    <div class="container-fluid mb-5">
      <div class="row">
        <div class="col-md-6">
          <div class="mb-2 major-img">
            <img v-if="majorImg" class="img-fluid" :src="majorImg" :alt="product.title + '產品照'" />
            <img v-else class="img-fluid" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/stCMCKGgvom5yjuAR3JlMHaHML7K8RaRl0ak6fIWbJGG1sgjj6AWb6ArORptKxaVrLdzggBHcMAgoS2CyN5WaXYsmSjtVOqQAtGzwyV5EKWZeJKb0rbuyKdDOjTvdNBW.png">
            <div>
              <p>{{ `0${tempIndex + 1} / 0${product.imageUrl.length}` }}</p>
            </div>
          </div>
          <div class="d-flex other-img bg-light py-2">
            <div v-for="(image, index) in product.imageUrl" :key="index">
              <img
                class="img-fluid mr-1"
                :src="product.imageUrl[index]"
                @click="changeImg(index)"
                :alt="'image' + index"
              />
            </div>
          </div>
        </div>
        <div class="col-md-6 product-content text-left mt-3">
          <div class="mb-1">
            <h2>{{ product.title }}</h2>
          </div>
          <div class="my-3">
            <span v-if="product.price" class="price mr-3">NT.{{ product.price }}</span>
            <span v-if="product.origin_price != 0" class="origin-price">
              {{ `NT.${product.origin_price}` }}
            </span>
          </div>
          <div class="story-content">
            <p>{{ product.content }}</p>
          </div>
          <div class="mb-5">
            <button
              v-if="isDisabled"
              type="button"
              class="btn btn-outline-dark btn-block disabled">已加入購物車！</button>
            <button
              v-else
              type="button"
              class="btn btn-outline-dark btn-block"
              @click="addToCart(product.id)">加入購物車</button>
          </div>
          <div class="text-left">
            <div class="container d-flex">
              <div class="mb-5">
                <h4 class="mb-3">> 尺寸資訊</h4>
                <ul>
                  <li v-if="product.options.shoulderAcross != 0">
                    - 肩寬：{{ product.options.shoulderAcross }}cm
                  </li>
                  <li v-if="product.options.chestWidth != 0">
                    - 胸寬：{{ product.options.chestWidth }}cm
                  </li>
                  <li v-if="product.options.sleeveLength != 0">
                    - 袖長：{{ product.options.sleeveLength }}cm
                  </li>
                  <li v-if="product.options.hipWidth != 0">
                    - 臀寬：{{ product.options.hipWidth }}cm
                  </li>
                  <li v-if="product.options.waist != 0">
                    - 腰寬：{{ product.options.waist }}cm
                   </li>
                  <li v-if="product.options.length != 0">
                    - 長度：{{ product.options.length }}cm
                  </li>
               </ul>
              </div>
              <div class="box">
                <img :src="sizeImg" alt="sizeImage">
              </div>
            </div>
            <div class="container">
              <h4>> 其他資訊</h4>
              <ul>
                <li>- 等級：{{ product.options.itemClass }}</li>
                <li>- 注意事項：{{ product.description }}</li>
                <li>- 等級說明：
                  <span v-for="(item, index) in qualityClass" :key="index">
                    {{ `${item.class}：${item.desc} / ` }}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid also-like">
      <h2 class="h3 text-muted text-left pb-3">您可能也會喜歡</h2>
      <ProductCard :alsoLike="alsoLike" />
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';

export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      id: '',
      product: {
        imageUrl: [],
        options: {
          subCategory: '',
          itemClass: '',
          shoulderAcross: 0,
          chestWidth: 0,
          sleeveLength: 0,
          hipWidth: 0,
          waist: 0,
          length: 0,
        },
      },
      qualityClass: [
        { class: 'A', desc: '全新未使用' },
        { class: 'B', desc: '僅穿過1~5次，衣況良好' },
        { class: 'C', desc: '一般二手衣物，衣況維持良好' },
        { class: 'D', desc: '一般二手衣物，有較多瑕疵' },
      ],
      majorImg: '',
      tempIndex: 0,
      alsoLike: {
        category: '',
        id: '',
      },
      isAdded: false,
      isDisabled: false,
      isLoading: false,
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getProduct();
  },
  computed: {
    sizeImg() {
      let img = '';
      const sub = this.product.options.subCategory;
      switch (this.product.category) {
        case ('clothes'):
          if (sub === 'short-sleeve' || sub === 'no-sleeve') {
            img = 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/MaXPgK6HA1kom5yoZhYsg2IKnmDyaZF9OPz6ljJbgKWYqv6NrxIYAPNt7fFW6MoZOvKGyleOVtUB0ixwpwki6KX000KDPgvsno79CKLw1Uyhesj7QPmBWMPirDEVNBFt.png';
          } else {
            img = 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/n62aYeqmpBqFFa0aM4ZFHFAE7x0mexsZDLcpkEWhxa4nSSx1dXCFZLNVe7H0yMTnWVLitSoKtTIijQzh53ZmANRFg484jGlLAOZms5PfFxPLKy3x0rurnkATOUi3gQ1A.png';
          }
          break;
        case ('pants'):
          if (sub === 'shorts' || sub === 'short-jeans') {
            img = 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/ok3BGNRLihQAPGcUwZvcksVSOfJnUrodHPcZsf1HHjzNLSvXxMLSthpqniIKPGBHzWYxAU7keSgxtV24w215Yy772YiVDyKcHKnhkHBzmOc1lJmSMmgsCEtsAd4wRety.png';
          } else {
            img = 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/CMQuObsmy3MEvCtVySb2y3593vR97l08BAx08PsbIbupmhppkWfAPnrbVHuQgzzQ5OzmhfL3NizgLrmDks7fMxge22Ho9y5bXDoUxuJFyMsnR7Pulc9cFnW080JI1KPF.png';
          }
          break;
        case ('skirt'):
          if (sub === 'dress') {
            img = 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/OKxSDlUsIgUYbpZOdH9Zu1sZtdALo7e1QMP2AgBNhh2IcsJbnBqELEyHQd1L52EGKojcByLKGajx4vphVBfhDEwTHSxJMeWoE5OFDfhTC4IrpSyU6Ra5eZETnVp4PFqs.png';
          } else {
            img = 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/YbAXOrzA9AqxRHYtScU9D9LAItE435pvpfkPQUXtRHnOc6ZagEaVzNe5GnVpVrdZ5KOiuj7y4MtQOLgAQMXbgxT83KzCBMQ6XArdiUStsM5zFr3whLdBttf7Fd7rqR83.png';
          }
          break;
        default:
          break;
      }
      return img;
    },
  },
  methods: {
    getProduct() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${this.id}`;
      this.$http
        .get(api)
        .then((res) => {
          this.product = res.data.data;
          [this.majorImg] = this.product.imageUrl;
          this.alsoLike.category = this.product.category;
          this.alsoLike.id = this.product.id;
          this.tempIndex = 0;
          this.getCart();
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    changeImg(index) {
      this.majorImg = this.product.imageUrl[index];
      this.tempIndex = index;
    },
    addToWishList(product) {
      this.isAdded = !this.isAdded;
      this.$bus.$emit('wishListUpdate', product);
    },
    addToCart(id) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http
        .post(api, {
          product: id,
          quantity: 1,
        })
        .then(() => {
          // 將購物車按鈕設定為已加入
          this.isDisabled = true;
          // 通知側欄更新購物車商品數量
          this.$bus.$emit('addCartAmount');
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    getCart() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http
        .get(api)
        .then((res) => {
          const test = res.data.data.find((item) => this.id === item.product.id);
          if (test) {
            this.isDisabled = true;
          } else {
            this.isDisabled = false;
          }
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
  },
  watch: {
    // 如果是從另一單一產品頁連結過來時，紀錄新的id並重新渲染
    $route(to) {
      this.id = to.params.id;
      this.getProduct();
    },
  },
};
</script>

<style lang="scss" scoped>
  .major-img {
    img {
      position: relative;
    }
    div {
      position: absolute;
      font-size: 0.8rem;
      bottom: 8.3rem;
      right: 2.2rem;
    }
  }
  .other-img {
    img {
      width: 80px;
      padding: 2px;
      &:hover {
        padding: 0;
        border: 2px solid #ffa010;
      }
    }
  }
  .product-content {
    h2 {
      font-size: 1.5rem;
      font-weight: bolder;
    }
    .price {
      font-size: 1rem;
      letter-spacing: 0.2rem;
      color: #219ebc;
    }
    .origin-price {
      font-size: 1rem;
      letter-spacing: 0.2rem;
      color: lightgray;
      text-decoration: line-through;
    }
    .story-content {
      height: 30%;
      line-height: 1.5rem;
    }
    button {
      outline: none;
    }
    h4 {
      font-size: 1rem;
      letter-spacing: 0.2rem;
    }
    ul {
      padding: 0;
      font-size: 0.8rem;
      letter-spacing: 0.2rem;
      list-style: none;
    }
    .box {
      position: relative;
      img {
        position: absolute;
        width: 12.5rem;
        top: -2.1rem;
        bottom: 0;
        left: 60%;
      }
    }
  }
  @media (max-width: 1200px) {
    .major-img {
      div {
        bottom: 10.2rem;
        right: 2.2rem;
      }
    }
    .also-like {
      padding-top: 2rem;
    }
  }
  @media (max-width: 992px) {
    .top-margin {
      margin-top: 3rem;
    }
    .also-like {
      padding-top: 4rem;
    }
  }
  @media (max-width: 768px) {
    .major-img {
      div {
        font-size: 0.9rem;
        bottom: 10rem;
        right: 2rem;
      }
    }
    .also-like {
      padding-top: 6rem;
    }
  }
  @media (max-width: 414px) {
    .major-img {
      div {
        bottom: 8rem;
      }
    }
  }
  @media (max-width: 280px) {
    .major-img {
      div {
        font-size: 0.5rem;
        bottom: 7rem;
        right: 2rem;
      }
    }
    .product-content {
      .box {
        img {
          top: -1rem;
          width: 8rem;
        }
      }
    }
  }
</style>
