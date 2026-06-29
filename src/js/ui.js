export function autoResize(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 110) + 'px';
}

export function formatResponse(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/^#{1,3} (.+)$/gm, '<strong>$1</strong>')
    .replace(/^[-*•] (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/gs, match => `<ul>${match}</ul>`)
    .replace(/\n\n+/g, '<br><br>')
    .replace(/\n/g, '<br>');
}