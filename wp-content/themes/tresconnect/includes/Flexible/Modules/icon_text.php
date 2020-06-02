
<section class="iconText container--fluid">
  <div class="iconText__wrapper">
    <div class="container h-100">
      <div class="iconText__boxes">
        <?php foreach ($section['icon_text'] as $box) : ?>
          <div class="iconText__box" data-aos="fade-up">
            <div class="iconText__icon">
              <img src="<?=$box['icon']['sizes']['large']?>" alt="<?=$box['icon']['title']?>">
            </div>
            <div class="iconText__text">
              <?=$box['text']?>
            </div>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </div>
</section>
