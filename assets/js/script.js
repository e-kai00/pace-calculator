let hrInput = document.getElementById('hr');
let minInput = document.getElementById('min');
let secInput = document.getElementById('sec');
let distanceInput = document.getElementById('user-distance');
let pacePaceMin = document.getElementById('pace-min');
let pacePaceSec = document.getElementById('pace-sec');
let splitItems = document.getElementsByClassName('split-class');
let splitClassInsert = document.getElementsByClassName('split-class-insert');



// wait for the DOM finish loading
document.addEventListener('DOMContentLoaded', function () {

    // default values
    distanceInput.value = 10000;
    pacePaceMin.value = 4;
    pacePaceSec.value = 25;
    calculateTimeResult();

    // change distances selector (code from www.w3schools.com)
    let distanceItems = document.getElementsByClassName('distance-item');
    
    for (let item = 0; item < distanceItems.length; item++) {                
        distanceItems[item].addEventListener('click', function () {
            let current = document.getElementsByClassName('active');
            current[0].className = current[0].className.replace(' active', '');
            this.className += ' active';
        })
    }

    // set distance
    for (item of distanceItems) {
        item.addEventListener('click', function () {
            let setDistance = this.getAttribute('data-distance');
            distanceInput.value = setDistance
            calculateTimeResult();
        })
    }
    
    calculateSplits();    
})


/**
 *  Take in distance and time to calculate pace
 */
function calculatePace() {

    let hr = parseFloat(hrInput.value);
    let min = parseFloat(minInput.value);
    let sec = parseFloat(secInput.value);
    let distance = parseInt(distanceInput.value);

    let totalMin = hr * 60 + min + sec / 60;
    let pace = totalMin / (distance / 1000);

    // convert decimals to min & sec
    let paceMin = Math.floor(pace);
    let paceSec = Math.round((pace - paceMin) * 60);

    if (paceSec < 10) {
        paceSec = "0" + paceSec;
    }

    pacePaceMin.value = paceMin;
    pacePaceSec.value = paceSec;
}


/**
 * Take in distance and pace to calculate time result
 */
function calculateTimeResult() {

    let min = parseFloat(pacePaceMin.value);
    let sec = parseFloat(pacePaceSec.value);
    let distance = parseInt(distanceInput.value);
    let totalSec = min * 60 + sec;

    let result = totalSec * (distance / 1000);

    // convert decimals to hours, minutes, seconds
    let timeHr = Math.floor(result / 3600);
    let timeMin = Math.floor(result % 3600 / 60);
    let timeSec = Math.floor(result % 60);

    hrInput.value = timeHr;
    minInput.value = timeMin;
    secInput.value = timeSec;
}


/**
 * Take in pace to calculate time for splits of
 * 1000m, 800m, 400m, 200m and 100m
 */
function calculateSplits() {
    
    let min = parseFloat(pacePaceMin.value);          
    let sec = parseFloat(pacePaceSec.value);
    let totalMin = min + sec / 60;                       

    let splitDist = [1, 0.8, 0.4, 0.2, 0.1];

    // calculate time for each split 
    let timeTimerContainer = [];  
    
    for (let i = 0; i < splitDist.length; i++) {          
        let time = splitDist[i] * totalMin;
        // convert decimals to min & sec 
        timeTime = ((((time - Math.floor(time)) *60) / 100) + Math.floor(time)).toFixed(2);   
        timeTimerContainer.push(timeTime);            
    }        
  
   for (let s = 0; s < splitClassInsert.length; s++) {
        splitClassInsert[s].textContent = timeTimerContainer[s]; 
        if (splitClassInsert[s].textContent === "NaN") {
            splitClassInsert[s].textContent = 0;
        }    
   }
}




