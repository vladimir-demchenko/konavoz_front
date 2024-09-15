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
          <YandexMetrika />
        </Suspense>
      </body>
    </html>
  );
}
