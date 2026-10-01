<template>
    <nav class="relative flex items-center justify-between">

        <!-- Logo -->
        <RouterLink
            to="/"
            class="text-xl font-bold text-white"
        >
            Ana <span class="text-purple-400">Alves</span>
        </RouterLink>

        <!-- Desktop navigation -->
        <div class="hidden items-center gap-8 md:flex">
            <RouterLink
                to="/#about"
                class="text-sm text-gray-500 transition hover:text-white"
            >
                About
            </RouterLink>

            <RouterLink
                to="/#skills"
                class="text-sm text-gray-500 transition hover:text-white"
            >
                Skills
            </RouterLink>

            <RouterLink
                to="/#projects"
                class="text-sm text-gray-500 transition hover:text-white"
            >
                Projects
            </RouterLink>

            <RouterLink
                to="/#contact"
                class="text-sm text-gray-500 transition hover:text-white"
            >
                Contact
            </RouterLink>
        </div>

        <!-- Mobile menu button -->
        <button
            type="button"
            class="flex h-10 w-10 items-center justify-center
                   rounded-lg border border-white/10
                   text-gray-300 transition
                   hover:border-white/20 hover:text-white
                   md:hidden"
            aria-label="Toggle navigation menu"
            :aria-expanded="menuOpen"
            aria-controls="mobile-navigation"
            @click="menuOpen = !menuOpen"
        >
            <span class="text-xl">
                {{ menuOpen ? '✕' : '☰' }}
            </span>
        </button>

        <!-- Mobile navigation -->
        <div
            v-if="menuOpen"
            id="mobile-navigation"
            class="absolute left-0 right-0 top-14 z-50
                   rounded-2xl border border-white/10
                   bg-[#0B0B12]/95 p-4 shadow-xl
                   backdrop-blur-md md:hidden"
        >
            <div class="flex flex-col">

                <RouterLink
                    to="/#about"
                    class="rounded-lg px-4 py-3 text-sm text-gray-300
                           transition hover:bg-white/5 hover:text-white"
                    @click="menuOpen = false"
                >
                    About
                </RouterLink>

                <RouterLink
                    to="/#skills"
                    class="rounded-lg px-4 py-3 text-sm text-gray-300
                           transition hover:bg-white/5 hover:text-white"
                    @click="menuOpen = false"
                >
                    Skills
                </RouterLink>

                <RouterLink
                    to="/#projects"
                    class="rounded-lg px-4 py-3 text-sm text-gray-300
                           transition hover:bg-white/5 hover:text-white"
                    @click="menuOpen = false"
                >
                    Projects
                </RouterLink>

                <RouterLink
                    to="/#contact"
                    class="rounded-lg px-4 py-3 text-sm text-gray-300
                           transition hover:bg-white/5 hover:text-white"
                    @click="menuOpen = false"
                >
                    Contact
                </RouterLink>

            </div>
        </div>

    </nav>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
</script>