 //   custom scrollbar non webkit-->
 
    $(document).ready(function () {
        if (!$.browser.webkit) {
            $('body').html('<p>Sorry! Non webkit users. :(</p>');
        }
    });

    var url = "/";

    function obtenerFiltro() {
        var urlCompleto = url + "OperacionFiltros/ObtenerFiltros";

        var request = $.ajax({
            url: urlCompleto,
            type: 'GET',
            dataType: 'json',
            data: {filtros: ""}
        })

        request.done(function (response) {
            agregarFiltros(response);
        })

        request.fail(function (jqXHR, textStatus) {
        })
    }

    function agregarFiltros(filtros) {
        var divisionAccordion = document.getElementById("accordion");

        for (var i = 0; i < filtros.length; i++) {
            var elementoCard = document.createElement("div");
            elementoCard.id = "elementoCard" + i;
            elementoCard.className = "card mb-3 px-3 py-1";
            divisionAccordion.appendChild(elementoCard);

            var divisionCard = document.getElementById("elementoCard" + i);

            var elementoH5 = document.createElement("h5");
            elementoH5.id = "elementoH5" + i;
            elementoH5.className = "mb-0";
            divisionCard.appendChild(elementoH5);

            var divisionH5 = document.getElementById("elementoH5" + i);

            var elementoButton = document.createElement("button");
            elementoButton.className = "btn btn-link collapsed";
            elementoButton.setAttribute("onclick", "solucionesParaFiltrar('" + filtros[i].NombreCategoria + "')");
            elementoButton.setAttribute("data-toggle", "collapse");
            elementoButton.setAttribute("data-target", "#collapseTwo");
            elementoButton.setAttribute("aria-expanded", "false");
            elementoButton.setAttribute("aria-controls", "collapseTwo");
            elementoButton.innerHTML = "Busqueda por " + filtros[i].NombreCategoria.toLowerCase();
            divisionH5.appendChild(elementoButton);
        }
    }

    function solucionesParaFiltrar(valorFiltro) {

        var url = '/Home/Showroom?filtroAbierto=__param__';

        window.location.href = url.replace('__param__', encodeURIComponent(valorFiltro));
    }

    function BuscarSoluciones1() {

        var palabra = $('#BuscarWeb').val();
        var url = '/Home/Showroom?filtroEscrito=__param__';

        window.location.href = url.replace('__param__', encodeURIComponent(palabra));
    }

    function BuscarSoluciones2() {

        var palabra = $('#BuscarEquipamiento').val();
        var url = '/Home/Showroom?filtroEscrito=__param__';

        window.location.href = url.replace('__param__', encodeURIComponent(palabra));
    }

    function guardarMail1() {

        var mail = $('#MailNewsEsp1').val()

        if ($('#checkEsp1').is(':checked') && mail != "" && mail != null) {

            var url = '/Home/GuardarMail?mail=__param__';

        }

        let newTab = window.open();
        newTab.location.href = "Images/Folletos/Folleto-1-esp.pdf";

        window.location.href = url.replace('__param__', encodeURIComponent(mail));
    }

    function guardarMail2() {

        var mail = $('#MailNewsEsp2').val()

        if ($('#checkEsp2').is(':checked') && mail != "" && mail != null) {

            var url = '/Home/GuardarMail?mail=__param__';
        }

        let newTab = window.open();
        newTab.location.href = "Images/Folletos/Folleto-2-esp.pdf";

        window.location.href = url.replace('__param__', encodeURIComponent(mail));
    }

    function guardarMail3() {

        var mail = $('#MailNewsEsp3').val()

        if ($('#checkEsp3').is(':checked') && mail != "" && mail != null) {

            var url = '/Home/GuardarMail?mail=__param__';

        }

        let newTab = window.open();
        newTab.location.href = "Images/Folletos/Folleto-3-esp.pdf";

        window.location.href = url.replace('__param__', encodeURIComponent(mail));
    }

    function saveMail1() {

        var mail = $('#MailNewsEng1').val()

        if ($('#checkEng1').is(':checked') && mail != "" && mail != null) {

            var url = '/Home/GuardarMail?mail=__param__';

        }

        let newTab = window.open();
        newTab.location.href = "Images/Folletos/Folleto-1-eng.pdf";

        window.location.href = url.replace('__param__', encodeURIComponent(mail));
    }

    function saveMail2() {

        var mail = $('#MailNewsEng2').val()

        if ($('#checkEng2').is(':checked') && mail != "" && mail != null) {

            var url = '/Home/GuardarMail?mail=__param__';

        }

        let newTab = window.open();
        newTab.location.href = "Images/Folletos/Folleto-2-eng.pdf";

        window.location.href = url.replace('__param__', encodeURIComponent(mail));
    }

    function saveMail3() {

        var mail = $('#MailNewsEng3').val()

        if ($('#checkEng3').is(':checked') && mail != "" && mail != null) {

            var url = '/Home/GuardarMail?mail=__param__';

        }

        let newTab = window.open();
        newTab.location.href = "Images/Folletos/Folleto-3-eng.pdf";

        window.location.href = url.replace('__param__', encodeURIComponent(mail));
    }

    function isEmail(email) {
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email);
    }
    