const modalContainer = document.querySelector('.modal-container');
const countryInfo = document.querySelector('.modal-container .modal .country-info');
const closeModal = document.querySelector('.close-modal i');

closeModal.addEventListener('click', () =>{
    modalContainer.style.opacity = 0;
    modalContainer.style.visibility = 'hidden';

    countryInfo.innerHTML = '';

    document.querySelector('body').style.overflow = 'auto';
});

function getCountryObject(countryName){
    let country = countries.find(country => country.name.common === countryName);

    return country;
}

function openModal(countryName){
    document.querySelector('body').style.overflow = 'hidden';

    let country = getCountryObject(countryName);

    if(country){
        let htmlContent = 
        `<div class="images-container">
            <img src="${country.flags.svg}" alt="flag">
            <img src="${country.coatOfArms.svg}" alt="coat of arms">
        </div>
        <div class="view-on-map"><a href="${country.maps.googleMaps}" target="_blank" class="button bg-gradient">View on Map</a></div>
        <ul class="country-about">
            <li><strong>Official Name: </strong>${country.name.official}</li>
            <li><strong>Common Name: </strong>${country.name.common}</li>
            <li><strong>Capital: </strong>${country.capital ? country.capital.join(', ') : 'none'}</li>
            <li><strong>Languages: </strong>${Object.values(country.languages).join(', ')}</li>
            <li><strong>Region: </strong>${country.region}</li>
            <li><strong>Subregion: </strong>${country.subregion ?? 'none'}</li>
            <li><strong>Population: </strong>${country.population}</li>
            <li><strong>Landlocked: </strong>${country.landlocked ? 'Yes' : 'No'}</li>
            <li><strong>Independet? </strong>${country.independent ? 'Yes' : 'No'}</li>
            <li><strong>United Nations member?  </strong>${country.unMember ? 'Yes' : 'No'}</li>
            <li><strong>LatLng: </strong>[${country.latlng.map(value => value.toFixed(2)).join(', ')}]</li>  
            <li><strong>Borders: </strong>${country.borders ? country.borders.join(', ') : 'none'}</li>
            <li><strong>Time Zones: </strong>[${country.timezones.join(', ')}]</li>
        </ul>`;

        countryInfo.innerHTML = htmlContent;
    }

    modalContainer.style.opacity = 1;
    modalContainer.style.visibility = 'visible';
}