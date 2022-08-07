<template>
    <div className='footer'>
        Fisher Tai 2022 ©
    </div>
</template>``

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Footer'
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    background-color: rgb(204, 204, 204);
}
</style>