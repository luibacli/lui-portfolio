<template>
    <Teleport to="body">
        <div
            class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            @click.self="$emit('close')"
        >
            <div class="relative w-full max-w-3xl bg-gray-900 rounded-2xl overflow-hidden shadow-2xl shadow-black/60 modal-enter">

                <!-- Header -->
                <div class="flex items-center justify-between px-5 py-3.5 border-b border-gray-700/60">
                    <div>
                        <h3 class="text-white font-semibold text-base">{{ project.name }}</h3>
                        <p class="text-gray-500 text-xs mt-0.5">{{ current + 1 }} / {{ images.length }}</p>
                    </div>
                    <button
                        @click="$emit('close')"
                        class="text-gray-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-gray-700"
                        aria-label="Close"
                    >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <!-- Carousel -->
                <div
                    class="relative overflow-hidden select-none"
                    @touchstart.passive="onTouchStart"
                    @touchend.passive="onTouchEnd"
                >
                    <div
                        class="flex transition-transform duration-300 ease-out"
                        :style="{ transform: `translateX(-${current * 100}%)` }"
                    >
                        <img
                            v-for="(img, i) in images"
                            :key="i"
                            :src="img"
                            :alt="`${project.name} screenshot ${i + 1}`"
                            class="w-full flex-shrink-0 object-cover max-h-[480px]"
                        />
                    </div>

                    <button
                        v-if="images.length > 1"
                        @click="prev"
                        class="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-all hover:scale-110"
                        aria-label="Previous"
                    >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        v-if="images.length > 1"
                        @click="next"
                        class="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-all hover:scale-110"
                        aria-label="Next"
                    >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                <!-- Dots -->
                <div v-if="images.length > 1" class="flex justify-center items-center gap-2 py-3.5">
                    <button
                        v-for="(_, i) in images"
                        :key="i"
                        @click="current = i"
                        class="h-2 rounded-full transition-all duration-200"
                        :class="i === current ? 'bg-cyan-400 w-5' : 'bg-gray-600 w-2 hover:bg-gray-400'"
                        :aria-label="`Go to slide ${i + 1}`"
                    />
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
    project: { type: Object, required: true },
    initialIndex: { type: Number, default: 0 },
});

const emit = defineEmits(['close']);

const current = ref(props.initialIndex);
const images = computed(() => [props.project.src1, props.project.src2, props.project.src3].filter(Boolean));

const prev = () => { current.value = (current.value - 1 + images.value.length) % images.value.length; };
const next = () => { current.value = (current.value + 1) % images.value.length; };

let touchStartX = 0;
const onTouchStart = (e) => { touchStartX = e.touches[0].clientX; };
const onTouchEnd = (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 50) next();
    else if (diff < -50) prev();
};

const onKeyDown = (e) => {
    if (e.key === 'Escape') emit('close');
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
};

onMounted(() => {
    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
});

onBeforeUnmount(() => {
    window.removeEventListener('keydown', onKeyDown);
    document.body.style.overflow = '';
});
</script>

<style scoped>
.modal-enter {
    animation: modalIn 180ms ease-out both;
}
@keyframes modalIn {
    from { opacity: 0; transform: scale(0.96) translateY(8px); }
    to   { opacity: 1; transform: scale(1) translateY(0); }
}
</style>
