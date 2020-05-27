<?php if ($section['active']) : ?>
  <section class="partners">
    <div class="container">
      <div class="partners__title">
        <?=$section['text']?>
      </div>
      <div class="partners__wrapper">
        <?php foreach ($section['partners'] as $partner): ?>
        <div class="partners__itemWrapper">
          <div class="partners__item">
            <img src="<?=$partner['logo']['sizes']['large']?>" alt="<?=$partner['logo']['title']?>">
          </div>
        </div>
        <?php endforeach ?>
      </div>

      <?php if ($section['button']) : ?>
        <div class="partners__button">
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
<?php endif ?>
