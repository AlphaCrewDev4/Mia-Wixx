(() => {

    //Get date for copy section
    const yearSpan = document.querySelector('#custom-year');
    const year = new Date().getFullYear();
    yearSpan.innerHTML = year;

    //Mobile Slide
    $('#slideButtons').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4500,
        smartSpeed: 6000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 2,
            },
        }
    });

})()