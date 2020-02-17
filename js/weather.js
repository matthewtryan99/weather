let cityDiv = document.querySelector('.city')
let tempDiv = document.querySelector('.temp')

let city = 'Houston'

fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=34cf12258bc4a6886c4f43af25681bfe`)
.then(response=>response.json())
.then((e)=>{
    console.log(e);
    cityDiv.innerHTML = e.name;

    let degC = e.main.temp - 273.15;

    let degF = degC * 1.8 + 32;

    tempDiv.innerHTML = `${Math.floor(degF)}°`;
})

let submit = document.querySelector('.btn')
let textBar = document.querySelector('.text-bar')

submit.addEventListener('click', (e)=>{
    // city = textBar.textContent;
    // fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=34cf12258bc4a6886c4f43af25681bfe`)
    // .then(response=>response.json())
    // .then((e)=>{
    //     console.log(e);
    //     cityDiv.innerHTML = e.name;

    //     let degC = e.main.temp - 273.15;

    //     let degF = degC * 1.8 + 32;

    //     tempDiv.innerHTML = `${Math.floor(degF)}°`;
    // })

    console.log(textBar.textContent);
})
