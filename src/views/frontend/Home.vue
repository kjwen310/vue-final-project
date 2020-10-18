<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="mb-5">
      <Banner class="top-margin"/>
    </div>
    <div class="mb-5">
      <div class="container">
        <h2 class="h3 text-muted text-left mb-3">Category</h2>
        <Carousel />
      </div>
    </div>
    <div class="mb-5">
      <div class="container">
        <h2 class="h3 text-muted text-left mb-3">New Arrival</h2>
        <ProductCard :number="number"/>
      </div>
    </div>
    <div class="mb-5">
      <div class="container">
        <h2 class="h3 text-muted text-left mb-3">Column</h2>
        <ColumnCard />
      </div>
    </div>
    <div class="mb-5">
      <div class="container">
        <h2 class="h3 text-muted text-left mb-3">About</h2>
        <div class="row">
          <div class="col-md-6 margin-control">
            <img
              src="https://images.unsplash.com/photo-1525562723836-dca67a71d5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
              class="img-fluid"
              alt="about us"
            />
          </div>
          <div class="col-md-6 text-left d-flex align-items-center">
            <div>
              <p class="pb-3">
                一件衣服，一個故事。我們試圖透過不同的活動、資訊的傳遞，讓大家以交換、
                購買二手衣取代購買新衣、以共同擁有衣物取代堆積大量個人閒置衣物、以品質與溫度代替大
                量廉價的衣物消費。
              </p>
              <button
                type="button"
                class="btn btn-outline-dark btn-block"
                @click="$router.push('/shop/about')">關於我們</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import Carousel from '@/components/Carousel.vue';
import ProductCard from '@/components/ProductCard.vue';
import ColumnCard from '@/components/ColumnCard.vue';

export default {
  components: {
    Banner,
    Carousel,
    ProductCard,
    ColumnCard,
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      // 判斷首頁new arrival商品應載入幾個
      number: 0,
      isLoading: false,
    };
  },
  created() {
    if (this.windowWidth >= 768) {
      this.number = 8;
    } else {
      this.number = 6;
    }
  },
};
</script>

<style lang="scss" scoped>
  .margin-control {
    margin-bottom: 0;
  }
  @media (max-width: 992px) {
    .top-margin {
      margin-top: 3rem;
    }
  }
  @media (max-width: 768px) {
    .margin-control {
      margin-bottom: 1rem;
    }
  }
</style>
