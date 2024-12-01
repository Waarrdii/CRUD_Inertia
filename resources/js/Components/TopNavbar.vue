<template>
    <NavLink :href="route('dashboard')" :active="route().current('dashboard')">
        Dashboard
    </NavLink>
    <NavLink  v-for="nav in navbar" :key="nav.id"
    :href="route(`${nav}`)" :active="route().current(`${nav}`)">
        {{ nav }}
    </NavLink>
</template>

<script setup>
import { inject } from 'vue';
import NavLink from './NavLink.vue';

const navbar = inject('navbar');


</script>

<style lang="scss" scoped></style>