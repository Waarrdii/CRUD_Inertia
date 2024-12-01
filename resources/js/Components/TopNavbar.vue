<template>
    <NavLink :href="route('dashboard')" :active="route().current('dashboard')">
        Dashboard
    </NavLink>
    <NavLink  v-for="nav in navbar" :key="nav.id"
    :href="route(`${nav}.index`)" :active="route().current(nav + '.index')">
        {{ nav }}
    </NavLink>
</template>

<script setup>
import NavLink from './NavLink.vue';
import store from '@/store';

const navbar = store.state.data;


</script>

<style lang="scss" scoped></style>