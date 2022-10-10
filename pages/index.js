import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Slide from '../components/slide'
import Footer from '../components/footer'
import Copyright from '../components/copyright'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Empreende School marketing & tecnologia para negócios</title>
          <meta
            name="description"
            content="Serviço de marketing completo para pequenos negócios, gestor de trafego profissional, social media profissional, desenvolvimento de plano de negócios "
          />
          <meta
            property="og:title"
            content="Empreende School marketing &amp; tecnologia para negócios "
          />
          <meta
            property="og:description"
            content="Serviço de marketing completo para pequenos negócios, gestor de trafego profissional, social media profissional, desenvolvimento de plano de negócios "
          />
        </Head>
        <Navbar rootClassName="navbar-root-class-name"></Navbar>
        <main className="home-main">
          <div className="section-container home-hero">
            <div className="home-max-width max-content-container">
              <div className="home-content-container">
                <h1 className="home-text">
                  <span>Marketing &amp; inteligência para </span>
                  <span className="home-text02">negócios</span>
                </h1>
                <div className="home-features-container">
                  <div className="home-feature">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon"
                    >
                      <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text03">Marketing Completo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-section-one section-container">
            <h2 className="home-text04 heading2">
              <span>entenda oque é </span>
              <span className="home-text06">Marketing </span>
              <span>full</span>
              <br></br>
              <span> em apenas 3 minutos</span>
            </h2>
            <iframe
              src="https://www.youtube.com/embed/DeQkMK5LME4"
              className="home-iframe"
            ></iframe>
            <a
              href="https://frandigital2.wistia.com/medias/h509o0kknc?embed_tab=media_options_embed_modal#"
              className="home-link button-primary button"
            >
              Contratar
            </a>
          </div>
          <div className="home-section-one1 section-container">
            <div className="home-max-width1 max-content-container">
              <h2 className="home-text10">
                <span className="heading2">Sócio e investidor para seu </span>
                <span className="home-text12 heading2">negócio</span>
                <br></br>
              </h2>
              <iframe
                src="https://fast.wistia.com/embed/medias/h509o0kknc"
                className="home-iframe1"
              ></iframe>
            </div>
            <span className="home-text14">
              <span>Você precisa de alguém que acredite nos seu sonhos</span>
              <span className="content-Light">.</span>
            </span>
          </div>
          <Link href="/contratar">
            <a className="home-link1 button-primary button">
              Quero ser parceiro
            </a>
          </Link>
          <div className="home-section-four section-container">
            <h2 className="home-text17 heading2">
              <span>Nunca desista dos seus </span>
              <span className="home-text19">sonhos.</span>
              <span className="home-text20"></span>
            </h2>
            <div className="home-max-width2 max-content-container"></div>
            <div data-type="slider" className="home-slider">
              <Slide rootClassName="slide-root-class-name2"></Slide>
              <Slide
                Role="DESIGN DIRECTOR"
                Author="Bill Smith"
                image_src="/playground_assets/vector%202-700w.png"
                Testimonial='“Stunning app! I use it everyday since I discovered it and love it every since. It really makes newsreading a pleasure. I enjoy all the customization options available, super highly recommended!"'
                Testimonial2="Super highly recommended!”"
                rootClassName="slide-root-class-name"
              ></Slide>
              <Slide
                Role="FREELANCE WRITER"
                Author="Julia Xang"
                image_src="/playground_assets/vector%202%20%5B2%5D-700w.png"
                Testimonial="“Feedbox is very easy to use and flexible! I especially like the pre-made templates that are accessible; they're extraordinary for monitoring a few feed sources and various RSS Feeds together.”"
                rootClassName="slide-root-class-name1"
              ></Slide>
            </div>
          </div>
          <div className="section-container home-section-five">
            <div className="home-max-width3 max-content-container">
              <div className="home-heading-container">
                <h2 className="home-text21 heading2">
                  <span>
                    Se você também sonha em crescer sua empresa saiba que você
                    não está 
                  </span>
                  <span className="home-text23">sozinho.</span>
                </h2>
                <span className="home-text24">
                  <span>Estamos disponíveis 8 horas por dia!</span>
                  <br className="content-Light"></br>
                </span>
                <span className="home-text27">
                  Entre em contato para solicitar uma análise detalhada do seu
                  negócio.
                </span>
              </div>
              <div className="home-get-the-app">
                <a
                  href="https://empreendeschool.crisp.watch/pt-br/"
                  className="home-link2 button-primary button"
                >
                  Chama nós
                </a>
              </div>
            </div>
          </div>
          <div className="home-section-six section-container">
            <div className="home-max-width4 max-content-container">
              <div className="home-content-container1">
                <h1 className="home-text28 heading2">
                  <span>Receba hoje! </span>
                  <span className="home-text30">
                    uma analise detalhada do negócio.
                  </span>
                </h1>
                <span className="home-text31 content-Light">
                  Não importa o seu tamanho, será um prazer ter você como
                  parceiro
                </span>
                <div className="home-input-container">
                  <Link href="/contratar">
                    <a className="home-link3 button-primary button">Vamos lá</a>
                  </Link>
                </div>
                <div className="home-features-container1">
                  <div className="home-feature1">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon2"
                    >
                      <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text32">
                      Seus dados Protegido (LGPD). 
                    </span>
                  </div>
                  <div className="home-feature2">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon4"
                    >
                      <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text33">
                      <span className="home-text34">apenas 5 minutos</span>
                      <span> </span>
                    </span>
                  </div>
                  <div className="home-feature3">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon6"
                    >
                      <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text36">
                      ligamos pra vocÊ depois que Respoder tudo
                    </span>
                  </div>
                </div>
              </div>
              <div className="home-image-container">
                <img
                  alt="image"
                  src="/playground_assets/capatrafego-600w.webp"
                  className="home-image"
                />
              </div>
            </div>
          </div>
        </main>
        <Footer rootClassName="footer-root-class-name"></Footer>
        <Copyright rootClassName="copyright-root-class-name"></Copyright>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-backgrounds-gray);
          }
          .home-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-max-width {
            align-items: flex-start;
            flex-direction: column;
          }
          .home-content-container {
            flex: 1;
            display: flex;
            min-width: 50%;
            align-items: flex-start;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .home-text {
            width: 90%;
            font-size: 52px;
            font-style: normal;
            text-align: center;
            font-family: Lexend;
            font-weight: 600;
            line-height: 1.2;
            margin-bottom: 42px;
            text-transform: none;
            text-decoration: none;
          }
          .home-text02 {
            color: var(--dl-color-backgrounds-primary);
          }
          .home-features-container {
            flex: 0 0 auto;
            width: 1127px;
            display: flex;
            text-align: center;
            align-items: flex-start;
            padding-left: 380px;
            padding-right: 106px;
            flex-direction: column;
          }
          .home-feature {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            flex-direction: row;
          }
          .home-icon {
            fill: #62bf77;
            width: 113px;
            height: var(--dl-size-size-medium);
            font-size: small;
            min-width: 17px;
            margin-right: 12px;
          }
          .home-text03 {
            color: var(--dl-color-grays-gray60);
            font-size: 30px;
            font-style: normal;
            font-weight: 700;
          }
          .home-section-one {
            height: 793px;
            border-color: rgba(33, 33, 33, 0.1);
            border-width: 1px;
            padding-bottom: 44px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-text04 {
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-text06 {
            color: var(--dl-color-backgrounds-primary);
          }
          .home-iframe {
            width: 714px;
            height: 440px;
            margin-bottom: 22px;
          }
          .home-link {
            width: 212px;
            height: 88px;
            display: flex;
            font-size: 20px;
            transition: 0.3s;
            align-items: center;
            line-height: 1;
            padding-top: 20px;
            white-space: nowrap;
            padding-left: 32px;
            padding-right: 32px;
            padding-bottom: 20px;
            justify-content: center;
            text-decoration: none;
            background-color: var(--dl-color-grays-dark100);
          }
          .home-link:hover {
            background-color: var(--dl-color-grays-white100);
          }
          .home-section-one1 {
            height: 773px;
            border-color: rgba(33, 33, 33, 0.1);
            border-width: 1px;
            padding-bottom: 44px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-max-width1 {
            height: 572px;
            flex-direction: column;
          }
          .home-text10 {
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-text12 {
            color: var(--dl-color-backgrounds-primary);
          }
          .home-iframe1 {
            width: 782px;
            height: 411px;
          }
          .home-text14 {
            color: var(--dl-color-grays-gray100);
            font-size: 22px;
          }
          .home-link1 {
            height: 68px;
            display: flex;
            transition: 0.3s;
            align-items: center;
            line-height: 1;
            padding-top: 20px;
            white-space: nowrap;
            padding-left: 32px;
            padding-right: 32px;
            padding-bottom: 20px;
            justify-content: center;
            text-decoration: none;
            background-color: var(--dl-color-grays-dark100);
          }
          .home-link1:hover {
            background-color: var(--dl-color-grays-white100);
          }
          .home-section-four {
            height: 776px;
            padding-top: 134px;
            padding-bottom: 0px;
          }
          .home-text17 {
            text-align: center;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-text19 {
            color: var(--dl-color-backgrounds-primary);
          }
          .home-text20 {
            color: transparent;
          }
          .home-max-width2 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            flex-direction: column;
          }
          .home-slider {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            transition: 0.5s;
            align-items: stretch;
            flex-direction: row;
          }
          .home-max-width3 {
            flex-direction: column;
            justify-content: center;
          }
          .home-heading-container {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .home-text21 {
            width: 968px;
            text-align: center;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text23 {
            color: var(--dl-color-backgrounds-primary);
          }
          .home-text24 {
            color: var(--dl-color-backgrounds-primary);
            font-size: 29px;
            font-weight: 400;
          }
          .home-text27 {
            font-size: 19px;
            font-weight: 400;
          }
          .home-get-the-app {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
          }
          .home-link2 {
            display: flex;
            transition: 0.3s;
            align-items: center;
            line-height: 1;
            padding-top: 20px;
            white-space: nowrap;
            padding-left: 32px;
            padding-right: 32px;
            padding-bottom: 20px;
            justify-content: center;
            text-decoration: none;
            background-color: var(--dl-color-grays-dark100);
          }
          .home-link2:hover {
            background-color: var(--dl-color-grays-white100);
          }
          .home-section-six {
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: 0px;
            background-color: var(--dl-color-backgrounds-primary);
          }
          .home-max-width4 {
            height: 437px;
            align-items: stretch;
          }
          .home-content-container1 {
            flex: 1;
            display: flex;
            min-width: 60%;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text28 {
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text30 {
            color: var(--dl-color-grays-white100);
          }
          .home-text31 {
            color: var(--dl-color-grays-white80);
            margin-bottom: 36px;
          }
          .home-input-container {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
            justify-content: center;
          }
          .home-link3 {
            width: 191px;
            height: 81px;
            display: flex;
            font-size: 22px;
            transition: 0.3s;
            align-items: center;
            line-height: 1;
            padding-top: 20px;
            white-space: nowrap;
            padding-left: 32px;
            padding-right: 32px;
            padding-bottom: 20px;
            justify-content: center;
            text-decoration: none;
            background-color: var(--dl-color-grays-dark100);
          }
          .home-link3:hover {
            background-color: var(--dl-color-grays-white100);
          }
          .home-features-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-feature1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            flex-direction: row;
          }
          .home-icon2 {
            fill: var(--dl-color-grays-white100);
            width: 17px;
            height: 17px;
            min-width: 17px;
            margin-right: 12px;
          }
          .home-text32 {
            color: var(--dl-color-grays-white80);
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
          }
          .home-feature2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            flex-direction: row;
          }
          .home-icon4 {
            fill: var(--dl-color-grays-white100);
            width: 17px;
            height: 17px;
            min-width: 17px;
            margin-right: 12px;
          }
          .home-text33 {
            color: var(--dl-color-grays-white80);
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
          }
          .home-feature3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon6 {
            fill: var(--dl-color-grays-white100);
            width: 17px;
            height: 17px;
            min-width: 17px;
            margin-right: 12px;
          }
          .home-text36 {
            color: var(--dl-color-grays-white80);
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
          }
          .home-image-container {
            flex: 1;
            width: 200px;
            height: 350px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image {
            width: 395px;
            height: 100%;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .home-max-width {
              flex-direction: column;
            }
            .home-content-container {
              width: 939px;
              margin-bottom: 42px;
              padding-right: 312px;
            }
            .home-text02 {
              color: var(--dl-color-backgrounds-primary);
            }
            .home-features-container {
              padding-left: 0px;
            }
            .home-feature {
              width: 990px;
              margin-left: 0px;
              padding-left: 243px;
              padding-right: 369px;
            }
            .home-section-six {
              height: 848px;
            }
            .home-max-width4 {
              flex-direction: column;
            }
            .home-text28 {
              width: 100%;
            }
            .home-image {
              width: 410px;
              align-self: flex-start;
              margin-left: 250px;
              margin-right: 250px;
            }
          }
          @media (max-width: 767px) {
            .home-feature {
              padding-left: 165px;
            }
            .home-icon {
              width: var(--dl-size-size-large);
              min-width: var(--dl-size-size-large);
            }
            .home-text04 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-section-one1 {
              height: 675px;
            }
            .home-text10 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-iframe1 {
              width: 694px;
              height: 369px;
            }
            .home-section-four {
              height: 1152px;
            }
            .home-text17 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-slider {
              height: 884px;
            }
            .home-max-width3 {
              height: 501px;
            }
            .home-heading-container {
              height: 466px;
            }
            .home-text21 {
              width: 706px;
              height: 156px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-max-width4 {
              height: 804px;
            }
            .home-text32 {
              color: var(--dl-color-grays-white80);
              font-size: 19px;
              font-style: normal;
              font-weight: 400;
            }
            .home-text33 {
              color: var(--dl-color-grays-white80);
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
            }
            .home-text34 {
              font-size: 19px;
            }
            .home-text36 {
              color: var(--dl-color-grays-white80);
              font-size: 19px;
              font-style: normal;
              font-weight: 400;
            }
            .home-image {
              width: 586px;
              height: 413px;
              align-self: flex-start;
            }
          }
          @media (max-width: 479px) {
            .home-main {
              z-index: 100;
            }
            .home-hero {
              width: 308px;
            }
            .home-max-width {
              width: 337px;
            }
            .home-text {
              width: 346px;
              font-size: 33px;
              margin-right: 0px;
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-text02 {
              color: var(--dl-color-backgrounds-primary);
            }
            .home-feature {
              width: 258px;
              margin-right: 136px;
              padding-left: 0px;
              padding-right: 170px;
            }
            .home-icon {
              width: 113px;
              padding-right: 44px;
            }
            .home-text03 {
              color: var(--dl-color-grays-gray60);
              font-size: 30px;
              font-style: normal;
              font-weight: 700;
            }
            .home-text04 {
              width: 451px;
              padding-right: 0px;
            }
            .home-text06 {
              color: var(--dl-color-backgrounds-primary);
            }
            .home-iframe {
              width: 448px;
              height: 340px;
            }
            .home-link {
              height: 50px;
              font-size: 20px;
              line-height: 1;
              text-decoration: none;
              background-color: var(--dl-color-grays-dark100);
            }
            .home-section-one1 {
              height: 666px;
            }
            .home-max-width1 {
              height: 531px;
            }
            .home-text10 {
              width: 451px;
            }
            .home-iframe1 {
              width: 435px;
              height: 323px;
            }
            .home-text14 {
              color: var(--dl-color-grays-gray100);
            }
            .home-link1 {
              width: 232px;
              height: 74px;
              font-size: 20px;
              line-height: 1;
              text-decoration: none;
              background-color: var(--dl-color-grays-dark100);
            }
            .home-section-four {
              height: 696px;
            }
            .home-text19 {
              color: var(--dl-color-backgrounds-primary);
            }
            .home-text20 {
              color: transparent;
            }
            .home-slider {
              height: 932px;
            }
            .home-section-five {
              padding-bottom: 0px;
            }
            .home-max-width3 {
              height: 1331px;
              margin-top: 125px;
              margin-bottom: 0px;
            }
            .home-text21 {
              width: 447px;
              height: 264px;
              margin-top: 22px;
              margin-bottom: 22px;
            }
            .home-text23 {
              color: var(--dl-color-backgrounds-primary);
            }
            .home-text24 {
              color: var(--dl-color-backgrounds-primary);
              font-size: 29px;
              align-self: center;
              margin-top: 10px;
              text-align: center;
              font-weight: 400;
              margin-bottom: 10px;
            }
            .home-text27 {
              margin-top: 22px;
              text-align: center;
              margin-bottom: 22px;
            }
            .home-link2 {
              color: rgb(255, 255, 255);
              width: 207px;
              height: 77px;
              font-size: 22px;
              box-shadow: rgb(212, 212, 212) 5px 5px 10px 0px,
                rgb(212, 212, 212) 5px 5px 10px 0px;
              font-style: normal;
              font-weight: 700;
              line-height: 1;
              text-decoration: none;
              background-color: rgb(250, 121, 48);
            }
            .home-section-six {
              height: 1111px;
            }
            .home-max-width4 {
              height: 881px;
            }
            .home-text30 {
              color: var(--dl-color-grays-white100);
            }
            .home-input-container {
              flex-direction: column;
            }
            .home-image {
              width: 406px;
              height: 335px;
              margin-top: 22px;
              margin-bottom: 22px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
