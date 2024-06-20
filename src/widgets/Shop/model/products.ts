export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  new?: boolean;
  detail?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Навоз коровий',
    price: 200,
    image: '/images/shop/1.png'
  },
  {
    id: 3,
    name: 'Перегной коровий',
    price: 250,
    image: '/images/shop/2.png'
  },
  {
    id: 3,
    name: 'Конский навоз (с опилками)',
    price: 200,
    image: '/images/shop/3.png'
  },
  {
    id: 4,
    name: 'Конский навоз (без опилок)',
    price: 300,
    image: '/images/shop/4.png'
  },
  {
    id: 5,
    name: 'Плодородный грунт',
    price: 150,
    image: '/images/shop/5.png'
  },
  {
    id: 6,
    name: 'Торф и плодородный грунт',
    price: 250,
    image: '/images/shop/6.png'
  },
  {
    id: 7,
    name: 'Перегной и плодородный грунт',
    price: 250,
    image: '/images/shop/7.png'
  },
  {
    id: 8,
    name: 'Чернозем',
    price: 300,
    image: '/images/shop/8.png'
  },
  {
    id: 9,
    name: 'Эко-грунт «Огородная смесь»',
    detail: 'Чернозем, плодородный грунт, перегной, песок',
    price: 300,
    image: '/images/shop/9.png'
  },
  {
    id: 10,
    name: 'Торф низинный',
    price: 250,
    image: '/images/shop/10.png'
  },
  {
    id: 11,
    name: 'Песок карьерный',
    price: 150,
    image: '/images/shop/11.png'
  },
  {
    id: 12,
    name: 'Чернозем, торф и песок',
    price: 250,
    image: '/images/shop/12.png',
    new: true
  },
  {
    id: 13,
    name: 'Чернозём, перегной, торф, песок',
    price: 250,
    image: '/images/shop/13.png',
    new: true
  },
  {
    id: 14,
    name: 'Планированный грунт',
    price: 100,
    image: '/images/shop/14.png'
  },
]