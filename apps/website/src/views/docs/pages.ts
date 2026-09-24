export interface DocPage {
  slug: string;
  title: string;
}

export interface DocSection {
  title: string;
  pages: DocPage[];
}

// Sidebar order. Each slug maps to `content/<slug>.md`.
export const docSections: DocSection[] = [
  {
    title: 'Getting Started',
    pages: [
      { slug: 'introduction', title: 'Introduction' },
      { slug: 'installation', title: 'Installation' },
      { slug: 'quick-start', title: 'Quick Start' },
    ],
  },
  {
    title: 'Guide',
    pages: [
      { slug: 'dymik-form', title: 'DymikForm Component' },
      { slug: 'form-schema', title: 'Form Schema' },
      { slug: 'validation', title: 'Validation' },
    ],
  },
  {
    title: 'API Reference',
    pages: [
      { slug: 'form-model', title: 'FormModel' },
    ],
  },
];

export const docPages: DocPage[] = docSections.flatMap((section) => section.pages);

export const defaultDocSlug = docPages[0].slug;

const contentLoaders = import.meta.glob<string>('./content/*.md', {
  query: '?raw',
  import: 'default',
});

export function loadDocContent(slug: string): Promise<string> | undefined {
  return contentLoaders[`./content/${slug}.md`]?.();
}
