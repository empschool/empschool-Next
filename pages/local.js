import React from 'react'
import Head from 'next/head'

const Local = (props) => {
  return (
    <>
      <div className="local-container">
        <Head>
          <title>Local - Startpee marketing & tecnologia para negócios</title>
          <meta
            name="description"
            content="Serviço de marketing completo para pequenos negócios, gestor de trafego profissional, social media profissional, desenvolvimento de plano de negócios "
          />
          <meta
            property="og:title"
            content="Local - Startpee marketing &amp; tecnologia para negócios "
          />
          <meta
            property="og:description"
            content="Serviço de marketing completo para pequenos negócios, gestor de trafego profissional, social media profissional, desenvolvimento de plano de negócios "
          />
        </Head>
        <div className="local-html-node">
          <span
            dangerouslySetInnerHTML={{
              __html:
                '<div style="padding-bottom: 56.25%; position: relative; height: 0; overflow: hidden; max-width: 100%;"><iframe\r\n                src="https://player.adventr.io/index.html?link=https%3A%2F%2Fd252srr1zuysk4.cloudfront.net%2Fclients%2F8041%2F9697%2Fpublished%2F8041-startpee-14280173.data&gdpr=skip"\r\n                frameborder="0" scrolling="no" allowfullscreen\r\n                allow="autoplay; fullscreen; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone"\r\n                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
            }}
          />
        </div>
      </div>
      <style jsx>
        {`
          .local-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .local-html-node {
            top: 230px;
            left: 0px;
            right: 0px;
            width: auto;
            height: 500px;
            margin: 100px;
            position: absolute;
          }
          @media (max-width: 479px) {
            .local-html-node {
              margin: 20px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Local
