import React from 'react'
import Head from 'next/head'

const Intro = (props) => {
  return (
    <>
      <div className="intro-container">
        <Head>
          <title>intro - Startpee marketing & tecnologia para negócios</title>
          <meta
            name="description"
            content="Serviço de marketing completo para pequenos negócios, gestor de trafego profissional, social media profissional, desenvolvimento de plano de negócios "
          />
          <meta
            property="og:title"
            content="intro - Startpee marketing &amp; tecnologia para negócios "
          />
          <meta
            property="og:description"
            content="Serviço de marketing completo para pequenos negócios, gestor de trafego profissional, social media profissional, desenvolvimento de plano de negócios "
          />
        </Head>
        <div className="intro-html-node">
          <span
            dangerouslySetInnerHTML={{
              __html:
                '<iframe\r\n  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.63021247021!2d-46.592954500000005!3d-23.545798999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xda743ac39c6f5538!2sStartpee!5e0!3m2!1spt-BR!2sbr!4v1665524002890!5m2!1spt-BR!2sbr"\r\n  width="600"\r\n  height="450"\r\n  style="border:0;"\r\n  allowfullscreen=""\r\n  loading="lazy"\r\n  referrerpolicy="no-referrer-when-downgrade"\r\n></iframe>\r\n\r\n',
            }}
          />
        </div>
        <div className="intro-html-node1">
          <span
            dangerouslySetInnerHTML={{
              __html:
                '<script\r\n  src="https://fast.wistia.com/embed/medias/h509o0kknc.jsonp"\r\n  async\r\n></script>\r\n<script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>\r\n<div\r\n  class="wistia_responsive_padding"\r\n  style="padding:56.25% 0 0 0;position:relative;"\r\n>\r\n  <div\r\n    class="wistia_responsive_wrapper"\r\n    style="height:100%;left:0;position:absolute;top:0;width:100%;"\r\n  >\r\n    <div\r\n      class="wistia_embed wistia_async_h509o0kknc videoFoam=true"\r\n      style="height:100%;position:relative;width:100%"\r\n    >\r\n      <div\r\n        class="wistia_swatch"\r\n        style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"\r\n      >\r\n        <img\r\n          src="https://fast.wistia.com/embed/medias/h509o0kknc/swatch"\r\n          style="filter:blur(5px);height:100%;object-fit:contain;width:100%;"\r\n          alt=""\r\n          aria-hidden="true"\r\n          onload="this.parentNode.style.opacity=1;"\r\n        />\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n',
            }}
          />
        </div>
      </div>
      <style jsx>
        {`
          .intro-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
          }
          .intro-html-node {
            top: NaNpx;
            left: NaNpx;
            width: 703px;
            height: 567px;
            position: absolute;
            margin-right: Infinitypx;
          }
          .intro-html-node1 {
            top: 485px;
            right: 95px;
            width: var(--dl-size-size-xlarge);
            position: absolute;
          }
        `}
      </style>
    </>
  )
}

export default Intro
