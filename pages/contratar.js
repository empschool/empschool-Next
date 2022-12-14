import React from 'react'
import Head from 'next/head'

const Contratar = (props) => {
  return (
    <>
      <header
        page='&lt;html&gt;   &lt;head&gt;     &lt;meta charset="UTF-8"&gt;     &lt;meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"&gt;     &lt;title&gt;Empreende.chat&lt;/title&gt;   &lt;/head&gt;   &lt;body&gt;     &lt;script SameSite="None; Secure" src="https://cdn.landbot.io/landbot-3/landbot-3.0.0.js"&gt;&lt;/script&gt;     &lt;script&gt;       var myLandbot = new Landbot.Fullpage(&#123;         configUrl: &apos;https://storage.googleapis.com/landbot.online/v3/H-1382194-D7SJO1Z7SNH7WUTD/index.json&apos;,       &#125;);     &lt;/script&gt;   &lt;/body&gt; &lt;/html&gt;'
        className="contratar-container"
      >
        <Head>
          <title>
            Contratar - Startpee marketing & tecnologia para negócios
          </title>
          <meta
            name="description"
            content="Serviço de marketing completo para pequenos negócios, gestor de trafego profissional, social media profissional, desenvolvimento de plano de negócios "
          />
          <meta
            property="og:title"
            content="Contratar - Startpee marketing &amp; tecnologia para negócios "
          />
          <meta
            property="og:description"
            content="Serviço de marketing completo para pequenos negócios, gestor de trafego profissional, social media profissional, desenvolvimento de plano de negócios "
          />
        </Head>
        <iframe
          src="https://landbot.online/v3/H-1382194-D7SJO1Z7SNH7WUTD/index.html"
          allowFullScreen
          className="contratar-iframe"
        ></iframe>
      </header>
      <style jsx>
        {`
          .contratar-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .contratar-iframe {
            width: 100%;
            height: var(--dl-size-size-maxwidth);
          }
          @media (max-width: 991px) {
            .contratar-iframe {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .contratar-iframe {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .contratar-iframe {
              width: 100%;
              height: var(--dl-size-size-maxwidth);
            }
          }
        `}
      </style>
    </>
  )
}

export default Contratar
