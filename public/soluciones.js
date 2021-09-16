 
var filtroSeleccionado = "";
var url = "https://quintino.ar/";
var imagenes = null;


function obtenerFiltro() {
    var urlCompleta = url + "OperacionFiltros/ObtenerFiltros";

    var filtrosParaSoluciones = [];
    var cadenaFiltros = normalizarFiltros(filtrosParaSoluciones);

    var request = $.ajax({
        url: urlCompleta,
        type: 'GET',
        dataType: 'json',
        data: { filtros: cadenaFiltros}
    })

    request.done(function (response) {
        cargarFiltros(response);
    })
    request.fail(function (jqXHR, textStatus) {
    })
}

function cargarFiltros(filtros) {
     for (var i = 0; i < filtros.length; i++) {
         var recuadroFiltro = document.getElementById("recuadroFiltro");

         var elementoA = document.createElement("a");
         elementoA.innerHTML = "<a data-toggle='collapse' id='nombreFiltro" + i + "' href='#collapseFiltro" + i + "' role='button' aria-expanded='true' aria-controls='collapseFiltro" + i + "'> </a>";
         recuadroFiltro.appendChild(elementoA);

         var filtro = document.getElementById("nombreFiltro" + i);

         var elementoNuevoH6 = document.createElement("h6");
         elementoNuevoH6.innerHTML = filtros[i].NombreCategoria;
         filtro.appendChild(elementoNuevoH6);

         if (filtroSeleccionado == filtros[i].NombreCategoria || filtroSeleccionado == "") {
             cargarSubcategorias("collapse show", i, filtros);
         } else {
             cargarSubcategorias("collapse", i, filtros);
         }
     }
 }


function cargarSubcategorias(classNameCollapse, indice, filtros) {
     var elementoNuevoOL = document.createElement("div");
     elementoNuevoOL.id = "collapseFiltro" + indice;
     elementoNuevoOL.className = classNameCollapse;
     elementoNuevoOL.innerHTML = "<ol id='nombreSubcategorias" + indice + "' class='filtro-lista'></ol>";
     recuadroFiltro.appendChild(elementoNuevoOL);

     filtros[indice].ListaSubcategorias.forEach(function (subcategoria) {
         var listaSubcategorias = document.getElementById("nombreSubcategorias" + indice);

         var elementoLI = document.createElement("li");
         elementoLI.id = "listaDeSubcategorias" + indice + subcategoria.SubcategoriaId;
         elementoLI.className = "filtro-check";
         listaSubcategorias.appendChild(elementoLI);

         var subcategorias = document.getElementById("listaDeSubcategorias" + indice + subcategoria.SubcategoriaId);

         var elementoNuevoA2 = document.createElement("a");
         elementoNuevoA2.className = "form-check-label";
         elementoNuevoA2.href = "/Home/Showroom?filtroNuevo=__filtroNuevo__".replace("__filtroNuevo__", subcategoria.SubcategoriaId);
         elementoNuevoA2.innerHTML = subcategoria.Nombre;
         subcategorias.appendChild(elementoNuevoA2);
     });
 }

function obtenerSoluciones() {
    var urlCompleta = url + "OperacionFiltros/ObtenerSoluciones";

    var filtrosParaSoluciones = [];
    var cadenaFiltros = normalizarFiltros(filtrosParaSoluciones);

    var filtroEscrito = "";

    var request = $.ajax({
        url: urlCompleta,
        type: 'GET',
        dataType: 'json',
        data: { filtros: cadenaFiltros, filtroEscrito: filtroEscrito}
    })

    request.done(function (response) {
        cargarSoluciones(response);
    })
    request.fail(function (jqXHR, textStatus) {
        
    })
}

function normalizarFiltros(filtrosParaSoluciones) {
    var cadena = "";
    for (var i = 0; i < filtrosParaSoluciones.length; i++) {
        if (i == 0) {
            cadena = cadena + filtrosParaSoluciones[i];
        } else {
            cadena = cadena + "|" + filtrosParaSoluciones[i];
        }
    }
    return cadena;
}

function obtenerImagenes() {
    var urlCompleta = url + "OperacionFiltros/ObtenerImagenes";

    var request = $.ajax({
        url: urlCompleta,
        type: 'GET',
        dataType: 'json',
        data: {}
    })

    request.done(function (response) {
        imagenes = response;
    })
    request.fail(function (jqXHR, textStatus) {
    })
}

function cargarSoluciones(soluciones) {
     soluciones.forEach(function (solucion) {
         var divisionSoluciones = document.getElementById("soluciones");

         var elementoDiv = document.createElement("div");
         elementoDiv.id = "modal" + solucion.SolucionId;
         elementoDiv.className = "diapo modal-" + solucion.SolucionId;
         divisionSoluciones.appendChild(elementoDiv);

         var divisionSoluciones2 = document.getElementById("modal" + solucion.SolucionId);

         var elementoDivRow = document.createElement("div");
         elementoDivRow.id = "row" + solucion.SolucionId;
         elementoDivRow.className = "row p-3";
         divisionSoluciones2.appendChild(elementoDivRow);

         var divisionSoluciones3 = document.getElementById("row" + solucion.SolucionId);

         var elementoDivRow2 = document.createElement("div");
         elementoDivRow2.className = "col-md-12";
         elementoDivRow2.innerHTML = "<h2>" + solucion.Nombre + "</h2>";
         divisionSoluciones3.appendChild(elementoDivRow2);

         var elementoDivRow3 = document.createElement("div");
         elementoDivRow3.className = "col-md-8";
         elementoDivRow3.innerHTML = solucion.Description;
         divisionSoluciones3.appendChild(elementoDivRow3);

         var elementoDivRow4 = document.createElement("div");
         elementoDivRow4.id = "columna4" + solucion.SolucionId;
         elementoDivRow4.className = "col-md-4";
         divisionSoluciones3.appendChild(elementoDivRow4);

         var divisionColumna4 = document.getElementById("columna4" + solucion.SolucionId);

         var count = 1;

         imagenes.forEach(function (imagen) {
             if (imagen.SolucionId == solucion.SolucionId) {
                 if (count == 1) {
                     var elementoImagen = document.createElement("img");
                     elementoImagen.className = "img-fluid w-100";
                     elementoImagen.src = "../.." + imagen.Imagen;
                     elementoImagen.alt = "";

                     divisionColumna4.appendChild(elementoImagen);
                 }
                 count++;
             }
         });

         var elementoSolucionesUl = document.createElement("ul");
         elementoSolucionesUl.id = "elementoSolucionesUl" + solucion.SolucionId;
         elementoSolucionesUl.className = "fa-ul";
         divisionColumna4.appendChild(elementoSolucionesUl);

         var divisionSolucionUl = document.getElementById("elementoSolucionesUl" + solucion.SolucionId);

         if (solucion.Bullet1 != null && solucion.Bullet1 != "") {
             var elementoSolucionesLi = document.createElement("li");
             elementoSolucionesLi.innerHTML = "<span class='fa-li'><i class='fas fa-caret-right'></i></span>" + solucion.Bullet1;

             divisionSolucionUl.appendChild(elementoSolucionesLi);
         }

         if (solucion.Bullet2 != null && solucion.Bullet2 != "") {
             var elementoSolucionesLi = document.createElement("li");
             elementoSolucionesLi.innerHTML = "<span class='fa-li'><i class='fas fa-caret-right'></i></span>" + solucion.Bullet2;

             divisionSolucionUl.appendChild(elementoSolucionesLi);
         }

         if (solucion.Bullet3 != null && solucion.Bullet3 != "") {
             var elementoSolucionesLi = document.createElement("li");
             elementoSolucionesLi.innerHTML = "<span class='fa-li'><i class='fas fa-caret-right'></i></span>" + solucion.Bullet3;

             divisionSolucionUl.appendChild(elementoSolucionesLi);
         }

         if (solucion.Bullet4 != null && solucion.Bullet4 != "") {
             var elementoSolucionesLi = document.createElement("li");
             elementoSolucionesLi.innerHTML = "<span class='fa-li'><i class='fas fa-caret-right'></i></span>" + solucion.Bullet4;

             divisionSolucionUl.appendChild(elementoSolucionesLi);
         }

         if (solucion.Bullet5 != null && solucion.Bullet5 != "") {
             var elementoSolucionesLi = document.createElement("li");
             elementoSolucionesLi.innerHTML = "<span class='fa-li'><i class='fas fa-caret-right'></i></span>" + solucion.Bullet5;

             divisionSolucionUl.appendChild(elementoSolucionesLi);
         }

         if (solucion.Bullet6 != null && solucion.Bullet6 != "") {
             var elementoSolucionesLi = document.createElement("li");
             elementoSolucionesLi.innerHTML = "<span class='fa-li'><i class='fas fa-caret-right'></i></span>" + solucion.Bullet6;

             divisionSolucionUl.appendChild(elementoSolucionesLi);
         }

         if (solucion.Bullet7 != null && solucion.Bullet7 != "") {
             var elementoSolucionesLi = document.createElement("li");
             elementoSolucionesLi.innerHTML = "<span class='fa-li'><i class='fas fa-caret-right'></i></span>" + solucion.Bullet7;

             divisionSolucionUl.appendChild(elementoSolucionesLi);
         }

         if ((solucion.Link1 != null && solucion.Link1 != "") || (solucion.Link2 != null && solucion.Link2 != "") || (solucion.Link3 != null && solucion.Link3 != "")) {
             var elementoSolucionesH6 = document.createElement("h6");
             elementoSolucionesH6.innerHTML = "<span><i class='far fa-file-alt pr-2'></i></span> Referencias";
             divisionColumna4.appendChild(elementoSolucionesH6);

             var elementoNuevoSolucionesOL = document.createElement("ol");
             elementoNuevoSolucionesOL.id = "elementoNuevoSolucionesOL" + solucion.SolucionId;
             divisionColumna4.appendChild(elementoNuevoSolucionesOL);

             var divisionNuevoSolucionesOL = document.getElementById("elementoNuevoSolucionesOL" + solucion.SolucionId);

             if (solucion.Link1 != null && solucion.Link1 != "") {
                 var elementoNuevoSolucionesLi = document.createElement("li");
                 elementoNuevoSolucionesLi.innerHTML = "<a target='_blank' href='https://" + solucion.Link1 + "'>" + solucion.Link1Descripcion + "</a>";
                 divisionNuevoSolucionesOL.appendChild(elementoNuevoSolucionesLi);
             }

             if (solucion.Link2 != null && solucion.Link2 != "") {
                 var elementoNuevoSolucionesLi = document.createElement("li");
                 elementoNuevoSolucionesLi.innerHTML = "<a target='_blank' href='https://" + solucion.Link2 + "'>" + solucion.Link2Descripcion + "</a>";
                 divisionNuevoSolucionesOL.appendChild(elementoNuevoSolucionesLi);
             }

             if (solucion.Link3 != null && solucion.Link3 != "") {
                 var elementoNuevoSolucionesLi = document.createElement("li");
                 elementoNuevoSolucionesLi.innerHTML = "<a target='_blank' href='https://" + solucion.Link3 + "'>" + solucion.Link3Descripcion + "</a>";
                 divisionNuevoSolucionesOL.appendChild(elementoNuevoSolucionesLi);
             }
         }
     });
     cargarSegundaDivisionSoluciones(soluciones);
 }

function cargarSegundaDivisionSoluciones(soluciones) {
     soluciones.forEach(function (solucion, index) {
         var divisionRowPx4 = document.getElementById("rowPx4");

         var elementoColumna = document.createElement("div");
         elementoColumna.id = "elementoColumna" + solucion.SolucionId;
         elementoColumna.className = "col-md-6 col-lg-4 col-xxl-3";
         divisionRowPx4.appendChild(elementoColumna);

         var divisionColumna = document.getElementById("elementoColumna" + solucion.SolucionId);

         var elementoCardMy4 = document.createElement("div");
         elementoCardMy4.id = "elementoCardMy4" + solucion.SolucionId;
         elementoCardMy4.className = "card my-4";
         divisionColumna.appendChild(elementoCardMy4);

         var divisionCardMy4 = document.getElementById("elementoCardMy4" + solucion.SolucionId);

         var elementoTriangulo = document.createElement("div");
         elementoTriangulo.id = "triangulo" + solucion.SolucionId;
         elementoTriangulo.className = "triangulo";
         divisionCardMy4.appendChild(elementoTriangulo);

         var divisionTriangulo = document.getElementById("triangulo" + solucion.SolucionId);

         if (solucion.Clasificacion == "Equipo") {
             var imagenEsquinaEquipo = document.createElement("img");
             imagenEsquinaEquipo.src = "../../images/esquinaequipo.png";
             imagenEsquinaEquipo.alt = "";
             divisionTriangulo.appendChild(imagenEsquinaEquipo);
         } else {
             var imagenEsquinaSolucion = document.createElement("img");
             imagenEsquinaSolucion.src = "../../images/esquinasolucion.png";
             imagenEsquinaSolucion.alt = "";
             divisionTriangulo.appendChild(imagenEsquinaSolucion);
         }

         var elementoCarouselSlideSeleccionar = document.createElement("div");
         elementoCarouselSlideSeleccionar.id = index + 1;
         elementoCarouselSlideSeleccionar.className = "carousel slide seleccionar";
         divisionCardMy4.appendChild(elementoCarouselSlideSeleccionar);

         var divisionCarouselSlideSeleccionar = document.getElementById(index + 1);

         var elementoCorouselInner = document.createElement("div");
         elementoCorouselInner.id = "elementoCarouselInner" + solucion.SolucionId;
         elementoCorouselInner.className = "carouseles";
         divisionCarouselSlideSeleccionar.appendChild(elementoCorouselInner);

         var divisionCarouselInner = document.getElementById("elementoCarouselInner" + solucion.SolucionId);
         var count = 1;

         imagenes.forEach(function (imagen) {
             if (imagen.SolucionId == solucion.SolucionId) {
                 if (count == 1) {
                     var elementoCorouselItemActive = document.createElement("img");
                     elementoCorouselItemActive.className = "img-fluid";
                     elementoCorouselItemActive.id = index + 1;
                     elementoCorouselItemActive.src = "../../" + imagen.Imagen;
                     divisionCarouselInner.appendChild(elementoCorouselItemActive);
                 } else {
                     var elementoCorouselItem = document.createElement("img");
                     elementoCorouselItem.className = "img-fluid";
                     elementoCorouselItem.id = index + 1 ; 
                     elementoCorouselItem.src = "../../" + imagen.Imagen;
                     divisionCarouselInner.appendChild(elementoCorouselItem);
                 }
                 count++;
             }
         });

        var elementoCardBody = document.createElement("div");
         elementoCardBody.id = "temperatura" + solucion.Orden;
         elementoCardBody.className = "card-body";
         elementoCardBody.innerHTML = "<h5 class='card-title'>" + solucion.Nombre + "</h5><p class='card-text'>" + solucion.DescriptionCorta + "</p>";
         divisionCardMy4.appendChild(elementoCardBody);

         var divisionCarBody = document.getElementById("temperatura" + solucion.Orden);

         var elementoTempIcon = document.createElement("div");
         elementoTempIcon.id = "TempIcon" + solucion.Orden;
         elementoTempIcon.className = "temp-icons";
         divisionCarBody.appendChild(elementoTempIcon);

         var divisionTempIcon = document.getElementById("TempIcon" + solucion.Orden);

         if (solucion.Categorias.includes("Entornos de temperatura elevada")) {
             cargarIconosTemperaturas(divisionTempIcon, "fas fa-thermometer-full fa-lg");
         }
         if (solucion.Categorias.includes("Entornos temperatura ambiente")) {
             cargarIconosTemperaturas(divisionTempIcon, "fas fa-thermometer-half fa-lg");
         }
         if (solucion.Categorias.includes("Entornos frios")) {
             cargarIconosTemperaturas(divisionTempIcon, "fas fa-thermometer-empty fa-lg");
         }
         if (solucion.Categorias.includes("Entornos congelados")) {
             cargarIconosTemperaturas(divisionTempIcon, "fas fa-snowflake fa-lg");
         }

         if (solucion.Youtube != null) {
             var elementoCardFooter = document.createElement("div");
             elementoCardFooter.className = "card-footer";
             elementoCardFooter.innerHTML = "<small class='text-muted'><a style='vertical-align: text-bottom;' target='_blank' href='" + solucion.Youtube + "'><i class='fab fa-youtube fa-2x text-danger pr-3'></i>Ver video de YouTube</a></small>";
             divisionCardMy4.appendChild(elementoCardFooter);
         }
     });

     cargaSlickCarItem();
     cargaSlick();
}

function cargarIconosTemperaturas(divisionCarBody, tipoDeIcono) {
    var elementoIconoTemperatura = document.createElement("i");
    elementoIconoTemperatura.id = "icono-temperatura";
    elementoIconoTemperatura.className = tipoDeIcono;
    divisionCarBody.appendChild(elementoIconoTemperatura);
}

 

 
    function cargaSlickCarItem() {
        $('.carouseles').slick({
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            lazyLoad: 'progressive'
        });
    }
 

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
 

 // ACA PUSE EL MODAL FINAL -->
 
    function cargaSlickCarShow() {
        $('.car-show').slick({
            waitForAnimate: false,
            dots: false,
            fade: true,
            arrows: true,
            autoplay: false,
            speed: 2000,
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
    }
 

 
    function cargaSlick() {           
        cargaSlickCarShow();            
        let contador = 0;
        $('.seleccionar').click(function (orden) {
            if (contador == 0){
                let loader = $('#loading');
                let spinner = $('#spinner');

                spinner.removeClass('d-none');
                loader.removeClass('d-none');
                loader.addClass('d-flex');
                var id = orden.target.id;
                $('#modalShowroom').modal('show');

                var slider = $('.car-show');

                $('.modal').on('shown.bs.modal', function () {
                    slider[0].slick.slickGoTo(parseInt(id - 1), true);
                    slider.slick('refresh');

                    $('#modalShowroom').resize();
                    
                    setTimeout(_ => spinner.addClass('d-none'), 1800);
                    setTimeout(_ => loader.removeClass('d-flex'), 1500);
                    setTimeout(_ => loader.addClass('d-none'), 1600);
                    $('#modalShowroom .slick-track').css("opacity", 0);
                    setTimeout(_ => $('#modalShowroom .slick-track').css("opacity", 1), 1700);
                });
                 $('.modal').on('hide.bs.modal', function () {
                    slider[0].slick.slickGoTo(parseInt(id - 1), true);
                    slider.slick('refresh');                    
                    $('#modalShowroom').resize();
                    contador++ ;
                });                
                $('.modal').on('hidden.bs.modal', function () {
                    $('#modalShowroom .slick-active').css("opacity", 0);
                });
            } else {
                let loader = $('#loading');
                let spinner = $('#spinner');

                spinner.removeClass('d-none');
                loader.removeClass('d-none');
                loader.addClass('d-flex');
                var id = orden.target.id;
                $('#modalShowroom').modal('show');

                var slider = $('.car-show');

                $('.modal').on('shown.bs.modal', function () {
                    slider[0].slick.slickGoTo(parseInt(id - 1), true);
                    slider.slick('refresh');

                    $('#modalShowroom').resize();
                    
                    setTimeout(_ => spinner.addClass('d-none'), 800);
                    setTimeout(_ => loader.removeClass('d-flex'), 500);
                    setTimeout(_ => loader.addClass('d-none'), 600);
                    $('#modalShowroom .slick-track').css("opacity", 0);
                    setTimeout(_ => $('#modalShowroom .slick-track').css("opacity", 1), 1000);
                });
                 $('.modal').on('hide.bs.modal', function () {
                    slider[0].slick.slickGoTo(parseInt(id - 1), true);
                    slider.slick('refresh');                    
                    $('#modalShowroom').resize();
                    contador++ ;
                });                
                $('.modal').on('hidden.bs.modal', function () {
                    $('#modalShowroom .slick-active').css("opacity", 0);
                });
            }
        });
    }
 


 
    $('body').css({
        overflow: 'hidden'
    });
    $(window).on("load", function () {
        $(".loader").fadeOut("slow");
        setTimeout(function(){
            $('body').css({
                overflow: 'auto'
            });
            $(".loader").fadeOut("slow");                
        }, 2800);
    });
 

 // custom scrollbar non webkit-->
 
    function BuscarSoluciones1() {

        var palabra = $('#BuscarWeb').val();
        var url = '/Home/Showroom?filtroEscrito=__param__';

        window.location.href = url.replace('__param__', encodeURIComponent(palabra));
}