
<section class="partners">
  <div class="container">
    <div class="partners__title" data-aos="fade-up">
      <?=$section['text']?>
    </div>
    <div class="partners__wrapper">
      <?php foreach ($section['partners'] as $partner): ?>
      <div class="partners__itemWrapper" data-aos="fade-up">
        <div class="partners__item">
          <img src="<?=$partner['logo']['sizes']['large']?>" alt="<?=$partner['logo']['title']?>">
        </div>
      </div>
      <?php endforeach ?>
    </div>

    <?php if ($section['button']) : ?>
      <div class="partners__button" data-aos="fade-up">
        <a href="<?=$section['button']['url']?>"
           class="button button__primary"
           target="<?=$section['button']['target']?>"
           title="<?=$section['button']['title']?>">
          <?=$section['button']['title']?> →
        </a>
      </div>
    <?php endif ?>
  </div>
</section>
