// wait for the DOM finish loading

document.addEventListener('DOMContentLoaded', function () {                                 
    let distanceItems = document.getElementsByClassName('distance-item');  
            
     // change distance choice                 
    for (let item = 0; item < distanceItems.length; item++) {                      // code from www.w3schools.com/, slightly modified   
        distanceItems[item].addEventListener('click', function () {
            let current = document.getElementsByClassName('active');
            current[0].className = current[0].className.replace(' active', '');
            this.className += ' active';
        })
    }

    // set chosen distance
    for (item of distanceItems) {
        item.addEventListener('click', function() {
            if (this.getAttribute('data-distance') === 'input') {
                alert('You chose input');
            } else {
                let setDistance = this.getAttribute('data-distance');
                alert(`You chose ${setDistance} distance`)
            }
        })
    }
})