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
          <img
            alt="image"
            src="/playground_assets/let-1500w.png"
            className="home-image"
          />
          <div className="home-html-node">
            <span
              dangerouslySetInnerHTML={{
                __html:
                  '<div style="padding-bottom: 56.25%; position: relative; height: 0; overflow: hidden; max-width: 100%;"><iframe\r\n        src="https://player.adventr.io/index.html?link=https%3A%2F%2Fd252srr1zuysk4.cloudfront.net%2Fclients%2F8041%2F9697%2Fpublished%2F8041-startpee-14280173.data&gdpr=skip"\r\n        frameborder="0" scrolling="no" allowfullscreen\r\n        allow="autoplay; fullscreen; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone"\r\n        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
              }}
            />
          </div>
          <div className="home-section-one section-container">
            <div className="home-max-width max-content-container">
              <h2 className="home-text">
                <span className="heading2 home-text01">
                  Sócio e investidor para seu 
                </span>
                <span className="home-text02 heading2">negócio</span>
                <br></br>
              </h2>
              <iframe
                src="https://www.youtube.com/watch?v=t0UC8PtYdjY"
                allowFullScreen
                className="home-iframe"
              ></iframe>
            </div>
            <span className="home-text04">
              <span>Você precisa de alguém que acredite nos seu sonhos</span>
              <span className="content-Light">.</span>
            </span>
          </div>
          <Link href="/contratar">
            <a className="home-link button-primary button">
              Quero ser parceiro
            </a>
          </Link>
          <div className="home-section-four section-container">
            <h2 className="home-text07 heading2">
              <span>Nunca desista dos seus </span>
              <span className="home-text09">sonhos.</span>
              <span className="home-text10"></span>
            </h2>
            <div className="home-max-width1 max-content-container"></div>
            <div data-type="slider" className="home-slider">
              <Slide rootClassName="slide-root-class-name2"></Slide>
            </div>
          </div>
          <div className="home-section-six section-container">
            <div className="home-max-width2 max-content-container">
              <div className="home-content-container">
                <h2 className="home-text11">
                  <span>
                    Se você também sonha em crescer sua empresa saiba que você
                    não está 
                  </span>
                  <span className="home-text13">sozinho.</span>
                </h2>
                <span className="home-text14">
                  <span>Estamos disponíveis 8 horas por dia!</span>
                  <br className="content-Light home-text16"></br>
                </span>
                <div className="home-input-container">
                  <Link href="/contratar">
                    <a className="home-link1 button-primary button">
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
                <h1 className="home-text17 heading2">
                  <span>Receba hoje! </span>
                  <span className="home-text19">
                    uma analise detalhada do negócio.
                  </span>
                </h1>
                <span className="home-text20 content-Light">
                  Não importa o seu tamanho, será um prazer ter você como
                  parceiro
                </span>
                <div className="home-input-container1">
                  <Link href="/contratar">
                    <a className="home-link2 button-primary button">Começar</a>
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
                    <span className="home-text21">
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
                    <span className="home-text22">
                      <span className="home-text23">apenas 5 minutos</span>
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
                    <span className="home-text25">
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
          .home-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            margin-left: 30px;
            margin-right: 30px;
            flex-direction: column;
          }
          .home-image {
            width: auto;
            height: 100%;
            margin-top: 22px;
            object-fit: cover;
            margin-bottom: 22px;
          }
          .home-html-node {
            width: 802px;
            height: 471px;
          }
          .home-section-one {
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
          .home-text {
            margin-top: 19px;
            text-align: center;
            margin-left: 12px;
            margin-right: 12px;
            margin-bottom: 19px;
          }
          .home-text02 {
            color: var(--dl-color-backgrounds-primary);
          }
          .home-iframe {
            width: 782px;
            height: 411px;
          }
          .home-text04 {
            color: var(--dl-color-grays-gray100);
            font-size: 22px;
            text-align: center;
          }
          .home-link {
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
          .home-link:hover {
            background-color: var(--dl-color-grays-white100);
          }
          .home-section-four {
            height: 776px;
            padding-top: 134px;
            padding-bottom: 0px;
          }
          .home-text07 {
            text-align: center;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-text09 {
            color: var(--dl-color-backgrounds-primary);
          }
          .home-text10 {
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
          .home-text11 {
            width: 676px;
            align-self: center;
            margin-top: 12px;
            text-align: center;
            margin-left: 12px;
            margin-right: 12px;
            margin-bottom: 12px;
          }
          .home-text13 {
            color: var(--dl-color-backgrounds-primary);
          }
          .home-text14 {
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
          .home-link1 {
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
          .home-link1:hover {
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
          .home-text17 {
            margin-top: 12px;
            margin-left: 12px;
            margin-right: 12px;
            margin-bottom: 12px;
          }
          .home-text19 {
            color: var(--dl-color-grays-white100);
          }
          .home-text20 {
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
          .home-text21 {
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
          .home-text22 {
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
          .home-text25 {
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
            .home-iframe {
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
            .home-text17 {
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
            .home-html-node {
              width: 100%;
            }
            .home-section-one {
              height: 675px;
            }
            .home-text {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-iframe {
              width: 100%;
              height: 100%;
            }
            .home-section-four {
              height: 1152px;
            }
            .home-text07 {
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
            .home-text11 {
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
            .home-text21 {
              color: var(--dl-color-grays-white80);
              font-size: 19px;
              font-style: normal;
              font-weight: 400;
            }
            .home-text22 {
              color: var(--dl-color-grays-white80);
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
            }
            .home-text23 {
              font-size: 19px;
            }
            .home-text25 {
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
            .home-html-node {
              width: 100%;
            }
            .home-section-one {
              height: 524px;
              border-radius: var(--dl-radius-radius-radius4);
              border-left-width: 0px;
            }
            .home-max-width {
              height: 367px;
              margin-top: 5px;
              margin-left: 5px;
              margin-right: 5px;
              margin-bottom: 0px;
            }
            .home-text {
              width: auto;
              font-size: 30px;
            }
            .home-text01 {
              font-size: 27px;
              font-style: normal;
              font-family: Lexend;
              font-weight: 600;
              line-height: 1.3;
              text-transform: none;
              text-decoration: none;
            }
            .home-text02 {
              color: var(--dl-color-backgrounds-primary);
              font-size: 27px;
              font-style: normal;
              font-family: Lexend;
              font-weight: 600;
              line-height: 1.3;
              text-transform: none;
              text-decoration: none;
            }
            .home-iframe {
              width: 100%;
              height: 100%;
              padding-top: 5px;
            }
            .home-text04 {
              color: var(--dl-color-grays-gray100);
              margin-top: 12px;
              margin-left: 12px;
              margin-right: 12px;
              margin-bottom: 12px;
            }
            .home-link {
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
            .home-text07 {
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
            .home-text11 {
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
            .home-text13 {
              color: var(--dl-color-backgrounds-primary);
            }
            .home-text14 {
              color: var(--dl-color-backgrounds-primary);
              font-size: 21px;
              align-self: center;
              margin-top: 10px;
              text-align: center;
              font-weight: 400;
              margin-bottom: 10px;
            }
            .home-text16 {
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
            .home-link1 {
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
            .home-text19 {
              color: var(--dl-color-grays-white100);
            }
            .home-input-container1 {
              flex-direction: column;
            }
            .home-link2 {
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
