<section class="process">
  <div class="container">
    <div class="process__title">
      <?=$section['text']?>
    </div>
  </div>

  <div class="process--mobilePadding0 container ">
    <div class="process__timeline">
      <ul>
        <?php foreach ($section['boxes'] as $index => $box) : ?>
          <li>
            <div class="content">
              <div class="contentWrapper">
                <?=$box['text']?>

                <?php if ($box['button']) : ?>
                  <div class="process__button">
                    <a href="<?= $box['button']['url']?>" title="<?= $box['button']['title']?>" class="button button__primary button__primary--outline">
                      <?= $box['button']['title']?> →
                    </a>
                  </div> 
                <?php endif; ?>
              </div>
            </div>
            <div class="process__point"><?=$index + 1?></div>
            <div class="icon">

              <div class="iconWrapper">
                <div class="process__pointMobile"><?=$index + 1?></div>

                <img src="<?=$box['icon']['sizes']['large']?>" alt="<?=$box['icon']['title']?>">
              </div>

            </div>
          </li>
        <?php endforeach; ?>
      </ul>
    </div>
  </div>
</section>