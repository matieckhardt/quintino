// carru quienes -->

    $('.car-quienes').slick({
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
    });


// carrusel inicial -->

    $('.car-initial').slick({
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: "4" * 1000,
        speed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                }
            }
        ]
    });

// carrusel servicios -->

    $('.carruserv').slick({
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                }
            }
        ]
    });
// carrusel clientes -->

    $('.partner-carousel').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 2500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(function () {
        $("#slider").slick({
            speed: 1000,
            dots: false,
            speed: 2000,
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 3,
        });
    });
