<?php
/**
 * @file views-view-fields.tpl.php
 * Default simple view template to all the fields as a row.
 *
 * - $view: The view in use.
 * - $fields: an array of $field objects. Each one contains:
 *   - $field->content: The output of the field.
 *   - $field->raw: The raw data for the field, if it exists. This is NOT output safe.
 *   - $field->class: The safe class id to use.
 *   - $field->handler: The Views field handler object controlling this field. Do not use
 *     var_export to dump this object, as it can't handle the recursion.
 *   - $field->inline: Whether or not the field should be inline.
 *   - $field->inline_html: either div or span based on the above flag.
 *   - $field->wrapper_prefix: A complete wrapper containing the inline_html to use.
 *   - $field->wrapper_suffix: The closing tag for the wrapper.
 *   - $field->separator: an optional separator that may appear before a field.
 *   - $field->label: The wrap label text to use.
 *   - $field->label_html: The full HTML of the label to use including
 *     configured element type.
 * - $row: The raw result object from the query, with all data it fetched.
 *
 * @ingroup views_templates
 */
?>
<?php $fields_output = array('left'=>'','right'=>''); ?>
<?php $has_image = ( !empty($fields['field_list_image']) ) ? 'has-image' : NULL; ?>
<?php print '<div class="clearfix">'; ?>
<?php foreach ($fields as $id => $field): ?>
  <?php $column = ($id == 'field_list_image') ? 'left' : 'right'; ?>

  <?php if (!empty($field->separator)): ?>
    <?php $fields_output[$column] .= $field->separator; ?>
  <?php endif; ?>

  <?php $fields_output[$column] .= $field->wrapper_prefix; ?>
  <?php $fields_output[$column] .= $field->content; ?>
  <?php $fields_output[$column] .= $field->wrapper_suffix; ?>

<?php endforeach; ?>

<?php if ( !empty($fields_output['left']) ) { print '<div class="left">' . $fields_output['left'] . '</div>'; } ?>
<?php if ( !empty($fields_output['right']) ) { print '<div class="right ' . $has_image . '">' . $fields_output['right'] . '</div>'; } ?>
<?php print '</div>'; ?>

