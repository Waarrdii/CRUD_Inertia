<template>
    <AuthenticatedLayout>
        <template #main>
            <ul>
                <li v-for="user in users" :key="user.id" class="list-disc">
                    {{ user.name }} | {{ user.email }} | {{ user.created_at }}
                </li>
            </ul>

            <Link 
            @click="updateData('create')"
            :href="route('users.create')" 
            class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900 mt-4">
            register
            </Link>
        </template>
    </AuthenticatedLayout>
    
</template>

<script setup>

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import store from '@/store';
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    users: Array
})


const updateData = (key)=>{
    const data = {
        id : 'tab1',
        data : {}
    }
    store.dispatch('updateComponent', {key, data});
}


</script>

<style lang="scss" scoped>

</style>