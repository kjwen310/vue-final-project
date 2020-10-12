<template>
  <div class="top-margin">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#" @click.prevent="$router.push('/shop/home')">首頁</a>
        </li>
        <li class="breadcrumb-item active">關於我們</li>
      </ol>
    </nav>
    <div class="jumbotron jumbotron-fluid bg-img my-5"></div>
    <div class="container text-left mb-3">
      <div class="row">
        <div class="col-md-3 text-muted mb-2">
          <h2 class="subtitle">Concept</h2>
        </div>
        <div class="col-md-9">
          <p>
            一件衣服，一個故事。我們試圖透過不同的活動、資訊的傳遞，讓大家以交換、購買二手衣取代購買新衣、
            以共同擁有衣物取代堆積大量個人閒置衣物、以品質與溫度代替大量廉價的衣物消費。
            衣櫃少一件衣服嗎？轉個彎，來這裡帶走一件衣服，同時減少因衣服染劑、生產新衣的大量汙染。
            一個小舉動，一場從衣櫃開始的微革命。
          </p>
        </div>
      </div>
    </div>
    <div class="container text-left mb-5">
      <div class="row">
        <div class="col-md-3 text-muted mb-2">
          <h2 class="subtitle">Feature</h2>
        </div>
        <div class="col-md-9">
          <p>
            平台目前以年輕女性的服裝為主，包含各式上衣、褲、裙與其他配件。
            每一件衣服，都透過我們細心的品質篩選，確保衣服品質良好、風格多樣。
            歡迎用二手衣取代購買新衣、以品質與溫度代替大量且廉價的衣物消費。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
  .breadcrumb {
    font-size: 0.8rem;
    background-color: transparent;
    padding-left: 0;
  }
  .bg-img {
    background-image: url("https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
    background-size: cover;
    background-position: center center;
    height: 60vh;
    max-height: 350px;
  }
  .subtitle {
    font-weight: lighter;
    letter-spacing: 0.2rem;
    opacity: 0.6;
  }
  p {
    line-height: 1.8rem;
  }
  @media (max-width: 992px) {
    .top-margin {
      margin-top: 3rem;
    }
  }
  @media (max-width: 576px) {
    .bg-img {
      height: 30vh;
    }
  }
</style>
