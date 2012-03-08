<?php
if (!empty($content['field_main_image'])) {
  $classes .= ' has-image';
}
hide($content['links']);
?>
<div class="<?php print $classes; ?>"<?php print $attributes; ?>>
  <?php echo render($content['field_main_image']); ?>
  <div class="ding-news-highlight-text">
    <?php echo render($content['group_audience']); ?>
    <div class="ding-news-timestamp">
    <?php echo format_date($created, 'long_date_only'); ?>
    </div> 
    <h2 class="ding-news-title" <?php print $title_attributes; ?>>
      <?php print render($title_prefix); ?><?php print $node->title; ?><?php print render($title_suffix); ?> 
    </h2>
    <?php echo render($content); ?> 
  </div>
</div>
