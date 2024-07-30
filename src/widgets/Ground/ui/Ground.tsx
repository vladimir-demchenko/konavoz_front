import { ProductDetail } from '@/entities/ProductDetail';
import cls from './Ground.module.scss';

export const Ground = () => {
  return (
    <section id='ground' className='full-width'>
      <h2 className={cls.title}>Грунты</h2>
      <ProductDetail
        className={cls.firstItem}
        image='/images/ground.png'
        title='Плодородный грунт'
        position='left'
        desc='Плодородная земля – одно из главных условий хорошего урожая. Жаль, что естественный состав почвы не всегда может обеспечить полноценное питание декоративным и садовым культурам.
        Если скудный грунт удобрять синтетическими удобрениями, то он в короткие сроки станет непригодным для выращивания растений. Вымывание структуры приведет к засолению и полному уничтожению естественной микрофлоры почвы.'
      />
      <ProductDetail
        className={cls.secondItem}
        image='/images/soil.png'
        title='Чернозем (Рязань)'
        position='right'
        desc='Чернозем — это лучшая почва для земледелия, характеризуется самым большим содержанием гумуса (до 15%) и почвенных микроорганизмов, что определяет высокое плодородие. При внесении чернозема отмечается эффект общего оздоровления почвы с восстановлением водно-воздушных характеристик.
        Чернозем поставляется нами из Рязанской области. Данный грунт пригоден для любой исходной почвы. Цена — 200 руб./мешок.'
      />
      <div className={cls.increase}>
        <h3 className={cls.increaseTitle}>Увеличиваем плодородие почвы</h3>
        <div className={cls.increaseList}>
          <div className={cls.increaseItem}>
            <span className={cls.itemNumber}>01</span>
            <p className={cls.itemText}>Избежать катастрофы на участке поможет экологически чистый плодородный грунт. Он представляет собой смесь верхнего слоя растительной земли (70%) и нейтрализованного торфа (30%)</p>
          </div>
          <div className={cls.increaseItem}>
            <span className={cls.itemNumber}>02</span>
            <p className={cls.itemText}>Готовый почвогрунт вносят под вспашку или культивацию, при высадке добавляют в лунку, используют как подкормку. Работы в саду по повышению плодородия почвы проводят 2 раза в год</p>
          </div>
          <div className={cls.increaseItem}>
            <span className={cls.itemNumber}>03</span>
            <p className={cls.itemText}>Для получения хороших урожаев плодородие почв следует регулярно повышать, путем внесения разных удобрений, а также правильным применением агротехники</p>
          </div>
        </div>
      </div>
    </section>
  )
}