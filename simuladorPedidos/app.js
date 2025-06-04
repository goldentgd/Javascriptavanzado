const orderList = document.getElementById('orderList');
const addOrderBtn = document.getElementById('addOrderBtn');

let orderId = 1; // Para identificar los pedidos

addOrderBtn.addEventListener('click', () => {
    const order = { id: orderId++, status: 'En Proceso' };
    addOrder(order);
    processOrder(order);
});

function addOrder(order) {
    const listItem = document.createElement('li');
    listItem.id = `order-${order.id}`;
    listItem.textContent = `Pedido #${order.id}: ${order.status}`;
    orderList.appendChild(listItem);
}

function updateOrderStatus(order, status) {
    const listItem = document.getElementById(`order-${order.id}`);
    if (listItem) {
        listItem.textContent = `Pedido #${order.id}: ${status}`;
    }
}

async function processOrder(order) {
    // TODO: Simular la preparación del pedido usando setTimeout y Promise
    // TODO: Actualizar el estado del pedido a "Completado"
    const preparacion = Math.floor(Math.random() * 5000) + 2000;
    setTimeout(() => {
        updateOrderStatus(order, 'En preparación');
    },2000)
    setTimeout(() => {
        updateOrderStatus(order, 'Completado');
    },preparacion)

    //await new Promise(resolve => setTimeout(resolve, preparacion));
    //updateOrderStatus(order, 'Completado');
    console.log(`Pedido #${order.id} completado en ${preparacion} ms`);
}