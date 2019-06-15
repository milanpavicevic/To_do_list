$(document).ready(() => {

    var unos = $('#unos');
    var zadati = $('#zadati');
    var obrisani = $('#obrisani');
    var zavrseni = $('#zavrseni');
    var brisiListu = $('#brisiListu');

    zavrseni.hide();
    obrisani.hide();
    brisiListu.hide();
    $("#ime").focus();

    $('#dugmeZavrseni').on('click', () => {
        unos.hide();
        zadati.hide();
        obrisani.hide();
        zavrseni.show();
        brisiListu.show();
    });

    $('#dugmeZadati').on('click', () => {
        zavrseni.hide();
        obrisani.hide();
        zadati.show();
        unos.show();
        brisiListu.hide();
        $("#ime").focus();
    });

    $('#dugmeObrisani').on('click', () => {
        unos.hide();
        zadati.hide();
        zavrseni.hide();
        obrisani.show();
        brisiListu.hide();
    });


    var snimi = $("#snimi");
    snimi.click(function () {
        var listaZadatih = $("#listaZadatih");

        var ime = $("#ime").val().trim();
        var opis = $('#opis').val();
        var prioritet = $('#prioritet').val();
        var rok = $('#rok').val();

        if (ime != "") {
            /*Znam da sledeći kod ne uspeva da oboji pozadinu stavke odgovarajućom bojom, ali posle 10-ak isprobanih varijanti (naravno neuspešnih) morao sam da odustanem od toga*/
            listaZadatih.append("<li class='item' style='background-color:'" + prioritet + ";'><input type='button' value='Na čekanju' id='X'>" + prioritet + "<br><span>" + ime + "<br>" + "Opis: " + opis + "<br>" + "Rok: " + rok + "</span></li>");

            /*ovde je problem u izboru selektora, ali ipak nisam našao odgovarajući*/
            // if (prioritet == "Hitno!") {
            //     $('li').css("background-color", "rgba(255, 0, 0, 0.2)");
            // } else if (prioritet == "Manje hitno.") {
            //     $('li').css("background-color", "rgba(253, 179, 19, 0.5)");
            // } else if (prioritet == "Nije hitno.") {
            //     $('li').css("background-color", "rgba(0, 255, 0, 0.3)");
            // }

            $("#ime").val("").focus();

            document.getElementById('infoZadati').innerHTML = `Broj zadataka na čekanju je: ${document.querySelectorAll('#listaZadatih li').length}`;

            $('input[value="Na čekanju"]').on("click", function () {
                $(this).parent().css("background-color", "powderBlue");
                $(this).parent().prepend("<input type='button' value='X' id='privremenoUkloni'>");
                $(this).parent().appendTo('#listaZavrsenih');
                $(this).remove();
                $("#ime").focus();

                document.getElementById('infoZadati').innerHTML = `Broj zadataka na čekanju je: ${document.querySelectorAll('#listaZadatih li').length}`;

                document.getElementById('infoZavrseni').innerHTML = `Broj završenih zadataka je: ${document.querySelectorAll('#listaZavrsenih li').length}`;

                $('input[value="X"]').on("click", function () {
                    $(this).parent().css("background-color", "rgba(255, 0, 0, 0.3)");
                    $(this).parent().prepend("<input type='button' value='Trajno obriši' id='trajnoObrisi'>");
                    $(this).parent().appendTo('#listaObrisanih');
                    $(this).remove();

                    document.getElementById('infoZavrseni').innerHTML = `Broj završenih zadataka je: ${document.querySelectorAll('#listaZavrsenih li').length}`;

                    document.getElementById('infoObrisani').innerHTML = `Broj zadataka za trajno brisanje je: ${document.querySelectorAll('#listaObrisanih li').length}`;

                    $('input[value="Trajno obriši"]').on('click', function () {
                        $(this).parent().remove();
                        document.getElementById('infoObrisani').innerHTML = `Broj zadataka za trajno brisanje je: ${document.querySelectorAll('#listaObrisanih li').length}`;
                    })
                })
            })
        }
        brisiListu.on('click', function () {
            $('#listaZavrsenih').empty();
            document.getElementById('infoZavrseni').innerHTML = `Broj završenih zadataka je: ${document.querySelectorAll('#listaZavrsenih li').length}`;
        })
    })
});


