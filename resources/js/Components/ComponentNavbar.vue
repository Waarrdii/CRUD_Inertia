<template>
    <Link v-if="ComponentNavbar"
    :href="route('dashboard')" >
        
    </Link>
</template>

<script setup>
import {Link} from '@inertiajs/vue3';
import store from '@/store';

const ComponentNavbar = store.state.Components;


</script>

<style lang="scss" scoped></style>