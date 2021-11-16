import { bodyRef, inputRef } from './domElements';


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function bodyDefaultTheme() {
    if (localStorage.getItem('theme') == Theme.DARK) {
        changeTheme(Theme.DARK, Theme.LIGHT);
    }
    else {
        changeTheme(Theme.LIGHT, Theme.DARK);
    }
}

bodyDefaultTheme();

// function darkTheme({ LIGHT, DARK }) {
//     bodyRef.classList.add(`${DARK}`);
//     bodyRef.classList.remove(`${LIGHT}`);
//     inputRef.setAttribute('checked', 'true');
//     localStorage.setItem('theme', `${DARK}`);
// }
// function lightTheme({ LIGHT, DARK }) {
//     bodyRef.classList.add(`${LIGHT}`);
//     bodyRef.classList.remove(`${DARK}`);

//     inputRef.removeAttribute("checked");
//     localStorage.setItem('theme', `${LIGHT}`);
// }
function changeTheme(class1, class2) {
    bodyRef.classList.add(class1);
    bodyRef.classList.remove(class2);
    localStorage.setItem('theme',  class1);

    if (class2 === "light-theme") {
        inputRef.setAttribute('checked', 'true');
        
    }
    else {
        inputRef.removeAttribute("checked");
        
    }
}
function themeToggle() {
    if (inputRef.hasAttribute('checked')) {
    
        return changeTheme(Theme.LIGHT, Theme.DARK);
    }
    if (!inputRef.hasAttribute('checked')) {
        
        return changeTheme(Theme.DARK, Theme.LIGHT);
    }
}

inputRef.addEventListener('change', themeToggle);

