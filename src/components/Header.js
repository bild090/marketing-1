import { FormattedMessage } from "react-intl";

import './css/Header.css'

const Header = (props) => {

  return (
    <div className="header">
      <h1 className="brand"><FormattedMessage id="brand_name" /></h1>
      <div className="language px-5" onClick={props.handleChange}><FormattedMessage id="language" /></div>
    </div>
  );
};

export default Header;
