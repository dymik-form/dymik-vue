<template>
    <div class="docs-layout">
        <header class="docs-header">
            <button class="menu-toggle" type="button" aria-label="Toggle navigation" @click="isSidebarOpen = !isSidebarOpen">
                <i class="pi pi-bars"></i>
            </button>
            <RouterLink to="/" class="brand">
                <img src="/logo.png" alt="Dymik Form" />
            </RouterLink>
            <span class="brand-divider">Docs</span>
            <nav class="header-nav">
                <RouterLink to="/preview">Preview</RouterLink>
                <a href="https://github.com/dymik-form/dymik" target="_blank" rel="noopener" aria-label="GitHub">
                    <i class="pi pi-github"></i>
                </a>
                <a href="https://www.npmjs.com/package/@dymik-form/dymik-vue" target="_blank" rel="noopener" aria-label="npm package" class="npm-link">
                    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331z"/></svg>
                </a>
            </nav>
        </header>

        <div class="docs-body" ref="scrollContainer">
            <aside class="docs-sidebar" :class="{ open: isSidebarOpen }">
                <div v-for="section of docSections" :key="section.title" class="sidebar-section">
                    <p class="sidebar-title">{{ section.title }}</p>
                    <RouterLink v-for="page of section.pages" :key="page.slug" :to="`/docs/${page.slug}`"
                        class="sidebar-link" :class="{ active: page.slug === slug }" @click="isSidebarOpen = false">
                        {{ page.title }}
                    </RouterLink>
                </div>
            </aside>
            <div v-if="isSidebarOpen" class="sidebar-backdrop" @click="isSidebarOpen = false"></div>

            <main class="docs-main">
                <article v-if="notFound" class="markdown-body">
                    <h1>Page not found</h1>
                    <p>This documentation page does not exist. <RouterLink to="/docs">Back to the introduction</RouterLink>.</p>
                </article>
                <article v-else class="markdown-body" v-html="doc.html" @click="onContentClick"></article>

                <nav v-if="!notFound" class="pager">
                    <RouterLink v-if="prevPage" :to="`/docs/${prevPage.slug}`" class="pager-link prev">
                        <span>Previous</span>
                        {{ prevPage.title }}
                    </RouterLink>
                    <RouterLink v-if="nextPage" :to="`/docs/${nextPage.slug}`" class="pager-link next">
                        <span>Next</span>
                        {{ nextPage.title }}
                    </RouterLink>
                </nav>
            </main>

            <aside class="docs-toc" v-if="!notFound && doc.headings.length">
                <p class="sidebar-title">On this page</p>
                <a v-for="heading of doc.headings" :key="heading.id" :href="`#${heading.id}`"
                    :class="['toc-link', `level-${heading.level}`]" @click.prevent="scrollToHeading(heading.id)">
                    {{ heading.text }}
                </a>
            </aside>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { defaultDocSlug, docPages, docSections, loadDocContent } from './pages';
import { renderDoc, type RenderedDoc } from './markdown';
import 'highlight.js/styles/github-dark.css';

const route = useRoute();
const router = useRouter();

const scrollContainer = ref<HTMLElement>();
const isSidebarOpen = ref(false);
const notFound = ref(false);
const doc = ref<RenderedDoc>({ html: '', title: '', headings: [] });

const slug = computed(() => (route.params.slug as string | undefined) || defaultDocSlug);
const pageIndex = computed(() => docPages.findIndex((page) => page.slug === slug.value));
const prevPage = computed(() => docPages[pageIndex.value - 1]);
const nextPage = computed(() => (pageIndex.value >= 0 ? docPages[pageIndex.value + 1] : undefined));

watch(slug, async (currentSlug) => {
    const content = await loadDocContent(currentSlug);

    // Ignore a stale load if the user navigated again while it was in flight.
    if (currentSlug !== slug.value) return;

    notFound.value = content === undefined;
    doc.value = content === undefined ? { html: '', title: '', headings: [] } : renderDoc(content);
    document.title = `${doc.value.title || 'Not found'} | Dymik Form Docs`;

    await nextTick();
    if (route.hash) {
        scrollToHeading(route.hash.slice(1));
    } else {
        scrollContainer.value?.scrollTo({ top: 0 });
    }
}, { immediate: true });

function scrollToHeading(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    router.replace({ hash: `#${id}` });
}

// Keep in-app links inside the SPA instead of reloading the page.
function onContentClick(event: MouseEvent) {
    const anchor = (event.target as HTMLElement).closest('a');
    const href = anchor?.getAttribute('href');

    if (!href || anchor?.target || event.metaKey || event.ctrlKey) return;

    if (href.startsWith('#')) {
        event.preventDefault();
        scrollToHeading(href.slice(1));
    } else if (href.startsWith('/')) {
        event.preventDefault();
        router.push(href);
    }
}
</script>

<style scoped lang="scss">
$header-height: 60px;
$border: #e5e7eb;
$muted: #6b7280;
$accent: #646cff;

.docs-layout {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #fff;
    color: #1f2937;
}

.docs-header {
    height: $header-height;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0 1.5rem;
    border-bottom: 1px solid $border;
    background: #f8f9fa;

    .brand img {
        height: 36px;
        display: block;
    }

    .brand-divider {
        font-weight: 700;
        color: $muted;
        padding-left: 0.75rem;
        border-left: 1px solid $border;
    }

    .header-nav {
        margin-left: auto;
        display: flex;
        align-items: center;
        gap: 1.25rem;

        a {
            color: #374151;

            &:hover {
                color: $accent;
            }
        }

        .pi-github {
            font-size: 1.3rem;
        }

        .npm-link {
            display: inline-flex;
            align-items: center;
            font-size: 1.3rem;
        }
    }

    .menu-toggle {
        display: none;
        border: none;
        background: none;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0.25rem;
    }
}

.docs-body {
    flex: 1;
    overflow-y: auto;
    display: grid;
    grid-template-columns: 260px minmax(0, 1fr) 220px;
    align-items: start;
}

.docs-sidebar,
.docs-toc {
    position: sticky;
    top: 0;
    max-height: calc(100vh - #{$header-height});
    overflow-y: auto;
    padding: 1.5rem 1rem;
    box-sizing: border-box;
}

.docs-sidebar {
    border-right: 1px solid $border;
    min-height: calc(100vh - #{$header-height});
}

.sidebar-section + .sidebar-section {
    margin-top: 1.5rem;
}

.sidebar-title {
    margin: 0 0 0.5rem;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #111827;
}

.sidebar-link {
    display: block;
    padding: 0.4rem 0.75rem;
    border-radius: 6px;
    color: #4b5563;
    font-weight: 500;

    &:hover {
        color: $accent;
    }

    &.active {
        color: $accent;
        background: rgba(100, 108, 255, 0.1);
    }
}

.docs-toc {
    .toc-link {
        display: block;
        padding: 0.25rem 0;
        font-size: 0.9rem;
        color: $muted;
        font-weight: 400;

        &.level-3 {
            padding-left: 0.75rem;
        }

        &:hover {
            color: $accent;
        }
    }
}

.docs-main {
    padding: 2rem 3rem 4rem;
    max-width: 860px;
    width: 100%;
    box-sizing: border-box;
    justify-self: center;
}

.pager {
    display: flex;
    gap: 1rem;
    margin-top: 3rem;
    padding-top: 1.5rem;
    border-top: 1px solid $border;

    .pager-link {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        padding: 0.75rem 1rem;
        border: 1px solid $border;
        border-radius: 8px;

        span {
            font-size: 0.8rem;
            color: $muted;
        }

        &.next {
            margin-left: auto;
            text-align: right;
        }

        &:hover {
            border-color: $accent;
        }
    }
}

.sidebar-backdrop {
    display: none;
}

@media (max-width: 1100px) {
    .docs-body {
        grid-template-columns: 240px minmax(0, 1fr);
    }

    .docs-toc {
        display: none;
    }
}

@media (max-width: 768px) {
    .docs-header {
        padding: 0 1rem;

        .menu-toggle {
            display: block;
        }
    }

    .docs-body {
        grid-template-columns: minmax(0, 1fr);
    }

    .docs-sidebar {
        position: fixed;
        top: $header-height;
        left: 0;
        bottom: 0;
        width: 260px;
        max-height: none;
        background: #fff;
        z-index: 20;
        transform: translateX(-100%);
        transition: transform 0.2s ease;

        &.open {
            transform: translateX(0);
        }
    }

    .sidebar-backdrop {
        display: block;
        position: fixed;
        inset: $header-height 0 0 0;
        background: rgba(0, 0, 0, 0.3);
        z-index: 10;
    }

    .docs-main {
        padding: 1.5rem 1rem 3rem;
    }
}
</style>

<style lang="scss">
// Styles for the rendered markdown (v-html content is not reached by scoped styles).
.markdown-body {
    line-height: 1.7;
    font-size: 1.05rem;

    h1 {
        font-size: 2.2rem;
        margin: 0 0 1.25rem;
    }

    h2 {
        font-size: 1.5rem;
        margin: 2.5rem 0 1rem;
        padding-top: 1.5rem;
        border-top: 1px solid #e5e7eb;
    }

    h3 {
        font-size: 1.2rem;
        margin: 2rem 0 0.75rem;
    }

    h4 {
        font-size: 1.05rem;
        margin: 1.5rem 0 0.5rem;
    }

    h1, h2, h3, h4 {
        line-height: 1.3;
        scroll-margin-top: 1rem;
    }

    p, ul, ol {
        margin: 0 0 1rem;
    }

    li + li {
        margin-top: 0.25rem;
    }

    :not(pre) > code {
        font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
        font-size: 0.875em;
        background: #f3f4f6;
        color: #c7254e;
        padding: 0.15em 0.4em;
        border-radius: 4px;
    }

    pre.hljs {
        position: relative;
        margin: 0 0 1.25rem;
        padding: 1rem 1.25rem;
        border-radius: 8px;
        overflow-x: auto;
        font-size: 0.875rem;
        line-height: 1.6;

        code {
            font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
        }

        .code-lang {
            position: absolute;
            top: 0.4rem;
            right: 0.75rem;
            font-size: 0.7rem;
            color: #8b949e;
            text-transform: uppercase;
        }
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin: 0 0 1.25rem;
        font-size: 0.95rem;
        display: block;
        overflow-x: auto;
    }

    th, td {
        border: 1px solid #e5e7eb;
        padding: 0.5rem 0.75rem;
        text-align: left;
        vertical-align: top;
    }

    th {
        background: #f9fafb;
    }

    blockquote {
        margin: 0 0 1.25rem;
        padding: 0.75rem 1rem;
        border-left: 4px solid #646cff;
        background: rgba(100, 108, 255, 0.06);
        border-radius: 0 6px 6px 0;

        p:last-child {
            margin-bottom: 0;
        }
    }
}
</style>
