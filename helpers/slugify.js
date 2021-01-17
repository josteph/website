export default function slugify(text) {
  return text
    .toLowerCase()
    .replace(/\W+/g, '-')
    .replace(/[^\w-]+/g, '');
}
