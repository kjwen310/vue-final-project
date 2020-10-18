<template>
  <div class="top-margin">
    <loading :active.sync="isLoading"></loading>
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#" @click.prevent="$router.push('/shop/home')">首頁</a>
          </li>
          <li class="breadcrumb-item active">
            {{ titleTranslate }}
          </li>
        </ol>
      </nav>
      <div class="category-guide text-left">
        <h2 class="text-left my-3">{{ titleTranslate }}</h2>
        <div class="pt-3 mb-5">
          <div class="d-flex flex-wrap">
            <div
              v-for="(sub, index) in subCategoryList"
              :key="index"
              class="sub-link pl-0"
              @click.prevent="switchPath(para, sub.en)">- {{ sub.zh }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <ProductCard :para="para" ref="productCard"/>
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
      para: '',
      isLoading: false,
      categoryGuide: [
        {
          name: 'clothes',
          zh: '上衣',
          subCategory: [
            { en: 'short-sleeve', zh: '一般短袖' },
            { en: 'long-sleeve', zh: '一般長袖' },
            { en: 'no-sleeve', zh: '無袖' },
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
    };
  },
  computed: {
    // 將主分類名稱轉為中文
    titleTranslate() {
      return this.categoryGuide.find((category) => this.para === category.name).zh;
    },
    subCategoryList() {
      return this.categoryGuide.find((category) => this.para === category.name).subCategory;
    },
  },
  methods: {
    switchPath(cate, sub) {
      this.$router.push({
        name: 'SubProducts',
        params: {
          category: cate,
          subCategory: sub,
        },
      });
    },
  },
  created() {
    // 取得主分類名稱
    this.para = this.$route.params.category;
  },
  watch: {
    // 換至其他類別時，要抓取新路由的category。
    // 因為productCard是一獨立元件，用$ref通知重新抓取資料
    $route(to) {
      this.para = to.params.category;
      this.$refs.productCard.getProducts();
    },
  },
};
</script>

<style lang="scss" scoped>
  .container {
    margin-left: 2.5rem;
  }
  .breadcrumb {
    font-size: 0.8rem;
    background-color: transparent;
    padding-left: 0;
  }
  .category-guide {
    h2 {
      font-size: 2rem;
      font-weight: bolder;
      opacity: 0.85;
      letter-spacing: 0.2rem;
    }
    .sub-link {
      color: gray;
      letter-spacing: 0.2rem;
      padding-right: 3.5rem;
      cursor: pointer;
      transition: all 1s ease;
      transform: translate(0);
      &:hover {
        transform: translate(0.3rem);
        opacity: 0.85;
      }
    }
  }
  @media (max-width: 992px) {
    .container {
      margin-left: 0;
      margin-right: 0;
    }
    .top-margin {
      margin-top: 3rem;
    }
  }
  @media (max-width: 576px) {
    .category-guide {
      .sub-link {
        padding-right: 2rem;
      }
    }
  }
  @media (max-width: 414px) {
    .category-guide {
      .sub-link {
        padding-right: 0;
        margin-top: 0.3rem;
        letter-spacing: 0.1rem;
        min-width: 48%;
      }
    }
  }
</style>
