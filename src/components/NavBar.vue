<template>
    <div
        class="flex flex-row justify-between top-0 left-0 items-center w-full h-20 px-4 text-white bg-black fixed"
    >
        <div>
            <h1 class="text-5xl font-signature ml-2">Luigie Bacli</h1>
        </div>

        <div
            class="flex px-4 py-6 text-4 space-x-10 hidden md:flex cursor-pointer text-gray-500"
        >
            <div @click="scrollToSection('home')">Home</div>
            <div @click="scrollToSection('about')">About</div>
            <div @click="scrollToSection('portfolio')">Portfolio</div>
            <div @click="scrollToSection('skills')">Skills</div>
            <div @click="scrollToSection('contact')">Contact</div>
        </div>
        <div
            class="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
            @click="showNav = true"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
            </svg>
        </div>
        <div
            v-show="showNav"
            class="flex flex-col justify-center items-center absolute top-0 left-0 w-screen h-fit bg-gradient-to-b from-black to-gray-800 text-gray-500"
        >
            <button @click="showNav = false">
                <span class="text-bold">X</span>
            </button>

            <ul v-for="link in links" :key="link.id">
                <li
                    class="px-4 cursor-pointer py-6 text-4xl capitalize"
                    @click="scrollToSectionMenu(link.link)"
                >
                    {{ link.link }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref, defineOptions, watch } from "vue";
const showNav = ref(false);

const links = [
    {
        id: 1,
        link: "home",
    },
    {
        id: 2,
        link: "about",
    },
    {
        id: 3,
        link: "portfolio",
    },
    {
        id: 4,
        link: "skills",
    },
    {
        id: 5,
        link: "contact",
    },
];

const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
};
const scrollToSectionMenu = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
    showNav.value = false;
};

watch(showNav, (oldval, newval) => {
    if (oldval !== newval) {
        showNav;
        console.log(showNav.value);
    }
});
</script>

<style lang="scss" scoped></style>
