<template>
    <nav>
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/about">About</router-link>
            </li>
        </ul>
    </nav>
</template>``

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Nav'
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
nav {
    background-color: rebeccapurple;

    ul {
        display: flex;
        justify-content: flex-end;
        margin-right: 3rem;
    }

    li {
        padding: 0.5rem 1rem;

        a {
            font-size: 1.5rem;
            color: white;

        }
    }
}
</style>