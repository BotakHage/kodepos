import DataSource from "../data/data-source.js";
import '../component/search-bar.js'
import '../component/kodepos-list.js'

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const kodeposListElement = document.querySelector('kodepos-list');

  const onButtonSearchClicked = async () => {
    try {
      const results = await DataSource.searchKodePos(searchElement.value);
      renderResult(results);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    kodeposListElement.kodepos = results;
  }

  const fallbackResult = message => {
    kodeposListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
