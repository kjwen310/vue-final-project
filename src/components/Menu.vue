<template>
  <!-- 此元件是左邊的選單 -->
  <div class="menu sticky-top">
    <div class="logo mb-5" @click="$router.push('/shop/home')">
      <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/FbhIfAOx2ky5jB29QwBvu5ABReevcmLxUmTHE3SnziaRfusdbH0Ap2IOr4ycIWucPuMYszMczsGyAdhy0ke31dYYLkraePtmbdvL6hi24fsrjiV8a4b94gMBNpvYjE6b.svg" alt="logo">
    </div>
    <div class="accordion mb-5" id="menuAccordion">
      <div v-for="(item, index) in categoryGuide" :key="index">
        <div class="d-flex mb-2" :id="'heading' + index">
            <div class="title">
              <a href="#" @click.prevent="switchPath(item.name)">
                {{ item.zh }}
              </a>
            </div>
            <button
              type="button"
              class="ml-auto"
              data-toggle="collapse"
              :data-target="'#collapse' + index"
              aria-expanded="true"
              :aria-controls="'#collapse' + index">+</button>
        </div>
        <div
          :id="'collapse' + index"
          class="collapse mb-2"
          :aria-labelledby="'heading' + index"
          data-parent="#menuAccordion"
        >
          <div>
            <ul class="list-group text-left">
              <li
                class="list-group-item subtitle"
                v-for="(sub, i) in item.subCategory"
                :key="i"
                @click="switchSubPath(item.name, sub.en)">- {{ sub.zh }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="text-left text-muted">
      <ul class="list-group">
        <li class="list-group-item" @click="$router.push('/shop/columns')">Column</li>
        <li class="list-group-item" @click="$router.push('/shop/about')">About</li>
        <li class="list-group-item" @click="$router.push('/shop/info')">其他資訊</li>
        <li class="list-group-item" @click="$router.push('/shop/storeInfo')">實體店資訊</li>
        <li class="list-group-item" @click="$router.push('/')">vatta 形象頁</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categoryGuide: [
        {
          name: 'clothes',
          zh: '上衣',
          subCategory: [
            { en: 'short-sleeve', zh: '一般短袖' },
            { en: 'long-sleeve', zh: '一般長袖' },
            { en: 'no-sleeve', zh: '無袖' },
            { en: 'shirt', zh: '襯衫' },
          ],
        },
        {
          name: 'pants',
          zh: '褲',
          subCategory: [
            { en: 'shorts', zh: '一般短褲' },
            { en: 'trousers', zh: '一般長褲' },
            { en: 'long-jeans', zh: '牛仔長褲' },
            { en: 'short-jeans', zh: '牛仔短褲' },
          ],
        },
        {
          name: 'skirt',
          zh: '裙',
          subCategory: [
            { en: 'short-skirt', zh: '短裙' },
            { en: 'long-skirt', zh: '長裙' },
            { en: 'dress', zh: '連身裙' },
          ],
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
    switchSubPath(cate, sub) {
      this.$router.push({
        name: 'SubProducts',
        params: {
          category: cate,
          subCategory: sub,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  ul {
    list-style: none;
    padding: 0;
    li {
      cursor: pointer;
    }
  }
  .sticky-top {
    top: 2rem;
  }
  .menu {
    .logo {
      img {
        max-width: 70%;
        opacity: 0.85;
      }
      &:hover {
        opacity: 0.7;
        cursor: pointer;
      }
    }
  }
  .accordion {
    min-height: 40vh;
    .title {
      font-size: 0.9rem;
      letter-spacing: 0.2rem;
      transition: all 1s ease;
      transform: translate(0);
      a {
        color: black;
        text-decoration: none;
      }
      &:hover {
        transform: translate(0.3rem);
        opacity: 0.4;
      }
    }
    button {
      background-color: transparent;
      border: none;
      outline: none;
      &:hover {
        color: #ffa010;
      }
    }
  }
  .list-group-item {
    color: black;
    border: none;
    background: transparent;
    padding: 0.15rem 0.5rem;
    font-size: 0.8rem;
    letter-spacing: 0.2rem;
    transition: all 1s ease;
    transform: translate(0);
    text-decoration: none;
    &:hover {
      transform: translate(0.3rem);
      opacity: 0.4;
    }
  }
  @media (max-width: 1024px) {
    .accordion {
      min-height: 60vh;
    }
    .list-group-item {
      padding-top: 0.5rem;
    }
  }
  @media (max-width: 992px) {
    .menu {
      display: none;
    }
  }
</style>
