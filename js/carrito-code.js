
function cargarPagina(){
    if (sessionStorage.getItem("productos")) {
        var productos = JSON.parse(sessionStorage.getItem("productos"));
    }
    else{
        var productos =[];
    }

    var datos = JSON.parse(sessionStorage.getItem("cliked-button"));
    productos.push(datos);
    
    sessionStorage.setItem("productos", JSON.stringify(productos)); 
    
    
    console.log(productos);
    $.each(productos, function(index,producto){

        var plantilla = $("#plantilla").html();
        var plantillajq = $(plantilla);
    // if (producto.nombre==null && producto.precio == null) {
    //     console.log("no");
    // }else{
        plantillajq.find(".productoNombre").text(producto.nombre);
        plantillajq.find(".productoPrecio").text(producto.precio);

    // }
        $("#product-container").append(plantillajq);
    })

    // $(".product").click(function(){
    //     var data = productos[$(this).index()];
    //     console.log(productos);
    //     for (let index = 0; index < productos.length; index++) {
    //         if (data = productos[index]) {
    //             productos[index]= null;
    //             // delete(productos[index]);
    //             $(".product").hide();
    //             sessionStorage.setItem("productos", JSON.stringify(productos));

    //         }
            
    //     }
    // });
    

    
}