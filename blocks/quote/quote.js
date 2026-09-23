export default function decorate(block) {
  const [quoteWrapper, authorWrapper] = block.children;

  const blockquote = document.createElement('blockquote');
  blockquote.textContent = quoteWrapper.textContent.trim();

  const cite = document.createElement('cite');
  cite.textContent = authorWrapper?.textContent.trim() || '';

  block.textContent = '';
  block.append(blockquote);
  if (cite.textContent) block.append(cite);
}
