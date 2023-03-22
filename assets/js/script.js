// change active distance choice (code from https://www.w3schools.com/, slightly modified)

var distanceItems = document.getElementsByClassName('distance-item');
for (var item = 0; item < distanceItems.length; item++) {
    distanceItems[item].addEventListener('click', function() {
        var current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active', '');
        this.className += ' active';
    })
}