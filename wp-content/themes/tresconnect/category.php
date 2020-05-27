<?php


get_header();
$page = ( get_query_var( 'page' ) ) ? get_query_var( 'page' ) : 1;
$currentPage = $page;
$pagePrev = $page - 1;
$pageNext = $page + 1;

$category = get_queried_object();

$postsOnCategory = apply_filters('post_to_category_page', $category->term_id);

global $wp;
?>
<div class="section">
  <div class=" container">
    <div class="singlePost__gridWrapper">
      <div class="singlePost__gridItems">
        <?php if (isset($postsOnCategory['posts'])) : ?>
          <?php foreach ($postsOnCategory['posts'] as $postOnCategory) : ?>
            <div class="singlePost__item">
              <div class="singlePost__listImage">
                <?php
                $data['path'] = $postOnCategory['image']['path'];
                $data['title'] = $postOnCategory['image']['title'];
                include get_template_directory() . '/includes/Components/Image.php';
                ?>

                <div class="singlePost__createWrapper">
                  <div class="singlePost__createMonth">
                    <?=$postOnCategory['created']['month']?>
                  </div>
                  <div class="singlePost__createDay">
                    <?=$postOnCategory['created']['day']?>
                  </div>
                </div>
              </div>

              <a href="<?=$postOnCategory['url']?>" class="singlePost__title">
                <h3><?=$postOnCategory['title']?></h3>
              </a>

              <div class="singlePost__listText">
                <?php
                $data['text'] = $postOnCategory['short_text'];
                include get_template_directory() . '/includes/Components/TextField.php';
                ?>
              </div>

              <div class="singlePost__listButton">
                <a href="<?=$postOnCategory['url']?>" class="button button__link"><?=__('Read more')?> →</a>
              </div>
            </div>
          <?php endforeach; ?>
        <?php else : ?>
          <div class="singlePost__noResult"><?=__('No result', 'lang')?></div>
        <?php endif; ?>

        <div class="singlePost__pagination">
          <?php if ($currentPage > 1) : ?>
            <div class="singlePost__paginationPrev">
              <a href="<?= "?page=" . $pagePrev ?>" class="button button__primary" >← <?=__('Read older entries', 'lang')?></a>
            </div>
          <?php endif; ?>
          <?php if ($currentPage < $postsOnCategory['max_num_pages']) : ?>
            <div class="singlePost__paginationNext">
              <a href="<?= "?page=" . $pageNext ?>" class="button button__primary"><?=__('Read newer entries', 'lang')?> →</a>
            </div>
          <?php endif; ?>
        </div>
      </div>
      <div class="singlePost__gridWidget">
        <?php include get_template_directory() . '/includes/Components/Search.php'; ?>
        <?php include get_template_directory() . '/includes/Components/Facebook.php'; ?>
      </div>
    </div>
  </div>
</div>

<?php

get_footer();