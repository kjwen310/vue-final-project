<template>
  <div class="container">
    <Loading :active.sync="isLoading" />
    <table class="table">
      <thead>
        <tr>
          <th>下單時間</th>
          <th>購買商品</th>
          <th>付款方式</th>
          <th>應付金額</th>
          <th>是否付款</th>
        </tr>
      </thead>
      <tbody v-if="orders.length">
        <tr v-for="(item, index) in orders" :key="index" :class="{'text-secondary': !item.is_paid}">
          <td>{{ item.created.datetime }}</td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, i) in item.products" :key="i">
                {{ product.product.title }} 數量：{{ product.quantity }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td>{{ item.payment }}</td>
          <td class="text-right">{{ item.amount }}</td>
          <td>
            <div class="custom-control custom-switch">
              <input
                :id="item.id"
                v-model="item.paid"
                type="checkbox"
                class="custom-control-input"
                @change="setOrderPaid(item)"
              />
              <label class="custom-control-label" :for="item.id">
                <strong v-if="item.paid" class="text-paid">已付款</strong>
                <span v-else class="text-muted">尚未付款</span>
              </label>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <pagination :pages="pagination" @emitPages="getOrders" />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    pagination: Pagination,
  },
  data() {
    return {
      orders: {
        user: {},
      },
      isNew: false,
      pagination: {},
      isLoading: false,
    };
  },
  created() {
    this.getOrders();
  },
  methods: {
    getOrders(pages = 1) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/orders?page=${pages}`;
      this.$http.get(api)
        .then((res) => {
          this.orders = res.data.data;
          this.pagination = res.data.meta.pagination;
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
          this.$swal({
            icon: 'error',
            title: '無法取得訂單列表，請再嘗試重整頁面。',
          });
        });
    },
    setOrderPaid(item) {
      let api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/orders/${item.id}/paid`;
      if (!item.paid) {
        api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/orders/${item.id}/unpaid`;
      }
      this.$http.patch(api, item.id)
        .then(() => {
          this.getOrders();
        })
        .catch(() => {
          this.$swal({
            icon: 'error',
            title: '發生錯誤，請再試一次！',
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
  .text-paid {
    color: #219ebc;
  }
</style>
