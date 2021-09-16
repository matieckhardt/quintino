// parallax -->

        $(document).ready(function () {
            $(window).scroll(function () {
                var barra = $(window).scrollTop();
                var posicion = (barra * 0.40);

                $('#landing').css({
                    'background-position': '0 -' + posicion + 'px'
                });
                $('#contact').css({
                    'background-position': '0 -' + posicion + 'px'
                });
            });
        });
// smooth scroll -->

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
