
<section class="areasSupport">
  <div class="container">
    <div class="areasSupport__title">
      <?=$section['text']?>
    </div>
    <div class="areasSupport__wrapper">
      <?php foreach ($section['areas'] as $partner): ?>
        <div class="areasSupport__itemBox" data-aos="fade-up">
          <div class="areasSupport__item" data-area-support>
            <img src="<?=$partner['icon']['sizes']['large']?>" alt="<?=$partner['icon']['title']?>">
            <div class="areasSupport__itemText">
              <?=$partner['text']?>
            </div>
            <button class="areasSupport__showMore" data-area-support-open><span>+</span></button>

            <div class="areasSupport__itemOnHover" data-area-support-item>

              <?php foreach ($partner['texts_onclick'] as $text): ?>
                <div class="areasSupport__itemOnHoverItem">
                  <span>+</span> <?=$text['text']?>
                </div>
              <?php endforeach; ?>

              <button class="areasSupport__showMoreOnHover" data-area-support-close><span>-</span></button>
            </div>
          </div>
        </div>
      <?php endforeach ?>
    </div>
  </div>
</section>
