class ProductoDom{
    
    constructor(obj){
 
        this.codigo = obj.codigo;
     
        this.nombre = obj.nombre;
     
        this.marca = obj.marca;
     
        this.precio = obj.precio;
    }
}

const almacenamientoDom = JSON.parse(localStorage.getItem("stock"));

const productosDom = [];

for (const objeto of almacenamientoDom){

    productosDom.push(new Producto(objeto));

}

for (const producto of productosDom){

    let contArticulo = document.getElementById("articulo");

    let articulo = document.createElement("div");

    articulo.innerHTML = `<h2>Producto ${producto.codigo}: ${producto.nombre} ${producto.marca} Precio: $${producto.precio}</h2>`;

    contArticulo.append(articulo);

}

let contenedorInfo = document.getElementById("infoCuotas");

let parrafo = document.createElement("div");

parrafo.innerHTML = "<h4>Las cuotas permitidas para Smart tv's son: 3, 6, 12, 18 y 24, para celulares 3, 6, 12 y 18 y para el resto de productos 3, 6 y 12.</h4>";

contenedorInfo.append(parrafo);