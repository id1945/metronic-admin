$(document).ready(function() {

  var timeout = 0;
  var delay = 250;
  var windowsize;

  var sidebar = $('.sidebar__menu_wrap');
  // sidebar in mobile mode
  $('.hamburger').click(function() {
    sidebar.animate({left: 0}, 200);
  });
  $(document).mouseup(function(e) {
    // close sidebar menu
    if (!sidebar.is(e.target) && sidebar.has(e.target).length === 0) {
      sidebar.animate({left: -200}, 200);
    }
  });
  sidebar.find('.sidebar__menu_close').click(function() {
    sidebar.animate({left: -200}, 200);
  });

  /* tabs switcher in faq page */
  $('.contents__sidebar_list > li > a').first().trigger('click');

  function checkWidth() {
    windowsize = $(window).width();
    if (windowsize < 1200 && windowsize > 768) {
      $('.contents__sidebar').css('padding-top', '70px');
    }
    else if (windowsize < 768) {
      $('.contents__sidebar').removeClass('fixedsticky').css('padding-top', '0');
    }
    else {
      $('.contents__sidebar').addClass('fixedsticky');
    }
  }

  // window.resize event listener
  window.addEventListener('resize', function() {
    clearTimeout(timeout);
    timeout = setTimeout(checkWidth, delay);
  });

  // Execute on load
  checkWidth();

  // init tooltips
  $('[data-toggle="tooltip"]').tooltip();

  if ($('.testimonials-slider').length) {
    // Init Testimonilas Slider
    var slider = tns({
      // for all breakpoints
      container: '.testimonials-slider',
      items: 1,
      center: true,
      loop: true,
      swipeAngle: false,
      speed: 2000,
      autoplayTimeout: 7000,
      dots: true,
      controls: false,
      autoplayButtonOutput: false,
      autoplay: true,
      navPosition: 'bottom',
      responsive: {
        // for media min-width:600px breakpoints
        '600': {
          items: 1,
          fixedWidth: 550,
          edgePadding: 100,
        },
      },
    });
  }

   $('.toggle-link').on('click', function () {
       if ($(this).hasClass('toggle-on')) {
           $(this).text('Read more');
           $(this).removeClass('toggle-on');
       } else {
           $(this).text('Read less');
           $(this).addClass('toggle-on');
       }
   });
});
