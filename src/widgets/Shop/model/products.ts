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
    id: 9,
    name: 'Эко-грунт «Огородная смесь»',
    detail: 'Чернозем, плодородный грунт, перегной, песок. Мешок 50 л',
    price: 300,
    image: '/images/shop/9.png',
    new: true
  },
  {
    id: 12,
    name: 'Чернозем, торф и песок',
    detail: 'мешок 50 л',
    price: 300,
    image: '/images/shop/12.png',
    new: true
  },
  {
    id: 13,
    name: 'Чернозём, перегной, торф, песок',
    detail: 'мешок 50 л',
    price: 300,
    image: '/images/shop/13.png',
    new: true
  },
  {
    id: 14,
    name: 'Торф и песок',
    detail: 'мешок 50 л',
    price: 250,
    image: '/images/shop/14.png',
    new: true
  },
  {
    id: 5,
    name: 'Плодородный грунт',
    detail: 'мешок 50 л',
    price: 150,
    image: '/images/shop/5.png'
  },
  {
    id: 6,
    name: 'Торф и плодородный грунт',
    detail: 'мешок 50 л',
    price: 250,
    image: '/images/shop/6.png'
  },
  {
    id: 7,
    name: 'Перегной и плодородный грунт',
    detail: 'мешок 50 л',
    price: 250,
    image: '/images/shop/7.png'
  },
  {
    id: 2,
    name: 'Перегной коровий',
    detail: 'мешок 50 л',
    price: 250,
    image: '/images/shop/2.png'
  },
  {
    id: 3,
    name: 'Конский перегной (с опилками)',
    detail: 'мешок 50 л',
    price: 200,
    image: '/images/shop/3.png'
  },
  {
    id: 4,
    name: 'Конский навоз (без опилок)',
    detail: 'мешок 50 л',
    price: 300,
    image: '/images/shop/4.png'
  },
  {
    id: 8,
    name: 'Чернозем',
    detail: 'мешок 50 л',
    price: 300,
    image: '/images/shop/8.png'
  },
  {
    id: 10,
    name: 'Торф низинный',
    detail: 'мешок 50 л',
    price: 250,
    image: '/images/shop/10.png'
  },
  {
    id: 11,
    name: 'Песок карьерный',
    detail: 'мешок 40 кг',
    price: 150,
    image: '/images/shop/11.png'
  },


]