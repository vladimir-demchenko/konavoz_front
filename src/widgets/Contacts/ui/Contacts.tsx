import cls from './Contacts.module.scss';

export const Contacts = () => {
  return (
    <section className='full-width'>
      <h2 className={cls.title}>Контакты</h2>
      <div className={cls.contactContent}>
        <div className={cls.contactDetail}>
          <div className={cls.contactCard}>
            <h3 className={cls.cardTitle}>Адрес</h3>
            <div className={cls.addressWrapper}>
              <a className={cls.link} href='https://yandex.ru/maps/?from=mapframe&ll=38.037650%2C55.566560&mode=usermaps&source=mapframe&um=constructor%3Absm6zn9Yr20JkiGrnySmJ9pA2XgsFboS&utm_source=mapframe&z=10' target='_blank'>Московская область, г. Жуковский, ул. Дорожная</a>
              <p className={cls.subtext}>Склад удобно расположен на развязке Новорязанского и Рязанского шоссе, в 20 км от МКАД</p>
            </div>
          </div>
          <div className={cls.contactCard}>
            <h3 className={cls.cardTitle}>Телефон</h3>
            <span className={cls.text}>+7 (985) 419-02-95 <br />
              +7 (985) 422-58-18</span>
          </div>
          <div className={cls.contactCard}>
            <h3 className={cls.cardTitle}>Режим работы</h3>
            <span className={cls.text}>Без выходных, <br />
              9:00-22:00</span>
          </div>
        </div>
        <div className={cls.mapWrapper}>
          <div style={{ position: "relative", overflow: "hidden" }}><a href="https://yandex.ru/maps?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "0px" }}>Яндекс Карты</a><a href="https://yandex.ru/maps/?from=mapframe&ll=38.037650%2C55.566560&mode=usermaps&source=mapframe&um=constructor%3Absm6zn9Yr20JkiGrnySmJ9pA2XgsFboS&utm_medium=mapframe&utm_source=maps&z=10" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "14px" }}>Яндекс Карты — транспорт, навигация, поиск мест</a><iframe src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=38.037650%2C55.566560&mode=usermaps&source=mapframe&um=constructor%3Absm6zn9Yr20JkiGrnySmJ9pA2XgsFboS&utm_source=mapframe&z=10" width="600" height="540" frameBorder="1" allowFullScreen style={{ position: "relative" }}></iframe></div>
        </div>
      </div>
    </section>
  )
}