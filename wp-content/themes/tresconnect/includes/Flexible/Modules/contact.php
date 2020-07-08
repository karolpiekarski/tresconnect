
<section class="contact container--fluid">
  <div class="contact__wrapper">
    <div class="contact__textWrapper">
      <div class="contact__text">
        <div class="contact__textHeader" >
          <?= $section['contact_data']['text'] ?>
        </div>
        <div class="contact__textAddress" >
          <?= $section['contact_data']['address'] ?>
        </div>
        <div class="contact__textContacts" >
          <?php foreach ($section['contact_data']['icon_text'] as $item): ?>
            <div class="contact__textContact">
              <div class="contact__textContactIcon">
                <img src="<?= $item['icon']['sizes']['large'] ?>" alt="<?= $item['icon']['title'] ?>">
              </div>
              <div class="contact__textContactText">
                <?= $item['text'] ?>
              </div>
            </div>
          <?php endforeach; ?>
        </div>
      </div>

    </div>
    <div class="contact__formWrapper">
      <div class="contact__form">
        <div class="contact__formInner">
          <div class="contact__formHeader" >
            <?= $section['form']['text'] ?>
          </div>
          <div >
            <?=do_shortcode($section['form']['shortcode_form'])?>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
