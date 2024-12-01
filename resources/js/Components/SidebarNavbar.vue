<template>
<aside id="default-sidebar" class="fixed left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full pl-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
         <li>
            <a @click="openNavbar('users')"
            href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <PeopleIcon />
               <span class="flex-1 ms-3 whitespace-nowrap">Users</span>
            </a>
         </li>
         <li>
            <a @click="openNavbar('products')"
            href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <BagIcon />
               <span class="flex-1 ms-3 whitespace-nowrap">Products</span>
            </a>
         </li>
      </ul>
   </div>
</aside>


</template>

<script setup>
import BagIcon from '@/Icons/BagIcon.vue';
import PeopleIcon from '@/Icons/PeopleIcon.vue';
import { inject, provide, reactive, ref } from 'vue';

const navbar = inject('navbar');

const openNavbar = (newItem) => {
    navbar.push(newItem);
    console.log(navbar);
}

</script>

<style lang="scss" scoped>

</style>