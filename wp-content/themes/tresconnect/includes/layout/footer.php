<footer class="footer">
  <div class="footer__top">
    <div class="container">
      <div class="footer__topBoxWrapper">
        <div class="footer__topBox footer__topBox--40 footer__topBox--vcenter" data-aos="fade-up">
          <img src="<?= get_field('footer_logo', 'option')['sizes']['large']; ?>" alt="Logo - footer">
        </div>
        <div class="footer__topBox footer__topBox--30" data-aos="fade-up">
          <?= get_field('footer_contact_data', 'option'); ?>
        </div>
        <div class="footer__topBox footer__topBox--30" data-aos="fade-up">
          <?= get_field('footer_information', 'option'); ?>
        </div>
        <div class="footer__topBox footer__topBox--30 footer--desktopHidden" data-aos="fade-up">
          <h4 data-aos="fade-up">Social media</h4>
          <div class="footer__bottomSocials" data-aos="fade-up">
            <?php foreach ( get_field('footer_socials_media', 'option') as $social): ?>
              <a href="<?= $social['button']['url'] ?>"
                 title="<?= $social['button']['title']?>"
                 class="button button__social"
                 target="<?=$social['button']['target'] ? $social['button']['target'] : '_self'?>">
                <img src="<?= $social['icon']['sizes']['large'] ?>" alt="<?=$social['button']['title']?>">
              </a>
            <?php endforeach ?>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer__bottom">
    <div class="container">
      <div class="footer__bottomBoxWrapper">
        <div class="footer__bottomBox">
          <?= get_field('footer_bottom_text', 'option'); ?>
        </div>
        <div class="footer__bottomBox footer--mobileHidden">
          <div class="footer__bottomSocials">
            <?php foreach ( get_field('footer_socials_media', 'option') as $social): ?>
              <a href="<?= $social['button']['url'] ?>"
                 title="<?= $social['button']['title']?>"
                 class="button button__social"
                 target="<?=$social['button']['target'] ? $social['button']['target'] : '_self'?>">
                <img src="<?= $social['icon']['sizes']['large'] ?>" alt="<?=$social['button']['title']?>">
              </a>
            <?php endforeach ?>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>