<template>
  <div class="row">
    <div class="col-md-4" v-for="(column) in columnsData" :key="column.id">
      <div class="card">
        <div class="inner">
          <a href="#" @click.prevent="getColumn(column.id)">
            <img :src="column.img" class="card-img-top" :alt="column.id" />
          </a>
        </div>
        <div class="card-body text-left px-0">
          <div class="card-title">
            <h3 class="text-muted">{{ column.title }}</h3>
          </div>
          <div class="card-text text-left h5">
            <p class="text-muted">{{ column.time }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columnsData: [
        {
          id: 'second-hand-clothes-recycle',
          title: '二手衣大揭密！你家的衣服都去哪裡了？',
          time: '2020/08/04',
          img: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        },
        {
          id: 'fashion-problem',
          title: '快時尚：從衣櫃到垃圾桶',
          time: '2020/08/25',
          img: 'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        },
        {
          id: 'Shimokitazawa',
          title: '下北澤攻略！日本古著聖地',
          time: '2020/06/09',
          img: 'https://images.unsplash.com/photo-1504583557080-9d04d0ba1304?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        },
      ],
    };
  },
  methods: {
    getColumn(columnId) {
      this.$router.push({
        name: 'Column',
        params: { id: columnId },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  .card {
    border: none;
  }
  .inner {
    overflow: hidden;
    position: relative;
    img {
      transition: all 1s ease;
    }
    &:hover {
      img {
        transform: scale(1.08);
        opacity: 0.6;
      }
    }
  }
  h3 {
    font-size: 1rem;
    font-weight: bolder;
  }
  p {
    font-size: 0.6rem;
    letter-spacing: 0.2rem;
  }
</style>
