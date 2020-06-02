
<section class="textImage container--fluid">
  <div class="container textImage__mobilePadding0">
    <?php if ($section['bg_section']) : ?>
      <div class="textImage__bg <?=$section['bg_h_100'] ? 'textImage__bg--h100' : ''?>"></div>
    <?php endif ?>
    <div class="textImage__wrapper <?= $section['revers'] ? 'reverse' : '' ?>">
      <div class="textImage__text">
        <div class="textImage__textContent" data-aos="fade-up">
          <?php echo $section['text']?>
        </div>
        <?php if ($section['button']): ?>
          <div class="textImage__textButton" data-aos="fade-up">
            <a href="<?= $section['button']['url']?>"
               title="<?= $section['button']['title']?>"
               class="button button__primary button__primary--outline"><?= $section['button']['title']?> →</a>
          </div>
        <?php endif; ?>
      </div>

      <div class="textImage__images">
        <div class="textImage__imageSmall">
          <img src="<?= $section['small_image']['sizes']['medium_large']?>" alt="<?= $section['small_image']['title']?>">
          <div class="textImage__square1 textImage__square1--<?=$section['variant_quares']?>"></div>
          <div class="textImage__square2 textImage__square2--<?=$section['variant_quares']?>"></div>
          <div class="textImage__square3 textImage__square3--<?=$section['variant_quares']?>"></div>
        </div>
        <div class="textImage__imageBig">
          <img src="<?= $section['big_image']['sizes']['large']?>" alt="<?= $section['big_image']['title']?>">
        </div>
      </div>
    </div>
  </div>
</section>
