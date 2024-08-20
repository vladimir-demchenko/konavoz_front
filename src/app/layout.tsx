import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./styles/reset.css";
import { ProductStoreProvider } from '@/providers/store-provider';
import Script from 'next/script';
import { Suspense } from 'react';
import { YandexMetrika } from '@/widgets/YandexMetrika';

const raleway = Raleway({ weight: ['300', '400', '500', '600', '700'], subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Навоз в мешках: конский и коровий с доставкой по Москве и Московской области",
  description: "Конский и коровий навоз, перегной, плодородный грунт, чернозем, торф, эко-грунт по самым низким ценам! Продажа и доставка по Москве и МО. Звоните ☎ +7(985) 419-02-95.",
  keywords: ['навоз', "Конский навоз", "Коровий навоз", "перегной", "чернозем", "торф", "грунт", "навоз москва", "купить навоз", "купить навоз москва", ""],
  openGraph: {
    locale: 'ru_RU',
    type: 'website',
    url: 'https://konavoz.com',
    title: 'Навоз в мешках: конский и коровий с доставкой по Москве и Московской области',
    description: 'Конский и коровий навоз, перегной, плодородный грунт, чернозем, торф, эко-грунт по самым низким ценам! Продажа и доставка по Москве и МО. Звоните ☎ +7(985) 419-02-95.'
  },
  alternates: {
    canonical: 'https://konavoz.com'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={raleway.className}>
        <ProductStoreProvider>{children}</ProductStoreProvider>
        <Script id='metrica-counter' strategy='afterInteractive'>
          {` (function(m,e,t,r,i,k,a){m[i]=m[i]function(){(m[i].a=m[i].a[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(98038876, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });`}
        </Script>
        <Suspense>
          <YandexMetrika />
        </Suspense>
      </body>
    </html>
  );
}
