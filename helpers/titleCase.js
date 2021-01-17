/**
 * Capitalize every character in the first occurrence after each word according to specified delimiter.
 *
 * @param  {string} text string to be formatted
 * @param  {string} delimiter string to be used in split method
 *
 * @return {string} value will be string with a proper text
 *
 * @example
 *   const result = titleCase('baju bayi murah'); // result = Baju Bayi Murah
 */

export default function titleCase(text, delimiter = ' ') {
  return String(text)
    .split(delimiter)
    .map(res => res.charAt(0).toUpperCase() + res.slice(1).toLowerCase())
    .join(' ');
}
