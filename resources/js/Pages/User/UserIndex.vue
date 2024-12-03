<template>
    <AuthenticatedLayout>
        <template #main>
            <ul>
                <li v-for="user in users" :key="user.id" class="list-disc">
                    {{ user.name }} | {{ user.email }} | {{ user.created_at }}
                </li>
            </ul>

            <PrimaryButton @click="$inertia.visit(route('users.create'))" class="mt-4">register</PrimaryButton>
        </template>
    </AuthenticatedLayout>
    
</template>

<script setup>
import store from '@/store';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { onMounted } from 'vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';

const props = defineProps({
    users: Array
})


const navbar = store.state.data;

onMounted(() => {
    console.log(store.state.data);
})
</script>

<style lang="scss" scoped>

</style>