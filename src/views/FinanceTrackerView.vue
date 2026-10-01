<template>
  <main class="min-h-screen bg-[#0B0B12] text-white">

    <!-- Navigation -->
    <header class="mx-auto max-w-6xl px-6 pt-8">
      <RouterLink
        to="/"
        class="text-sm text-gray-500 transition hover:text-white"
      >
        ← Back to home
      </RouterLink>
    </header>

    <!-- Hero -->
    <section class="mx-auto max-w-6xl px-6 pb-20 pt-24">
      <p class="mb-5 text-sm font-medium tracking-wide text-purple-400">
        PERSONAL PROJECT
      </p>

      <h1 class="text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl">
        Finance Tracker
      </h1>

      <p
        class="mt-5 max-w-3xl text-lg leading-relaxed text-gray-400
               sm:text-xl md:text-2xl"
      >
        Personal Finance & Grocery Management Application
      </p>

      <p class="mt-5 max-w-2xl leading-relaxed text-gray-500">
        A web application designed to help users manage personal
        expenses, analyse spending habits and keep track of grocery
        prices over time.
      </p>

      <div class="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500">
        <span>Vue.js</span>
        <span>JavaScript</span>
        <span>SQL</span>
        <span>REST API</span>
        <span>Tailwind CSS</span>
      </div>
    </section>

    <!-- Main Screenshot -->
    <section class="mx-auto max-w-6xl px-6 pb-20 md:pb-32">
      <div class="overflow-hidden border border-white/10 bg-[#12121A]">
        <img
          src="/projects/finance/dashboard.png"
          alt="Finance Tracker application interface"
          class="h-auto w-full"
        />
      </div>

      <p class="mt-4 text-xs text-gray-600">
        Finance Tracker application
      </p>
    </section>

    <!-- 01 — About -->
    <section class="mx-auto max-w-6xl px-6 pb-20 md:pb-32">
      <div
        class="grid grid-cols-1 gap-8 md:grid-cols-[220px_1fr] md:gap-16"
      >
        <div>
          <span class="text-sm font-medium text-purple-400">
            01
          </span>

          <h2 class="mt-2 text-2xl font-semibold">
            About
          </h2>
        </div>

        <div class="max-w-3xl leading-relaxed text-gray-400">
          <p class="text-lg text-gray-300">
            Finance Tracker is a web application focused on personal
            finance management and grocery expense tracking.
          </p>

          <p class="mt-5">
            The project was created to provide a practical way of
            recording expenses, understanding spending patterns and
            keeping useful information about grocery purchases.
          </p>

          <p class="mt-5">
            Instead of treating financial data as isolated expenses,
            the application organizes it into a structured system that
            can be used to analyse spending and support better
            financial decisions.
          </p>
        </div>
      </div>
    </section>

    <!-- 02 — Main Features -->
    <section class="mx-auto max-w-6xl px-6 pb-20 md:pb-32">
      <div
        class="grid grid-cols-1 gap-8 border-t border-white/10 pt-12
               md:grid-cols-[220px_1fr] md:gap-16 md:pt-16"
      >
        <div>
          <span class="text-sm font-medium text-purple-400">
            02
          </span>

          <h2 class="mt-2 text-2xl font-semibold">
            Main Features
          </h2>
        </div>

        <div class="max-w-3xl leading-relaxed text-gray-400">
          <div class="divide-y divide-white/10">

            <div class="py-6 first:pt-0">
              <h3 class="font-medium text-white">
                Expense tracking
              </h3>

              <p class="mt-2 text-sm text-gray-500">
                Allows users to record and manage their daily
                expenses in an organized way.
              </p>
            </div>

            <div class="py-6">
              <h3 class="font-medium text-white">
                Spending analysis
              </h3>

              <p class="mt-2 text-sm text-gray-500">
                Organizes financial information to make spending
                patterns easier to understand.
              </p>
            </div>

            <div class="py-6">
              <h3 class="font-medium text-white">
                Grocery management
              </h3>

              <p class="mt-2 text-sm text-gray-500">
                Keeps track of grocery purchases and their associated
                prices.
              </p>
            </div>

            <div class="py-6">
              <h3 class="font-medium text-white">
                Price comparison
              </h3>

              <p class="mt-2 text-sm text-gray-500">
                Makes it possible to compare grocery prices and
                identify changes over time.
              </p>
            </div>

            <div class="py-6">
              <h3 class="font-medium text-white">
                Purchase history
              </h3>

              <p class="mt-2 text-sm text-gray-500">
                Maintains historical purchase information that can
                be consulted later.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- 03 — How It Works -->
    <section class="mx-auto max-w-6xl px-6 pb-20 md:pb-32">
      <div
        class="grid grid-cols-1 gap-8 border-t border-white/10 pt-12
               md:grid-cols-[220px_1fr] md:gap-16 md:pt-16"
      >
        <div>
          <span class="text-sm font-medium text-purple-400">
            03
          </span>

          <h2 class="mt-2 text-2xl font-semibold">
            How It Works
          </h2>
        </div>

        <div class="max-w-3xl leading-relaxed text-gray-400">
          <p class="text-lg text-gray-300">
            The application follows a simple workflow for managing
            expenses and grocery purchases.
          </p>

          <div class="mt-10">

            <div class="flex gap-4 border-t border-white/10 py-6 sm:gap-6">
              <span class="shrink-0 text-xs text-gray-600">
                01
              </span>

              <div>
                <h3 class="font-medium text-white">
                  Record expenses
                </h3>

                <p class="mt-2 text-sm text-gray-500">
                  Expenses and purchases are added to the application
                  with the relevant information.
                </p>
              </div>
            </div>

            <div class="flex gap-4 border-t border-white/10 py-6 sm:gap-6">
              <span class="shrink-0 text-xs text-gray-600">
                02
              </span>

              <div>
                <h3 class="font-medium text-white">
                  Organize data
                </h3>

                <p class="mt-2 text-sm text-gray-500">
                  Financial and grocery information is stored and
                  organized through the application's data model.
                </p>
              </div>
            </div>

            <div class="flex gap-4 border-t border-white/10 py-6 sm:gap-6">
              <span class="shrink-0 text-xs text-gray-600">
                03
              </span>

              <div>
                <h3 class="font-medium text-white">
                  Analyse spending
                </h3>

                <p class="mt-2 text-sm text-gray-500">
                  Recorded information can be used to understand
                  spending patterns and expenses.
                </p>
              </div>
            </div>

            <div class="flex gap-4 border-t border-white/10 py-6 sm:gap-6">
              <span class="shrink-0 text-xs text-gray-600">
                04
              </span>

              <div>
                <h3 class="font-medium text-white">
                  Compare prices
                </h3>

                <p class="mt-2 text-sm text-gray-500">
                  Grocery prices can be consulted and compared using
                  previously recorded purchase information.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- 04 — Data & Structure -->
    <section class="mx-auto max-w-6xl px-6 pb-20 md:pb-32">
      <div
        class="grid grid-cols-1 gap-8 border-t border-white/10 pt-12
               md:grid-cols-[220px_1fr] md:gap-16 md:pt-16"
      >
        <div>
          <span class="text-sm font-medium text-purple-400">
            04
          </span>

          <h2 class="mt-2 text-2xl font-semibold">
            Data & Structure
          </h2>
        </div>

        <div class="max-w-3xl leading-relaxed text-gray-400">
          <p class="text-lg text-gray-300">
            A structured data model connects financial movements,
            purchases and grocery information.
          </p>

          <p class="mt-5">
            This allows the application to maintain relationships
            between individual expenses and the corresponding
            purchase information.
          </p>

          <div class="mt-10">

            <div
              class="grid grid-cols-[24px_1fr] gap-3 border-t border-white/10
                     py-5 sm:grid-cols-[30px_130px_1fr] sm:items-center
                     sm:gap-4"
            >
              <span class="text-xs text-gray-600">
                01
              </span>

              <strong class="font-medium text-white">
                Expenses
              </strong>

              <p class="col-start-2 text-sm text-gray-500 sm:col-start-auto">
                Records financial movements and spending
              </p>
            </div>

            <div
              class="grid grid-cols-[24px_1fr] gap-3 border-t border-white/10
                     py-5 sm:grid-cols-[30px_130px_1fr] sm:items-center
                     sm:gap-4"
            >
              <span class="text-xs text-gray-600">
                02
              </span>

              <strong class="font-medium text-white">
                Purchases
              </strong>

              <p class="col-start-2 text-sm text-gray-500 sm:col-start-auto">
                Stores information about individual purchases
              </p>
            </div>

            <div
              class="grid grid-cols-[24px_1fr] gap-3 border-t border-white/10
                     py-5 sm:grid-cols-[30px_130px_1fr] sm:items-center
                     sm:gap-4"
            >
              <span class="text-xs text-gray-600">
                03
              </span>

              <strong class="font-medium text-white">
                Products
              </strong>

              <p class="col-start-2 text-sm text-gray-500 sm:col-start-auto">
                Organizes grocery products and their information
              </p>
            </div>

            <div
              class="grid grid-cols-[24px_1fr] gap-3 border-t border-white/10
                     py-5 sm:grid-cols-[30px_130px_1fr] sm:items-center
                     sm:gap-4"
            >
              <span class="text-xs text-gray-600">
                04
              </span>

              <strong class="font-medium text-white">
                Stores
              </strong>

              <p class="col-start-2 text-sm text-gray-500 sm:col-start-auto">
                Associates purchases with their respective stores
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- 05 — Architecture -->
    <section class="mx-auto max-w-6xl px-6 pb-20 md:pb-32">
      <div
        class="grid grid-cols-1 gap-8 border-t border-white/10 pt-12
               md:grid-cols-[220px_1fr] md:gap-16 md:pt-16"
      >
        <div>
          <span class="text-sm font-medium text-purple-400">
            05
          </span>

          <h2 class="mt-2 text-2xl font-semibold">
            Architecture
          </h2>
        </div>

        <div class="max-w-3xl leading-relaxed text-gray-400">
          <p class="text-lg text-gray-300">
            The application uses a frontend connected to a backend
            API responsible for handling application data and logic.
          </p>

          <div class="mt-10">

            <div
              class="grid grid-cols-[24px_1fr] gap-3 border-t border-white/10
                     py-5 sm:grid-cols-[30px_130px_1fr] sm:items-center
                     sm:gap-4"
            >
              <span class="text-xs text-gray-600">
                01
              </span>

              <strong class="font-medium text-white">
                Vue.js
              </strong>

              <p class="col-start-2 text-sm text-gray-500 sm:col-start-auto">
                Frontend and user interaction
              </p>
            </div>

            <div
              class="grid grid-cols-[24px_1fr] gap-3 border-t border-white/10
                     py-5 sm:grid-cols-[30px_130px_1fr] sm:items-center
                     sm:gap-4"
            >
              <span class="text-xs text-gray-600">
                02
              </span>

              <strong class="font-medium text-white">
                JavaScript
              </strong>

              <p class="col-start-2 text-sm text-gray-500 sm:col-start-auto">
                Application behaviour and data handling
              </p>
            </div>

            <div
              class="grid grid-cols-[24px_1fr] gap-3 border-t border-white/10
                     py-5 sm:grid-cols-[30px_130px_1fr] sm:items-center
                     sm:gap-4"
            >
              <span class="text-xs text-gray-600">
                03
              </span>

              <strong class="font-medium text-white">
                REST API
              </strong>

              <p class="col-start-2 text-sm text-gray-500 sm:col-start-auto">
                Communication between frontend and backend
              </p>
            </div>

            <div
              class="grid grid-cols-[24px_1fr] gap-3 border-t border-white/10
                     py-5 sm:grid-cols-[30px_130px_1fr] sm:items-center
                     sm:gap-4"
            >
              <span class="text-xs text-gray-600">
                04
              </span>

              <strong class="font-medium text-white">
                SQL
              </strong>

              <p class="col-start-2 text-sm text-gray-500 sm:col-start-auto">
                Persistent application data
              </p>
            </div>

          </div>

          <!-- Application Flow -->
          <div class="mt-10 sm:mt-12">
            <p class="mb-4 text-xs uppercase tracking-wider text-gray-600">
              Application flow
            </p>

            <div class="flex flex-wrap items-center gap-2 text-sm sm:gap-3">

              <span
                class="border border-white/10 px-3 py-2 text-xs text-gray-400
                       sm:px-4 sm:text-sm"
              >
                Vue.js
              </span>

              <b class="font-normal text-gray-600">
                →
              </b>

              <span
                class="border border-white/10 px-3 py-2 text-xs text-gray-400
                       sm:px-4 sm:text-sm"
              >
                REST API
              </span>

              <b class="font-normal text-gray-600">
                →
              </b>

              <span
                class="border border-white/10 px-3 py-2 text-xs text-gray-400
                       sm:px-4 sm:text-sm"
              >
                Database
              </span>

            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 06 — Challenges -->
    <section class="mx-auto max-w-6xl px-6 pb-20 md:pb-32">
      <div
        class="grid grid-cols-1 gap-8 border-t border-white/10 pt-12
               md:grid-cols-[220px_1fr] md:gap-16 md:pt-16"
      >
        <div>
          <span class="text-sm font-medium text-purple-400">
            06
          </span>

          <h2 class="mt-2 text-2xl font-semibold">
            Challenges
          </h2>
        </div>

        <div class="max-w-3xl leading-relaxed text-gray-400">
          <div class="divide-y divide-white/10">

            <div class="py-7 first:pt-0">
              <h3 class="font-medium text-white">
                Designing a useful data model
              </h3>

              <p class="mt-2 text-sm text-gray-500">
                Structuring relationships between expenses, purchases,
                products and stores while keeping the application
                flexible for future features.
              </p>
            </div>

            <div class="py-7">
              <h3 class="font-medium text-white">
                Managing related data
              </h3>

              <p class="mt-2 text-sm text-gray-500">
                Handling relationships between different types of
                financial and grocery information in the application.
              </p>
            </div>

            <div class="py-7">
              <h3 class="font-medium text-white">
                Building a practical interface
              </h3>

              <p class="mt-2 text-sm text-gray-500">
                Presenting financial information in a way that keeps
                the application simple to use while still providing
                useful information.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- 07 — Screenshots -->
    <section class="mx-auto max-w-6xl px-6 pb-20 md:pb-32">
      <div
        class="grid grid-cols-1 gap-8 border-t border-white/10 pt-12
               md:grid-cols-[220px_1fr] md:gap-16 md:pt-16"
      >
        <div>
          <span class="text-sm font-medium text-purple-400">
            07
          </span>

          <h2 class="mt-2 text-2xl font-semibold">
            Screenshots
          </h2>
        </div>

        <div class="max-w-3xl leading-relaxed text-gray-400">
          <p class="text-lg text-gray-300">
            A selection of interfaces from the application.
          </p>

          <div class="mt-8 space-y-8 sm:mt-10">

            <div>
              <div class="overflow-hidden border border-white/10 bg-[#12121A]">
                <img
                  src="/projects/finance/expenses.png"
                  alt="Finance Tracker expenses interface"
                  class="h-auto w-full"
                />
              </div>

              <p class="mt-3 text-xs text-gray-600">
                Expense management
              </p>
            </div>

            <div>
              <div class="overflow-hidden border border-white/10 bg-[#12121A]">
                <img
                  src="/projects/finance/groceries.png"
                  alt="Finance Tracker grocery interface"
                  class="h-auto w-full"
                />
              </div>

              <p class="mt-3 text-xs text-gray-600">
                Grocery management
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- 08 — Tech Stack -->
    <section class="mx-auto max-w-6xl px-6 pb-20 md:pb-32">
      <div
        class="grid grid-cols-1 gap-8 border-t border-white/10 pt-12
               md:grid-cols-[220px_1fr] md:gap-16 md:pt-16"
      >
        <div>
          <span class="text-sm font-medium text-purple-400">
            08
          </span>

          <h2 class="mt-2 text-2xl font-semibold">
            Tech Stack
          </h2>
        </div>

        <div class="max-w-3xl">
          <p class="text-lg leading-relaxed text-gray-300 sm:text-xl md:text-2xl">
            Vue.js · JavaScript · Laravel · Tailwind CSS ·
            REST API · SQL
          </p>
        </div>
      </div>
    </section>

    <!-- Project Status -->
    <section class="mx-auto max-w-6xl px-6 pb-20 md:pb-32">
      <div class="border-t border-white/10 pt-12">
        <p class="text-xs uppercase tracking-wider text-gray-600">
          Project status
        </p>

        <p class="mt-3 text-gray-400">
          Personal project
        </p>

        <p class="mt-2 text-sm text-gray-600">
          Built to explore personal finance management,
          data organization and web application development.
        </p>
      </div>
    </section>

  </main>
</template>