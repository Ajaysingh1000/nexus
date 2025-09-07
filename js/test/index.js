
// function clock(){
//   const timer = document.getElementById('root')
//   const now = new Date()
//   const Indiantime =  now.toLocaleTimeString()
//   timer.innerHTML = Indiantime
// }

// setInterval(clock, 1000);



// console.log(`Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`);

// setInterval(()=>{
//   console.log("hello");
  
// }, 1000);

let hours = 0;
let minutes = 0;
let seconds = 0;

function clock() {
  // Format time with leading zeros
  const formatNumber = (num) => (num < 10 ? `0${num}` : num);

  // Update the time display
  const timer = document.getElementById('time');
  timer.innerHTML = `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`;

  // Increment the time
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;  
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
}

// Run the clock every second
setInterval(clock, 1000);

// Initialize clock immediately on page load
// clock();



