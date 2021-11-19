import selectItemHtml from '../templates/selectItems.hbs';
import { selectBody } from './domElements';
import countries from './countries.json';

const buildSelect = () => {
  const selectMarkup = selectItemHtml(countries);
  selectBody.insertAdjacentHTML('afterbegin', selectMarkup);
};

buildSelect();
