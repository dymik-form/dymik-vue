import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router';
import DirectusPreview from '@/views/directus-preview/index.vue';
import Home from '@/views/home/index.vue';
import JsonPreviewForm from '@/views/json-preview/json-preview-form.vue';

// Old VitePress URLs such as /docs/index.html or /docs/install.html
const legacyDocSlugs: Record<string, string> = {
  index: '',
  install: 'installation',
  usage: 'quick-start',
  components: 'dymik-form',
  interfaces: 'form-schema',
  models: 'form-model',
  validations: 'validation',
};

function redirectLegacyDocsUrl(to: RouteLocationNormalized) {
  const slug = to.params.slug as string | undefined;

  if (slug?.endsWith('.html')) {
    const page = slug.slice(0, -'.html'.length);
    return { path: `/docs/${legacyDocSlugs[page] ?? page}`, hash: to.hash };
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/directus-preview',
    name: 'DirectusPreview',
    component: DirectusPreview
  },
  {
    path: '/docs/:slug?',
    name: 'Docs',
    component: () => import('@/views/docs/index.vue'),
    beforeEnter: redirectLegacyDocsUrl
  },
  {
    path: '/preview',
    name: 'Preview',
    component: () => import('@/views/json-preview/index.vue'),
    children: [
      {
        path: 'form',
        name: 'JsonPreviewForm',
        component: JsonPreviewForm
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;