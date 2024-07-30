import { FC } from 'react';
import cls from './Organic.module.scss';
import classNames from 'classnames';
import { ProductDetail } from '@/entities/ProductDetail';
import Image from 'next/image';

interface OrganicProps {
  className?: string;
}

export const Organic: FC<OrganicProps> = (props) => {
  return (
    <section id='organic' className={classNames(['full-width', cls.organic])}>
      <h2 className={cls.title}>Органические удобрения</h2>
      <div className={cls.organicContent}>
        <ProductDetail
          className={cls.firstItem}
          title='Конский навоз'
          image='/images/konskiy_navoz.png'
          position='left'
          desc='Конский навоз — находка для огородника. Он имеет рыхлую структуру, содержит мало влаги и быстро разлагается. Состоит из лошадиных выделений и их подстилок.
          Для растений это самый лучший навоз из всех имеющихся в природе. Однако пользоваться им надлежит без фанатизма, поскольку чрезмерное применение может «пожечь» растения.'
        />
      </div>
      <div className={classNames('full-width', cls.advantages)}>
        <div className={cls.advantagesContent}>
          <h3 className={cls.advantagesTitle}>Преимущества</h3>
          <div className={cls.advantagesWrapper}>
            <div className={cls.advantagesList}>
              <span className={cls.advantagesItem}>содержит огромное количество питательных веществ и состоит из воды (70%), органики (26%), азота, калия и фосфора (4%), то есть в нем имеется все необходимое для роста, развития и плодоношения культурных растений
              </span>
              <span className={cls.advantagesItem}>имеет способность быстро разлагаться и разогреваться, что крайне выгодно для устройства теплых грядок в теплицах и выращивания рассады
              </span>
              <span className={cls.advantagesItem}>помимо теплового режима, обеспечивает наилучший водный и воздушный режимы, поскольку в песчаной почве задерживает влагу, а глинистую почву разрыхляет
              </span>
            </div>
            <div className={cls.advantagesList}>
              <span className={cls.advantagesItem}>стимулирует работу полезной микрофлоры</span>
              <span className={cls.advantagesItem}>обогащает почву питательными веществами долгий период времени</span>
              <span className={cls.advantagesItem}>выделяет углекислый газ, питая углеродом растения</span>
              <span className={cls.advantagesItem}>качественно поднимает урожайность выращиваемых культур</span>
              <span className={cls.advantagesItem}>им можно удобрять все овощные и садовые культуры (розы, например, конский навоз просто «обожают»)</span>
            </div>
          </div>
        </div>
      </div>
      <div className={cls.usage}>
        <h3 className={cls.usageTitle}>Способы применения</h3>
        <div className={cls.usageContent}>
          <div className={cls.usageItemList}>
            <div className={cls.usageItem}>
              <span className={cls.usageNumber}>01</span>
              <p className={cls.usageSentence}><span className={cls.firstSentence}>Навоз </span>обычно вносится под перекопку, причем, осеннюю, чтобы к весне образовался питательный перегной со всеми его положительными качествами</p>
            </div>
            <div className={cls.usageItem}>
              <span className={cls.usageNumber}>02</span>
              <p className={cls.usageSentence}><span className={cls.firstSentence}>Можно использовать </span>в качестве подкормки растений, естественно, в жидком состоянии. Состав жидкой подкормки: 1 доля навоза на 10 долей воды. Подливается подкормка под корень растения (но не на корень)</p>
            </div>
            <div className={cls.usageItem}>
              <span className={cls.usageNumber}>03</span>
              <p className={cls.usageSentence}><span className={cls.firstSentence}>По весне </span>свежий навоз можно использовать только под ранний картофель, тыкву, кабачки, капусту и огурцы</p>
            </div>
            <div className={cls.usageItem}>
              <span className={cls.usageNumber}>04</span>
              <p className={cls.usageSentence}><span className={cls.firstSentence}>Осенью </span>свежим навозом можно обложить кусты, и он будет согревать их корни</p>
            </div>
          </div>
          <Image width={0} height={0} sizes='100wh' alt='usage' src='/images/usage.png' className={cls.usageImage} />
        </div>
        {/*TODO white spaces and to JSON */}
      </div>
      <ProductDetail
        className={cls.firstItem}
        title='Коровий навоз'
        image='/images/cows.png'
        position='right'
        desc='Коровий навоз — натуральный продукт, получаемый из экскрементов крупнорогатого скота. Состав такого навоза очень богат полезными элементами: фосфором, калием, азотом, а так же медью, мочевиной, цинком и т.д. Он широко применяется в сельском хозяйстве и садоводстве.
          Коровий навоз (коровяк) различается в зависимости от степени разложения:— свежий— полуперепревший— перепревший— перегной— высушенный (кизяк)'
      />
      <div className={cls.benefit}>
        <div className={cls.benefitContent}>
          <Image width={0} height={0} sizes='100wh' alt='benefit' src='/images/benefit.png' className={cls.benefitImage} />
          <h3 className={cls.benefitTitle}>Польза</h3>
          <div className={cls.benefitList}>
            <span className={cls.benefitItem}>Основная сфера использования — удобрение и улучшение качества почвы. Коровий перегной — это та стадия «созревания» навоза, которая полностью готова к применению. Его используют для создания питательной смеси и подготовки почвы для высадки рассады</span>
            <span className={cls.benefitItem}>В отличии от перегноя, свежий навоз не применяют для подпитки растений, а смешивают с землей осенью для подготовки почвы на следующий год</span>
            <span className={cls.benefitItem}>Коровий навоз обладает так же способностью улучшать структуру почвы, делать ее более рыхлой и рассыпчатой. А при подмешивании в песчаные породы почвы он, наоборот, придает ей необходимую вязкость</span>
          </div>
        </div>
      </div>
      <ProductDetail
        className={cls.firstItem}
        title='Перегной'
        image='/images/humus.png'
        position='left'
        desc='Перегной – натуральное удобрение, произошедшее из органических веществ (гниения растительных и животных остатков).
          Конский перегной внешне похож на массу рассыпчатого происхождения, в ней присутствует влажность, коричневый окрас вещества, солома (опилки). Коровий перегной признается эффективным средством по удобрению почвы. Им разрешено пользоваться на любых почвенных покровах.'
      />
      <div className={cls.humusDetail}>
        <span className={cls.features}></span>
        <div className={cls.humusContent}>
          <div className={cls.featuresContent}>
            <h3 className={cls.featuresTitle}>Свойства</h3>
            <p className={cls.featuresText}>В конском перегное содержится наименьшее количество семян сорняков, личинок, прочих вредителей. Он имеет вещества, которые приносят пользу культурным растениям.
              Получения перегноя выглядит следующим образом: из конюшен извлекают отходы, оставленные лошадьми, с подстилками (солома, древесные опилки), выкладывают в форму квадрата и оставляют на 3 года, чтобы навоз стал перепревшим. Свойства и получение коровьего перегноя одинаковы с созданием конского удобрения.</p>
          </div>
          <div className={cls.handlingContent}>
            <Image width={0} height={0} sizes='100vw' className={cls.handlingImage} alt='' src='/images/handling.png' />
            <h3 className={cls.handlingTitle}>Применение</h3>
            <p className={cls.handlingText}>
              Перегной обычно применяют для удобрения почвы и мульчирования грядок. Огородникам стоит запомнить, что свежий навоз нежелательно вносить в почву к молодым растениям, он может сжечь корневую систему и листья.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};