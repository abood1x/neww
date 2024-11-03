const params = new URLSearchParams(window.location.search);
const index = params.get('index');

const poems = JSON.parse(localStorage.getItem('poems')) || [];

if (index !== null && index < poems.length) {
    const poem = poems[index];
    document.getElementById('poem-title').textContent = poem.title;
    document.getElementById('poem-content').innerHTML = `<p>${poem.content}</p>`;
} else {
    document.getElementById('poem-content').innerHTML = '<p>القصيدة غير موجودة.</p>';
}
