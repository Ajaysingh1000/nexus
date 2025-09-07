
function clock(){
    const timer = document.getElementById('root')
    const now = new Date() 
    const Indiantime =  now.toLocaleTimeString()
    timer.innerHTML = Indiantime
}

setInterval(clock, 1000);
const timer = document.getElementById('root')
timer.style.fontSize = '200px'
timer.style.height = '100vh'
timer.style.display = 'flex'
timer.style.justifyContent = 'center'
timer.style.alignItems = 'center'   

