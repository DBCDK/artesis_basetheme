<?php
/**
 * @file views-view-unformatted.tpl.php
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
 $counter = 0;
 $breakpoint = ceil(count($rows)/3);
?>
<?php print '<div class="clearfix">'; ?>
<?php if (!empty($title)): ?>
  <h2><?php print $title; ?></h2>
<?php endif; ?>
<?php foreach ($rows as $id => $row): ?>
  <?php if ( $counter == 0 ) print '<div class="column-event first">'; ?>
  <?php if ( $counter == $breakpoint || $counter == $breakpoint*2 ) print '</div><div class="column-event">'; ?>
  <div class="<?php print $classes_array[$id]; ?>">
    <?php print $row; ?>
  </div>
<?php $counter++; endforeach; ?>
<?php print '</div>'; ?>
<?php print '</div>'; ?>
