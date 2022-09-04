const API_KEY = `0924b627f5e534fbb72630a3b921d7e2`;

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => displaytemperature(data))
}

// loadTemperature("dhaka")

const displaytemperature = data =>{
    setInnerText("temperature",data.main.temp)
    console.log(data.main.temp)
    setInnerText('weather',data.weather[0].main)
    console.log(data.weather[0].main)
}


const setInnerText = (id,text)=>{
    const temperature =document.getElementById(id);
    temperature.innerText = text;
}



document.getElementById('btnSearch').addEventListener('click',function(){
    const inputdataFild = document.getElementById('inputdata');
    const city = inputdataFild.value;
    loadTemperature(city);

    document.getElementById('cityName').innerText = city;
     

})

