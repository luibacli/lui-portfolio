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
    </div>

    <!-- Teleported outside NavBar so fixed positioning covers the full viewport -->
    <Teleport to="body">
        <Transition name="drawer">
            <div
                v-if="showNav"
                class="fixed inset-0 md:hidden"
                style="z-index: 9999;"
            >
                <!-- Backdrop -->
                <div
                    class="absolute inset-0 bg-black/70"
                    @click="showNav = false"
                ></div>

                <!-- Drawer panel — solid background guaranteed via inline style -->
                <div
                    class="drawer-panel absolute left-0 top-0 h-full w-72 max-w-[85vw] flex flex-col border-r border-gray-700 shadow-2xl shadow-black"
                    style="background-color: #0d1117;"
                >
                    <!-- Header -->
                    <div
                        class="flex items-center justify-between px-5 h-20 flex-shrink-0 border-b border-gray-700/80"
                        style="background-color: #0d1117;"
                    >
                        <h1 class="text-2xl font-signature text-white select-none">Luigie Bacli</h1>
                        <button
                            @click="showNav = false"
                            class="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-white/10 transition duration-150"
                            aria-label="Close menu"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>

                    <!-- Nav links -->
                    <nav class="flex flex-col px-3 py-5 gap-1 flex-1">
                        <button
                            v-for="link in links"
                            :key="link.id"
                            @click="scrollToSectionMenu(link.link)"
                            class="text-left w-full px-4 py-3 rounded-lg font-medium capitalize transition duration-150 text-base text-white hover:bg-white/10 hover:text-cyan-400"
                        >{{ link.link }}</button>
                    </nav>

                    <!-- Social links -->
                    <div class="px-5 pb-8 pt-4 border-t border-gray-700/80">
                        <p class="text-xs text-gray-500 uppercase tracking-widest mb-3">Connect</p>
                        <div class="flex flex-col gap-2">
                            <a href="https://www.linkedin.com/in/lui-bacli-953166223/" target="_blank" rel="noreferrer"
                                class="text-sm text-gray-300 hover:text-cyan-400 transition duration-150">LinkedIn</a>
                            <a href="https://github.com/luibacli" target="_blank" rel="noreferrer"
                                class="text-sm text-gray-300 hover:text-cyan-400 transition duration-150">GitHub</a>
                            <a href="mailto:luibacli@gmail.com"
                                class="text-sm text-gray-300 hover:text-cyan-400 transition duration-150">Email</a>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
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
/* Backdrop fades in/out */
.drawer-enter-active,
.drawer-leave-active {
    transition: opacity 220ms ease;
}
.drawer-enter-from,
.drawer-leave-to {
    opacity: 0;
}

/* Drawer panel slides in from left */
.drawer-enter-active .drawer-panel,
.drawer-leave-active .drawer-panel {
    transition: transform 260ms cubic-bezier(0.4, 0, 0.2, 1);
}
.drawer-enter-from .drawer-panel,
.drawer-leave-to .drawer-panel {
    transform: translateX(-100%);
}
</style>
