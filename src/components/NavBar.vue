<template>
    <div
        class="flex flex-row justify-between top-0 left-0 items-center w-full h-20 px-4 text-white bg-black fixed"
        style="position: sticky;"
    >
        <div>
            <h1 class="text-5xl font-signature ml-2">Luigie Bacli</h1>
        </div>

        <div
            class="flex px-4 py-6 text-4 space-x-10 hidden md:flex cursor-pointer text-gray-300"
        >
            <div @click="scrollToSection('home')" class="hover:text-cyan-400 duration-200">Home</div>
            <div @click="scrollToSection('about')" class="hover:text-cyan-400 duration-200">About</div>
            <div @click="scrollToSection('experience')" class="hover:text-cyan-400 duration-200">Experience</div>
            <div @click="scrollToSection('portfolio')" class="hover:text-cyan-400 duration-200">Portfolio</div>
            <div @click="scrollToSection('skills')" class="hover:text-cyan-400 duration-200">Skills</div>
            <div @click="scrollToSection('contact')" class="hover:text-cyan-400 duration-200">Contact</div>
        </div>
        <div
            class="cursor-pointer pr-4 z-10 text-gray-300 md:hidden"
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
            class="flex flex-col justify-center items-center absolute top-0 left-0 w-screen h-fit bg-gradient-to-b from-black to-gray-800 text-gray-300"
        >
            <button @click="showNav = false" class="text-gray-400 hover:text-white text-2xl font-bold py-4">
                ✕
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
import { ref } from "vue";
const showNav = ref(false);

const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "experience" },
    { id: 4, link: "portfolio" },
    { id: 5, link: "skills" },
    { id: 6, link: "contact" },
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
</script>

<style lang="scss" scoped></style>
