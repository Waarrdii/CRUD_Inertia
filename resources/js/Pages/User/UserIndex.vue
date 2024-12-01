<template>
    <AuthenticatedLayout>
        <template #main>
            user index
        </template>
    </AuthenticatedLayout>
    
</template>

<script setup>
import store from '@/store';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { onMounted } from 'vue';

const navbar = store.state.data;

onMounted(() => {
    console.log(store.state.data);
})
</script>

<style lang="scss" scoped>

</style>