
var platosPrincipales = [
    { nombre: 'Boneless 250g', precio: 110 },
    { nombre: 'boneless 380g ', precio: 145 },
    { nombre: 'Hamburguesa de Boneless', precio: 100 },
    { nombre: 'Papas boneleras', precio: 80 },
    { nombre: 'Porcion de queso ', precio: 10 }
  ];
  

  var postres = [
    { nombre: 'Vaso de nieve', precio: 35 },
    { nombre: 'Rebanada de Cheesecake', precio: 50 },
    { nombre: 'Brownie', precio: 30 }
  ];
  
  // Función para mostrar los platos principales en el menú
  function mostrarPlatosPrincipales() {
    var listaPlatosPrincipales = document.getElementById('platos-principales');
    platosPrincipales.forEach(function(plato) {
      var li = document.createElement('li');
      li.innerHTML = plato.nombre + ' - $' + plato.precio;
      listaPlatosPrincipales.appendChild(li);
    });
  }
  
  // Función para mostrar los postres en el menú
  function mostrarPostres() {
    var listaPostres = document.getElementById('postres');
    postres.forEach(function(postre) {
      var li = document.createElement('li');
      li.innerHTML = postre.nombre + ' - $' + postre.precio;
      listaPostres.appendChild(li);
    });
  }
  
  // Llamar a las funciones para mostrar los platos principales y postres
  mostrarPlatosPrincipales();
  mostrarPostres();
  