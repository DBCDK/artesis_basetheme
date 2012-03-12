<?php
if (!empty($content['field_main_image'])) {
  $classes .= ' has-image';
}
hide($content['links']);
hide($content['comments']);
?>
<article<?php print $attributes; ?>>

  <?php echo render($content['field_main_image']); ?>

  <div class="ding-news-highlight-text">
    <?php echo render($content['group_audience']); ?>
    <div class="ding-news-timestamp">
    <?php echo format_date($created, 'long_date_only'); ?>
    </div>

  <?php if (!$page && $title): ?>
  <header>
    <h2 <?php print $title_attributes; ?>>
      <a href="<?php print $node_url ?>" title="<?php print $title ?>"><?php print $title ?></a>
    </h2>
  </header>
  <?php endif; ?>

    <div<?php print $content_attributes; ?>>
      <?php print render($content); ?>
    </div>

  </div>

</article>