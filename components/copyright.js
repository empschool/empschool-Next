import React from 'react'

const Copyright = (props) => {
  return (
    <>
      <div className="copyright-copyright">
        <div className="copyright-max-width max-content-container">
          <span className="copyright-text">
            <span>© todos os direitos reservados </span>
            <span>feito por :</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="copyright-text4">Emp+ tecnologia ltda</span>
            <span> CNPJ: 20.369.543</span>
            <span>/</span>
            <span>0001-98 São Paulo - SP</span>
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .copyright-copyright {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .copyright-max-width {
            align-items: stretch;
          }
          .copyright-text {
            color: var(--dl-color-grays-gray100);
            font-size: 14px;
            font-style: normal;
            font-weight: 300;
            line-height: 1.5;
          }
          .copyright-text4 {
            text-decoration: underline;
          }
          @media (max-width: 991px) {
            .copyright-max-width {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default Copyright
