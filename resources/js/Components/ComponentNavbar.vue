<template>
    <div class="w-full flex flex-start space-x-1 capitalize border-b mb-5">
        <nav v-for="item in (Object.keys(NavbarData))" :key="item.id">{{ item }} <span>/</span></nav>
        
    </div>
    
</template>

<script setup>
import store from '@/store';

const activeNavbar = store.state.activeNavbar;
const NavbarData = store.state.data[activeNavbar] ? store.state.data[activeNavbar].components : {};


</script>

<style lang="scss" scoped></style>