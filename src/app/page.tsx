import classNames from 'classnames';
import styles from "./page.module.css";
import './styles/index.css';
import { Promo } from '@/widgets/Promo';
import { Organic } from '@/widgets/Organic';
import { Ground } from '@/widgets/Ground';

export default function Home() {
  return (
    <main className={classNames([styles.main, 'app'])}>
      <Promo />
      <Organic />
      <Ground />
    </main>
  );
}
