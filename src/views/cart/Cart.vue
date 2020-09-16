<template>
  <div>
    <div class="cart">
      <div v-if="$route.name === 'Complete'" class="container mt-3 mb-5">
        <img class="logo-img" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/BEsLDtsR4xR9fSivNCvRwFQz87a4kJIWjVVHUN3kt83cnnJhAn71b7w59KbS7SNrkYVcSo1EDDc0BqOvpiDipAcuGqLBTyRYCpoW6ejj1VEpXk6q8yqIN3rDsCu2gjiT.png" alt="logo">
      </div>
      <div
        v-if="$route.name !== 'Complete'"
        class="container box d-flex mt-5 mb-3 justify-content-between">
        <div class="text-center">
          <div class="circle mb-2" :class="{active: $route.name === 'CartDetail'}">
            <span>1</span>
          </div>
          <p>購物車內容</p>
        </div>
        <div>
          <div class="circle mb-2" :class="{active: $route.name === 'Order'}">
            <span>2</span>
          </div>
          <p>填寫資訊</p>
        </div>
        <div>
          <div class="circle mb-2" :class="{active: $route.name === 'CheckOut'}">
            <span>3</span>
          </div>
          <p>確認付款</p>
        </div>
      </div>
      <div class="container justify-content-center">
        <router-view />
      </div>
    </div>
    <foot />
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
  .cart {
    min-height: calc(100vh - 25vh);
  }
  .logo-img {
    max-width: 8rem;
    margin: 0 auto;
  }
  .box {
    margin: 0 auto;
    max-width: 60%;
    .circle {
      width: 3.5rem;
      height: 3.5rem;
      background-color: gray;
      border-radius: 50%;
      margin: 0 auto;
      opacity: 0.6;
    }
    .active {
      background-color: #ffa010;
      opacity: 1;
    }
    span {
      font-size: 1.2rem;
      text-align: center;
      line-height: 3.5rem;
      color: white;
    }
    p {
      font-size: 0.85rem;
      letter-spacing: 0.2rem;
    }
  }
</style>
