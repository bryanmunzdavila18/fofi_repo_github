import ValentisHawaiiana from './../images/valentis_hawaiiana.png'
import ValentisPepperoniHongos from './../images/valentis_pepperoni_hongos.jpg'
import ValentisTocineta from './../images/valentis_tocineta.jpg'

import McDonaldsBicMac from './../images/McDonalds_bigmac.png'
import McDonaldsQuesoDoble from './../images/McDonalds_quesodoble.png'
import McDonaldsRes from './../images/McDonalds_res.png'

const Menu = {
    valentis: [
        {
            picture: ValentisHawaiiana,
            name: 'Pizza Hawaiiana',
            price: 5.00,
        }, {
            picture: ValentisPepperoniHongos,
            name: 'Pizza Pepperoni con Hongos',
            price: 6.00,
        }, {
            picture: ValentisTocineta,
            name: 'Pizza con tocineta',
            price: 4.50,
        },
    ],
    mcdonalds: [
        {
            picture: McDonaldsBicMac,
            name: 'Un clásico para disfrutar. Pan con semillas de ajonjolí, dos tortas de carne 100% de res, lechuga, queso, pepinillos, cebolla y aderezo Big Mac.',
            price: 4.80,
        }, {
            picture: McDonaldsQuesoDoble,
            name: 'Hamburguesa elaborada con dos tortas de carne 100% de res, mostaza, ketchup, cebolla, pepinillos y queso.',
            price: 4.00,
        }, {
            picture: McDonaldsRes,
            name: 'Pan con ajonjolí, una torta de carne 100% de res, mayonesa, ketchup, cebolla, lechuga, tomate y queso.',
            price: 4.35,
        },
    ],
}
export default Menu;