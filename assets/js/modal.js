const modalContainer = document.querySelector('.modal-container');
const modal = document.querySelector('.modal-container .modal');
const closeModal = document.querySelector('.close-modal i');

closeModal.addEventListener('click', () =>{
    modalContainer.style.opacity = 0;
    modalContainer.style.visibility = 'hidden';

    modal.innerHTML = '';
});

function getCountryObject(countryName){
    let country = countries.find(country => country.name.common === countryName);

    return country;
}

function openModal(countryName){
    let country = getCountryObject(countryName);

    let htmlContent = 
    `<div class="images-container">
        <img src="${country.flags.svg}" alt="flag">
        <img src="${country.coatOfArms.svg}" alt="coat of arms">
    </div>
    <div class="view-on-map"><a href="${country.maps.googleMaps}" target="_blank" class="button bg-gradient">View on Map</a></div>
    <ul class="country-about">
        <li><strong>Official Name: </strong>${country.name.official}</li>
        <li><strong>Common Name: </strong>${country.name.common}</li>
        <li><strong>Capital: </strong>${country.capital[0]}</li>
        <li><strong>Region: </strong>(${country.region})</li>
        <li><strong>Subregion: </strong>${country.subregion}</li>
        <li><strong>Population: </strong>${country.population}</li>
        <li><strong>LatLng: </strong>${country.latlng}</li>
        <li><strong>Time Zones: </strong>[${country.timezones}]</li>
        <li><strong>Borders: </strong>${country.borders ?? 'none'}</li>
        <li><strong>Landlocked: </strong>${country.landlocked ? 'Yes' : 'No'}</li>
        <li><strong>Independet? </strong>${country.independent ? 'Yes' : 'No'}</li>
        <li><strong>United Nations member?  </strong>${country.unMember ? 'Yes' : 'No'}</li>
    </ul>`;

    modal.innerHTML = htmlContent;

    modalContainer.style.opacity = 1;
    modalContainer.style.visibility = 'visible';
}