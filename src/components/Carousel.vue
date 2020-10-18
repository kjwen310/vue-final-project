<template>
  <div>
    <div id="carousel" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(item, i) in texts" :key="i" class="carousel-item" :class="{'active': i == 0}">
          <div class="carousel-control">
            <div class="bg-cover" :style="'background-image: url(' + item.img + ')'"></div>
            <div class="text-left">
              <h2 class="letter-spacing">{{ item.title }}</h2>
              <div class="category-intro">
                <p class="mb-3">{{ item.intro }}</p>
                <button
                  type="button"
                  class="btn btn-outline-dark btn-block"
                  @click="switchPath(item.name)">see more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      texts: [
        {
          img: 'https://images.unsplash.com/photo-1520591799316-6b30425429aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
          title: 'Clothes',
          name: 'clothes',
          intro: '慵懶的午後，想要穿得隨興可愛，生活過得簡簡單單。來看看各式 T恤、薄長袖與襯衫，每件衣服都勾起一種生活想像',
        },
        {
          img: 'https://images.unsplash.com/photo-1475178626620-a4d074967452?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
          title: 'Pants',
          name: 'pants',
          intro: '為自己定義時尚，穿上自己風格。透過穿搭，再次認識自己',
        },
        {
          img: 'https://images.unsplash.com/photo-1509182469511-7f0b50bfa63e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          title: 'Skirt',
          name: 'skirt',
          intro: '善待自己，為每個努力又勇於展現自信的妳加油。用相連的裙擺，串聯每個回憶角落',
        },
      ],
    };
  },
  methods: {
    switchPath(option) {
      this.$router.push({
        name: 'Products',
        params: { category: option },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel-control {
  display: flex;
  .bg-cover {
    width: 50%;
    position: relative;
    background-size: cover;
    background-position: center center;
    height: 60vh;
    max-height: 409px;
  }
  h2 {
    position: absolute;
    top: 5rem;
    left: 48%;
  }
  .category-intro {
    position: absolute;
    top: 10rem;
    left: 55%;
  }

}
.letter-spacing {
  opacity: 0.8;
  font-weight: 100;
  font-size: 3.2rem;
  letter-spacing: 0.35rem;
}
@media (max-width: 768px) {
  .carousel-control {
    display: block;
    .bg-cover {
      width: 100%;
      position: center center;
      margin-bottom: 1rem;
    }
    h2, .category-intro {
      position: relative;
      top: 0;
      left: 0;
      padding-left: 0.8rem;
      padding-right: 0.8rem;
    }
  }
}
@media (max-width: 576px) {
  .letter-spacing {
    opacity: 0.8;
    font-weight: 100;
    font-size: 2.5rem;
    letter-spacing: 0.3rem;
  }
}
</style>
