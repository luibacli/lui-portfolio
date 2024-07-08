<template>
    <div
        id="home"
        class="h-screen w-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
        <div
            class="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row"
        >
            <div class="flex flex-col justify-center h-full animate-fade-left">
                <h2 class="text-4xl sm:text-7xl font-bold text-white">
                    I'm a Vue.js Developer
                </h2>
                <p class="text-gray-500 py-4 max-w-md">
                    Dynamic and detail-oriented Vue.js Developer with almost
                    three years of hands-on experience in designing, developing,
                    and maintaining web applications.
                </p>
                <div
                    @click="scrollToSection('portfolio')"
                    class="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                >
                    Porfolio
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
                            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                        />
                    </svg>
                </div>
            </div>
            <div class="animate-fade-right">
                <img
                    :src="`${HeroImage}`"
                    alt="my profile"
                    class="rounded-2xl mx-auto w-2/3 md:w-full hover:animate-wiggle animate-ease-in-out"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import HeroImage from "../assets/heroImage.png";

const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
};
</script>

<style lang="scss" scoped></style>
