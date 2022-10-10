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
        <h1 className="home-text">
          <span>Marketing &amp; inteligência para </span>
          <span className="home-text02">negócios</span>
        </h1>
        <main className="home-main">
          <img
            src="/playground_assets/let-1500w.png"
            alt="image"
            className="home-image"
          />
          <div className="home-section-one section-container">
            <h2 className="home-text03">
              <span>entenda oque é </span>
              <span className="home-text05">Marketing </span>
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
            <div className="home-max-width max-content-container">
              <h2 className="home-text09">
                <span className="heading2 home-text10">
                  Sócio e investidor para seu 
                </span>
                <span className="home-text11 heading2">negócio</span>
                <br></br>
              </h2>
              <iframe
                src="https://fast.wistia.com/embed/medias/h509o0kknc"
                className="home-iframe1"
              ></iframe>
            </div>
            <span className="home-text13">
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
            <h2 className="home-text16 heading2">
              <span>Nunca desista dos seus </span>
              <span className="home-text18">sonhos.</span>
              <span className="home-text19"></span>
            </h2>
            <div className="home-max-width1 max-content-container"></div>
            <div data-type="slider" className="home-slider">
              <Slide rootClassName="slide-root-class-name2"></Slide>
            </div>
          </div>
          <div className="home-section-six section-container">
            <div className="home-max-width2 max-content-container">
              <div className="home-content-container">
                <h2 className="home-text20">
                  <span>
                    Se você também sonha em crescer sua empresa saiba que você
                    não está 
                  </span>
                  <span className="home-text22">sozinho.</span>
                </h2>
                <span className="home-text23">
                  <span>Estamos disponíveis 8 horas por dia!</span>
                  <br className="content-Light home-text25"></br>
                </span>
                <div className="home-input-container">
                  <Link href="/contratar">
                    <a className="home-link2 button-primary button">
                      Chamar nós
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="home-section-six1 section-container">
            <div className="home-max-width3 max-content-container">
              <div className="home-content-container1">
                <h1 className="home-text26 heading2">
                  <span>Receba hoje! </span>
                  <span className="home-text28">
                    uma analise detalhada do negócio.
                  </span>
                </h1>
                <span className="home-text29 content-Light">
                  Não importa o seu tamanho, será um prazer ter você como
                  parceiro
                </span>
                <div className="home-input-container1">
                  <Link href="/contratar">
                    <a className="home-link3 button-primary button">Vamos lá</a>
                  </Link>
                </div>
                <div className="home-features-container">
                  <div className="home-feature">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon"
                    >
                      <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text30">
                      Seus dados Protegido (LGPD). 
                    </span>
                  </div>
                  <div className="home-feature1">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon2"
                    >
                      <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text31">
                      <span className="home-text32">apenas 5 minutos</span>
                      <span> </span>
                    </span>
                  </div>
                  <div className="home-feature2">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon4"
                    >
                      <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text34">
                      ligamos pra vocÊ depois que Respoder tudo
                    </span>
                  </div>
                </div>
              </div>
              <div className="home-image-container">
                <img
                  alt="image"
                  src="/playground_assets/capatrafego-500h.webp"
                  className="home-image1"
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
          .home-text {
            width: 90%;
            height: 193px;
            font-size: 52px;
            font-style: normal;
            margin-top: 12px;
            text-align: center;
            font-family: Lexend;
            font-weight: 600;
            line-height: 1.2;
            margin-left: 12px;
            margin-right: 12px;
            padding-left: 99px;
            margin-bottom: 12px;
            text-transform: none;
            text-decoration: none;
          }
          .home-text02 {
            color: var(--dl-color-backgrounds-primary);
          }
          .home-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-image {
            width: auto;
            height: 100%;
            object-fit: cover;
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
          .home-text03 {
            margin: 19px;
            margin-top: 12px;
            text-align: center;
            margin-left: 12px;
            margin-right: 12px;
            margin-bottom: 12px;
          }
          .home-text05 {
            color: var(--dl-color-backgrounds-primary);
          }
          .home-iframe {
            width: 714px;
            height: 440px;
            margin-top: 12px;
            margin-left: 12px;
            margin-right: 12px;
            margin-bottom: 12px;
          }
          .home-link {
            width: 212px;
            height: 88px;
            display: flex;
            padding: 12p12x;
            font-size: 20px;
            transition: 0.3s;
            align-items: center;
            line-height: 1;
            padding-top: 12px;
            white-space: nowrap;
            padding-left: 12px;
            padding-right: 12px;
            padding-bottom: 12px;
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
          .home-max-width {
            height: 572px;
            flex-direction: column;
          }
          .home-text09 {
            margin-top: 19px;
            text-align: center;
            margin-left: 12px;
            margin-right: 12px;
            margin-bottom: 19px;
          }
          .home-text11 {
            color: var(--dl-color-backgrounds-primary);
          }
          .home-iframe1 {
            width: 782px;
            height: 411px;
          }
          .home-text13 {
            color: var(--dl-color-grays-gray100);
            font-size: 22px;
            text-align: center;
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
          .home-text16 {
            text-align: center;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-text18 {
            color: var(--dl-color-backgrounds-primary);
          }
          .home-text19 {
            color: transparent;
          }
          .home-max-width1 {
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
          .home-section-six {
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: 0px;
            background-color: #ffffff;
          }
          .home-max-width2 {
            height: 437px;
            align-items: stretch;
          }
          .home-content-container {
            flex: 1;
            display: flex;
            min-width: 60%;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text20 {
            width: 676px;
            align-self: center;
            margin-top: 12px;
            text-align: center;
            margin-left: 12px;
            margin-right: 12px;
            margin-bottom: 12px;
          }
          .home-text22 {
            color: var(--dl-color-backgrounds-primary);
          }
          .home-text23 {
            color: var(--dl-color-backgrounds-primary);
            font-size: 29px;
            align-self: center;
            margin-top: 12px;
            text-align: center;
            font-weight: 400;
            margin-left: 12px;
            margin-right: 12px;
            margin-bottom: 12px;
          }
          .home-input-container {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            margin-top: 12px;
            align-items: center;
            margin-left: 12px;
            margin-right: 12px;
            margin-bottom: 12px;
            flex-direction: row;
            justify-content: center;
          }
          .home-link2 {
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
          .home-link2:hover {
            background-color: var(--dl-color-grays-white100);
          }
          .home-section-six1 {
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: 0px;
            background-color: var(--dl-color-backgrounds-primary);
          }
          .home-max-width3 {
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
          .home-text26 {
            margin-top: 12px;
            margin-left: 12px;
            margin-right: 12px;
            margin-bottom: 12px;
          }
          .home-text28 {
            color: var(--dl-color-grays-white100);
          }
          .home-text29 {
            color: var(--dl-color-grays-white80);
            margin-top: 12px;
            margin-left: 12px;
            margin-bottom: 12px;
          }
          .home-input-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            margin-top: 12px;
            align-items: center;
            margin-left: 12px;
            margin-right: 12px;
            margin-bottom: 12px;
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
          .home-features-container {
            flex: 0 0 auto;
            width: 100%;
            margin: 12px;
            display: flex;
            align-items: flex-start;
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
            fill: var(--dl-color-grays-white100);
            width: 17px;
            height: 17px;
            min-width: 17px;
            margin-right: 12px;
          }
          .home-text30 {
            color: var(--dl-color-grays-white80);
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
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
          .home-text31 {
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
            flex-direction: row;
          }
          .home-icon4 {
            fill: var(--dl-color-grays-white100);
            width: 17px;
            height: 17px;
            min-width: 17px;
            margin-right: 12px;
          }
          .home-text34 {
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
          .home-image1 {
            width: 395px;
            height: 100%;
            margin: 12px;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .home-text02 {
              color: var(--dl-color-backgrounds-primary);
            }
            .home-iframe1 {
              width: 100%;
              height: 100%;
            }
            .home-section-six {
              height: 848px;
            }
            .home-max-width2 {
              flex-direction: column;
            }
            .home-section-six1 {
              height: 848px;
            }
            .home-max-width3 {
              flex-direction: column;
            }
            .home-text26 {
              width: 100%;
            }
            .home-image1 {
              width: 410px;
              align-self: flex-start;
              margin-left: 250px;
              margin-right: 250px;
            }
          }
          @media (max-width: 767px) {
            .home-text {
              width: auto;
              font-size: 52px;
              font-style: normal;
              font-family: Lexend;
              font-weight: 600;
              line-height: 1.2;
              padding-left: 0px;
              text-transform: none;
              text-decoration: none;
            }
            .home-text02 {
              color: var(--dl-color-backgrounds-primary);
            }
            .home-text03 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-iframe {
              width: 100%;
              height: 100%;
            }
            .home-section-one1 {
              height: 675px;
            }
            .home-text09 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-iframe1 {
              width: 100%;
              height: 100%;
            }
            .home-section-four {
              height: 1152px;
            }
            .home-text16 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-slider {
              height: 884px;
            }
            .home-section-six {
              height: 972px;
            }
            .home-max-width2 {
              height: 803px;
              margin: 12px;
            }
            .home-text20 {
              width: 706px;
              height: 156px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-section-six1 {
              height: 972px;
            }
            .home-max-width3 {
              height: 803px;
              margin: 12px;
            }
            .home-text30 {
              color: var(--dl-color-grays-white80);
              font-size: 19px;
              font-style: normal;
              font-weight: 400;
            }
            .home-text31 {
              color: var(--dl-color-grays-white80);
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
            }
            .home-text32 {
              font-size: 19px;
            }
            .home-text34 {
              color: var(--dl-color-grays-white80);
              font-size: 19px;
              font-style: normal;
              font-weight: 400;
            }
            .home-image1 {
              width: auto;
              height: 413px;
              margin: 12px;
              align-self: flex-start;
            }
          }
          @media (max-width: 479px) {
            .home-text {
              width: auto;
              height: 233px;
              margin: 12px;
              padding: 10px;
              font-size: 38px;
              font-style: normal;
              font-family: Lexend;
              font-weight: 600;
              line-height: 1.2;
              padding-top: 10px;
              padding-left: 10px;
              padding-right: 10px;
              padding-bottom: 84px;
              text-transform: none;
              text-decoration: none;
            }
            .home-text02 {
              color: var(--dl-color-backgrounds-primary);
            }
            .home-main {
              height: auto;
              z-index: 100;
            }
            .home-image {
              width: 100%;
              margin-top: 12px;
              margin-left: 12px;
              margin-right: 12px;
              margin-bottom: 12px;
            }
            .home-section-one {
              height: 679px;
              margin-top: 5px;
              margin-left: 5px;
              margin-right: 5px;
              margin-bottom: 5px;
            }
            .home-text03 {
              width: auto;
              height: 177px;
              font-size: 26px;
              font-style: normal;
              font-family: Lexend;
              font-weight: 600;
              line-height: 1.3;
              padding-right: 0px;
              text-transform: none;
              text-decoration: none;
            }
            .home-text05 {
              color: var(--dl-color-backgrounds-primary);
            }
            .home-iframe {
              width: 100%;
              height: 270px;
            }
            .home-link {
              width: var(--dl-size-size-xlarge);
              height: auto;
              font-size: 30px;
              line-height: 1;
              text-decoration: none;
              background-color: var(--dl-color-grays-dark100);
            }
            .home-section-one1 {
              height: 666px;
            }
            .home-max-width {
              height: 531px;
              margin-top: 5px;
              margin-left: 5px;
              margin-right: 5px;
              margin-bottom: 5px;
            }
            .home-text09 {
              width: auto;
              font-size: 30px;
            }
            .home-text10 {
              font-size: 27px;
              font-style: normal;
              font-family: Lexend;
              font-weight: 600;
              line-height: 1.3;
              text-transform: none;
              text-decoration: none;
            }
            .home-text11 {
              color: var(--dl-color-backgrounds-primary);
              font-size: 27px;
              font-style: normal;
              font-family: Lexend;
              font-weight: 600;
              line-height: 1.3;
              text-transform: none;
              text-decoration: none;
            }
            .home-iframe1 {
              width: 100%;
              height: 336px;
              padding-top: 6px;
            }
            .home-text13 {
              color: var(--dl-color-grays-gray100);
              margin-top: 12px;
              margin-left: 12px;
              margin-right: 12px;
              margin-bottom: 12px;
            }
            .home-link1 {
              width: auto;
              height: 74px;
              font-size: 22px;
              margin-top: 12px;
              line-height: 1;
              margin-left: 12px;
              margin-right: 12px;
              margin-bottom: 12px;
              text-decoration: none;
              background-color: var(--dl-color-grays-dark100);
            }
            .home-section-four {
              height: 1244px;
            }
            .home-text16 {
              font-size: 30px;
              font-style: normal;
              text-align: center;
              font-family: Lexend;
              font-weight: 600;
              line-height: 1.3;
              text-transform: none;
              text-decoration: none;
            }
            .home-slider {
              height: 953px;
              padding-bottom: 0px;
            }
            .home-section-six {
              width: auto;
              height: 683px;
              padding: 12px;
              padding-top: 0px;
            }
            .home-max-width2 {
              height: 659px;
              margin-bottom: 0px;
            }
            .home-content-container {
              width: auto;
              height: 568px;
              padding-top: 174px;
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-text20 {
              width: auto;
              height: 100%;
              font-size: 30px;
              font-style: normal;
              margin-top: 22px;
              font-family: Lexend;
              font-weight: 600;
              line-height: 1.3;
              margin-bottom: 22px;
              text-transform: none;
              text-decoration: none;
            }
            .home-text22 {
              color: var(--dl-color-backgrounds-primary);
            }
            .home-text23 {
              color: var(--dl-color-backgrounds-primary);
              font-size: 21px;
              align-self: center;
              margin-top: 10px;
              text-align: center;
              font-weight: 400;
              margin-bottom: 10px;
            }
            .home-text25 {
              font-style: normal;
              font-family: Lexend;
              font-weight: 300;
              line-height: 1.75;
              text-transform: none;
              text-decoration: none;
            }
            .home-input-container {
              width: auto;
              align-self: center;
              flex-direction: column;
            }
            .home-link2 {
              font-size: 22px;
              line-height: 1;
              text-decoration: none;
              background-color: var(--dl-color-grays-dark100);
            }
            .home-section-six1 {
              width: auto;
              height: 100%;
              padding: 33px;
            }
            .home-max-width3 {
              height: 881px;
            }
            .home-text28 {
              color: var(--dl-color-grays-white100);
            }
            .home-input-container1 {
              flex-direction: column;
            }
            .home-link3 {
              font-size: 25px;
            }
            .home-image1 {
              width: 100%;
              height: auto;
              margin: 12px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
