<template>
    <div
        class="sticky top-0 z-50 flex flex-row justify-between items-center w-full h-20 px-4 md:px-8 text-white bg-black/95 backdrop-blur-sm border-b border-gray-800/60"
    >
        <h1 class="text-3xl md:text-5xl font-signature ml-2 select-none">Luigie Bacli</h1>

        <nav class="hidden md:flex items-center space-x-8 text-sm text-gray-300">
            <button
                v-for="link in links"
                :key="link.id"
                @click="scrollToSection(link.link)"
                class="hover:text-cyan-400 transition duration-200 capitalize"
            >{{ link.link }}</button>
        </nav>

        <button
            class="md:hidden text-gray-300 hover:text-white transition duration-200 p-2"
            @click="showNav = true"
            aria-label="Open menu"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
            </svg>
        </button>

        <Transition name="menu">
            <div
                v-if="showNav"
                class="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-md"
            >
                <div class="flex items-center justify-between px-6 h-20 border-b border-gray-800/60 flex-shrink-0">
                    <h1 class="text-3xl font-signature text-white select-none">Luigie Bacli</h1>
                    <button
                        @click="showNav = false"
                        class="text-gray-400 hover:text-white transition duration-200 p-2"
                        aria-label="Close menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>

                <nav class="flex flex-col items-center justify-center flex-1 gap-8">
                    <button
                        v-for="link in links"
                        :key="link.id"
                        @click="scrollToSectionMenu(link.link)"
                        class="text-2xl font-medium text-gray-300 hover:text-cyan-400 transition duration-200 capitalize"
                    >{{ link.link }}</button>
                </nav>

                <div class="flex justify-center gap-8 pb-10 text-sm text-gray-500">
                    <a href="https://www.linkedin.com/in/lui-bacli-953166223/" target="_blank" rel="noreferrer"
                        class="hover:text-cyan-400 transition duration-200">LinkedIn</a>
                    <a href="https://github.com/luibacli" target="_blank" rel="noreferrer"
                        class="hover:text-cyan-400 transition duration-200">GitHub</a>
                    <a href="mailto:luibacli@gmail.com"
                        class="hover:text-cyan-400 transition duration-200">Email</a>
                </div>
            </div>
        </Transition>
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
    if (element) element.scrollIntoView({ behavior: "smooth" });
};

const scrollToSectionMenu = (sectionId) => {
    showNav.value = false;
    setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 220);
};
</script>

<style scoped>
.menu-enter-active,
.menu-leave-active {
    transition: opacity 220ms ease, transform 220ms ease;
}
.menu-enter-from,
.menu-leave-to {
    opacity: 0;
    transform: translateY(-8px);
}
</style>
