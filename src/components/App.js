import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { IntlProvider } from "react-intl";
import { LOCALES } from '../i18n/locales'

import { useState } from "react";

import en from '../i18n/en.json';
import ar from '../i18n/ar.json';

const App = () => {

  const flattenMessages = (nestedMessages, prefix = '') => {
    return Object.keys(nestedMessages).reduce((msg, key) => {
        let value = nestedMessages[key]
        let prefixedKey = prefix ? `${prefix}.${key}` : key;

        msg[prefixedKey] = value
        
        return msg
    }, {})
  }

  const [currentLocale, setCurrentLocale] = useState(getInitialLocal());

	const currentMessages = currentLocale === "ar" ? flattenMessages(ar) : flattenMessages(en);

  const handleChange = () => {
    localStorage.getItem("locale") === "ar" ? setCurrentLocale(LOCALES.ENGLISH) : setCurrentLocale(LOCALES.ARABIC);
    localStorage.getItem("locale") === "ar" ? localStorage.setItem("locale", LOCALES.ENGLISH) : localStorage.setItem("locale", LOCALES.ARABIC);
  };

  function getInitialLocal() {
    // getting stored items
    const savedLocale = localStorage.getItem("locale");
    return savedLocale || flattenMessages(en)
  }

  return (
    <IntlProvider messages={currentMessages} locale={currentLocale}>
      <div dir={currentLocale == LOCALES.ARABIC ? "rtl" : "ltr"}>
      <Header currentLocale={currentLocale} handleChange={handleChange}/>
        <Content />
        <Footer />
      </div>
    </IntlProvider>
  );
};

export default App;
