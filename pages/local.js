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
          @media (max-width: 479px) {
            .local-html-node {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Local
