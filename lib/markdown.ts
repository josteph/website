import remark from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';
import slug from 'remark-slug';
import autolink from 'remark-autolink-headings';
import hint from 'remark-hint';

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(slug)
    .use(autolink, {
      behavior: 'append',
      content: {
        type: 'element',
        tagName: 'span',
        properties: { className: ['icon', 'icon-link'] },
        children: [{ type: 'text', value: '🔗' }],
      },
    })
    .use(hint)
    .use(html)
    .use(prism)
    .process(markdown);

  return result.toString();
}
