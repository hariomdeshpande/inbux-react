import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/esm/Image";
import Row from "react-bootstrap/esm/Row";
import './footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
          <div className={'footer__left'}>
              <p>Designed & Developed by</p>
              <div className="logo-wrapper">
                  <Image className={'img-fluid'} src='images/footer/logo.png'></Image>
              </div>
          </div>
          <div className={'footer__right '}>
              <div className="d-flex text-white">
                <div>
                    <p className="fw-bold text-uppercase m-0 mb-1 pb-2 border-bottom">About</p>
                    <ul className="list-unstyled">
                        <li>Faqs</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div>
                    <p className="fw-bold text-uppercase m-0 mb-1 pb-2 border-bottom">Useful Links</p>
                    <ul className="list-unstyled">
                        <li>Investors</li>
                        <li>Iocs</li>
                        <li>How It Works</li>
                        <li>Terms Of Service</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
              </div>
          </div>
    </footer>
  );
}
