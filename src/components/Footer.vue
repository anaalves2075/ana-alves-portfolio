<template>
    <footer class="border-t border-white/10">

        <div
            class="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-8
                   sm:flex-row sm:items-center sm:justify-between sm:gap-4"
        >

            <!-- Name -->
            <RouterLink
                to="/"
                class="text-sm font-semibold text-white"
            >
                Ana <span class="text-purple-400">Alves</span>
            </RouterLink>

            <!-- Copyright -->
            <p class="text-sm text-gray-500">
                © {{ new Date().getFullYear() }} Ana Alves
            </p>

            <!-- Links -->
            <div class="flex flex-wrap items-center gap-4 sm:gap-5">

                <a
                    href="mailto:afilipa.ja@gmail.com"
                    class="text-sm text-gray-500 transition hover:text-white"
                >
                    Email
                </a>

                <a
                    href="https://www.linkedin.com/in/anafilipaalves"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-sm text-gray-500 transition hover:text-white"
                >
                    LinkedIn
                </a>

                <a
                    href="https://github.com/anaalves2075"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-sm text-gray-500 transition hover:text-white"
                >
                    GitHub
                </a>

            </div>

        </div>

    </footer>
</template>