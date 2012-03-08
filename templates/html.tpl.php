<?php print $doctype; ?>
<html lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"<?php print $rdf->version . $rdf->namespaces; ?>>
  <head<?php print $rdf->profile; ?>>
    <?php print $head; ?>
    <title><?php print $head_title; ?></title>
    <?php print $styles; ?>
    <?php print $scripts; ?>
    <!--[if gte IE 9]>
      <script language="javascript" type="text/javascript" src="<?php print base_path() . path_to_theme() ?>/js/ie_fix.js"></script>
    <![endif]-->
    <!--[if lt IE 9]>
      <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js">
      <script language="javascript" type="text/javascript" src="<?php print base_path() . path_to_theme() ?>/js/shadedborder.js"></script>
      <script language="javascript" type="text/javascript" src="<?php print base_path() . path_to_theme() ?>/js/ie8_fix.js"></script>
    <![endif]-->
  </head>
  <body<?php print $attributes;?>>
    <div id="skip-link">
      <a href="#main-content" class="element-invisible element-focusable"><?php print t('Skip to main content'); ?></a>
    </div>
    <?php print $page_top; ?>
    <?php print $page; ?>
    <?php print $page_bottom; ?>
  </body>
</html>
