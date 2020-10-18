<template>
  <div class="top-margin ml-3">
    <loading :active.sync="isLoading"></loading>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#" @click.prevent="$router.push('/shop/home')">首頁</a>
        </li>
        <li class="breadcrumb-item">
          <a href="#" @click.prevent="switchPath(para)">{{ titleTranslate }}</a>
        </li>
        <li class="breadcrumb-item active">
          {{ subCategoryList }}
        </li>
      </ol>
    </nav>
    <div class="text-left">
      <h2 class="text-left mt-3 mb-5 ">{{ subCategoryList }}</h2>
      <div class="container">
        <ProductCard :sub="sub" ref="subProductCard"/>
      </div>
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
      sub: '',
      products: [],
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
    // 將主、次分類名稱轉為中文
    titleTranslate() {
      return this.categoryGuide.find((category) => this.para === category.name).zh;
    },
    subCategoryList() {
      const returnValue = this.categoryGuide.find((category) => this.para === category.name);
      return returnValue.subCategory.find((item) => this.sub === item.en).zh;
    },
  },
  methods: {
    switchPath(cate) {
      this.$router.push({
        name: 'Products',
        params: { category: cate },
      });
    },
  },
  created() {
    // 取得主分類名稱
    this.para = this.$route.params.category;
    // 取得次分類名稱
    this.sub = this.$route.params.subCategory;
  },
  watch: {
    $route(to) {
      // 換至其他類別時，要抓取新路由的參數。
      this.para = to.params.category;
      this.sub = to.params.subCategory;
      this.$refs.subProductCard.getProducts();
    },
  },
};
</script>

<style lang="scss" scoped>
  .breadcrumb {
    font-size: 0.8rem;
    background-color: transparent;
    padding-left: 0;
  }
  h2 {
    font-size: 2rem;
    font-weight: bolder;
    opacity: 0.85;
    letter-spacing: 0.2rem;
  }
  @media (max-width: 992px) {
    .top-margin {
      margin-top: 3rem;
    }
  }
</style>
