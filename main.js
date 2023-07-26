let menu = "";
let totalPedido = 0;
let continuar = true; // variable para controlar el ciclo while

// Función para mostrar el menú de bebidas
function mostrarMenuBebidas() {
  let opcionBebida = Number(prompt("¡Tenemos estas bebidas disponibles! \n 1) Café americano - $250 \n 2) Cappuccino - $300 \n 3) Té negro - $200 \n 4) Chocolate caliente - $290 \n 5) Frappé de vainilla - $400"));
  switch (opcionBebida) {
    case 1:
      menu += "Café americano - $250 \n";
      totalPedido += 250;
      break;
    case 2:
      menu += "Cappuccino - $300 \n";
      totalPedido += 300;
      break;
    case 3:
      menu += "Té negro - $200 \n";
      totalPedido += 200;
      break;
    case 4:
      menu += "Chocolate caliente - $290 \n";
      totalPedido += 290;
      break;
    case 5:
      menu += "Frappé de vainilla - $400 \n";
      totalPedido += 400;
      break;
    default:
      alert("Por favor, seleccione una opción válida");
      mostrarMenuBebidas();
  }
}

// Función para mostrar el menú de postres
function mostrarMenuPostres() {
  let opcionPostre = Number(prompt("¡Tenemos estos postres disponibles! \n 1) Cheesecake (porción) - $450 \n 2) Tarta de manzana (porción) - $320 \n 3) Brownie (porción) - $380 \n 4) Galletas de chocolate - $250 \n 5) Torta de zanahoria (porción) - $400"));
  switch (opcionPostre) {
    case 1:
      menu += "Cheesecake (porción) - $450 \n";
      totalPedido += 450;
      break;
    case 2:
      menu += "Tarta de manzana (porción) - $320 \n";
      totalPedido += 320;
      break;
    case 3:
      menu += "Brownie (porción) - $380 \n";
      totalPedido += 380;
      break;
    case 4:
      menu += "Galletas de chocolate - $250 \n";
      totalPedido += 250;
      break;
    case 5:
      menu += "Torta de zanahoria (porción) - $400 \n";
      totalPedido += 400;
      break;
    default:
      alert("Por favor, seleccione una opción válida");
      mostrarMenuPostres();
  }
}


while (continuar) {
  let opcion = Number(prompt("¡Bienvenido a Cakebar's! ¿En qué podemos servirle? \n 1) Bebidas \n 2) Postres \n 3) Ver pedido \n 4) Cerrar pedido \n 5) Salir"));
  switch (opcion) {
    case 1:
      mostrarMenuBebidas();
      break;
    case 2:
      mostrarMenuPostres();
      break;
    case 3:
      alert("Este es su pedido: \n" + menu + "Total: $" + totalPedido.toFixed(2));
      break;
    case 4:
      alert("Aquí tiene, gracias por su compra. \n \n \n Desea hacer un nuevo pedido?");
      menu = "";
      totalPedido = 0;
      break;
    case 5:
      alert("¡Gracias por su visita! Vuelva pronto");
      continuar = false; // actualizamos la variable para salir del ciclo
      break;
    default:
      alert("Por favor, seleccione una opción válida");
  }
}