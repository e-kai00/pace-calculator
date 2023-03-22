let hrInput = document.getElementById('hr');
let minInput = document.getElementById('min');
let secInput = document.getElementById('sec');
let distanceInput = document.getElementById('user-distance');
let paceText = document.getElementById('pace-text');                              // to remove later
let pacePaceMin = document.getElementById('pace-min');
let pacePaceSec = document.getElementById('pace-sec');


// wait for the DOM finish loading
document.addEventListener('DOMContentLoaded', function () {
    let distanceItems = document.getElementsByClassName('distance-item');

    // change distance choice                 
    for (let item = 0; item < distanceItems.length; item++) {             // code from www.w3schools.com/, slightly modified   
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
                calculatePace();
            } else {
                let setDistance = this.getAttribute('data-distance');
                distanceInput.value = setDistance

            }
        })
    }

    document.getElementById("pace-sec").addEventListener("keydown", function (event) {            // to modify later
        if (event.key === "Enter") {
            calculateTimeResult();
        }
    })

    distanceInput.value = 10000;
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
    let totalMin = min + sec / 60;    

    let timeResult = totalMin * (distance / 1000);
    paceText.textContent = "You finish distance in " + timeResult                // to remove
}