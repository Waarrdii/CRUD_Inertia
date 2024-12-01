<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import { provide, reactive } from 'vue';

const navbar = reactive([]);

provide('navbar', navbar);

</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>

        
    </AuthenticatedLayout>
</template>
