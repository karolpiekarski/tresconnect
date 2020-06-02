
<section class="channels">
  <div class="container">
    <div class="channels__wrapper">
      <div class="channels__text">
        <?=$section['text']?>
      </div>

      <div class="channels__boxes">
        <div class="channels__logo">
          <img src="<?=$section['logo']['sizes']['large']?>" alt="<?=$section['logo']['large']?>">
        </div>

        <?php foreach ($section['boxes'] as $index => $box): ?>

          <div class="channels__box channels__box--<?=$index+1?>">

            <div class="channels__boxArrow channels__boxArrow--<?=$index+1?>" style="background-image: url(<?=$section['arrow']['sizes']['large']?>)"></div>
            <div class="channels__boxIcon">
              <img src="<?=$box['box']['icon']['sizes']['large']?>" alt="<?=$box['box']['icon']['title']?>">
            </div>

            <div class="channels__boxText">
              <?=$box['box']['tekst']?>
            </div>

          </div>
        <?php endforeach ?>
      </div>
    </div>
  </div>
</section>
