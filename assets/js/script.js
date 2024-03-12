const searchBar = document.querySelector('.search-bar');
const input = document.querySelector('.search-bar input[type="text"]');
const banner = document.querySelector('.banner');
const footer = document.querySelector('.footer');
const mainContent = document.querySelector('.main-content');

function render(array){
    let htmlContent = '';

    array.forEach(country => {
        htmlContent += 
        `<div class="country">
            <div class="flag"><img src="${country.flags.svg}" alt="${country.name.common}"></div>
            <div class="country-name">${country.name.common}</div>
            <div class="see-more">
                <div class="button bg-gradient" onClick="openModal('${country.name.common}')">See More</div>
            </div>
        </div>`
    });

    mainContent.innerHTML = htmlContent;
}

function toHomePage(){
    if(banner.style.display === 'none'){
        banner.style.display = 'block';
        searchBar.style.position = 'absolute';
        footer.classList.remove('dark');
        footer.classList.add('light');
        mainContent.style.display = 'none';
    }
}
function toContentPage(){
    banner.style.display = 'none';
    searchBar.style.position = 'static';
    footer.classList.remove('light');
    footer.classList.add('dark');
    mainContent.style.display = 'grid';
}

function search(inputValue){
    if(inputValue.trim()){

        let newArray = countries.filter(country => 
            country.name.common.toLowerCase().includes(inputValue.toLowerCase())
            || country.name.official.toLowerCase().includes(inputValue.toLowerCase())
            || country.translations.por.common.toLowerCase().includes(inputValue.toLowerCase())
            || country.translations.por.official.toLowerCase().includes(inputValue.toLowerCase())
        );

        toContentPage();

        if(newArray.length > 0){
            render(newArray);
        }else{
            mainContent.innerHTML = `<span>Nenhum resultado para <strong>"${inputValue}"</strong></span>`;
        }
    }
}

/* Voltando pra Home */
document.querySelector('.header .logo').addEventListener('click', toHomePage);

/* Listagem do request */
document.querySelector('.list-all').addEventListener('click', () => {
    toContentPage();
    render(countries);
});

/* busca por pesquisa */
document.querySelector('.search-icon').addEventListener('click', () => search(input.value));

window.addEventListener('keydown', (event) => {
    if(event.key.toLowerCase() === 'enter'){
        search(input.value);
    }
});