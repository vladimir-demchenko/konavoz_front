import classNames from 'classnames';
import styles from "./page.module.css";
import './styles/index.css';
import { Promo } from '@/widgets/Promo';
import { Organic } from '@/widgets/Organic';
import { Ground } from '@/widgets/Ground';
import { Shop } from '@/widgets/Shop';
import { AboutUs } from '@/widgets/AboutUs';
import { Delivery } from '@/widgets/Delivery';
import { Contacts } from '@/widgets/Contacts';
import { Footer } from '@/widgets/Footer';

export default function Home() {
  return (
    <main className={classNames([styles.main, 'app'])}>
      <Promo />
      <Organic />
      <Ground />
      <Shop />
      <AboutUs />
      <Delivery />
      <Contacts />
      <Footer />
    </main>
  );
}
