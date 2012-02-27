(function($){

  Drupal.behaviors.ie_fix = {

    attach: function() {

      myBorder = RUZEE.ShadedBorder.create({ corner:6, shadow:0 });
      var idRoll = 0;

      $('input').filter("[type='submit']").filter(function(index) {
          if ($(this).css('display') == 'none') {
            return false;
          }
          return $('div').hasClass('ui-widget') == false;
        }).each(function() {
        Drupal.addIERoundedCorners( $(this), myBorder, idRoll++ );
      });

      $('input').filter("[type='button']").filter(function(index) {
          if ($(this).css('display') == 'none') {
            return false;
          }
          return $('div').hasClass('ui-widget') == false;
        }).each(function() {
        Drupal.addIERoundedCorners( $(this), myBorder, idRoll++ );
      });

      $('#user-login-form input').filter("[type='text']").each(function() {
        Drupal.addIERoundedCorners( $(this), myBorder, idRoll++ );
      });

      $('#user-login-form input').filter("[type='password']").each(function() {
        Drupal.addIERoundedCorners( $(this), myBorder, idRoll++ );
      });

      $('#search-block-form input').filter("[type='text']").each(function() {
        switch ( $(this).attr('id') ) {
            case 'edit-creator':
            case 'edit-title':
            case 'edit-subject':
              return true;
              break;
        }
        Drupal.addIERoundedCorners( $(this), myBorder, idRoll++ );
      });

      $('#block-system-user-menu li').each(function() {
        if ( $(this).hasClass('last') ) {
          $(this).attr('id', 'button-user-logout');
          myBorder.render('button-user-logout');
        }
      });

      $(".field-type-ting-relation .field-items > a").each(function() {
          Drupal.addIERoundedCorners( $(this), myBorder, idRoll++ );
      });

      $(".field-type-ding-entity-buttons .field-items > a").each(function() {
          Drupal.addIERoundedCorners( $(this), idRoll++ );
      });

      $(".ding-entity-button a").each(function() {
          Drupal.addIERoundedCorners( $(this), myBorder, idRoll++ );
      });

      $(".field-type-ting-sfx .field-items > .field-item > a").each(function() {
          Drupal.addIERoundedCorners( $(this), myBorder, idRoll++ );
      });

      $(".field-type-ting-infomedia .field-items > a").each(function() {
          Drupal.addIERoundedCorners( $(this), myBorder, idRoll++ );
      });

      $(".comment ul li > a").each(function() {
          Drupal.addIERoundedCorners( $(this), myBorder, idRoll++ );
      });

      $("li.comment-add > a").each(function() {
          Drupal.addIERoundedCorners( $(this), myBorder, idRoll++ );
      });

    }

  };

  Drupal.addIERoundedCorners = function(obj,myBorder,idRoll) {

    var idString  = '';

    if ( obj.attr('id') ) {
      idString = obj.attr('id');
    } else if ( obj.attr('name') ) {
      idString = obj.attr('name');
    } else {
      idString = idRoll;
    }

    // add wrapper around button
    $(obj).wrap('<div class="ie-rounded-corners" />');
    obj.parent().attr('id', 'parent-' + idString);
    myBorder.render( obj.parent().attr('id') );

  };

})(jQuery);
