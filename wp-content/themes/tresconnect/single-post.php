<?php
get_header();
$next_post_url = '';
$previous_post_url = '';

if (get_adjacent_post(false, '', false)) {
  $next_post_url = get_permalink(get_adjacent_post(false, '', false)->ID);
}

if (get_adjacent_post(false, '', true)) {
  $previous_post_url = get_permalink(get_adjacent_post(false, '', true)->ID);
}

?>

<div class="section singlePost">
  <div class="container">
    <div class="singlePost__gridWrapper">
      <div class="singlePost__gridItems">
        <div class="singlePost__title">
          <h1><?= the_title() ?></h1>
        </div>
        <div class="singlePost__categoryWrapper">
          <div class="singlePost__create">
            <?= get_the_date() ?>
          </div>
          <?php foreach (get_the_category() as $category) : ?>
            <a href="<?= str_replace(['category/', 'blog/'], ['', ''], get_category_link($category->term_id)) ?>"
               class="singlePost__category" target="_self"><?= $category->name ?></a>
          <?php endforeach; ?>
        </div>
        <div class="singlePost__content">
          <?php get_template_part('includes/Flexible/_core'); ?>
        </div>
        <div class="singlePost__pagination">
          <?php if ($previous_post_url) : ?>
            <div class="singlePost__paginationPrev">
              <a href="<?= $previous_post_url ?>"
                 class="button button__primary">← <?= __('Read older entries', 'lang') ?></a>
            </div>
          <?php endif; ?>
          <?php if ($next_post_url) : ?>
            <div class="singlePost__paginationNext">
              <a href="<?= $next_post_url ?>" class="button button__primary"><?= __('Read newer entries', 'lang') ?>
                →</a>
            </div>
          <?php endif; ?>
        </div>
      </div>
      <div class="singlePost__gridWidget">
        <?php include get_template_directory().'/includes/Components/Search.php'; ?>
        <?php include get_template_directory().'/includes/Components/Facebook.php'; ?>
      </div>
    </div>
  </div>
</div>
<?php get_footer(); ?>
