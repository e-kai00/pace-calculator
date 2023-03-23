let userChoice = document.getElementsByClassName('choice-container')
let hrInput = document.getElementById('hr');
let minInput = document.getElementById('min');
let secInput = document.getElementById('sec');
let distanceInput = document.getElementById('user-distance');
let pacePaceMin = document.getElementById('pace-min');
let pacePaceSec = document.getElementById('pace-sec');


// wait for the DOM finish loading
document.addEventListener('DOMContentLoaded', function () {

    // default values
    distanceInput.value = 10000;
    pacePaceMin.value = 4;
    pacePaceSec.value = 25;
    calculateTimeResult()

    // change distances selector
    let distanceItems = document.getElementsByClassName('distance-item');
                    
    for (let item = 0; item < distanceItems.length; item++) {                   // code from www.w3schools.com/, slightly modified   
        distanceItems[item].addEventListener('click', function () {
            let current = document.getElementsByClassName('active');
            current[0].className = current[0].className.replace(' active', '');
            this.className += ' active';
        })
    }

    // set chosen distance
    for (item of distanceItems) {
        item.addEventListener('click', function () {
            if (this.getAttribute('data-distance') === 'input') {
                calculateTimeResult();                                           
            } else {
                let setDistance = this.getAttribute('data-distance');
                distanceInput.value = setDistance
            }
        })
    }    
})



function calculatePace() {

    let hr = parseFloat(hrInput.value);
    let min = parseFloat(minInput.value);
    let sec = parseFloat(secInput.value);
    let distance = parseInt(distanceInput.value);

    let totalMin = hr * 60 + min + sec / 60;
    let pace = totalMin / (distance / 1000)

    let paceMin = Math.floor(pace)
    let paceSec = Math.round((pace - paceMin) * 60);

    if (paceSec < 10) {
        paceSec = "0" + paceSec;
    }

    pacePaceMin.value = paceMin;
    pacePaceSec.value = paceSec;
}


function calculateTimeResult() {

    let min = parseFloat(pacePaceMin.value);
    let sec = parseFloat(pacePaceSec.value);
    let distance = parseInt(distanceInput.value);
    let totalMin = min * 60 + sec;

    let result = totalMin * (distance / 1000);

    let timeHr = Math.floor(result / 3600);
    let timeMin = Math.floor(result % 3600 / 60);
    let timeSec = Math.floor(result % 60)
    
    hrInput.value = timeHr;
    minInput.value = timeMin;
    secInput.value = timeSec;
}