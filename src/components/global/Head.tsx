import React from "react";
import { metaData } from '~/constants/metaData'

type HeadProps = {
  id: string
}

export const Head = ({ id }: HeadProps): JSX.Element | null => {
  const data = metaData.pages.find((page: { id: string }) => page.id === id)
  if (!data) return null
  return (
    <>
      <meta charSet="utf-8" />
      <title>{data.title}</title>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="description" content={data.description} />
      {/* <meta name="keywords" content={data.keywords} /> */}
      <>
        {/* <!-- Google Tag Manager--> */}
          <script dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PQSD454');
          `
        }}>
        </script>
        {/* <!-- End Google Tag Manager--> */}
      </>
      <meta property="og:type" content="website" />
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.description} />
      <meta property="og:url" content={metaData.base.domain + data.path} />
      <meta property="og:image" content={metaData.base.domain + metaData.base.ogp} />
      <meta property="og:site_name" content={metaData.base.site_name} />
      <meta property="og:locale" content={metaData.base.locale} />
      <meta name="google-site-verification" content={metaData.base.google_site_verification} />
      <link rel="shortcut icon" href={metaData.base.favicon} />
      <link rel="icon" href={metaData.base.android_touch_icon}></link>
      <link rel="apple-touch-icon" href={metaData.base.apple_touch_icon}></link>
      {data.noindex && <meta name="robots" content="noindex,nofollow" />}
      <link rel="stylesheet" href="/css/common.css" />
      <link rel="stylesheet" href="/css/custom/common_add.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;600&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;500;600&display=swap" rel="stylesheet" />
      {/* <link rel="stylesheet" href="/css/custom/home.css" /> */}
    </>
  )
}