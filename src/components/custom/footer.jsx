import * as React from 'react';
import FooterWrapper from './css/footerWrapper';
import mehdi2 from '../../images/mehdi2.png';

function Fotter () {
  return (
    <FooterWrapper>
      <div className="foot" id>
        <div>
          <img src={mehdi2} className="mogul-logo" width="120px" alt="" />
          <br />
          <br />
          <div className="footercontainer">

            <a href="/myskills"> About me </a>
            <a href="/projects"> My Projects</a>
            <a href="/page-2">  My Blog</a>
            <a href="#"> Contact me </a>

          </div>
          <div className="divfooter">
            <img
              src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
              width="15px"
              alt="facebook"
            />
            <img
              src="https://www.aps.edu/sapr/images/pnglot.comtwitterbirdlogopng139932.png/image"
              width="15px"
              alt="twitter"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              width="15px"
              alt="git"
            />
            <a className="copyright">
              {' '}
              ©
              {new Date().getFullYear()}
              Built with love by
              <a href="mailto:mehdilebenz@gmail.com">Mehdi Benzarti</a>
            </a>
          </div>
        </div>
      </div>

    </FooterWrapper>
  );
};

export default Fotter;
