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
        <Suspense>
          <Script id='vk' strategy='beforeInteractive'>
            {`
              <script type="text/javascript">!function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src='https://vk.ru/js/api/openapi.js?173',t.onload=function(){VK.Retargeting.Init("VK-RTRG-1907820-htZfA"),VK.Retargeting.Hit()},document.head.appendChild(t)}();</script><noscript><img src="https://vk.ru/rtrg?p=VK-RTRG-1907820-htZfA" style="position:fixed; left:-999px;" alt=""/></noscript>
            `}
          </Script>
        </Suspense>
        <Suspense>
          <YandexMetrika />
        </Suspense>
      </body>
    </html>
  );
}
