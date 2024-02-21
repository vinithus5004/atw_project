const searchBar = document.querySelector('.search-bar');
const input = document.querySelector('.search-bar input[type="text"]');
const banner = document.querySelector('.banner');
const footer = document.querySelector('.footer');
const mainContent = document.querySelector('.main-content');

input.addEventListener('focus', onFocus);
input.addEventListener('blur', onBlur);

function onFocus(){
    searchBar.style.position = 'static';
}

function onBlur(){
    if(this.value === ''){
        searchBar.style.position = 'absolute';
    }
}

function listAll(){
    let htmlContent = '';

    array.forEach(country => {
        htmlContent += 
        `<div class="country">
            <div class="flag"><img src="${country.flags.svg}" alt="${country.name.common}"></div>
            <div class="country-name">${country.name.common}</div>
        </div>`
    });

    mainContent.innerHTML = htmlContent;
}

/* Voltando pra Home */
document.querySelector('.header .logo').addEventListener('click', () => {
    if(banner.style.display === 'none'){
        banner.style.display = 'block';
        searchBar.style.position = 'absolute';
        input.addEventListener('blur', onBlur);
        footer.classList.remove('dark');
        footer.classList.add('light');
        mainContent.style.display = 'none';
    }
});

/* Listagem do request */
document.querySelector('.list-all').addEventListener('click', () => {
    banner.style.display = 'none';
    searchBar.style.position = 'static';
    input.removeEventListener('blur', onBlur);
    footer.classList.remove('light');
    footer.classList.add('dark');
    mainContent.style.display = 'grid';
    listAll();
});

/* busta por pesquisa */
// use https://restcountries.com/v3.1/name/{name}