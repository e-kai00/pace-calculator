let hrInput = document.getElementById('hr');
let minInput = document.getElementById('min');
let secInput = document.getElementById('sec');
let distanceInput = document.getElementById('user-distance');
let pacePaceMin = document.getElementById('pace-min');
let pacePaceSec = document.getElementById('pace-sec');
let splitItems = document.getElementsByClassName('split-class')
 


// wait for the DOM finish loading
document.addEventListener('DOMContentLoaded', function () {

    // default values
    distanceInput.value = 10000;
    pacePaceMin.value = 4;
    pacePaceSec.value = 25;
    calculateTimeResult()

    // change distances selector
    let distanceItems = document.getElementsByClassName('distance-item');

    for (let item = 0; item < distanceItems.length; item++) { // code from www.w3schools.com/, slightly modified   
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
                calculateTimeResult(); // to fix it
            } else {
                let setDistance = this.getAttribute('data-distance');
                distanceInput.value = setDistance
            }
        })
    }

    calculateSplits()

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

function calculateSplits() {

    let min = parseFloat(pacePaceMin.value);
    let sec = parseFloat(pacePaceSec.value);
    let totalMin = min + sec / 60;

    
    let splitText1 = document.getElementById('split1')     // to fix convert in min:sec
    let splitTime = totalMin * 1;
    let minS = Math.floor(splitTime)
    let secS = Math.round((splitTime - min) * 60)
    splitText1.textContent = minS + ":" + secS

    let splitText2 = document.getElementById('split2')
    splitText2.textContent = (totalMin * 0.8).toFixed(2);

    let splitText3 = document.getElementById('split3')
    splitText3.textContent = totalMin * 0.4

    let splitText4 = document.getElementById('split4')
    splitText4.textContent = totalMin * 0.2

    let splitText5 = document.getElementById('split5')
    splitText5.textContent = totalMin * 0.1

   
}