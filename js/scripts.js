$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      var $img = $(".img-logo");
      var $logo = $('.main-logo').val();
      var $logowhite = $('.white-logo').val();
      $nav.toggleClass('static', $(this).scrollTop() > $nav.height());
      if ($(this).scrollTop() > $nav.height()) {
        $img.attr('src', $logo);
      } else {
        $img.attr('src', $logowhite);
      }
    });
});

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function dropid(id) {
  $('#dropid-content'+id).slideToggle();
  $('#dropicon'+id).toggleClass('la-angle-down la-angle-up');
}