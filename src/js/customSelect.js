import { selectEl, inputPhone, selectInput } from './domElements';

let activeListItem = 0;

selectEl.addEventListener('click', e => customSelect(e));
selectEl.addEventListener('focus', () => selectEl.classList.add('is-active'));
selectEl.addEventListener('keydown', e => onArrowBtnPress(e));

const onArrowBtnPress = evt => {
  if (!selectEl.classList.contains('is-active')) {
    return;
  } else if (evt.key === 'Tab') {
    selectEl.classList.remove('is-active');
    return;
  } else if (evt.key === 'Enter') {
    customSelect(evt);
    selectEl.classList.remove('is-active');
    return;
  }

  evt.preventDefault();

  if (evt.key === 'ArrowDown') {
    if (activeListItem === 11) {
      activeListItem = 1;
    } else {
      activeListItem += 1;
    }
  } else if (evt.key === 'ArrowUp') {
    if (activeListItem === 1) {
      activeListItem = 11;
    } else {
      activeListItem -= 1;
    }
  }
  const elem = document
    .querySelectorAll('.select__item')
    .item(activeListItem - 1);
  elem.focus();
  selectEl.classList.add('is-active');
};

const classListToggle = selector => {
  selector.classList.toggle('is-active');
};

const changeText = (item, selector) => {
  let text = item.textContent;
  selector.value = text.trim();
  if (!selector.classList.contains('visited')) {
    selector.classList.add('visited');
  }
};

const changeCountryCode = (elem, selector) => {
  selector.dataset.code = elem.dataset.code;
  inputPhone.value = elem.dataset.code;
};

const customSelect = e => {
  if (e.type === 'click') {
    const elem = e.target;
    chooseCountry(elem);
  } else {
    const elem = document.activeElement;
    chooseCountry(elem);
  }
};

const chooseCountry = elem => {
  classListToggle(selectEl);

  if (elem.nodeName === 'LI') {
    changeText(elem, selectInput);
    changeCountryCode(elem, selectInput);
  }
};
