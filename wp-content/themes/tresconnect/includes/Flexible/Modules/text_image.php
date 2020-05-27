<?php if ($section['active']) : ?>
  <section class="textImage container--fluid">
    <div class="container textImage__mobilePadding0">
      <div class="textImage__wrapper <?= $section['revers'] ? 'reverse' : '' ?>">
        <div class="textImage__text">
          <div class="textImage__textContent">
            <?php echo $section['text']?>
          </div>
          <div class="textImage__textButton">
            <a href="<?= $section['button']['url']?>"
               title="<?= $section['button']['title']?>"
               class="button button__primary button__primary--outline"><?= $section['button']['title']?> →</a>
          </div>
        </div>
        <div class="textImage__images">
          <div class="textImage__imageSmall">
            <img src="<?= $section['small_image']['sizes']['large']?>" alt="<?= $section['small_image']['title']?>">
            <div class="textImage__square1"></div>
            <div class="textImage__square2"></div>
            <div class="textImage__square3"></div>
          </div>
          <div class="textImage__imageBig">
            <img src="<?= $section['big_image']['sizes']['large']?>" alt="<?= $section['big_image']['title']?>">
          </div>
        </div>
      </div>
    </div>
  </section>
<?php endif;
