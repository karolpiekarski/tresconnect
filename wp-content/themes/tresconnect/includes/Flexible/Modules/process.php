<section class="process">
  <div class="container">
    <div class="process__title">
      <?=$section['text']?>
    </div>

    <div class="process__timeline">
      <ul>
        <?php foreach ($section['boxes'] as $index => $box) : ?>
          <li>
            <div class="content">
              <div class="contentWrapper">
                <?=$box['text']?>
              </div>
            </div>
            <div class="process__point"><?=str_pad(($index + 1), 2, '0', STR_PAD_LEFT)?></div>
            <div class="icon">

              <div class="iconWrapper">
                <div class="process__pointMobile"><?=str_pad(($index + 1), 2, '0', STR_PAD_LEFT)?></div>

                <img src="<?=$box['icon']['sizes']['large']?>" alt="<?=$box['icon']['title']?>">
              </div>

            </div>
          </li>
        <?php endforeach; ?>
      </ul>
    </div>
  </div>
</section>