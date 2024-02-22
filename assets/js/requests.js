let countries = [];

async function request(){
    let response = await fetch('https://restcountries.com/v3.1/all');
    let json = await response.json();

    countries = json;
}

request();