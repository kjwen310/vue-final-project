<template>
  <div class="row d-flex justify-content-center mb-5">
    <div class="col-md-4">
      <div class="mb-5">
        <h3>已完成訂單！</h3>
        <hr class="my-3 w-75" />
        <p class="text-muted text-center w-75">
          訂單已完成，此次購買的商品約 3 ~ 5 個工作天會送達，非常感謝您對 Vatta 二手小舖的支持！
        </p>
      </div>
      <div>
        <button
          type="button"
          class="btn btn-outline-dark btn-block"
          @click="$router.push('/')">回商城首頁</button>
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
h3 {
  font-size: 1.5rem;
  font-weight: bolder;
  letter-spacing: 0.1rem;
}
hr {
  border: 2px solid #ffa010;
}
p {
  margin: 0 auto;
}
</style>
