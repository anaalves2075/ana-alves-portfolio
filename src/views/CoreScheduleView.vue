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
        FEATURED PROJECT
      </p>

      <h1 class="text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl">
        Core<span class="text-emerald-600">Schedule</span>
      </h1>

      <p class="mt-5 max-w-3xl text-lg leading-relaxed text-gray-400 sm:text-xl md:text-2xl">
        AI-Assisted Conference Scheduling Platform
      </p>

      <p class="mt-5 max-w-2xl leading-relaxed text-gray-500">
        A web platform developed to assist with the creation and
        optimization of conference schedules under multiple constraints.
      </p>

      <div class="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500">
        <span>Laravel</span>
        <span>Vue.js</span>
        <span>JavaScript</span>
        <span>SQL</span>
        <span>Gemini AI</span>
        <span>Docker</span>
      </div>

    </section>

    <!-- Main Screenshot -->
    <section class="mx-auto max-w-6xl px-6 pb-32">

      <div class="overflow-hidden border border-white/10 bg-[#12121A]">
        <img
          src="/projects/coreschedule/dashboard.png"
          alt="CoreSchedule application interface"
          class="h-auto w-full"
        />
      </div>

      <p class="mt-4 text-xs text-gray-600">
        CoreSchedule application
      </p>

    </section>

    <!-- 01 — About -->
    <section class="mx-auto max-w-6xl px-6 pb-32">
      <div
        class="grid grid-cols-1 gap-10 md:grid-cols-[220px_1fr] md:gap-16"
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
            CoreSchedule is a web platform focused on conference
            scheduling and schedule optimization.
          </p>

          <p class="mt-5">
            The project was developed as part of my Computer Engineering
            degree, together with a colleague and under the guidance
            of our supervisors.
          </p>

          <p class="mt-5">
            Our goal was to explore how automated scheduling techniques
            and artificial intelligence could assist organizers in
            creating valid and better-organized conference schedules.
          </p>

          <p class="mt-5">
            The platform combines manual scheduling with automated
            approaches, allowing users to manage event information,
            create schedules and optimize them according to different
            requirements.
          </p>

        </div>
      </div>
    </section>

    <!-- 02 — My Contribution -->
    <section class="mx-auto max-w-6xl px-6 pb-32">
      <div
        class="grid grid-cols-1 gap-10 border-t border-white/10 pt-16 md:grid-cols-[220px_1fr] md:gap-16"
      >

        <div>
          <span class="text-sm font-medium text-purple-400">
            02
          </span>

          <h2 class="mt-2 text-2xl font-semibold">
            My Contribution
          </h2>
        </div>

        <div class="max-w-3xl leading-relaxed text-gray-400">

          <p class="text-lg text-gray-300">
            CoreSchedule was a collaborative project. I worked closely
            with my colleague, with our supervisors providing guidance,
            feedback and direction throughout the development process.
          </p>

          <p class="mt-5">
            My contribution covered both frontend and backend
            development, as well as the scheduling and AI-assisted
            components of the application.
          </p>

          <div class="mt-10 border-t border-white/10">

            <div
              class="flex items-center gap-6 border-b border-white/10 py-4"
            >
              <span class="text-xs text-gray-600">
                01
              </span>

              <p class="text-gray-300">
                Vue.js frontend development
              </p>
            </div>

            <div
              class="flex items-center gap-6 border-b border-white/10 py-4"
            >
              <span class="text-xs text-gray-600">
                02
              </span>

              <p class="text-gray-300">
                Laravel backend and REST API development
              </p>
            </div>

            <div
              class="flex items-center gap-6 border-b border-white/10 py-4"
            >
              <span class="text-xs text-gray-600">
                03
              </span>

              <p class="text-gray-300">
                Scheduling and constraint-related functionality
              </p>
            </div>

            <div
              class="flex items-center gap-6 border-b border-white/10 py-4"
            >
              <span class="text-xs text-gray-600">
                04
              </span>

              <p class="text-gray-300">
                AI integration and prompt development
              </p>
            </div>

            <div
              class="flex items-center gap-6 border-b border-white/10 py-4"
            >
              <span class="text-xs text-gray-600">
                05
              </span>

              <p class="text-gray-300">
                Testing and evaluation of different AI models
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- 03 — How It Works -->
    <section class="mx-auto max-w-6xl px-6 pb-32">
      <div
        class="grid grid-cols-1 gap-10 border-t border-white/10 pt-16 md:grid-cols-[220px_1fr] md:gap-16"
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
            The platform supports both manual and automated
            schedule creation.
          </p>

          <div class="mt-10">

            <div
              class="flex gap-6 border-t border-white/10 py-6"
            >
              <span class="text-xs text-gray-600">
                01
              </span>

              <div>
                <h3 class="font-medium text-white">
                  Define the event
                </h3>

                <p class="mt-2 text-sm text-gray-500">
                  Event information, presentations, spaces,
                  speakers and scheduling requirements are defined.
                </p>
              </div>
            </div>

            <div
              class="flex gap-6 border-t border-white/10 py-6"
            >
              <span class="text-xs text-gray-600">
                02
              </span>

              <div>
                <h3 class="font-medium text-white">
                  Create a schedule
                </h3>

                <p class="mt-2 text-sm text-gray-500">
                  Users can create and edit schedules manually
                  or request an automatically generated schedule.
                </p>
              </div>
            </div>

            <div
              class="flex gap-6 border-t border-white/10 py-6"
            >
              <span class="text-xs text-gray-600">
                03
              </span>

              <div>
                <h3 class="font-medium text-white">
                  Validate constraints
                </h3>

                <p class="mt-2 text-sm text-gray-500">
                  The schedule is evaluated against the requirements
                  defined for the event.
                </p>
              </div>
            </div>

            <div
              class="flex gap-6 border-t border-white/10 py-6"
            >
              <span class="text-xs text-gray-600">
                04
              </span>

              <div>
                <h3 class="font-medium text-white">
                  Optimize
                </h3>

                <p class="mt-2 text-sm text-gray-500">
                  Existing schedules can be optimized to improve
                  their organization while maintaining constraints.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- 04 — Features -->
    <section class="mx-auto max-w-6xl px-6 pb-32">
      <div
        class="grid grid-cols-1 gap-10 border-t border-white/10 pt-16 md:grid-cols-[220px_1fr] md:gap-16"
      >

        <div>
          <span class="text-sm font-medium text-purple-400">
            04
          </span>

          <h2 class="mt-2 text-2xl font-semibold">
            Key Features
          </h2>
        </div>

        <div class="max-w-3xl leading-relaxed text-gray-400">

          <div class="divide-y divide-white/10">

            <div class="py-6 first:pt-0">
              <h3 class="font-medium text-white">
                AI-assisted schedule generation
              </h3>

              <p class="mt-2 text-sm text-gray-500">
                Generates schedules using AI while taking event
                information and scheduling constraints into account.
              </p>
            </div>

            <div class="py-6">
              <h3 class="font-medium text-white">
                Constraint-based scheduling
              </h3>

              <p class="mt-2 text-sm text-gray-500">
                Handles multiple constraints involving presentations,
                spaces, speakers and available time slots.
              </p>
            </div>

            <div class="py-6">
              <h3 class="font-medium text-white">
                Schedule optimization
              </h3>

              <p class="mt-2 text-sm text-gray-500">
                Allows existing schedules to be optimized while
                maintaining the required constraints.
              </p>
            </div>

            <div class="py-6">
              <h3 class="font-medium text-white">
                Manual schedule management
              </h3>

              <p class="mt-2 text-sm text-gray-500">
                Provides an interactive interface for creating and
                modifying schedules manually.
              </p>
            </div>

            <div class="py-6">
              <h3 class="font-medium text-white">
                Multiple scheduling modes
              </h3>

              <p class="mt-2 text-sm text-gray-500">
                Supports compact, balanced and spread scheduling
                strategies.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- 05 — AI & Scheduling -->
    <section class="mx-auto max-w-6xl px-6 pb-32">
      <div
        class="grid grid-cols-1 gap-10 border-t border-white/10 pt-16 md:grid-cols-[220px_1fr] md:gap-16"
      >

        <div>
          <span class="text-sm font-medium text-purple-400">
            05
          </span>

          <h2 class="mt-2 text-2xl font-semibold">
            AI & Scheduling
          </h2>
        </div>

        <div class="max-w-3xl leading-relaxed text-gray-400">

          <p class="text-lg text-gray-300">
            One of the main technical areas of the project was
            exploring AI as part of the scheduling process.
          </p>

          <p class="mt-5">
            We experimented with different approaches to automated
            scheduling, including algorithmic optimization and
            AI-assisted schedule generation.
          </p>

          <p class="mt-5">
            The AI receives structured information about the event
            and its requirements and is asked to produce a schedule
            following the defined constraints.
          </p>

          <p class="mt-5">
            During testing, some generated schedules could satisfy
            many constraints while still leaving presentations
            unscheduled. We therefore iterated on the context sent
            to the model and on the generation and optimization prompts.
          </p>

          <div
            class="mt-10 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/10 pt-6 text-sm text-gray-500"
          >
            <span>Gemini 3.1 Flash Lite</span>
            <span>Gemini 2.5 Flash</span>
            <span>Gemini 2.5 Flash Lite</span>
            <span>Llama 3.3 70B</span>
            <span>Llama 3.1 8B</span>
          </div>

        </div>
      </div>
    </section>

    <!-- 06 — Architecture -->
    <section class="mx-auto max-w-6xl px-6 pb-32">
      <div
        class="grid grid-cols-1 gap-10 border-t border-white/10 pt-16 md:grid-cols-[220px_1fr] md:gap-16"
      >

        <div>
          <span class="text-sm font-medium text-purple-400">
            06
          </span>

          <h2 class="mt-2 text-2xl font-semibold">
            Architecture
          </h2>
        </div>

        <div class="max-w-3xl leading-relaxed text-gray-400">

          <p class="text-lg text-gray-300">
            The application follows a client-server architecture
            with a Vue.js frontend and Laravel API.
          </p>

          <div class="mt-10">

            <div
              class="grid grid-cols-[24px_1fr] gap-3 border-t border-white/10 py-5 sm:grid-cols-[30px_130px_1fr] sm:items-center sm:gap-4"
            >
              <span class="text-xs text-gray-600">
                01
              </span>

              <strong class="font-medium text-white">
                Vue.js
              </strong>

              <p class="text-sm text-gray-500">
                Frontend, state management and user interaction
              </p>
            </div>

            <div
              class="grid grid-cols-[30px_130px_1fr] items-center gap-4 border-t border-white/10 py-5"
            >
              <span class="text-xs text-gray-600">
                02
              </span>

              <strong class="font-medium text-white">
                Laravel
              </strong>

              <p class="text-sm text-gray-500">
                REST API and application logic
              </p>
            </div>

            <div
              class="grid grid-cols-[30px_130px_1fr] items-center gap-4 border-t border-white/10 py-5"
            >
              <span class="text-xs text-gray-600">
                03
              </span>

              <strong class="font-medium text-white">
                Services
              </strong>

              <p class="text-sm text-gray-500">
                Scheduling logic and AI integration
              </p>
            </div>

            <div
              class="grid grid-cols-[30px_130px_1fr] items-center gap-4 border-t border-white/10 py-5"
            >
              <span class="text-xs text-gray-600">
                04
              </span>

              <strong class="font-medium text-white">
                SQL
              </strong>

              <p class="text-sm text-gray-500">
                Persistent application data
              </p>
            </div>

          </div>

          <!-- AI Flow -->
          <div class="mt-12">

            <p class="mb-4 text-xs uppercase tracking-wider text-gray-600">
              AI scheduling flow
            </p>

            <div class="flex flex-wrap items-center gap-2 text-sm sm:gap-3">

              <span
                class="border border-white/10 px-4 py-2 text-gray-400 sm:px-4 sm:text-sm"
              >
                Vue.js
              </span>

              <b class="font-normal text-gray-600">
                →
              </b>

              <span
                class="border border-white/10 px-4 py-2 text-gray-400 sm:px-4 sm:text-sm"
              >
                AIController
              </span>

              <b class="font-normal text-gray-600">
                →
              </b>

              <span
                class="border border-white/10 px-4 py-2 text-gray-400 sm:px-4 sm:text-sm"
              >
                GeminiAIService
              </span>

              <b class="font-normal text-gray-600">
                →
              </b>

              <span
                class="border border-white/10 px-4 py-2 text-gray-400 sm:px-4 sm:text-sm"
              >
                Gemini API
              </span>

            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 07 — Challenges -->
    <section class="mx-auto max-w-6xl px-6 pb-32">
      <div
        class="grid grid-cols-1 gap-10 border-t border-white/10 pt-16 md:grid-cols-[220px_1fr] md:gap-16"
      >

        <div>
          <span class="text-sm font-medium text-purple-400">
            07
          </span>

          <h2 class="mt-2 text-2xl font-semibold">
            Challenges
          </h2>
        </div>

        <div class="max-w-3xl leading-relaxed text-gray-400">

          <div class="divide-y divide-white/10">

            <div class="py-7 first:pt-0">
              <h3 class="font-medium text-white">
                Complex constraints
              </h3>

              <p class="mt-2 text-sm text-gray-500">
                Coordinating multiple scheduling requirements
                while maintaining valid schedules.
              </p>
            </div>

            <div class="py-7">
              <h3 class="font-medium text-white">
                AI reliability
              </h3>

              <p class="mt-2 text-sm text-gray-500">
                Improving generated schedules when some presentations
                were initially left unscheduled.
              </p>
            </div>

            <div class="py-7">
              <h3 class="font-medium text-white">
                Model limitations
              </h3>

              <p class="mt-2 text-sm text-gray-500">
                Working with rate limits, response limits and
                temporary errors while evaluating different models.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- 08 — Screenshots -->
    <section class="mx-auto max-w-6xl px-6 pb-32">
      <div
        class="grid grid-cols-1 gap-10 border-t border-white/10 pt-16 md:grid-cols-[220px_1fr] md:gap-16"
      >

        <div>
          <span class="text-sm font-medium text-purple-400">
            08
          </span>

          <h2 class="mt-2 text-2xl font-semibold">
            Screenshots
          </h2>
        </div>

        <div class="max-w-3xl leading-relaxed text-gray-400">

          <p class="text-lg text-gray-300">
            A selection of interfaces from the application.
          </p>

          <div class="mt-8 overflow-hidden border border-white/10 sm:mt-10">
              <img
                  src="/projects/coreschedule/schedule.png"
                  alt="CoreSchedule schedule interface"
                  class="h-auto w-full"
              />
          </div>

          <div class="mt-8 overflow-hidden border border-white/10 sm:mt-10">
              <img
                  src="/projects/coreschedule/generalInfo.png"
                  alt="CoreSchedule general information interface"
                  class="h-auto w-full"
              />
          </div>

        </div>
      </div>
    </section>

    <!-- 09 — Tech Stack -->
    <section class="mx-auto max-w-6xl px-6 pb-32">
      <div
        class="grid grid-cols-1 gap-10 border-t border-white/10 pt-16 md:grid-cols-[220px_1fr] md:gap-16"
      >

        <div>
          <span class="text-sm font-medium text-purple-400">
            09
          </span>

          <h2 class="mt-2 text-2xl font-semibold">
            Tech Stack
          </h2>
        </div>

        <div class="max-w-3xl">

          <p class="text-lg leading-relaxed text-gray-300 sm:text-xl md:text-2xl">
            Vue.js · Pinia · Vue Router · JavaScript ·
            Laravel · PHP · REST API · SQL ·
            Gemini AI · Docker · Git · Jira
          </p>

        </div>
      </div>
    </section>

    <!-- Project Status -->
    <section class="mx-auto max-w-6xl px-6 pb-32">

      <div class="border-t border-white/10 pt-12">

        <p
          class="text-xs uppercase tracking-wider text-gray-600"
        >
          Project status
        </p>

        <p class="mt-3 text-gray-400">
          Academic team project · Computer Engineering
        </p>

        <p class="mt-2 text-sm text-gray-600">
          Developed collaboratively with a colleague under the
          guidance of our supervisors.
        </p>

      </div>

    </section>

  </main>
</template>