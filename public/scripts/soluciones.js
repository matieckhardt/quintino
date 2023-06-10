function cargarIconosTemperaturas(divisionCarBody, tipoDeIcono) {
  var elementoIconoTemperatura = document.createElement("i");
  elementoIconoTemperatura.id = "icono-temperatura";
  elementoIconoTemperatura.className = tipoDeIcono;
  divisionCarBody.appendChild(elementoIconoTemperatura);
}

// parallax -->

$(document).ready(function () {
  $(window).scroll(function () {
    var barra = $(window).scrollTop();
    var posicion = barra * 0.4;

    $("#landing").css({
      "background-position": "0 -" + posicion + "px",
    });
    $("#contact").css({
      "background-position": "0 -" + posicion + "px",
    });
  });
});

$("body").css({
  overflow: "hidden",
});
$(window).on("load", function () {
  $(".loader").fadeOut("slow");
  setTimeout(function () {
    $("body").css({
      overflow: "auto",
    });
    $(".loader").fadeOut("slow");
  }, 2800);
});

$(document).ready(function () {
  $(".caca").slick({
    infinite: true,
    dots: false,
    arrows: false,
    autoplay: true,
    speed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    adaptiveHeight: false,
  });
});

// Obtener el ID del producto de la URL
const urlParams = window.location.pathname;
const productId = urlParams.split("/")[2];

// Esperar a que la página se haya cargado completamente
window.addEventListener("load", function () {
  const carousel = document.querySelector(".solucionesFull");
  const slick = $(carousel).slick({
    infinite: false,
    dots: false,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    adaptiveHeight: true,
    lazyloading: true,
    appendArrows: carousel.querySelector(".slick-arrows-container"),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  // Ocultar el scroll del carousel
  carousel.style.overflow = "hidden";

  // Mostrar el loader mientras se carga el carousel
  const loader = document.createElement("div");
  loader.className = "loader";
  carousel.appendChild(loader);

  // Simular una carga asincrónica
  setTimeout(function () {
    // Encontrar la tarjeta con el ID del producto y mostrarla
    const productCard = document.getElementById(productId);
    if (productCard) {
      productCard.style.display = "block";

      // Obtener el índice del slide correspondiente al producto
      const slideIndex = $(productCard).data("slick-index");

      // Mover al slide correspondiente al producto
      slick.slick("slickGoTo", slideIndex);
    } else {
      console.error("No se encontró la tarjeta con el ID del producto");
    }
  }, 2000); // Simular una carga de 2 segundos
});
