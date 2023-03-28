import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import { remarkCodeHike } from '@code-hike/mdx';
import { createRequire } from 'module';

import remarkToc from 'remark-toc';
import remarkHeadings from 'remark-autolink-headings';
import remarkHint from 'remark-hint';
import remarkExternalLinks from 'remark-external-links';
import remarkSlug from 'remark-slug';

const require = createRequire(import.meta.url);
const theme = require('shiki/themes/slack-dark.json');

const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the blog',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description of the blog',
      required: true,
    },
    published: {
      type: 'string',
      description: 'The published date of the blog',
      required: true,
    },
    published_timestamp: {
      type: 'string',
      description: 'The timestamp of the published date',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/blog/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'src/blogs',
  documentTypes: [Blog],

  mdx: {
    remarkPlugins: [
      [remarkCodeHike, { theme }],
      remarkSlug,
      remarkToc,
      remarkHint,
      [
        remarkHeadings,
        {
          behavior: 'append',
          content: {
            type: 'element',
            tagName: 'span',
            properties: { className: ['icon', 'icon-link'] },
            children: [{ type: 'text', value: '🔗' }],
          },
        },
      ],
      remarkExternalLinks,
    ],
  },
});
