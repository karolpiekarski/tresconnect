<?php if ($button['button']) : ?>
  <a href="<?=$button['button']['link']?>"
     class="button button__primary"
     target="<?=$button['button']['target']?>"
     title="<?=$button['button']['title']?>">
    <?=$button['button']['title']?>
  </a>
<?php endif; ?>
