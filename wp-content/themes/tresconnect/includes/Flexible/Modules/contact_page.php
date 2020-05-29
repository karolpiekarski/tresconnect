<?php if ($section['active']) : ?>
  <section class="contactPage container--fluid">
    <div class="container contactPage--tabletPadding0">
      <div class="contactPage__wrapper">
        <div class="contactPage__textWrapper">
          <div class="contactPage__text">
            <div class="contactPage__textHeader" data-aos="fade-up">
              <?= $section['contact_data']['text'] ?>
            </div>
            <div class="contactPage__textContacts" data-aos="fade-up">
              <?php foreach ($section['contact_data']['icon_text'] as $item): ?>
                <div class="contactPage__textContact">
                  <div class="contactPage__textContactIcon">
                    <img src="<?= $item['icon']['sizes']['large'] ?>" alt="<?= $item['icon']['title'] ?>">
                  </div>
                  <div class="contactPage__textContactText">
                    <?= $item['text'] ?>
                  </div>
                </div>
              <?php endforeach; ?>

              <div class="contactPage__socials">
                <div class="contactPage__socialTextOver">
                  <?=$section['contact_data']['social_text_over']?>
                </div>
                <div class="contactPage__socialsLoop">
                  <?php foreach ($section['contact_data']['socials'] as $social): ?>
                    <div class="contactPage__socialItemWrapper">
                      <a href="<?=$social['link']['url']?>"
                         target="<?=$social['link']['target'] ? $social['link']['target'] : '_self'?>"
                         class="contactPage__socialItem">
                        <img src="<?=$social['icon']['sizes']['large']?>" alt="<?=$social['icon']['title']?>">
                      </a>
                    </div>
                  <?php endforeach; ?>
                </div>
                <div class="contactPage__socialsUnder">
                  <?=$section['contact_data']['social_text_under']?>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="contactPage__formWrapper">
          <div class="contactPage__form">
            <div class="contactPage__formBg" style="background-image: url(<?=$section['form']['bg_image']['sizes']['large']?>)"></div>
            <div class="contactPage__formInner">
              <div class="contactPage__formSquare1"></div>
              <div class="contactPage__formSquare2"></div>
              <div class="contactPage__formHeader" data-aos="fade-up">
                <?= $section['form']['text'] ?>
              </div>
              <div data-aos="fade-up">
                <?=do_shortcode($section['form']['shortcode_form'])?>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
<?php endif;
