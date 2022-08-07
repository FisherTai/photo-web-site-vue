<template>
    <div className="picture">
        <p>{{ data?.photographer }}</p>
        <div className="imageContainer">
            <img :src="data!.src.large" alt="" />
        </div>
        <p>
            Download Image 
            <a target="_blank" :href=data?.src.large>
                Click Here
            </a>
        </p>
    </div>
</template>``

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue'
import { Data } from '../Interfaces'

/**
 * TODO: vue-ts props 的型別檢查非要這麼麻煩嗎?
 * 參考自 @link:https://blog.csdn.net/w55100/article/details/124624300
 */

export default defineComponent({
    name: 'Picture',
    props: {
        data: Object as PropType<Data>
    },
    setup() {

    }
});

</script>

<style scoped lang="scss">
.picture {
    padding: 1rem;
    width: 400px;

    .imageContainer {
        overflow: hidden;
        height: 40vh;

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            transition: all 0.3s ease;

            &:hover {
                transform: scale(1.25);
            }
        }

    }
}
</style>