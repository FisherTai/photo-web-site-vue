<template>
  <div class="home_page">
    <Search @on-click-search="clickSearch($event)" />
    <div className="pictures">
      <Picture v-for="data in dataArr" :data="data" />
    </div>
    <div className="morePictures">
      <button @click="morepicture">Load More</button>
    </div>
  </div>
</template>``

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import Search from '../components/Search.vue';
import Picture from '../components/Picture.vue';
import { Data } from '../Interfaces'
import Pexels from "../api/Pexels.vue"

//綁定的資料要使用ref(基礎型別)或reactive(陣列或自訂型別)來儲存，才會同步刷新
const dataArray = reactive({ list: new Array<Data>() });
const curSearch = ref("");

const changeDataList = (newList: Data[]) => {
  //要使用原list進行操作，替換掉參考的話便不會被刷新
  dataArray.list.length = 0;
  dataArray.list.push(...newList);
}

//TS的情況要使用defineComponent來支援型別檢查。
//定義template內使用的components、methods、綁定的data。
//整個頁面的生命週期管理。
//methods中使用箭頭函式時，this的參考會改變，要特別注意。
export default defineComponent({
  name: 'HomePage',
  components: {
    Search,
    Picture
  },
  methods: {
    async clickSearch(searchWord: string) {
      curSearch.value = searchWord.trim();
      let result: Data[]
      if (curSearch.value === "") {
        result = await Pexels.getDefaultPictures()
      } else {
        result = await Pexels.getSearchPictures(curSearch.value);
      };
      changeDataList(result);
    },
    async morepicture() {
      const result = await Pexels.getMorePictures();
      dataArray.list.push(...result);
    }
  },
  setup() {
    //在setup()使用async/await似乎會有點問題
    Pexels.getDefaultPictures().then(result => {
      changeDataList(result);
    })
  },
  data() {
    return {
      dataArr: dataArray.list,
      curSearch: curSearch.value
    }
  },
});
</script>

<style scoped lang="scss">
.morePictures {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;

  button {
    padding: 0.25rem 0.5rem;
    font-size: 2rem;
    border: none;
    background-color: rebeccapurple;
    color: white;
    cursor: pointer;
  }
}

.pictures {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>