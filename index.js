let poems = JSON.parse(localStorage.getItem('poems')) || [];

function renderPoems() {
    const poemsContainer = document.getElementById('poems');
    poemsContainer.innerHTML = '';
    poems.forEach((poem, index) => {
        const poemDiv = document.createElement('div');
        poemDiv.className = 'poem';
        poemDiv.innerHTML = `
            <h3><a href="poem.html?index=${index}">${poem.title}</a></h3>
        `;
        poemsContainer.appendChild(poemDiv);
    });
    localStorage.setItem('poems', JSON.stringify(poems));
}

renderPoems();
