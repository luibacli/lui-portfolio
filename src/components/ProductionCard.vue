<template>
    <div
        class="card-spotlight relative rounded-xl overflow-hidden flex flex-col bg-gray-900 border border-gray-700/50 transition duration-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-900/20 hover:border-amber-500/30"
        @mousemove="handleMouseMove"
        @mouseleave="handleMouseLeave"
    >
        <div class="spotlight absolute inset-0 rounded-xl pointer-events-none z-20"></div>

        <div class="relative z-10 overflow-hidden">
            <img
                :src="project.src1"
                loading="lazy"
                class="w-full h-44 object-cover transition duration-300 hover:scale-105"
                :alt="project.name"
            />
            <span class="absolute top-2 right-2 bg-emerald-500/90 backdrop-blur-sm text-white text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 bg-white rounded-full animate-pulse inline-block"></span>
                Live
            </span>
        </div>

        <div class="relative z-10 flex flex-col flex-1 p-4">
            <h3 class="text-white font-bold text-lg">{{ project.name }}</h3>

            <span class="mt-2 w-fit text-xs font-medium text-amber-400 border border-amber-400/30 bg-amber-400/5 px-2 py-0.5 rounded-full">
                Private Repository (Client-Owned)
            </span>

            <p class="text-gray-400 text-sm mt-2 flex-1">{{ project.description }}</p>

            <div class="flex flex-wrap gap-1.5 mt-3">
                <span
                    v-for="tech in project.stack"
                    :key="tech"
                    class="text-xs text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-2 py-0.5 rounded-full"
                >{{ tech }}</span>
            </div>

            <div class="flex gap-2 mt-4">
                <a
                    :href="project.demo"
                    target="_blank"
                    rel="noreferrer"
                    class="flex-1 text-center px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium transition duration-200 hover:scale-105"
                >Demo</a>
                <button
                    @click="$emit('preview', project)"
                    class="flex-1 cursor-pointer text-center px-4 py-2 rounded-md border border-amber-500/50 text-amber-400 text-sm font-medium transition duration-200 hover:border-amber-400 hover:bg-amber-400/10"
                >Preview</button>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({ project: Object });
defineEmits(['preview']);

const handleMouseMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--y', `${e.clientY - rect.top}px`);
    el.style.setProperty('--spotlight', '1');
};

const handleMouseLeave = (e) => {
    e.currentTarget.style.setProperty('--spotlight', '0');
};
</script>

<style scoped>
.spotlight {
    background: radial-gradient(
        circle at var(--x, 50%) var(--y, 50%),
        rgba(245, 158, 11, 0.08),
        transparent 60%
    );
    opacity: var(--spotlight, 0);
    transition: opacity 300ms ease-out;
}
</style>
