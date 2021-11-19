$('#registration-btn').click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $('#signup-section').offset().top,
    },
    300,
  );
});
