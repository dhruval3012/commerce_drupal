jQuery(document).ready(function() {

  // jQuery(".store-list-wrap").mCustomScrollbar();
  
  // Remove alert danger class from success message
  jQuery('.alert-success').removeClass('alert-danger');

  // Add class to model header text
  jQuery('.modal-header h4.modal-title').addClass('title-underline');

  // Masonry - Home page
  masonry_home();
  jQuery(window).load(function() {
    masonry_home();
  });
  jQuery(window).resize(function(){
    masonry_home()
  });
  // End Masonry - Home page

  // Owl Carosal - Home page
  jQuery('.slider-wrap .view-content').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    dots: true,
    autoplayTimeout: 5000,
    // autoWidth: true,
    slideBy: 1,
    items:1
  });
  // End Owl Carosal - Home page

  // Accordiaon for sidebar filter
  jQuery('.filter-title a').click(function() {
    if (jQuery(this).hasClass('minus')) {
      jQuery(this).removeClass('minus');
    }
    else {
      jQuery('.filter-title a').removeClass('minus');
      jQuery(this).addClass('minus');
    }
    if (jQuery(this).parent('.filter-title').next('.filter-body').css('display') == 'block') {
      jQuery(this).parent('.filter-title').next('.filter-body').slideUp('slow');
    }
    else {
      jQuery('.filter-body').slideUp('slow')
      jQuery(this).parent('.filter-title').next('.filter-body').slideDown('slow');
    }
  });

  // Owl carousel thumbnail slider
  // reference for main items
  var slider = jQuery('.thumb-slider-wrap .slider-container #slider .items');
  // reference for thumbnail items
  var thumbnailSlider = jQuery('.thumb-slider-wrap .thumbnail-slider-container #thumbnailSlider .items');
  //transition time in ms
  var duration = 500;

  // carousel function for main slider
  slider.owlCarousel({
    loop: false,
    nav: false,
    items:1,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
  }).on('changed.owl.carousel', function (e) {
    //On change of main item to trigger thumbnail item
    thumbnailSlider.trigger('to.owl.carousel', [e.item.index, duration, true]);
  });
  
  // carousel function for thumbnail slider
  thumbnailSlider.owlCarousel({
    loop: false,
    margin: 25,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive:{
      0:{
       items:2
      },
      380:{
       items:3
      },
      768:{
       items:2
      },
      1000:{
       items:3
      }
    }
  }).on('click', '.owl-item', function () {
    // On click of thumbnail items to trigger same main item
    slider.trigger('to.owl.carousel', [jQuery(this).index(), duration, true]);
  }).on('changed.owl.carousel', function (e) {
    // On change of thumbnail item to trigger main item
    slider.trigger('to.owl.carousel', [e.item.index, duration, true]);
  });
  

  // Address menu 
  jQuery(".address-menu-btn").click(function () {
    // alert('dd');
    if(jQuery(this).parent('.card').next('.address-menu').css('display') == 'block') {
      jQuery('.test').hide();
    }
    else{
      jQuery(this).parent('.card').next().toggle('2000', "linear");
    }

    jQuery('.address-menu .dropdown > :not(ul.dropdown-menu)').hide();
    // console.log('dsd',jQuery('.address-menu .dropdown:first').text());
    jQuery('.address-menu .dropdown').removeText();

  });

  jQuery.fn.removeText = function(){
  this.each(function(){
     // Get elements contents
     var $cont = jQuery(this).contents();

      // Loop through the contents
      $cont.each(function(){
         var $this = jQuery(this);
         if(this.nodeType == 3) {
          $this.remove();
         }
      });
  });
}


  // jQuery('.address-menu .dropdown') > .not(ul.dropdown-menu)').hide();

  //end

  jQuery('.close-btn').click(function() {
    // alert('click');
    jQuery(this).parent('.cart-card').remove();
  });

  /* Custom checkbox and Radio button design */
    jQuery('input[type="radio"], input[type="checkbox"]').wrap('<div class="input-rc"></div>');
    jQuery('.input-rc').append('<span class="input-rc-span"></span>');


  // Newsletter 
  jQuery('.simplenews-subscriber-form form .form-actions .form-submit').addClass('btn-black');

  jQuery('#search-btn').click(function () {
      // alert('test');
      if (jQuery('.slide-out-div').is(":hidden")) {
          jQuery('.slide-out-div').slideDown();
            duration: 10;
            jQuery('#edit-keys').focus();
          // timer = setTimeout(function () {
          //     jQuery('.slide-out-div').slideUp("slow");
          // }, 5000);
      } else {
        jQuery('.slide-out-div').slideUp();
        duration: 10;
        // jQuery('#edit-keys').focusout();
        // clearTimeout(timer);
      }
  });
});


// Masonry - Home page
function masonry_home() {
  //alert('hi');
  jQuery('.masonry-wrap .view-content').masonry({
    itemSelector: '.views-row',
    gutter: 40,
    responsive:{
      0:{
        gutter: 0
      },
      480:{
        gutter: 20
      },
      992:{
        gutter: 40
      }
    }
  });
}

// category tab switch on click
// jQuery(document).ready(function() {
//   var results = new RegExp('[\?&]rebuild=([^&#]*)').exec(window.location.href);
//   // console.log(results);
//   if ( results[1] !== undefined && results[1] && results[1] == 'y') {
//     // console.log("OUT");
//     // jQuery('.tabs > ul').tabs({selected: 2});
//     jQuery('.tabs .nav-tabs li:nth-child(1), #home').removeClass('active');
//     jQuery('.tabs .nav-tabs li:nth-child(2), #profile').addClass('active');
//     // jQuery('.tabs').tabs({ active: '#profile' });
//   }
// });


jQuery(function(){
  jQuery('.left-content-wrap .button-wrap a').click(function(e){
    e.preventDefault();
      jQuery('.nav-tabs a[href="#profile"]').tab('show');

      setTimeout(function() {
       // Scroller to tab
        jQuery('html, body').animate({
          scrollTop: jQuery('.nav-tabs a[href="#profile"]').offset().top - 200
        }, 2000);
      }, 300);
  });
});
// jQuery(function(){
//     jQuery('.left-content-wrap .button-wrap a, .right-content-wrap .button-wrap a').click(function(e){
//       e.preventDefault();
//         jQuery('.nav-tabs a[href="#profile"]').tab('show');
//     })
// })

jQuery(window).bind("load resize", function(){
  // Category page equal height for banner
  var setHeight = jQuery(".sub-cat-banner-wrap .title-cont").height();
  jQuery(".cat-banner-wrap img").height(setHeight);
});