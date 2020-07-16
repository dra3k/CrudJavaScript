class producto{
    constructor(nombre,precio,anio){
        this.nombre=nombre;
        this.precio=precio;
        this.año=anio;
    }
}
class interfaz{
    agreProd(product1){
       const listprod = document.getElementById('lista-prod');
       const elemento = document.createElement('div'); 

     
       elemento.innerHTML = `
       <div class = "card text-center mb-4">
       <div class = "card-body">
           <strong>producto</strong>: ${product1.nombre}
           <strong>precio</strong>: ${product1.precio}
           <strong>año</strong>: ${product1.año} 
           <a href="#" class = "btn btn-danger" name="delete">Eliminar</a>       
       </div>
  </div>
   `;
    listprod.appendChild(elemento);
}
    reseteoform(){
        document.getElementById('product-form').reset();
    }
     elimProd(elem){
         if(elem.name =='delete'){
             elem.parentElement.parentElement.parentElement.remove();
             this.showMeseg('producto eliminado','danger');
         }
    }

    showMeseg(mensaje, ClasCss){
        const cajon = document.createElement('div');
        cajon.className =`alert alert-${ClasCss} mt-4`;
        cajon.appendChild(document.createTextNode(mensaje));
        //mostrando en los objetos
        const contenedor = document.querySelector('.container');
        const aplicacion = document.querySelector('#App');
        contenedor.insertBefore(cajon , aplicacion);
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000)

    }
}

//evento de los obejetos
document.getElementById('product-form').addEventListener('submit',function(events){
    const name = document.getElementById('nombre').value;
    const price = document.getElementById('precio').value;
    const year = document.getElementById('anio').value;
    const product1 = new producto(name, price, year);
    const interf = new interfaz();

    if(name==='' || price==='' || year===''){
        return interf.showMeseg('completa los campos porfavor','danger');
    } 
     
interf.agreProd(product1);
interf.reseteoform();
interf.showMeseg('producto agregado','success');
events.preventDefault(); 
});

document.getElementById('lista-prod').addEventListener('click', function(elem){
     const inter = new interfaz();
     inter.elimProd(elem.target);
});