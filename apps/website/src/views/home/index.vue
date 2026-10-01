<template>
<div class="landing-page">
<header class="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div class="h-16 max-w-[1440px] mx-auto px-margin flex items-center justify-between gap-space-md"><div class="flex items-center gap-space-md shrink-0"><a class="flex items-center gap-space-sm" data-path="home" href="#"><img alt="Dymik Form Brand Logo" class="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1W5p2NuxKpJvCRFIfm6KjsscHUYYvyPCGCcX6xCPvsirNVir6Wr90ohUPd1S5cSTRGYOw44iTLRltNAStKOVP2svJqr-jSf3l9MIW6AR8ecVXOeQy9rOEAGJhht0WEk46flY1cooToR0-Ks3U9m-Lf6SS2J0KPbtK4Gm1e1PK81gbbibSkfzGfEQXXjtn6q7CNmoibXdUp8BrVMYXZDh65no1tqf4qSkIPlrEO-NDZKk0a7L0MZPZsbAA"/><span class="font-headline-sm text-headline-sm text-on-surface tracking-tight">Dymik<span class="text-primary-container font-headline-sm">Form</span></span></a><div class="hidden sm:flex items-center gap-space-xs px-space-sm py-0.5 rounded-full bg-surface-container-high"><span class="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span><span class="font-label-code text-label-code text-on-surface-variant">v1.0.0</span></div></div><nav class="hidden xl:flex items-center gap-space-xs" data-active-classes="bg-surface-container text-on-surface font-semibold rounded-lg"><a class="px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-all font-body-sm text-body-sm" href="#features">Features</a><a class="px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-all font-body-sm text-body-sm" href="/docs">Documentation</a><a class="px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-all font-body-sm text-body-sm" href="/json-preview">Schema Builder</a><a class="px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-all font-body-sm text-body-sm" href="/docs">Examples</a><a class="px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-all font-body-sm text-body-sm" href="https://github.com/dymik-form/dymik" target="_blank">GitHub</a><a class="px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-all font-body-sm text-body-sm" href="https://www.npmjs.com/package/@dymik-form/dymik-vue" target="_blank">NPM</a></nav><div class="flex items-center gap-space-sm shrink-0"><button class="hidden lg:flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" type="button"><span class="material-symbols-outlined text-[18px]">search</span><span class="font-body-sm text-body-sm">Quick find</span><kbd class="px-1.5 py-0.5 rounded bg-surface-container-lowest text-on-surface-variant font-label-code text-[11px] shadow-[0_1px_2px_rgba(0,0,0,0.06)]">⌘K</kbd></button><a class="hidden sm:inline-flex items-center px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-body-sm text-body-sm transition-colors" href="/json-preview">Preview</a><a class="inline-flex items-center justify-center px-space-md py-1.5 rounded-lg bg-primary-container text-on-primary font-body-sm text-body-sm font-semibold shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:bg-primary transition-all" href="/docs">Get Started</a><div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center ml-space-xs shrink-0"><span class="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></header><main class="w-full pt-16 bg-surface min-h-[calc(100vh-4rem)]"><div class="flex flex-col w-full relative overflow-hidden">
<!-- Subtle ambient background glow circles -->
<div class="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[520px] bg-gradient-to-tr from-emerald-glow/15 via-secondary-container/20 to-transparent blur-3xl pointer-events-none rounded-full -z-10"></div>
<div class="absolute top-[800px] right-0 w-[450px] h-[450px] bg-primary-fixed/20 blur-3xl pointer-events-none rounded-full -z-10"></div>
<div class="absolute top-[1600px] left-[-100px] w-[500px] h-[500px] bg-secondary-fixed/20 blur-3xl pointer-events-none rounded-full -z-10"></div>
<!-- HERO SECTION -->
<section class="w-full max-w-[1240px] mx-auto px-margin pt-space-xl pb-space-lg flex flex-col items-center text-center">
<!-- Announcement Pill -->
<a class="group inline-flex items-center gap-space-sm px-space-md py-1.5 rounded-full bg-surface-container-high/80 hover:bg-surface-container-high transition-all shadow-sm mb-space-lg" href="https://github.com/dymik-form/dymik/releases" target="_blank">
<span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-container text-on-primary text-[11px] font-bold">✨</span>
<span class="font-body-sm text-body-sm text-on-surface font-medium">Dymik Form v1.0.0 released with native Zod &amp; ArkType support</span>
<span class="material-symbols-outlined text-[16px] text-primary-container group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
</a>
<!-- Headline -->
<h1 class="font-display-hero text-display-hero max-w-4xl text-on-surface tracking-tight mb-space-md">
      Create <span class="bg-gradient-to-r from-primary-container via-vue-teal to-secondary bg-clip-text text-transparent">Dynamic Forms</span> Effortlessly
    </h1>
<!-- Subtitle -->
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-space-lg">
      The declarative, type-safe schema engine for Vue.js. Generate complex, reactive form architectures from simple JSON definitions in seconds — no boilerplate required.
    </p>
<!-- CTAs & Install Bar -->
<div class="flex flex-wrap items-center justify-center gap-space-md mb-space-xl">
<a class="inline-flex items-center justify-center gap-space-sm px-space-lg py-3 rounded-xl bg-primary-container text-on-primary font-headline-sm text-body-md font-semibold shadow-[0_4px_24px_rgba(16,185,129,0.35)] hover:bg-primary hover:-translate-y-0.5 transition-all" href="/docs">
<span>Get Started Free</span>
<span class="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
<a class="inline-flex items-center justify-center gap-space-sm px-space-lg py-3 rounded-xl bg-surface-container-lowest text-on-surface font-body-md font-semibold shadow-sm hover:shadow-md hover:bg-surface-container-low transition-all" href="#features">
<span class="material-symbols-outlined text-vue-teal text-[20px]" style="font-variation-settings: 'FILL' 1;">play_circle</span>
<span>Live Interactive Preview</span>
</a>
<!-- Quick Copy CLI Bar -->
<div class="flex items-center bg-code-dark text-on-primary px-space-md py-2.5 rounded-xl shadow-md font-label-code text-label-code gap-space-md">
<span class="text-vue-teal">$</span>
<span class="select-all text-surface-subtle" id="npm-install-text">{{ npmInstallText }}</span>
<button class="ml-1 p-1 rounded hover:bg-surface-variant/20 text-surface-subtle transition-colors flex items-center justify-center" id="copy-npm-btn" @click="copyNpmCommand" title="Copy to clipboard">
<span class="material-symbols-outlined text-[16px]" id="copy-icon">{{ copyIconText }}</span>
</button>
</div>
</div>
<!-- DUAL PANE HERO WORKBENCH -->
<div class="w-full max-w-5xl rounded-2xl bg-surface-container-lowest shadow-xl overflow-hidden text-left">
<!-- Window Titlebar -->
<div class="flex items-center justify-between px-space-md py-3 bg-surface-container-low">
<div class="flex items-center gap-2">
<div class="w-3 h-3 rounded-full bg-error/70"></div>
<div class="w-3 h-3 rounded-full bg-secondary-container"></div>
<div class="w-3 h-3 rounded-full bg-primary-container"></div>
<span class="font-label-code text-label-code text-on-surface-variant ml-space-sm">playground.vue — Schema Runtime</span>
</div>
<div class="flex items-center gap-space-sm">
<span class="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-surface-container-high font-label-code text-[11px] text-primary">
<span class="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
            Reactive compilation: 1.2ms
          </span>
</div>
</div>
<!-- Split Layout -->
<div class="grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
<!-- Left: Code Editor (Dark) -->
<div class="lg:col-span-6 bg-code-dark p-space-lg text-surface-subtle font-label-code text-label-code overflow-x-auto flex flex-col justify-between">
<div class="space-y-1 leading-relaxed">
<div class="text-on-surface-variant/70">// 1. Define reactive JSON schema</div>
<div><span class="text-vue-teal">const</span> <span class="text-emerald-glow">userSchema</span> = <span class="text-secondary-fixed">reactive</span>({</div>
<div class="pl-4"><span class="text-secondary-fixed">fields</span>: [</div>
<div class="pl-8">{</div>
<div class="pl-12"><span class="text-primary-fixed-dim">id</span>: <span class="text-tertiary-fixed-dim">"organization"</span>,</div>
<div class="pl-12"><span class="text-primary-fixed-dim">type</span>: <span class="text-tertiary-fixed-dim">"text"</span>,</div>
<div class="pl-12"><span class="text-primary-fixed-dim">label</span>: <span class="text-tertiary-fixed-dim">"Company Workspace"</span>,</div>
<div class="pl-12"><span class="text-primary-fixed-dim">placeholder</span>: <span class="text-tertiary-fixed-dim">"acme-corp"</span>,</div>
<div class="pl-12"><span class="text-primary-fixed-dim">rules</span>: [<span class="text-tertiary-fixed-dim">"required"</span>, <span class="text-tertiary-fixed-dim">"slug"</span>]</div>
<div class="pl-8">},</div>
<div class="pl-8">{</div>
<div class="pl-12"><span class="text-primary-fixed-dim">id</span>: <span class="text-tertiary-fixed-dim">"plan"</span>,</div>
<div class="pl-12"><span class="text-primary-fixed-dim">type</span>: <span class="text-tertiary-fixed-dim">"select"</span>,</div>
<div class="pl-12"><span class="text-primary-fixed-dim">label</span>: <span class="text-tertiary-fixed-dim">"Subscription Tier"</span>,</div>
<div class="pl-12"><span class="text-primary-fixed-dim">options</span>: [<span class="text-tertiary-fixed-dim">"Startup"</span>, <span class="text-tertiary-fixed-dim">"Scale"</span>, <span class="text-tertiary-fixed-dim">"Enterprise"</span>]</div>
<div class="pl-8">},</div>
<div class="pl-8">{</div>
<div class="pl-12"><span class="text-primary-fixed-dim">id</span>: <span class="text-tertiary-fixed-dim">"customDomain"</span>,</div>
<div class="pl-12"><span class="text-primary-fixed-dim">type</span>: <span class="text-tertiary-fixed-dim">"switch"</span>,</div>
<div class="pl-12"><span class="text-primary-fixed-dim">label</span>: <span class="text-tertiary-fixed-dim">"Enable Vanity SSL"</span>,</div>
<div class="pl-12"><span class="text-primary-fixed-dim">visibleIf</span>: <span class="text-tertiary-fixed-dim">"plan !== 'Startup'"</span></div>
<div class="pl-8">}</div>
<div class="pl-4">]</div>
<div>});</div>
</div>
<div class="pt-4 flex items-center justify-between text-[11px] text-outline-variant font-label-code">
<span>&lt;DymikForm :schema="userSchema" v-model="formData" /&gt;</span>
<span class="text-vue-teal flex items-center gap-1"><span class="material-symbols-outlined text-[13px]">check_circle</span> Valid Syntax</span>
</div>
</div>
<!-- Right: Live Rendered Output -->
<div class="lg:col-span-6 bg-surface-canvas p-space-lg flex flex-col justify-between">
<div>
<div class="flex items-center justify-between mb-space-md">
<span class="font-headline-sm text-headline-sm text-on-surface">Compiled Form UI</span>
<span class="px-2 py-0.5 rounded bg-primary-container/10 text-primary-container font-label-code text-[11px] font-semibold">Live Preview</span>
</div>
<!-- Interactive Form Simulation -->
<form class="space-y-space-md" id="hero-interactive-form" @submit.prevent>
<div>
<label class="block font-body-sm text-body-sm font-semibold text-on-surface mb-1 flex items-center justify-between">
<span>Company Workspace <span class="text-primary-container">*</span></span>
<span class="text-primary-container text-[11px] font-label-code flex items-center gap-0.5"><span class="material-symbols-outlined text-[12px]">check</span> Valid</span>
</label>
<div class="relative">
<input class="w-full px-space-md py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-md shadow-sm outline-none focus:ring-2 focus:ring-primary-container transition-all" id="demo-slug" type="text" value="acme-engineering"/>
<span class="absolute right-3 top-3 text-[11px] font-label-code text-on-surface-variant">.dymik.app</span>
</div>
</div>
<div>
<label class="block font-body-sm text-body-sm font-semibold text-on-surface mb-1">Subscription Tier</label>
<select class="w-full px-space-md py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-md shadow-sm outline-none focus:ring-2 focus:ring-primary-container cursor-pointer transition-all" id="demo-tier-select" v-model="tierSelectValue" @change="handleTierChange">
<option value="Scale">Scale ($49/month)</option>
<option value="Startup">Startup ($0/month)</option>
<option value="Enterprise">Enterprise (Custom)</option>
</select>
</div>
<!-- Conditional Switch with dynamic show/hide -->
<div class="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low transition-all" id="demo-conditional-field" :style="{ opacity: conditionalFieldOpacity, pointerEvents: conditionalFieldPointerEvents }">
<div>
<div class="font-body-sm text-body-sm font-semibold text-on-surface">Enable Vanity SSL</div>
<div class="font-body-sm text-[12px] text-on-surface-variant">Auto-provisioned Let's Encrypt cert</div>
</div>
<label class="relative inline-flex items-center cursor-pointer">
<input checked class="sr-only peer" type="checkbox"/>
<div class="w-11 h-6 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
</label>
</div>
</form>
</div>
<div class="pt-space-md">
<button class="w-full py-2.5 rounded-lg bg-on-surface text-surface font-body-md font-semibold shadow-sm hover:bg-on-surface-variant transition-colors flex items-center justify-center gap-2">
<span>Submit payload</span>
<span class="material-symbols-outlined text-[16px]">arrow_outward</span>
</button>
</div>
</div>
</div>
</div>
</section>
<!-- METRICS & SOCIAL PROOF -->
<section class="w-full bg-surface-container-low/70 py-space-lg my-space-lg">
<div class="max-w-[1240px] mx-auto px-margin">
<div class="grid grid-cols-2 md:grid-cols-4 gap-space-md text-center">
<div class="p-space-md">
<div class="font-headline-lg text-headline-lg text-primary-container font-extrabold">100%</div>
<div class="font-body-sm text-body-sm text-on-surface-variant font-medium mt-1">Type-Safe Validation</div>
</div>
<div class="p-space-md">
<div class="font-headline-lg text-headline-lg text-on-surface font-extrabold">&lt;80 kB</div>
<div class="font-body-sm text-body-sm text-on-surface-variant font-medium mt-1">Gzipped Core Footprint</div>
</div>
<div class="p-space-md">
<div class="font-headline-lg text-headline-lg text-primary-container font-extrabold">Zod & ArkType</div>
<div class="font-body-sm text-body-sm text-on-surface-variant font-medium mt-1">Native Support</div>
</div>
<div class="p-space-md">
<div class="font-headline-lg text-headline-lg text-on-surface font-extrabold">100%</div>
<div class="font-body-sm text-body-sm text-on-surface-variant font-medium mt-1">Vue 3 Compatibility</div>
</div>
</div>
</div>
</section>
<!-- KEY FEATURES SECTION -->
<section class="w-full max-w-[1240px] mx-auto px-margin py-space-xl">
<div class="text-center max-w-2xl mx-auto mb-space-xl">
<div class="font-label-badge text-label-badge text-primary uppercase tracking-wider font-semibold mb-2">Architected for Scalability</div>
<h2 class="font-headline-lg text-headline-lg text-on-surface tracking-tight">Everything You Need to Power Enterprise Forms</h2>
<p class="font-body-md text-body-md text-on-surface-variant mt-space-xs">Say goodbye to thousands of lines of boilerplate templates, custom field error states, and unmaintainable conditional trees.</p>
</div>
<!-- 6 Feature Cards Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
<!-- Card 1: Easy Customization -->
<div class="group bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
<div>
<div class="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center mb-space-md text-primary-container">
<span class="material-symbols-outlined text-[28px]" style="font-variation-settings: 'FILL' 1;">tune</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface mb-2">Easy Customization</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Create forms with modular field configurations effortlessly, entirely eliminating repetitive HTML hard-coding and messy form states.</p>
</div>
<div class="pt-space-md mt-space-md flex flex-wrap gap-1.5 font-label-code text-[11px]">
<span class="px-2 py-0.5 rounded bg-surface-subtle text-on-surface-variant">custom-slots</span>
<span class="px-2 py-0.5 rounded bg-surface-subtle text-on-surface-variant">field-overrides</span>
</div>
</div>
<!-- Card 2: Powerful Integration -->
<div class="group bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
<div>
<div class="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center mb-space-md text-secondary">
<span class="material-symbols-outlined text-[28px]" style="font-variation-settings: 'FILL' 1;">hub</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface mb-2">Powerful Integration</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Framework-agnostic UI philosophy. Works natively with Tailwind CSS, Vuetify, PrimeVue, Shadcn-Vue, or custom styled components.</p>
</div>
<div class="pt-space-md mt-space-md flex flex-wrap gap-1.5 font-label-code text-[11px]">
<span class="px-2 py-0.5 rounded bg-surface-subtle text-on-surface-variant">tailwind</span>
<span class="px-2 py-0.5 rounded bg-surface-subtle text-on-surface-variant">primevue</span>
<span class="px-2 py-0.5 rounded bg-surface-subtle text-on-surface-variant">vuetify</span>
</div>
</div>
<!-- Card 3: Visibility & Dynamic Control -->
<div class="group bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
<div>
<div class="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center mb-space-md text-primary-container">
<span class="material-symbols-outlined text-[28px]" style="font-variation-settings: 'FILL' 1;">visibility</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface mb-2">Visibility &amp; Logic Engine</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Express complex show/hide conditions, chained multi-select dependencies, and dynamic calculated values through simple declarative expressions.</p>
</div>
<div class="pt-space-md mt-space-md flex flex-wrap gap-1.5 font-label-code text-[11px]">
<span class="px-2 py-0.5 rounded bg-surface-subtle text-on-surface-variant">visibleIf</span>
<span class="px-2 py-0.5 rounded bg-surface-subtle text-on-surface-variant">computations</span>
</div>
</div>
<!-- Card 4: Built-in Schema Validation -->
<div class="group bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
<div>
<div class="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center mb-space-md text-tertiary">
<span class="material-symbols-outlined text-[28px]" style="font-variation-settings: 'FILL' 1;">verified_user</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface mb-2">First-Class Validation</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Instant async validation out of the box with zero setup. Integrates with Zod, Yup, and Valibot schemas with full runtime type guarantees.</p>
</div>
<div class="pt-space-md mt-space-md flex flex-wrap gap-1.5 font-label-code text-[11px]">
<span class="px-2 py-0.5 rounded bg-surface-subtle text-on-surface-variant">zod-adapter</span>
<span class="px-2 py-0.5 rounded bg-surface-subtle text-on-surface-variant">async-checks</span>
</div>
</div>
<!-- Card 5: High Performance & Lightweight -->
<div class="group bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
<div>
<div class="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center mb-space-md text-vue-teal">
<span class="material-symbols-outlined text-[28px]" style="font-variation-settings: 'FILL' 1;">bolt</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface mb-2">Extreme Performance</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Fine-grained Vue reactivity ensures only dirty fields re-evaluate. 60 FPS typing experience even on massive 200+ field survey layouts.</p>
</div>
<div class="pt-space-md mt-space-md flex flex-wrap gap-1.5 font-label-code text-[11px]">
<span class="px-2 py-0.5 rounded bg-surface-subtle text-on-surface-variant">&lt;80kb gzip</span>
<span class="px-2 py-0.5 rounded bg-surface-subtle text-on-surface-variant">tree-shakeable</span>
</div>
</div>
<!-- Card 6: Headless or Styled -->
<div class="group bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
<div>
<div class="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center mb-space-md text-on-surface">
<span class="material-symbols-outlined text-[28px]" style="font-variation-settings: 'FILL' 1;">layers</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface mb-2">Headless Flexibility</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Keep complete control over every pixel. Render in pure unstyled mode, or activate the preset Tailwind styling system in one line.</p>
</div>
<div class="pt-space-md mt-space-md flex flex-wrap gap-1.5 font-label-code text-[11px]">
<span class="px-2 py-0.5 rounded bg-surface-subtle text-on-surface-variant">unstyled: true</span>
<span class="px-2 py-0.5 rounded bg-surface-subtle text-on-surface-variant">design-tokens</span>
</div>
</div>
</div>
</section>
<!-- INTERACTIVE PLAYGROUND SHOWCASE -->
<section class="w-full max-w-[1240px] mx-auto px-margin py-space-xl" id="features">
<div class="p-space-lg md:p-space-xl rounded-3xl bg-surface-container-low shadow-lg">
<div class="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
<div>
<div class="font-label-badge text-label-badge text-primary uppercase tracking-wider font-semibold">Interactive Sandbox</div>
<h2 class="font-headline-lg text-headline-lg text-on-surface mt-1">Experience the Schema Engine</h2>
</div>
<!-- Preset Selector Pills -->
<div class="flex items-center gap-space-xs bg-surface-container-lowest p-1 rounded-xl shadow-sm">
<button :class="['playground-tab px-space-md py-1.5 rounded-lg font-body-sm text-body-sm font-semibold transition-all', activeTab === 'reg' ? 'bg-primary-container text-on-primary' : 'text-on-surface-variant hover:text-on-surface']" id="tab-reg" @click="switchTab('reg')">Registration</button>
<button :class="['playground-tab px-space-md py-1.5 rounded-lg font-body-sm text-body-sm font-semibold transition-all', activeTab === 'checkout' ? 'bg-primary-container text-on-primary' : 'text-on-surface-variant hover:text-on-surface']" id="tab-checkout" @click="switchTab('checkout')">Checkout</button>
<button :class="['playground-tab px-space-md py-1.5 rounded-lg font-body-sm text-body-sm font-semibold transition-all', activeTab === 'survey' ? 'bg-primary-container text-on-primary' : 'text-on-surface-variant hover:text-on-surface']" id="tab-survey" @click="switchTab('survey')">Survey</button>
</div>
</div>
<!-- Playground Content Grid -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
<!-- Editor Column -->
<div class="lg:col-span-6 bg-code-dark rounded-2xl p-space-md text-surface-subtle flex flex-col justify-between shadow-inner">
<div class="flex items-center justify-between pb-space-sm mb-space-sm border-b border-white/10">
<span class="font-label-code text-[12px] text-surface-subtle/80 flex items-center gap-1.5">
<span class="material-symbols-outlined text-[15px] text-vue-teal">data_object</span>
              form-schema.json
            </span>
<span class="font-label-code text-[11px] text-emerald-glow">Live Bind</span>
</div>
<pre class="font-label-code text-label-code overflow-x-auto text-emerald-glow/90 h-[340px] leading-relaxed select-all" id="playground-code-view">{{ playgroundSchemas[activeTab].code }}</pre><!--
-->
<div class="pt-2 flex items-center justify-between text-on-surface-variant/70 font-label-code text-[11px]">
<span>Vue 3 Composition API</span>
<span>Schema v2.4</span>
</div>
</div>
<!-- Rendered Live Output Column -->
<div class="lg:col-span-6 bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between">
<div class="space-y-space-md" id="playground-interactive-render">
<div>
<div class="font-headline-sm text-headline-sm text-on-surface" id="playground-form-title">{{ playgroundSchemas[activeTab].title }}</div>
<p class="font-body-sm text-body-sm text-on-surface-variant" id="playground-form-desc">{{ playgroundSchemas[activeTab].desc }}</p>
</div>
<div class="space-y-space-md" id="playground-fields-container" v-html="playgroundSchemas[activeTab].html">
</div>
</div>
<div class="pt-space-lg mt-space-md">
<button class="w-full py-3 rounded-xl bg-primary-container text-on-primary font-headline-sm text-body-md font-semibold hover:bg-primary transition-all shadow-md flex items-center justify-center gap-2">
<span class="material-symbols-outlined text-[18px]">send</span>
<span>Test Submit Validation</span>
</button>
</div>
</div>
</div>
</div>
</section>

<!-- FINAL CALL TO ACTION (CTA) -->
<section class="w-full max-w-[1240px] mx-auto px-margin pb-space-xl">
<div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-inverse-surface via-code-dark to-inverse-surface p-space-xl md:p-16 text-center text-surface-subtle shadow-2xl">
<!-- Subtle internal glowing decorative circle -->
<div class="absolute -top-24 -right-24 w-96 h-96 bg-primary-container/20 rounded-full blur-3xl pointer-events-none"></div>
<div class="relative z-10 max-w-2xl mx-auto space-y-space-md">
<div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 font-label-code text-[12px] text-emerald-glow mb-2">
<span>Get up and running in &lt; 5 minutes</span>
</div>
<h2 class="font-headline-lg text-headline-lg text-surface-container-lowest tracking-tight">
          Ready to eliminate form boilerplate forever?
        </h2>
<p class="font-body-lg text-body-lg text-surface-subtle/80">
          Join thousands of developers building fast, accessible, schema-driven applications today.
        </p>
<div class="flex flex-wrap items-center justify-center gap-space-md pt-space-md">
<a class="inline-flex items-center justify-center gap-space-sm px-space-lg py-3 rounded-xl bg-primary-container text-on-primary font-headline-sm text-body-md font-semibold shadow-[0_0_24px_rgba(16,185,129,0.5)] hover:bg-primary transition-all" href="/docs">
<span>Read the Docs</span>
<span class="material-symbols-outlined text-[18px]">menu_book</span>
</a>
<a class="inline-flex items-center justify-center gap-space-sm px-space-lg py-3 rounded-xl bg-white/10 text-surface-container-lowest font-body-md font-semibold hover:bg-white/20 transition-all" href="https://www.npmjs.com/package/@dymik-form/dymik-vue" target="_blank">
<span class="material-symbols-outlined text-[18px]">download</span>
<span>Install via NPM</span>
</a>
</div>
</div>
</div>
</section>
</div></main><footer class="w-full bg-surface-container-low py-space-xl shadow-[0_-1px_8px_rgba(0,0,0,0.02)]"><div class="max-w-[1440px] mx-auto px-margin"><div class="grid grid-cols-2 md:grid-cols-5 gap-space-lg mb-space-xl"><div class="col-span-2 space-y-space-sm"><div class="flex items-center gap-space-sm"><img alt="Dymik Form Brand Logo" class="h-7 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1W5p2NuxKpJvCRFIfm6KjsscHUYYvyPCGCcX6xCPvsirNVir6Wr90ohUPd1S5cSTRGYOw44iTLRltNAStKOVP2svJqr-jSf3l9MIW6AR8ecVXOeQy9rOEAGJhht0WEk46flY1cooToR0-Ks3U9m-Lf6SS2J0KPbtK4Gm1e1PK81gbbibSkfzGfEQXXjtn6q7CNmoibXdUp8BrVMYXZDh65no1tqf4qSkIPlrEO-NDZKk0a7L0MZPZsbAA"/><span class="font-headline-sm text-headline-sm text-on-surface tracking-tight">Dymik<span class="text-primary-container font-headline-sm">Form</span></span></div><p class="font-body-sm text-body-sm text-on-surface-variant max-w-sm">High-performance dynamic schema form engine built specifically for modern Vue.js reactive architectures and frontend developers.</p><div class="flex items-center gap-space-sm pt-space-xs"><span class="px-space-sm py-1 rounded bg-surface-container-high font-label-code text-label-code text-on-surface-variant">MIT License</span><span class="px-space-sm py-1 rounded bg-surface-container-high font-label-code text-label-code text-vue-teal">Vue 3 &amp; TypeScript</span></div></div><div class="space-y-space-sm"><div class="font-label-badge text-label-badge text-on-surface uppercase tracking-wider font-semibold">Product</div><ul class="space-y-space-xs"><li role="none"><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors block" href="#features">Features</a></li><li role="none"><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors block" href="/json-preview">Schema Builder</a></li><li role="none"><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors block" href="/docs">Examples</a></li><li role="none"><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors block" href="/json-preview">Playground</a></li></ul></div><div class="space-y-space-sm"><div class="font-label-badge text-label-badge text-on-surface uppercase tracking-wider font-semibold">Developers</div><ul class="space-y-space-xs"><li role="none"><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors block" href="/docs">Documentation</a></li><li role="none"><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors block" href="https://www.npmjs.com/package/@dymik-form/dymik-vue" target="_blank">NPM Package</a></li><li role="none"><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors block" href="https://github.com/dymik-form/dymik/releases" target="_blank">Changelog</a></li><li role="none"><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors block" href="/docs">API Reference</a></li></ul></div><div class="space-y-space-sm"><div class="font-label-badge text-label-badge text-on-surface uppercase tracking-wider font-semibold">Community</div><ul class="space-y-space-xs"><li role="none"><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors block" href="https://github.com/dymik-form/dymik" target="_blank">GitHub Repository</a></li><li role="none"><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors block" href="https://github.com/dymik-form/dymik/discussions" target="_blank">Discussions</a></li><li role="none"><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors block" href="https://github.com/dymik-form/dymik/blob/main/CONTRIBUTING.md" target="_blank">Contributing</a></li><li role="none"><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors block" href="https://github.com/dymik-form/dymik" target="_blank">Discord Server</a></li></ul></div></div><div class="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-sm text-on-surface-variant font-body-sm text-body-sm"><p>© 2025 Dymik Form. Engineered for high-velocity frontend teams.</p><div class="flex items-center gap-space-md"><a class="hover:text-on-surface transition-colors" href="https://github.com/dymik-form/dymik" target="_blank">Privacy Policy</a><a class="hover:text-on-surface transition-colors" href="https://github.com/dymik-form/dymik" target="_blank">Terms of Service</a><span class="font-label-code text-label-code text-vue-teal">v1.0.0 • Stable</span></div></div></div></footer>
</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// Interactive state for playground
const activeTab = ref<'reg' | 'checkout' | 'survey'>('reg');
const npmInstallText = ref('npm install dymik-form');
const copyIconText = ref('content_copy');

const switchTab = (type: 'reg' | 'checkout' | 'survey') => {
    activeTab.value = type;
};

const copyNpmCommand = () => {
    navigator.clipboard.writeText(npmInstallText.value).then(() => {
        copyIconText.value = 'check';
        setTimeout(() => {
            copyIconText.value = 'content_copy';
        }, 2000);
    });
};

const tierSelectValue = ref('Scale');
const conditionalFieldOpacity = ref<any>(1);
const conditionalFieldPointerEvents = ref<any>('auto');

const handleTierChange = () => {
    if (tierSelectValue.value === 'Startup') {
        conditionalFieldOpacity.value = 0.3;
        conditionalFieldPointerEvents.value = 'none';
    } else {
        conditionalFieldOpacity.value = 1;
        conditionalFieldPointerEvents.value = 'auto';
    }
};

const playgroundSchemas = {
    reg: {
    code: `{
  "title": "Developer Account",
  "fields": [
    {
      "name": "email",
      "type": "email",
      "label": "Work Email",
      "rules": ["required", "email"]
    },
    {
      "name": "role",
      "type": "select",
      "label": "Primary Role",
      "options": ["Frontend Lead", "Fullstack", "Architect"]
    },
    {
      "name": "terms",
      "type": "checkbox",
      "label": "Agree to open-source guidelines"
    }
  ]
}`,
    title: 'Developer Account',
    desc: 'Fill in details to provision an environment.',
    html: `
        <div>
        <label class="block font-body-sm text-body-sm font-semibold text-on-surface mb-1">Work Email</label>
        <input type="email" placeholder="dev@company.com" class="w-full px-space-md py-2.5 rounded-lg bg-surface-canvas text-on-surface font-body-md outline-none focus:ring-2 focus:ring-primary-container">
        </div>
        <div>
        <label class="block font-body-sm text-body-sm font-semibold text-on-surface mb-1">Primary Role</label>
        <select class="w-full px-space-md py-2.5 rounded-lg bg-surface-canvas text-on-surface font-body-md outline-none focus:ring-2 focus:ring-primary-container">
            <option>Frontend Lead</option>
            <option>Fullstack Engineer</option>
            <option>Solutions Architect</option>
        </select>
        </div>
        <div class="flex items-center gap-space-sm pt-space-xs">
        <input type="checkbox" id="sub-check" class="w-4 h-4 rounded text-primary-container cursor-pointer">
        <label for="sub-check" class="font-body-sm text-body-sm text-on-surface cursor-pointer select-none">Agree to open-source guidelines</label>
        </div>
    `
    },
    checkout: {
    code: `{
  "title": "Checkout Express",
  "fields": [
    {
      "name": "cardNumber",
      "type": "text",
      "label": "Card Details",
      "mask": "#### #### #### ####"
    },
    {
      "name": "promoCode",
      "type": "text",
      "label": "Voucher / Promo Code"
    }
  ]
}`,
    title: 'Checkout Express',
    desc: 'Instant checkout with client-side Luhn algorithm checks.',
    html: `
        <div>
        <label class="block font-body-sm text-body-sm font-semibold text-on-surface mb-1">Card Details</label>
        <div class="relative">
            <input type="text" placeholder="4242 •••• •••• 4242" class="w-full px-space-md py-2.5 rounded-lg bg-surface-canvas text-on-surface font-body-md outline-none focus:ring-2 focus:ring-primary-container">
            <span class="material-symbols-outlined absolute right-3 top-2.5 text-on-surface-variant">credit_card</span>
        </div>
        </div>
        <div>
        <label class="block font-body-sm text-body-sm font-semibold text-on-surface mb-1">Voucher / Promo Code</label>
        <input type="text" placeholder="SUMMER-VUE-2025" class="w-full px-space-md py-2.5 rounded-lg bg-surface-canvas text-on-surface font-body-md outline-none focus:ring-2 focus:ring-primary-container">
        </div>
    `
    },
    survey: {
    code: `{
  "title": "Team Survey",
  "fields": [
    {
      "name": "satisfaction",
      "type": "rating",
      "label": "Vue DX Rating",
      "max": 5
    },
    {
      "name": "feedback",
      "type": "textarea",
      "label": "Suggestions"
    }
  ]
}`,
    title: 'Team Survey',
    desc: 'Gather internal feedback with reactive rating components.',
    html: `
        <div>
        <label class="block font-body-sm text-body-sm font-semibold text-on-surface mb-1">Vue DX Rating</label>
        <div class="flex gap-2 text-primary-container py-1">
            <span class="material-symbols-outlined cursor-pointer" style="font-variation-settings: 'FILL' 1;">star</span>
            <span class="material-symbols-outlined cursor-pointer" style="font-variation-settings: 'FILL' 1;">star</span>
            <span class="material-symbols-outlined cursor-pointer" style="font-variation-settings: 'FILL' 1;">star</span>
            <span class="material-symbols-outlined cursor-pointer" style="font-variation-settings: 'FILL' 1;">star</span>
            <span class="material-symbols-outlined cursor-pointer" style="font-variation-settings: 'FILL' 1;">star_half</span>
        </div>
        </div>
        <div>
        <label class="block font-body-sm text-body-sm font-semibold text-on-surface mb-1">Suggestions</label>
        <textarea rows="3" placeholder="What features should we add next?" class="w-full px-space-md py-2 rounded-lg bg-surface-canvas text-on-surface font-body-md outline-none focus:ring-2 focus:ring-primary-container resize-none"></textarea>
        </div>
    `
    }
};

</script>

<style scoped>
.landing-page {
    width: 100%;
}
</style>
