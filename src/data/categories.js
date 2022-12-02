import { Colors } from "../constants/colors"
import hamb from '../assets/images/hamb.png'
import pizza from '../assets/images/pizza.png'
import empanada from '../assets/images/empanada.png'
import milanesa from '../assets/images/milanesa.png'
import sandwich from '../assets/images/sandwich.png'
import postre from '../assets/images/postre.png'

export const Categories = [
    {
        id: '1',
        title: 'Hamburguesas',
        color: Colors.primary,
        image: hamb
    },

    {
        id: '2',
        title: 'Pizzas',
        color: Colors.primary,
        image: pizza
    },

    {
        id: '3',
        title: 'Empanadas',
        color: Colors.primary,
        image: empanada
    },

    {
        id: '4',
        title: 'Milanesas',
        color: Colors.primary,
        image: milanesa
    },

    {
        id: '5',
        title: 'Sandwiches',
        color: Colors.primary,
        image: sandwich
    },

    {
        id: '6',
        title: 'Postres',
        color: Colors.primary,
        image: postre
    },
]