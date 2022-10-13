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
                '<iframe\r\n    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.63021247021!2d-46.592954500000005!3d-23.545798999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xda743ac39c6f5538!2sStartpee!5e0!3m2!1spt-BR!2sbr!4v1665627346864!5m2!1spt-BR!2sbr"\r\n    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"\r\n    referrerpolicy="no-referrer-when-downgrade"></iframe>',
            }}
          />
        </div>
        <div className="local-html-node1">
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
            justify-content: flex-start;
          }
          .local-html-node1 {
            width: 643px;
            height: 420px;
            margin-top: var(--dl-space-space-fourunits);
          }
          @media (max-width: 991px) {
            .local-html-node1 {
              width: 604px;
              height: 370px;
            }
          }
          @media (max-width: 767px) {
            .local-html-node1 {
              width: 454px;
              height: 253px;
              z-index: 100;
              box-shadow: 5px 5px 10px 0px #d4d4d4;
              border-color: var(--dl-color-grays-dark100);
              border-width: 1px;
              border-radius: var(--dl-radius-radius-radius4);
            }
          }
          @media (max-width: 479px) {
            .local-html-node {
              width: 100%;
            }
            .local-html-node1 {
              margin: var(--dl-space-space-threeunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Local
