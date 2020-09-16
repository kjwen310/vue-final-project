<template>
  <!-- 此元件是左邊的選單 -->
  <div class="menu sticky-top">
    <div class="logo mb-5" @click="$router.push('/')">
      <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/BEsLDtsR4xR9fSivNCvRwFQz87a4kJIWjVVHUN3kt83cnnJhAn71b7w59KbS7SNrkYVcSo1EDDc0BqOvpiDipAcuGqLBTyRYCpoW6ejj1VEpXk6q8yqIN3rDsCu2gjiT.png" alt="logo">
    </div>
    <div class="accordion mb-5" id="menuAccordion">
      <div v-for="(item, index) in categoryGuide" :key="index">
        <div class="d-flex mb-2" :id="'heading' + index">
            <div class="title">
              <a href="#" class="a-reform" @click.prevent="switchPath(item.name)">
                {{ item.zh }}
              </a>
            </div>
            <button
              class="ml-auto"
              type="button"
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
            <div class="list-group text-left">
              <a
                href="#"
                v-for="(sub, id) in item.subCategory"
                :key="id"
                class="list-group-item subtitle"
                @click.prevent="switchSubPath(item.name, sub.en)">
                  {{ `- ${sub.zh}` }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-left text-muted">
      <div class="list-group">
        <a href="#" class="list-group-item link" @click.prevent="$router.push('/columns')">
          Column
        </a>
        <a href="#" class="list-group-item link" @click.prevent="$router.push('/about')">
          About
        </a>
        <a href="#" class="list-group-item link" @click.prevent="$router.push('/info')">
          其他資訊
        </a>
        <a href="#" class="list-group-item link" @click.prevent="$router.push('/storeInfo')">
          實體店資訊
        </a>
      </div>
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
  .sticky-top {
    top: 2rem;
  }
  .menu {
    .logo {
      img {
        max-width: 60%;
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
  @media (max-width: 992px) {
    .menu {
      display: none;
    }
  }
</style>
