<template>
  <div>
    <backendNavbar />
    <div class="container-fluid">
      <div class="row">
        <main role="main" class="col-md-12 ml-sm-auto px-4">
          <router-view v-if="checkSuccess" :token="token" />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import BackendNavbar from '@/components/BackendNavbar.vue';

export default {
  components: {
    backendNavbar: BackendNavbar,
  },
  data() {
    return {
      token: '',
      checkSuccess: false,
    };
  },
  created() {
    this.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;
    const api = `${process.env.VUE_APP_APIPATH}auth/check`;
    this.$http.post(api, { api_token: this.token })
      .then(() => {
        this.checkSuccess = true;
      }).catch(() => {
        this.$router.push('/login');
      });
  },
};
</script>
