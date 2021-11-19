import './styles/index.scss';
import './js/validation';
import './js/scrollTo';
import './js/customSelect';
import './js/inputsAnimation';
import './js/buildSelect';

$(document).ready(function () {
  $('section[data-type="background"]').each(function () {
    var $bgobj = $(this); // создаем объект
    $(window).scroll(function () {
      var yPos = -($window.scrollTop() / $bgobj.data('speed')); // вычисляем коэффициент
      // Присваиваем значение background-position
      var coords = 'center ' + yPos + 'px';
      // Создаем эффект Parallax Scrolling
      $bgobj.css({ backgroundPosition: coords });
    });
  });
});
