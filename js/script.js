
$(document).ready(function(){
    $('.categorias .categoryItem[category="all"]').addClass('categoria-activa');

    $('.categoryItem').click(function(){
        var catProduct = $(this).attr('category');
        $('.categoryItem').removeClass('categoria-activa');
        $(this).addClass('categoria-activa');

        $(".producto").hide();
        $('.producto[category="'+catProduct+'"]').show();

    })
    $('.categoryItem[category=all]').click(function(){
        $('.producto').show();
    })
     var productos = [
         {
             nombre : "Mouse inalambrico",
             precio : "34.000",
             category : "Mouse",
             img : "../img/Mouse inalambrico.jpg"
         },
         {
             nombre : "teclado genius",
             precio : "34.000$",
             category : "Teclado",
             img : "../img/teclado-genius-usb-smart-kb-100-negro-con-letra-n.webp"
         },
         {
             nombre : "Teclado Gamer",
             precio : "34.000$",
             category : "Teclado",
             img : "../img/Teclado Gamer.jpg"
         },
         {
             nombre : "m190 wireless mouse blue",
             precio : "34.000$",
             category : "Mouse",
             img : "../img/m190-wireless-mouse-blue-gallery-01.png"
         },
         {
             nombre : "Mouse inalambrico",
             precio : "34.000$",
             category : "Mouse",
             img : "../img/Mouse inalambrico.jpg"
         },
         {
             nombre:"Pc Gamer",
             precio: "2000000",
             category:"Portatil",
             img:"https://caracol.com.co/resizer/aJQJQa85E7yNSX5wHsBoHgvthmg=/650x488/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/prisaradioco/W6PTLYVKORIMTGWY3XTHKWG6N4.jpg"
         },
		 {
			nombre:"xiaomi Redmi 9",
			precio:"500000",
			category:"Celular",
			img:"https://http2.mlstatic.com/D_NQ_NP_642492-MLA44598911410_012021-O.jpg" 
		 }
         ]
    $.each(productos, function(index,producto){
        

        var template = $('#plantilla').html();  // se guarda el contenido de la plantilla
        var templatejq = $(template); // conertimos la plantilla a un objeto jquery 
        
        templatejq.find('.producto').attr("category", producto.category); // poniendo el atributo category
        templatejq.find('.product-name').text(producto.nombre);
        templatejq.find('.product-price').text(producto.precio);
        templatejq.find('.product-img').attr("src", producto.img);
    
        $("#product-container").append(templatejq);

    });
    $(".product").click(function(){
        var data = productos[$(this).index()];
        console.log(data);
        sessionStorage.setItem("clikedData", JSON.stringify(data));
    });
    
});
    // function guardarInfo(){
    
    //     var name = $(".product-name");
    //     var nombreusuario = name.text();
    //     console.log(nombreusuario);
    //     sessionStorage.setItem("nombre", nombreusuario);
    // }

