<template>
  <div class="top-margin">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#" @click.prevent="$router.push('/shop/home')">首頁</a>
        </li>
        <li class="breadcrumb-item">
          <a href="#" @click.prevent="$router.push('/shop/columns')">專欄</a>
        </li>
        <li class="breadcrumb-item active">{{ column.title }}</li>
      </ol>
    </nav>
    <div class="text-left pt-5">
      <h2 class="h4">
        <strong>{{ column.title }}</strong>
      </h2>
      <p class="text-muted">{{ column.time }}</p>
    </div>
    <div
     class="jumbotron jumbotron-fluid bg-img"
     :style= "{'background-image': 'url(' + column.img + ')'}"></div>
    <div class="container column-content text-left">
      <div class="mb-2">
         <p>{{ column.preface }}</p>
      </div>
      <div class="mb-4" v-for="(paragraph, index) in column.content" :key="index">
        <div class="mb-2">
          <span></span>
          <h3 class="h5 ml-3">{{ paragraph.subtitle }}</h3>
        </div>
        <p>{{ paragraph.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columnId: '',
      column: {},
      columns: [
        {
          id: 'second-hand-clothes-recycle',
          title: '二手衣大揭密！你家的衣服都去哪裡了？',
          time: '2020/08/04',
          img: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          preface: '有些衣服買了之後好久沒穿，又占了衣櫃空間，整理時只好丟掉。這些丟掉的衣服去了哪裡？又會造成什麼問題呢？據估計，台灣平均每年丟掉了超過2億件的衣服，其中透過社區回收箱回收的只有將近三成。',
          content: [
            {
              subtitle: '台灣舊衣回收困境',
              text: '很多人可能以為，將二手衣丟到舊衣回收箱，就能夠有效轉賣、捐贈或再利用，但其實能真正再利用的只佔少數。當廠商標得回收箱的舊衣後，會載往工廠，由分類員檢查新舊材質、破損程度等，篩選品質。品質較佳的舊衣被打包成衣物磚，綑綁後以公斤計價，送往非洲各國或孟加拉等地變賣，剩下來近八成的舊衣都會變成廢棄物，最終無業者願意接收，只能直接作為一般垃圾燒掉。焚燒不但汙染環境，費用也相當可觀，一噸舊衣的處理費約需六七千元，國內願意接手舊衣回收的業者愈來愈少。近年來，除了全球舊衣市場需求已趨飽和，第三世界國家也多為了保障國內紡織業，而限制二手衣物的進口，二手衣的回收已成為全球性的問題。',
            },
            {
              subtitle: '快時尚汙染',
              text: '但當我們仔細檢視，會發現許多所謂的「舊」衣實際上都相當新，許多只穿過一兩次，或者因為換季而被丟棄，而且家裡衣櫃常常呈現爆滿的狀況。這種「買得快丟得多」，在鄰近的中國、日本、韓國、越南等地，也都有一樣的情形，罪魁禍首正是「快時尚」消費。',
            },
            {
              subtitle: '快時尚思維',
              text: '在快時尚的推波助瀾下，一件衣服才兩三百塊，但品質往往較差，就是要鼓勵消費者大量、頻繁地購買，不喜歡了就再買一件，使許多價格低廉、設計新潮，品質較低的衣服成為主流，消費者也在衝動購物下，買下更多時尚垃圾。',
            },
            {
              subtitle: '二手衣新潮流',
              text: '有沒有一種模式，能讓這些衣服可以重新循環，除了對環境更友善，也開創自己獨特的風格呢？本店的創辦人就是秉持這樣的精神，希望把二手衣多樣豐富的一面帶給大家，讓大家交換、換購自己不需要的衣服，自由塑造自己的風格，也給舊衣重獲新生的機會。在時尚產業已變成全球僅次於石化業的第二大汙染源的今天，無論製造或銷毀，都對環境造成很大負擔，希望大家能再思考快時尚的問題，為自已的戰利品找到新價值，循環利用，別成為時尚垃圾的幫兇。',
            },
          ],
        },
        {
          id: 'fashion-problem',
          title: '快時尚：從衣櫃到垃圾桶',
          time: '2020/08/25',
          img: 'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          preface: '廉價的「快時尚」已經徹底改變我們的穿衣方式，也改變了我們對待衣物的態度。我們買得更多， 每一件衣服穿的次數卻更少，衣櫃塞滿很少穿到的衣服，有些甚至從沒穿過。它們變成拋棄式的物品，時尚的價值只為嘗鮮。品牌的行銷手法將消費者推向過度消費和物質主義的黑洞，惜物愛物的觀念已不再是社會主流價值。',
          content: [
            {
              subtitle: '服飾生產中的環境問題',
              text: '全球每年生產超過八百億件服飾，這些服飾結束短暫的使用壽命後，有四分之三會進入垃圾掩埋場或焚化爐，回收的服飾僅佔四分之一。其中，平均生產一件牛仔褲要使用七千公升的水，生產一件T恤則需消耗兩千七百公升；而紡織品染色過程中，應用了包含全氟化合物這類將永久衝擊環境的有害化學物質，以提供抗污、防水功能，非常不易分解，能在環境中殘留數百年。而在生產過程中即被裁切、丟棄的布料與瑕疵衣物，據估計超過總生產量的一成。在全球回收價格與市場需求低靡之下，回收舊紡織品的誘因低落，這也讓更多舊衣甚至新布料直接進了掩埋場。',
            },
            {
              subtitle: '快時尚下的過度消費',
              text: '過度消費是「快時尚」最重要的負面影響。過去短短數年內，「快時尚」領導品牌的零售商逐年成長。據統計，美國每人每年平均購買的服飾總數為67件，相當於每四到五天就買一件新的衣服。換言之，「快時尚」品牌正在將流行服飾變成一次性的日用品。',
            },
            {
              subtitle: '衣物斷捨離 以循環代替過度消費',
              text: '衣服從衣櫃到垃圾桶的生命周期 愈來愈短，但快時尚議題近年頁逐漸受到重視。2018年，來自國際的數十個時尚品牌、紡織製造商在瑞士協商減少碳排放的相關協議。事實上，若衣服只是稍有損壞，且使用率較高，建議還是以修補、改製為優先，延長衣物的使用壽命。而面對大量已經不穿的舊衣，則可依照衣物狀態，贈送親友、轉賣二手商店、在FB換物社團交換、交給該品牌舊衣回收管道、或是捐贈給需要的公益單位。如有購買新衣服的需要，也不妨先在二手衣網站、線上換物社群中尋寶，很可能會有意想不到的收穫！',
            },
          ],
        },
        {
          id: 'Shimokitazawa',
          title: '下北澤攻略！日本古著聖地',
          time: '2020/06/09',
          img: 'https://images.unsplash.com/photo-1504583557080-9d04d0ba1304?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          preface: '東京旅遊時，想逛古著、二手雜貨及古董，就一定不能錯過熱鬧無比的下北澤。和一般跳蚤市場的印象不同，下北澤深受年輕族群喜愛，有很多劇場、Live House、文青小店和餐廳，每年六月還會舉辦音樂祭典。從車站以北和以南的商店街延伸出去，有各種特色店家等你來發掘！',
          content: [
            {
              subtitle: '逛到腿軟的二手衣、古著店',
              text: '多元文化並存的下北澤，街道上總是能看到形形色色、打扮前衛、毫不在意他人眼光的潮男潮女，無論是刷舊牛仔褲、大翻領復古襯衫、華麗歌德洋裝、清新森林系，在下北澤，的每個人都能自在表現自我風格。車站北口的古著街區堪稱是一級戰區，走進去發現簡直像個小型迷宮！店外常有一排排鮮豔亮麗的古著洋裝，從連身裙、長洋裝到風衣等一應俱全。往內走還有多家販售古著男靴的店家，以及帽子、首飾等配件。在古著街區裡挖寶最大的樂趣，在於每種商品都只有一件，而你永遠不知道會在這眼花撩亂的古著山裡找到什麼寶貝！',
            },
            {
              subtitle: '善待每一件古著 看見衣服的不同面貌',
              text: '許多古著因為保存得十分好，根本看不出來是二手商品。無論是大眾品牌，或是一些有個性的服飾，衣服品質都被把關地相當好，價位也有所區隔。也因為品質佳，所以不少明星藝人也都會來這裡挑選好貨回。多元的服飾種類，眼花撩亂的店鋪，也激發人們的穿搭想法。漫步在下北澤，舊衣也能是生活中的迷人存在。',
            },
          ],
        },
      ],
    };
  },
  created() {
    this.columnId = this.$route.params.id;
    this.column = this.columns.find((item) => item.id === this.columnId);
  },
};
</script>

<style lang="scss" scoped>
  .breadcrumb {
    font-size: 0.8rem;
    background-color: transparent;
    padding-left: 0;
  }
  .bg-img {
    background-size: cover;
    background-position: center center;
    height: 70vh;
    max-height: 350px;
  }
  .column-content {
    span {
      position: relative;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        width: 0.4rem;
        background-color: #ffa010;
      }
    }
    h3 {
      display: inline;
      font-weight: bolder;
    }
    p {
      line-height: 1.8rem;
    }
  }
  @media (max-width: 992px) {
    .top-margin {
      margin-top: 3rem;
    }
  }
  @media (max-width: 576px) {
    .bg-img {
      height: 30vh;
    }
  }
</style>
