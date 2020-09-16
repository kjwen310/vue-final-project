<template>
  <div class="bg-light py-4 mt-3">
    <div class="container">
      <div class="d-flex">
        <section class="section-one">
          <div class="list-group list-group-horizontal-md">
            <div class="list-group-item mr-3">本網站僅供練習，非實際商業用途</div>
            <div class="d-flex justify-content-center">
              <a href="#" class="list-group-item px-3">
                <i class="fab fa-facebook-square"></i>
              </a>
              <a href="#" class="list-group-item px-3">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" class="list-group-item px-3">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </section>
        <section class="ml-auto section-two">
          <div class="list-group list-group-horizontal-md">
            <a href="#" class="list-group-item text-muted" @click.prevent="$router.push('/info')">
              隱私權政策
            </a>
            <a href="#" class="list-group-item text-muted" @click.prevent="$router.push('/info')">
              退換貨說明
            </a>
            <a href="#" class="list-group-item text-muted" @click.prevent="$router.push('/info')">
              消費者權益須知
            </a>
          </div>
        </section>
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
  .section-one {
    font-size: 0.9rem;
  }
  .section-two {
    font-size: 0.75rem;
  }
  .list-group-item {
    color: black;
    border: none;
    background: transparent;
  }
</style>
