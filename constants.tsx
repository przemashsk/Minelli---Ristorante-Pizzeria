
import { MenuItem } from './types';

export const MENU_DATA: MenuItem[] = [
  {
    id: '1',
    name: 'Bruschetta al Pomodoro',
    description: 'Chrupiąca bagietka z pomidorami, czosnkiem, bazylią i oliwą extra vergine.',
    price: '24 zł',
    category: 'starters',
    image: 'https://picsum.photos/seed/bruschetta/600/400'
  },
  {
    id: '2',
    name: 'Carpaccio di Manzo',
    description: 'Cienkie plastry polędwicy wołowej z rukolą, kaparami i płatkami parmezanu.',
    price: '48 zł',
    category: 'starters',
    image: 'https://picsum.photos/seed/carpaccio/600/400',
    popular: true
  },
  {
    id: '3',
    name: 'Pizza Margherita',
    description: 'Sos pomidorowy, mozzarella fior di latte, świeża bazylia.',
    price: '36 zł',
    category: 'pizza',
    image: 'https://picsum.photos/seed/pizza1/600/400'
  },
  {
    id: '4',
    name: 'Pizza Diavola',
    description: 'Sos pomidorowy, mozzarella, pikantne salami spianata, peperoncino.',
    price: '44 zł',
    category: 'pizza',
    image: 'https://picsum.photos/seed/pizza2/600/400',
    popular: true
  },
  {
    id: '5',
    name: 'Tagliatelle al Salmone',
    description: 'Makaron jajeczny z łososiem, cukinią i koperkiem w sosie śmietanowym.',
    price: '49 zł',
    category: 'pasta',
    image: 'https://picsum.photos/seed/pasta1/600/400'
  },
  {
    id: '6',
    name: 'Spaghetti alla Carbonara',
    description: 'Oryginalna receptura: guanciale, żółtka jaj, pecorino romano, pieprz.',
    price: '46 zł',
    category: 'pasta',
    image: 'https://picsum.photos/seed/pasta2/600/400'
  },
  {
    id: '7',
    name: 'Filetto di Branzino',
    description: 'Filet z okonia morskiego z grillowanymi warzywami i sosem cytrynowym.',
    price: '68 zł',
    category: 'mains',
    image: 'https://picsum.photos/seed/fish/600/400'
  },
  {
    id: '8',
    name: 'Saltimbocca alla Romana',
    description: 'Cielęcina z szynką parmeńską i szałwią w sosie z białego wina.',
    price: '72 zł',
    category: 'mains',
    image: 'https://picsum.photos/seed/veal/600/400'
  },
  {
    id: '9',
    name: 'Tiramisu Classico',
    description: 'Włoski deser na bazie mascarpone, biszkoptów nasączonych kawą i amaretto.',
    price: '28 zł',
    category: 'desserts',
    image: 'https://picsum.photos/seed/tiramisu/600/400'
  }
];

export const APP_CONFIG = {
  restaurantName: "Minelli Ristorante",
  address: "Stary Rynek 58, 61-772 Poznań",
  phone: "+48 61 851 00 00",
  email: "kontakt@restauracjaminelli.pl",
  hours: [
    { day: "Pon - Czw", hours: "12:00 - 22:00" },
    { day: "Pt - Sob", hours: "12:00 - 23:00" },
    { day: "Niedziela", hours: "12:00 - 21:00" }
  ]
};
