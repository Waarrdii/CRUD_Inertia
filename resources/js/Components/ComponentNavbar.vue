<template>
    <a
    class="w-full flex flex-start space-x-1 capitalize border-b mb-5">
        <a
        v-for="item in (Object.keys(componentsNavbar))" :key="item.id"
        :href="route(componentsNavbar[item].routeName)"
         >{{ item }}<span>/</span></a>
        
    </a>
    
</template>

<script setup>
import store from '@/store';
import { onMounted, reactive } from 'vue';

const NavbarData = reactive(store.state.data);
const activeNavbar = store.state.activeNavbar;
const componentsNavbar = store.state.data[activeNavbar] ? store.state.data[activeNavbar].components : {};


</script>

<style lang="scss" scoped></style>