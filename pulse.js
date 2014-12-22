(function() {
  console.log("pulse loaded");

  // Localize jQuery variable
  var jQuery;
  /******** Load jQuery if not present *********/
  if (window.jQuery === undefined || window.jQuery.fn.jquery !== '2.1.1') {
      var script_tag = document.createElement('script');
      script_tag.setAttribute("type","text/javascript");
      script_tag.setAttribute("src",
          "https://code.jquery.com/jquery-2.1.1.js");
      if (script_tag.readyState) {
        script_tag.onreadystatechange = function () { // For old versions of IE
            if (this.readyState == 'complete' || this.readyState == 'loaded') {
                scriptLoadHandler();
            }
        };
      } else { // Other browsers
        script_tag.onload = scriptLoadHandler;
      }
      // Try to find the head, otherwise default to the documentElement
      (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
  } else {
      // The jQuery version on the window is the one we want to use
      jQuery = window.jQuery;
      main();
  }

  /******** Called once jQuery has loaded ******/
  function scriptLoadHandler() {
      // Restore $ and window.jQuery to their previous values and store the
      // new jQuery in our local jQuery variable
      jQuery = window.jQuery.noConflict(true);
      // Call our main function
      main(); 
  }

  function main(){
    jQuery(document).ready(function($) { 
        $(document).ready(function(){
          standard = $('#standard');
          $('body').css('margin', 0);
          var height = $('body').height();
          var width = $(window).width();
          overlay = document.createElement("div");
          $(overlay).css('height', height);
          $(overlay).css('width', width); 
          $(overlay).css('opacity', 0.5);
          $(overlay).css('background-color', 'black');
          $(overlay).css('position', 'absolute');
          $(overlay).css('margin', 0);
          $(overlay).css('top', 0);
          $(overlay).css('z-index', 10);
          $('body').prepend(overlay);
          $(overlay).hide();
          adsArray = $('iframe[height=250], iframe[height=90], iframe[height=600]');
          $('div').each(function(){
            if($(this).height() == 90 || $(this).height() == 250 || $(this).height() == 600){
              adsArray.push($(this));
            }
          });
        });

        $(window).on('scroll', function(){
          $(adsArray).each(function(){
            if ($(window).scrollTop() % 10 == 0) {
              if ($(this).hasClass("big")){
                $(this).removeClass("big");
                $(this).addClass("reg");
                $(this).css('transition', '200ms');
                $(this).css('transform', 'scale(1,1)');
              } else {
                $(this).removeClass("reg");
                $(this).addClass("big");
                $(this).css('transition', '200ms');
                $(this).css('transform', 'scale(1.025,1.025)');
              };
            };
          }); 
          overlayArray = $.grep(adsArray, function(a,i){
            return $(a).height() != 90; 
          });
          $.each(overlayArray, function(){
            if($(window).scrollTop() < $(this).offset().top && $(this).offset().top < $(window).scrollTop() + 40){
              $(this).css('z-index', 20);
              $(overlay).show();
            } else if ($(this).offset().top < $(window).scrollTop()) {
              $(overlay).hide();
              $(this).css('z-index', 0);
            } else if ($(overlayArray)[0].offset().top > $(window).scrollTop() + 40) {
              $(overlay).hide();
              $(this).css('z-index', 0);
            }
          });
        });
       });
  }  



})(); // We call our anonymous function immediately

