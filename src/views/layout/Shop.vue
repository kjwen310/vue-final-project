<template>
  <div>
    <navbar />
    <banner v-if="windowWidth <= 992 && $route.name === 'Home'" class="top-margin" />
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-2">
          <menuList />
        </div>
        <div class="col-lg-9">
          <router-view />
        </div>
        <div class="col-lg-1">
          <sidebar />
        </div>
      </div>
    </div>
    <foot />
    <goTop />
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import Menu from '@/components/Menu.vue';
import Sidebar from '@/components/Sidebar.vue';
import Gotop from '@/components/Gotop.vue';
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    banner: Banner,
    menuList: Menu,
    sidebar: Sidebar,
    goTop: Gotop,
    navbar: Navbar,
  },
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
};
</script>

<style lang="scss" scoped>
  .container {
    min-height: calc(100vh - 25vh);
  }
  @media (max-width: 992px) {
    .top-margin {
      margin-top: 4.5rem;
    }
  }
</style>
