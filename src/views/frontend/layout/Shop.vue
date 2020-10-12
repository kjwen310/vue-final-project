<template>
  <div>
    <Navbar />
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-2">
          <Menu />
        </div>
        <div class="col-lg-9">
          <router-view />
        </div>
        <div class="col-lg-1">
          <Sidebar />
        </div>
      </div>
    </div>
    <foot />
    <Gotop />
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue';
import Sidebar from '@/components/Sidebar.vue';
import Gotop from '@/components/Gotop.vue';
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Menu,
    Sidebar,
    Gotop,
    Navbar,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
  .container {
    min-height: calc(100vh - 15vh);
  }
</style>
