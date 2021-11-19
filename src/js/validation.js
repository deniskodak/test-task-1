import { formEl } from './domElements';

const formHandler = e => {
  e.preventDefault();
  const children = e.currentTarget.elements;
  children.forEach(validation);
};

const addInvalidClass = selector => secondClass => {
  selector.classList.add('invalid', secondClass);
};
const removeInvalidClass = selector => secondClass => {
  selector.classList.remove('invalid', secondClass);
};

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegex = /^(?=\D*\d)(?=.*?[a-zA-Z]).*[\W_].*$/;

const validation = (element, index, arr) => {
  let parentEL = element.parentElement;

  if (element.name === 'country') {
    parentEL = element.parentElement.parentElement;
  }

  const isClassExist = parentEL.classList.contains('invalid');
  const { value, name } = element;
  const addClassWithSelector = addInvalidClass(parentEL);
  const removeClassWithSelector = removeInvalidClass(parentEL);

  switch (element.name) {
    case 'name':
    case 'surname':
      if (value.length <= 2) {
        addClassWithSelector(name);
      } else if (isClassExist) {
        removeClassWithSelector(name);
      }
      break;

    case 'country':
      if (value.length < 1) {
        addClassWithSelector(name);
      } else if (isClassExist) {
        removeClassWithSelector(name);
      }

    case 'phone':
      if (value.length < 1) {
        addClassWithSelector(name);
      } else if (isClassExist) {
        removeClassWithSelector(name);
      }
      break;
    case 'password':
      if (!value.match(passwordRegex)) {
        addClassWithSelector(name);
      } else if (isClassExist) {
        removeClassWithSelector(name);
      }
      break;
    case 'confirm':
      if (value !== arr[index - 1].value) {
        addClassWithSelector(name);
      } else if (isClassExist) {
        removeClassWithSelector(name);
      }
      break;
    case 'email':
      if (!value.match(emailRegex)) {
        addClassWithSelector(name);
      } else if (isClassExist) {
        removeClassWithSelector(name);
      }
      break;
    case 'checkbox':
      if (!element.checked) {
        element.classList.add('invalid');
        setTimeout(() => element.classList.remove('invalid'), 4000);
      }
      break;

    default:
      break;
  }
};

formEl.addEventListener('submit', formHandler);
