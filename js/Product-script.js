
    function cargarPagina(){
        var datos = JSON.parse(sessionStorage.getItem("clikedData"));
        
        var plantilla = $("#template").html();
        var plantillajq = $(plantilla);        
    
        plantillajq.find(".producto").attr("category", datos.category );
        plantillajq.find(".product-name").text(datos.nombre);
        plantillajq.find(".product-price").text(datos.precio);
        plantillajq.find(".product-img").attr("src", datos.img);

        $("#product-container").append(plantillajq);

        console.log(datos);

        $(".button-cart").click(function(){
            sessionStorage.setItem("cliked-button", JSON.stringify(datos));
            console.log(datos)
        });   
    } 
    


