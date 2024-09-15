import Script from 'next/script'

export const YandexMetrika = () => {
  return (
    <>
      <noscript><div><img src="https://mc.yandex.ru/watch/98038876" style={{ position: 'absolute', left: -9999 }} alt="" /></div></noscript>
      <Script id='metrica-counter' strategy='afterInteractive'>
        {` (function(m,e,t,r,i,k,a){m[i]=m[i]function(){(m[i].a=m[i].a[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(98038876, "init", {
                    defer:true,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
              });`}
      </Script>
    </>
  )
}