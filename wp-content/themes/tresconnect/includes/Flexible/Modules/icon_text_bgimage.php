<?php if ($section['active']) : ?>
  <section class="iconTextBgImage container--fluid">
    <div class="iconTextBgImage__wrapper" style="background-image: url(<?=$section['bg_image']['sizes']['large']?>)">
      <div class="container h-100">
        <div class="iconTextBgImage__boxes">
          <?php foreach ($section['icon_text'] as $box) : ?>
            <div class="iconTextBgImage__box" data-aos="fade-up">
              <div class="iconTextBgImage__icon">
                <img src="<?=$box['icon']['sizes']['large']?>" alt="<?=$box['icon']['title']?>">
              </div>
              <div class="iconTextBgImage__text">
                <?=$box['text']?>
              </div>
            </div>
          <?php endforeach; ?>
        </div>
      </div>
    </div>
  </section>
<?php endif;
