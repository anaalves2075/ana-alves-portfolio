<template>
    <main class="min-h-screen bg-[#0B0B12] text-white">

        <!-- Header -->
        <header
            class="sticky top-0 z-50 mx-auto max-w-6xl px-6 pt-6
                   backdrop-blur-md sm:pt-8"
        >
            <Navbar />
        </header>

        <!-- Hero Section -->
        <section
            class="mx-auto flex min-h-[85vh] max-w-6xl items-center px-6"
        >
            <div
                class="grid w-full items-center gap-12 py-16
                       sm:py-20 lg:grid-cols-[1fr_320px]"
            >

                <!-- Hero content -->
                <div class="max-w-3xl">

                    <!-- Availability -->
                    <div
                        class="mb-7 inline-flex max-w-full items-center gap-2
                               rounded-full border border-white/10 bg-white/5
                               px-4 py-2"
                    >
                        <span
                            class="h-2 w-2 shrink-0 rounded-full bg-green-400"
                        ></span>

                        <span class="text-sm leading-relaxed text-gray-300">
                            Open to Junior & Graduate Opportunities
                        </span>
                    </div>

                    <!-- Introduction -->
                    <p class="mb-4 font-medium text-purple-400">
                        Hello, I'm Ana Alves
                    </p>

                    <!-- Title -->
                    <h1
                        class="text-4xl font-bold leading-tight tracking-tight
                               sm:text-5xl md:text-7xl"
                    >
                        Computer Engineering Graduate
                        <span class="text-purple-400">
                            & Software Developer.
                        </span>
                    </h1>

                    <!-- Description -->
                    <p
                        class="mt-6 max-w-2xl text-base leading-relaxed
                               text-gray-400 sm:mt-8 sm:text-lg"
                    >
                        Interested in software development, web technologies
                        and building practical applications.
                    </p>

                    <!-- Technologies -->
                    <div class="mt-7 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
                        <span class="tech-badge">Java</span>
                        <span class="tech-badge">JavaScript</span>
                        <span class="tech-badge">Vue.js</span>
                        <span class="tech-badge">Laravel</span>
                        <span class="tech-badge">SQL</span>
                    </div>

                    <!-- Buttons -->
                    <div class="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
                        <a
                            href="#projects"
                            class="rounded-full bg-purple-500 px-7 py-3 text-center
                                   font-medium transition hover:bg-purple-600"
                        >
                            View my projects
                        </a>

                        <a
                            href="#contact"
                            class="rounded-full border border-white/20 px-7 py-3
                                   text-center font-medium text-gray-300
                                   transition hover:border-white/50
                                   hover:text-white"
                        >
                            Contact me
                        </a>
                        <a
                            href="/CurriculumVitae_AnaAlves.pdf"
                            download
                            class="rounded-full border border-purple-400/40 px-7 py-3
                                text-center font-medium text-purple-300
                                transition hover:border-purple-400
                                hover:bg-purple-400/10 hover:text-white"
                        >
                            Download CV
                        </a>
                    </div>
                </div>

                <!-- Profile image -->
                <div class="flex justify-center lg:justify-end">

                    <div class="relative">

                        <!-- Purple glow -->
                        <div
                            class="absolute -inset-4 -z-10 rounded-3xl
                                   bg-purple-500/10 blur-2xl"
                        ></div>

                        <!-- Image -->
                        <div
                            class="overflow-hidden rounded-3xl border
                                   border-white/10 bg-white/5"
                        >
                            <img
                                src="/profile.jpeg"
                                alt="Ana Alves"
                                class="h-[320px] w-[240px] object-cover
                                       object-center sm:h-[360px] sm:w-[280px]"
                            />
                        </div>

                    </div>
                </div>

            </div>
        </section>

        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSession />
        <Footer />

    </main>
</template>

<script setup>
import Navbar from '../components/Nav-bar.vue'
import AboutSection from '../components/AboutSection.vue'
import SkillsSection from '../components/SkillsSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import ContactSession from '../components/ContactSession.vue'
import Footer from '../components/Footer.vue'
</script>