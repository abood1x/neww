// تحقق من تسجيل الدخول
if (localStorage.getItem('loggedIn') !== 'true') {
    window.location.href = 'login.html';
}

let poems = JSON.parse(localStorage.getItem('poems')) || [];

function renderPoems() {
    const poemsContainer = document.getElementById('poems');
    poemsContainer.innerHTML = '';
    poems.forEach((poem, index) => {
        const poemDiv = document.createElement('div');
        poemDiv.className = 'poem';
        poemDiv.innerHTML = `
            <h3>${poem.title}</h3>
            <button onclick="editPoem(${index})">تعديل</button>
            <button onclick="deletePoem(${index})">حذف</button>
        `;
        poemsContainer.appendChild(poemDiv);
    });
    localStorage.setItem('poems', JSON.stringify(poems));
}

function addOrUpdatePoem() {
    const title = document.getElementById('poem-title').value;
    const content = document.getElementById('poem-content').value;
    const index = document.getElementById('poem-index').value;

    if (index) {
        poems[index] = { title, content };
    } else {
        poems.push({ title, content });
    }

    resetForm();
    renderPoems();
}

function editPoem(index) {
    const poem = poems[index];
    document.getElementById('poem-title').value = poem.title;
    document.getElementById('poem-content').value = poem.content;
    document.getElementById('poem-index').value = index;
}

function deletePoem(index) {
    poems.splice(index, 1);
    renderPoems();
}

function resetForm() {
    document.getElementById('poem-title').value = '';
    document.getElementById('poem-content').value = '';
    document.getElementById('poem-index').value = '';
}

document.getElementById('submit-btn').addEventListener('click', addOrUpdatePoem);

renderPoems();
