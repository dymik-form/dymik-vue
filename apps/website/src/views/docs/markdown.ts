import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js/lib/core';
import bash from 'highlight.js/lib/languages/bash';
import json from 'highlight.js/lib/languages/json';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';

hljs.registerLanguage('bash', bash);
hljs.registerLanguage('json', json);
hljs.registerLanguage('scss', scss);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('xml', xml);
hljs.registerAliases(['ts'], { languageName: 'typescript' });
hljs.registerAliases(['vue', 'html'], { languageName: 'xml' });
hljs.registerAliases(['sh', 'shell'], { languageName: 'bash' });

export interface DocHeading {
  id: string;
  text: string;
  level: number;
}

export interface RenderedDoc {
  html: string;
  title: string;
  headings: DocHeading[];
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

function escapeHtml(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

const md = new MarkdownIt({
  html: false,
  linkify: true,
  highlight(code, lang) {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
    const highlighted = language === 'plaintext'
      ? escapeHtml(code)
      : hljs.highlight(code, { language }).value;

    return `<pre class="hljs"><span class="code-lang">${escapeHtml(lang)}</span><code>${highlighted}</code></pre>`;
  },
});

export function renderDoc(source: string): RenderedDoc {
  const tokens = md.parse(source, {});
  const headings: DocHeading[] = [];
  const usedIds = new Set<string>();
  let title = '';

  tokens.forEach((token, index) => {
    if (token.type !== 'heading_open') return;

    const text = tokens[index + 1].content;
    const level = Number(token.tag.slice(1));
    let id = slugify(text) || 'section';

    for (let n = 1; usedIds.has(id); n++) {
      id = `${slugify(text)}-${n}`;
    }
    usedIds.add(id);
    token.attrSet('id', id);

    if (level === 1 && !title) {
      title = text;
    } else if (level === 2 || level === 3) {
      headings.push({ id, text: text.replace(/`/g, ''), level });
    }
  });

  return { html: md.renderer.render(tokens, md.options, {}), title, headings };
}
