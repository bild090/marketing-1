import { FormattedMessage } from "react-intl";

import Email from '../assets/email.png';
import Call from '../assets/phone-call.png';

import './css/Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <h5><FormattedMessage id="concat" /></h5>
      </div>

    </div>
  );
};

export default Footer;

