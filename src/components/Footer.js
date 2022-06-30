import { FormattedMessage } from "react-intl";

import Email from '../assets/email.png';
import Call from '../assets/phone-call.png';

import './css/Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <h5><FormattedMessage id="concat" /></h5>
        <ul>
          <li className="mb-2"> <img src={Email} alt="" /> <a href="mailto: Orangemark8@gmail.com">Orangemark8@gmail.com</a></li>
          <li><img className="mx-1" src={Call} alt="" width="18px" height="18px" />0570678241</li>
        </ul>
      </div>

    </div>
  );
};

export default Footer;

