<template>
    <section
        id="projects"
        class="mx-auto max-w-6xl px-6 py-20 sm:py-24"
    >

        <!-- Section heading -->
        <div class="mb-10 sm:mb-12">

            <p class="mb-3 font-medium text-purple-400">
                Projects
            </p>

            <h2 class="text-3xl font-bold text-white sm:text-4xl">
                Things I've
                <span class="text-purple-400">built.</span>
            </h2>

            <p class="mt-4 max-w-2xl leading-relaxed text-gray-400">
                A selection of academic and personal projects.
            </p>

        </div>

        <!-- Projects -->
        <div class="space-y-8 sm:space-y-10">

            <!-- CoreSchedule -->
            <article
                class="group overflow-hidden rounded-3xl border border-white/10
                       bg-white/5 transition hover:border-purple-400/30"
            >
                <div class="grid lg:grid-cols-2">

                    <!-- Project image -->
                    <div
                        class="overflow-hidden bg-black
                               lg:min-h-full"
                    >
                        <img
                            src="/projects/coreschedule/icon.png"
                            alt="CoreSchedule dashboard"
                            class="h-auto min-h-[220px] w-full object-cover
                                   object-top transition duration-500
                                   group-hover:scale-[1.02]
                                   sm:min-h-[280px] lg:h-full lg:min-h-[320px]"
                        />
                    </div>

                    <!-- Project information -->
                    <div class="p-6 sm:p-8 lg:p-10">

                        <p
                            class="mb-3 text-sm font-medium text-purple-400"
                        >
                            FEATURED PROJECT
                        </p>

                        <h3 class="text-2xl font-bold text-white">
                            Core<span class="text-emerald-600">Schedule</span>
                        </h3>

                        <p class="mt-1 text-gray-500">
                            AI-Assisted Conference Scheduling
                        </p>

                        <p class="mt-5 leading-relaxed text-gray-400 sm:mt-6">
                            A university team project focused on automating
                            conference scheduling while handling complex
                            constraints and schedule optimization.
                        </p>

                        <!-- Technologies -->
                        <div class="mt-5 flex flex-wrap gap-2 sm:mt-6">

                            <span
                                class="rounded-full border border-white/10
                                       bg-black/20 px-3 py-1 text-xs
                                       text-gray-300"
                            >
                                Laravel
                            </span>

                            <span
                                class="rounded-full border border-white/10
                                       bg-black/20 px-3 py-1 text-xs
                                       text-gray-300"
                            >
                                Vue.js
                            </span>

                            <span
                                class="rounded-full border border-white/10
                                       bg-black/20 px-3 py-1 text-xs
                                       text-gray-300"
                            >
                                PHP
                            </span>

                            <span
                                class="rounded-full border border-white/10
                                       bg-black/20 px-3 py-1 text-xs
                                       text-gray-300"
                            >
                                AI
                            </span>

                            <span
                                class="rounded-full border border-white/10
                                       bg-black/20 px-3 py-1 text-xs
                                       text-gray-300"
                            >
                                SQL
                            </span>

                        </div>

                        <!-- Highlights -->
                        <ul
                            class="mt-5 space-y-2 text-sm text-gray-400
                                   sm:mt-6"
                        >
                            <li>→ AI-assisted schedule generation</li>
                            <li>→ Constraint-based scheduling</li>
                            <li>→ Schedule optimization</li>
                        </ul>

                        <!-- Link -->
                        <div class="mt-7 sm:mt-8">
                            <RouterLink
                                to="/projects/coreschedule"
                                class="text-sm font-medium text-white
                                       transition hover:text-purple-400"
                            >
                                View project →
                            </RouterLink>
                        </div>

                    </div>
                </div>
            </article>

            <!-- Finance Tracker -->
            <article
                class="group overflow-hidden rounded-3xl border border-white/10
                       bg-white/5 transition hover:border-purple-400/30"
            >
                <div class="grid lg:grid-cols-2">

                    <!-- Project image -->
                    <div
                        class="overflow-hidden bg-black
                               lg:min-h-full"
                    >
                        <img
                            src="/projects/finance/icon.png"
                            alt="Finance Tracker dashboard"
                            class="h-auto min-h-[220px] w-full object-cover
                                   object-top transition duration-500
                                   group-hover:scale-[1.02]
                                   sm:min-h-[280px] lg:h-full lg:min-h-[320px]"
                        />
                    </div>

                    <!-- Project information -->
                    <div class="p-6 sm:p-8 lg:p-10">

                        <p
                            class="mb-3 text-sm font-medium text-purple-400"
                        >
                            PERSONAL PROJECT
                        </p>

                        <h3 class="text-2xl font-bold text-white">
                            Finance & Grocery Tracker
                        </h3>

                        <p class="mt-5 leading-relaxed text-gray-400 sm:mt-6">
                            A personal application for managing expenses,
                            analysing spending and tracking grocery prices.
                        </p>

                        <!-- Technologies -->
                        <div class="mt-5 flex flex-wrap gap-2 sm:mt-6">

                            <span
                                class="rounded-full border border-white/10
                                       bg-black/20 px-3 py-1 text-xs
                                       text-gray-300"
                            >
                                Vue.js
                            </span>

                            <span
                                class="rounded-full border border-white/10
                                       bg-black/20 px-3 py-1 text-xs
                                       text-gray-300"
                            >
                                JavaScript
                            </span>

                            <span
                                class="rounded-full border border-white/10
                                       bg-black/20 px-3 py-1 text-xs
                                       text-gray-300"
                            >
                                SQL
                            </span>

                            <span
                                class="rounded-full border border-white/10
                                       bg-black/20 px-3 py-1 text-xs
                                       text-gray-300"
                            >
                                REST API
                            </span>

                        </div>

                        <!-- Highlights -->
                        <ul
                            class="mt-5 space-y-2 text-sm text-gray-400
                                   sm:mt-6"
                        >
                            <li>→ Expense tracking</li>
                            <li>→ Spending statistics</li>
                            <li>→ Grocery price comparison</li>
                        </ul>

                        <!-- Link -->
                        <div class="mt-7 sm:mt-8">
                            <RouterLink
                                to="/projects/finance"
                                class="text-sm font-medium text-white
                                       transition hover:text-purple-400"
                            >
                                View project →
                            </RouterLink>
                        </div>

                    </div>
                </div>
            </article>

        </div>
    </section>
</template>