
<section class="offers">
  <div class="container">
    <div class="offers__wrapper">
      <div class="offers__title">
        <?= $section['text'] ?>
      </div>
    </div>
  </div>
  <div class="offers__boxes">
    <?php $countElements = count($section['boxes']) ?>
    <?php foreach ($section['boxes'] as $index => $box) : ?>
      <?php $even = ($countElements % 2 == 0) ?>
      <?php $evenIf = ($even && ($countElements == ($index + 1) || ($countElements - 1) == ($index + 1))) ?>
      <?php $oddIf = (!$even && ($countElements == $index + 1)) ?>

      <?php if ($index % 2 == 0) : ?>
        <div class="container--fluid offers__boxRelative">
      <?php endif ?>

      <?php if ($index % 2 == 0) : ?>
        <div class="container offers__boxFlex">
      <?php endif ?>

      <div class="offers__boxWrapper<?= $evenIf || $oddIf ? ' last' : '' ?><?= $index % 2 == 0 ? ' left' : ' right' ?>">
        <?php if ($box['box']['bg_image']) : ?>
          <div class="offers__boxBg" style="background-image: url(<?= $box['box']['bg_image']['sizes']['large'] ?>)"></div>
        <?php endif ?>


        <div class="offers__box">
          <div class="offers__boxSquare1"></div>
          <?php if ($box['box']['bg_image']): ?>
            <div class="offers__boxSquare2"></div>
          <?php endif ?>
          <div class="offers__boxIcon">
            <img src="<?= $box['box']['icon']['sizes']['large'] ?>" alt="<?= $box['box']['icon']['title'] ?>">
          </div>
          <div class="offers__boxText">
            <?= $box['box']['tekst'] ?>
          </div>
          <?php if ($box['box']['button']) : ?>
            <div class="offers__boxButton" data-aos="fade-up">
              <a href="<?= $box['box']['button']['url'] ?>"
                 class="button button__primary"
                 target="<?= $box['box']['button']['target'] ?>"
                 title="<?= $box['box']['button']['title'] ?>">
                <?= $box['box']['button']['title'] ?> →
              </a>
            </div>
          <?php endif ?>
        </div>
      </div>
      <?php if ($index % 2 != 0) : ?>
        </div>
      <?php endif ?>

      <?php if ($index % 2 != 0) : ?>
        </div>
      <?php endif ?>
    <?php endforeach; ?>
  </div>
</section>