<?php if ($section['active']) : ?>
  <section class="whatCustomersSay container--fluid" style="background-image: url(<?=$section['bg_image']['sizes']['large']?>)" data-slider>
    <div class="whatCustomersSay__wrapper container">
      <div class="whatCustomersSay__title">
        <?=$section['text']?>
      </div>
      <div class="whatCustomersSay__iconsWrapper">
        <div class="whatCustomersSay__icons" data-slider-wrapper>
          <?php foreach ($section['icon_link'] as $item) : ?>
            <?php if (isset($item['link']['url']) && !empty($item['link']['url'])) : ?>
              <div class="whatCustomersSay__iconWrapper">
                <div class="whatCustomersSay__icon">
                  <a href="<?=$item['link']['url']?>"
                     target="<?=$item['link']['targe'] ? $item['link']['targe'] : ''?>">
                    <img src="<?=$item['icon']['sizes']['large']?>" alt="<?=$item['icon']['title']?>"
                         class="whatCustomersSay__icon--img"/>
                  </a>
                </div>
              </div>
            <?php else : ?>
              <div class="whatCustomersSay__iconWrapper">
                <div class="whatCustomersSay__icon">
                  <img src="<?=$item['icon']['sizes']['large']?>" alt="<?=$item['icon']['title']?>"
                       class="whatCustomersSay__icon--img"/>
                </div>
              </div>
            <?php endif ?>
          <?php endforeach; ?>
        </div>
        <div class="whatCustomersSay__arrows" data-slider-navs>
          <button class="whatCustomersSay__arrow whatCustomersSay__arrow--prev" data-slider-nav-prev> < </span></button>
          <button class="whatCustomersSay__arrow whatCustomersSay__arrow--next" data-slider-nav-next> < </button>
        </div>
      </div>

      <div class="whatCustomersSay__buttonWrapper">
        <?= $section['text_over_button']?>

        <?php if ($section['button']) : ?>
          <div class="whatCustomersSay__button" data-aos="fade-up">
            <a href="<?=$section['button']['url']?>"
               class="button button__primary"
               target="<?=$section['button']['target']?>"
               title="<?=$section['button']['title']?>">
              <?=$section['button']['title']?> →
            </a>
          </div>
        <?php endif ?>
      </div>
    </div>
  </section>
<?php endif; ?>