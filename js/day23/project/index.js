

document.querySelector('button').addEventListener('click' , ()=>{
    let res = document.getElementById('weatherInfo')
    let input = document.getElementById('location').value

    let data = fetch(`http://api.weatherapi.com/v1/current.json?key=71bcb85dc38b4175b89193511250401&q=${input}&aqi=yes`)

    
    
    data
    .then(response=>response.json())
    .then((data)=>{
        res.innerHTML = `weather of ${input} is ${data.current.temp_c}<br>`
        res.append('condition is ' + data.current.condition.text)
    })

})