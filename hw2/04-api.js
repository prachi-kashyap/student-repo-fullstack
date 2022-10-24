const url = 'https://restcountries.com/v2/all';

const getData = (url) => {
    fetch(url)
        .then((data) => {
            return data.json();
        })
        .then((countryList) => {
            countryList.forEach((country) => {
                const list = document.getElementById('results');
                const countryListIndex = document.createElement('li');
                countryListIndex.innerText = `${country.name} - ${country.population}`;
                list.append(countryListIndex);
            });
        })
        .catch((err) => {
            console.log('error', err);
            list.innerHTML = 'Some error occurred';
        });
};

getData(url);
