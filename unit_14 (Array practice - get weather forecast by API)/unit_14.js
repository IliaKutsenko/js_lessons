// Для удобства, объявляем переменную, в которую потом занесем наш будущий запрос с переменным ID города 
let api;


// Создаем массив с ID городов
const cities = {
    5128581: 'New York',
    698740: 'Odessa',
    711867: 'Bohuslav',
    703448: 'Kyiv',
}


// Функция, создающая список в HTML (а также присваивает конкретный ID города для начального запуска страницы)
function insert() {
    let choice = document.createElement('select');
    choice.classList.add('cityList');
    document.querySelector('.city').appendChild(choice);
    for (let k in cities) {
        let oneCity = document.createElement('option');
        oneCity.setAttribute('id', 'cityId');
        oneCity.value = k;
        oneCity.innerHTML = cities[k];
        choice.appendChild(oneCity);
    }
    getWeather(698740);
    showWeather();
}


// Функция, ищущая конкретный, выбранный ID нужного города и добавляющая его значение в ссылку с API
function findCity() {
    let select = document.querySelector('select');
    select.addEventListener('change', () => {
        getWeather(select.value);
        showWeather();
    });
}


// Формирование запроса по API
function getWeather(cityId) {
    api = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=52005501c74fe576aa96ec2203035226`;
}



// Функция, запускающая запрос
function showWeather() {
    fetch(api)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);
            document.querySelector('.city-name').textContent = data.name;
            document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273.15) + 'C' + '&deg';
            document.querySelector('.icon').innerHTML = '<img src="icons/icon.png">';
            document.querySelector('.description').innerHTML = data.weather[0]['description'];
            document.querySelector('.wind-direction').innerHTML = data.wind['deg'] + '&deg';
            document.querySelector('.wind-speed').innerHTML = data.wind['speed'] + 'm/s';
            document.querySelector('.pressure').innerHTML = data.main['pressure'] + ' mm';
        })
}

// Запуск
insert();
findCity();