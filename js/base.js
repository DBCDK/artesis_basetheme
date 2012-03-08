
(function($){

  $(document).ready(function(){

    var height = $("#wrap-left").height();
    if ( height < 1600 ) {
      $("#wrap-right").className = 'bottom-up';
      $("#wrap-left").className  = 'bottom-up';
    }

    $('input[placeholder],textarea[placeholder]').placeholder();

    /* add rounded-corners class to buttons, input fields, etc. */
    $("input").filter("[type!='hidden']").filter("[type!='radio']").filter("[type!='checkbox']").addClass('rounded-corners');
    $(".field-type-ding-entity-buttons p.ding-entity-button").addClass('rounded-corners');
    $("p.ding-entity-button").addClass('rounded-corners');
    $(".field-type-ting-infomedia > .field-items").filter('div:has(a)').addClass('rounded-corners');
    $(".field-type-ting-sfx > .field-items").filter('div:has(a)').addClass('rounded-corners');
    $(".field-type-ting-relation > .field-items").filter('div:has(a)').addClass('rounded-corners');
    $("#block-system-user-menu > div > div > ul > li.last").addClass('rounded-corners');
    $(".comment ul li").addClass('rounded-corners');
    $("li.comment-add").addClass('rounded-corners');


    /* Checkbox overlay with hover-text from input[title] on disabled checkboxes */
    $('[type="checkbox"]').filter('[disabled="true"]').each(function(index) {
      var elem = document.createElement('div');
      elem.setAttribute('class', 'checkbox-overlay');
      $(this).parent().append(elem);
      $(this).parent().attr('title',$(this).attr("title"));
    });


    /* sticky pager */
    var pager_width = $('.item-list .pager').width();
    $('.item-list .pager').each(function(index) {
      var elem = $(this).clone();
      elem.width(pager_width);
      elem.attr('id', 'sticky-pager')
      elem.appendTo($(this).parent());
    });
    var pager_width = $('.mkdru-pager').width();
    $('.mkdru-pager').each(function(index) {
      var elem = $(this).clone();
      elem.width(pager_width);
      elem.attr('id', 'sticky-pager')
      elem.appendTo($(this).parent());
    });
    $('.panel-3col .panel-col').waypoint(function(event, direction) {
      if (direction === 'down') {
        $('#sticky-pager').hide();
      } else {
        $('#sticky-pager').show();
      }
    }, {
       offset: 'bottom-in-view'
    });


    // execute if included (ie: lte IE 8 ) :
    if ( typeof ie_fix == 'function' )
      ie_fix();

  });


  Drupal.behaviors.toggleFormatPtickyPager = {
    attach: function(context, settings) {
      $('#ding-toggle-format', context).click(function() {
        $('.panel-3col .panel-col').waypoint(function(event, direction) {
          if (direction === 'down') {
            $('#sticky-pager').hide();
          } else {
            $('#sticky-pager').show();
          }
        }, {
           offset: 'bottom-in-view'
        });
      });
    }
  };

  // reload page after closing reservation pop-up
  Drupal.behaviors.reloadOnPopupClose = {
    attach: function(context) {
      // Capture link clicks.
      $('body.page-ting a.ui-dialog-titlebar-close').each( function(context) {
        // Unbind existing click behaviors.
        $(this).unbind('click');
        // Handle clicks.
        $(this).click( function(e) {
          // Remove the default click handler.
          e.preventDefault();
          location.reload();
          return false;
        });
      });
    }
  };


})(jQuery);

