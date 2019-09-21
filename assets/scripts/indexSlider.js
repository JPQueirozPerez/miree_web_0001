window.addEventListener('load', function(){
    var images = [];

    images[0] = 'assets/images/miree-nodojiman1.jpg';
    images[1] = 'assets/images/miree-concierto1.jpg';
    images[2] = 'assets/images/miree-concierto2.jpg';

    var imagesIndex = Math.floor((Math.random() * 3));

    function changeImages() {
        document.slider.src = images[imagesIndex]

        if (imagesIndex < 2) {
            imagesIndex++;
        } else {
            imagesIndex = 0;
        }
    }

    this.setInterval(changeImages, 10000);
});