
<section class="cooperationProcess">
  <div class="container">
    <div class="cooperationProcess__title" data-aos="fade-up">
      <?=$section['text']?>
    </div>
    <div class="cooperationProcess__wrapper">
      <div class="cooperationProcess__inner">
        <div class="cooperationProcess__bg cooperationProcess__bg--desktop" style="background-image: url(<?=$section['skeleton_desktop']['sizes']['large']?>)"></div>
        <div class="cooperationProcess__bg cooperationProcess__bg--mobile" style="background-image: url(<?=$section['skeleton_mobile']['sizes']['large']?>)"></div>
        <div class="cooperationProcess__boxes">
          <?php foreach ($section['icon_texts'] as $index => $box) : ?>
            <div class="cooperationProcess__box cooperationProcess__box--<?=$index+1?> <?=$index % 2 == 0 ? 'revers' : '' ?>" data-aos="fade-up">
              <div class="cooperationProcess__icon">
                <img src="<?=$box['icon']['sizes']['large']?>" alt="<?=$box['icon']['title']?>">
              </div>
              <div class="cooperationProcess__text">
                <?=$box['text']?>
              </div>
            </div>
          <?php endforeach; ?>
        </div>
      </div>

      <?php if ($section['button']) : ?>
        <div class="cooperationProcess__button" data-aos="fade-up">
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
