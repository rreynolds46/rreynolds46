// Variables //
const totalUsers = document.querySelector('#total-users');
const paymentTotal = document.querySelector('#payment-total');
const paymentLength = document.querySelector("#payment-length");
const dailySpend = document.querySelector('#daily-spend');
const hourlySpend = document.querySelector('#hourly-spend');
const efficiency = document.querySelector('#efficiency');
const hourlyIncrease = document.querySelector('#hourly-increase');
const inputs = document.querySelectorAll('input');
const fte = document.querySelector('#fte');
const gain = document.querySelector('#profitable-gain');
const slider = document.querySelector('#slider');
const sliderValue = document.querySelector('#slider-value');
const outcomeCard = document.querySelector('.rtr-cost-outcome-card');

var prefixes = ['-o-', '-ms-', '-moz-', '-webkit-'];

slider.value = 10;
sliderValue.value = 10 + "%";
gain.value = "0.00";

function calculateValues() {
    
    // Daily Cost
    dailySpend.value = (paymentTotal.value / paymentLength.value / 260).toFixed(2);
    dailySpend.value = isFinite(+dailySpend.value) ? dailySpend.value : "";
    hourlySpend.value = (dailySpend.value / 8).toFixed(2);
    hourlySpend.value = isFinite(+hourlySpend.value) ? hourlySpend.value : "";
    hourlyIncrease.value = (hourlySpend.value / totalUsers.value).toFixed(2);
    hourlyIncrease.value = isFinite(+hourlyIncrease.value) ? hourlyIncrease.value : "";

    efficiency.value = (fte.value * (slider.value/100)).toFixed(2);
    efficiency.value = isFinite(+efficiency.value) ? efficiency.value : "";
    gain.value = (efficiency.value - hourlyIncrease.value).toFixed(2);
    gain.value = isFinite(+gain.value) ? gain.value : "";
    sliderValue.value = slider.value + "%";

    if(gain.value > .5) {  
            outcomeCard.style.background = "linear-gradient(#1d976c, #93f9b9)";
    } else if(gain.value < 0) {
            outcomeCard.style.background = "linear-gradient(#ef3b36, #ffffff)";
    } else {
            outcomeCard.style.background = 'linear-gradient(#f2994a, #f2c94c)';
    }
}






inputs.forEach(input => input.addEventListener('change',calculateValues));
slider.addEventListener('mousemove',calculateValues);
