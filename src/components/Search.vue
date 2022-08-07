<template>
  <div className='search'>
    <input type="text" ref="inputText" />
    <button @click="clickSearch">Search</button>
  </div>
</template>``

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue';

// let input = "";

export default defineComponent({
  name: 'Search',
  // props: {
  //   search: Function
  // },
  methods: {
    clickSearch(e: Event) {
      //發射自訂事件
      this.$emit("on-click-search", this.inputText?.value);
      //或是也能將search Function作為prop傳遞進來執行
      // this.search!();
    }
  },
  setup() {
    const inputText: Ref<HTMLInputElement | null> = ref(null);
    return { inputText };
  }
});


</script>

<style scoped lang="scss">
.search {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0rem;
}

input,
button {
  font-size: 2rem;
  padding: 0.25rem;
  border: 3px solid rgb(43, 0, 43);
}

button {
  background-color: rebeccapurple;
  color: white;
}
</style>