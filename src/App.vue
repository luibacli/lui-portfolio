<script setup>
import NavBar from "./components/NavBar.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Portfolio from "./components/Portfolio.vue";
import Skills from "./components/Skills.vue";
import Contact from "./components/Contact.vue";
import LoadingBounce from "./components/LoadingBounce.vue";
import SocialLinks from "./components/SocialLinks.vue";
import { onMounted, ref } from "vue";

const loading = ref(false);
const showNavBar = ref(false);

function showLoading() {
    loading.value = true;

    setTimeout(() => {
        loading.value = false;
        showNavBar.value = true;
    }, 2000);
}

onMounted(() => {
    showLoading();
});
</script>

<template>
    <div>
        <div v-if="loading">
            <LoadingBounce />
        </div>
        <div v-else>
            <div v-show="showNavBar">
                <NavBar />
            </div>
            <SocialLinks />
            <Home />
            <About />
            <Portfolio />
            <Skills />
            <Contact />
        </div>
    </div>
</template>

<style scoped></style>
