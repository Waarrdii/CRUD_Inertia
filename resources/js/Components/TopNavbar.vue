<template>
    <NavLink :href="route('dashboard')" :active="route().current('dashboard')">
        Dashboard
    </NavLink>
    <NavLink 
    @click="activateNavbar(item)"
    :href="route(NavbarData[item].routeName)" :active="activeNavbar === item" v-for="item in (Object.keys(NavbarData))" :key="item.id">
        {{ item }}
    </NavLink>
</template>

<script setup>

import store from '@/store';
import { onMounted, reactive } from 'vue';
import NavLink from './NavLink.vue';

const NavbarData = reactive(store.state.data);
const activeNavbar = store.state.activeNavbar;

const activateNavbar = (item) => {
    store.dispatch('setActiveNavbar', item);
}

onMounted(() => {
    console.log(NavbarData);
})


</script>

<style lang="scss" scoped></style>