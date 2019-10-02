const info = document.querySelector('.info');
const btn = document.querySelector('#btn-ajax');
const request = new XMLHttpRequest();

request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
        let response = request.response;
        let obj = JSON.parse(response);
        if (obj.ip) {
            userInfo(obj.ip);
        }
    }
};

const userInfo = async (ip) => {
    const req = await fetch(`http://ip-api.com/json/${ip}?lang=ru&fields=continent,country,region,city,district`);
    const res = await req.json();
    console.log(res);
    info.innerHTML = `
                   <p>Континент: ${res.continent}</p>
                   <p>Страна: ${res.country}</p>
                   <p>Регион: ${res.region}</p>
                   <p>Город: ${res.city}</p>
                `;
};

btn.addEventListener('click', (e) => {
   request.open('GET', 'https://api.ipify.org/?format=json');
   request.send();
});