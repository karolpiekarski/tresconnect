<?php
  $menu = apply_filters('wpa_get_menu', [], 'top_nav');
?>

<header class="header">
  <div class="container">
    <div class="header__basic">
      <div class="header__basic-wrapper">
        <div class="header__search">
          <?php if (get_field('header_active_search', 'option')) : ?>
            <div class="header__search-wrapper">
              <form class="form" method="get" action="<?php echo home_url('/'); ?>">
                <div class="form__inputButton">
                  <input type="text" class="form__input form__input--w90 form__input--bbnone" name="s" placeholder="<?=__('Search', 'lang')?>" value="<?php the_search_query(); ?>">
                  <button type="submit" class="form__buttonSearch">
                    <img src="<?=get_field('header_search_icon', 'option')['sizes']['large']?>"
                         alt="<?=get_field('header_search_icon', 'option')['title']?>"/>
                  </button>
                </div>
              </form>
            </div>
          <?php endif ?>
        </div>
        <div class="header__logo">
          <a href="<?= home_url() ?> ">
            <img src="<?= get_field('header_logo_basic', 'option')['sizes']['large'] ?>"
                 alt="Logo - <?= bloginfo('name') ?>">
          </a>
        </div>
        <div class="header__icons">
          <?php foreach (get_field('header_icons_link', 'option') as $link): ?>
            <a href="<?= $link['button']['url'] ?>"
               title="<?= $link['button']['title'] ?>"
               class="button button__social"
               target="<?= $link['button']['target'] ? $link['button']['target'] : '_self' ?>">
              <img src="<?= $link['icon']['sizes']['large'] ?>" alt="<?= $link['button']['title'] ?>">
            </a>
          <?php endforeach ?>
        </div>
      </div>
      <nav class="nav">
        <ul class="nav__basic-items">
          <?php foreach ($menu as $item) : ?>
            <li class="nav__basic-item">
              <a href="<?=$item['url']?>" class="nav__link <?=$item['active'] ? 'active' : ''?>"><?=$item['title']?></a>
            </li>
          <?php endforeach; ?>
        </ul>
      </nav>
    </div>
  </div>

  <div class="header__on-scroll" data-header-onScroll data-menu>
    <div class="container">
      <div class="header__on-scroll-wrapper">
        <div class="header__hamburger">
          <button class="header__hamburger-button" data-menu-button>
            <img src="<?=get_field('header_hamburger_icon', 'option')['sizes']['large']?>"
                 alt="<?=get_field('header_hamburger_icon', 'option')['title']?>"/>
          </button>
        </div>
        <div class="header__logo">
          <a href="<?= home_url() ?> " class="header__logo--desktop">
            <img src="<?= get_field('header_logo_scroll', 'option')['sizes']['large'] ?>"
               alt="Logo - <?= bloginfo('name') ?>">
          </a>
          <a href="<?= home_url() ?> " class="header__logo--mobile">
            <img src="<?= get_field('header_logo_basic', 'option')['sizes']['large'] ?>"
               alt="Logo - <?= bloginfo('name') ?>">
          </a>
        </div>
        <div class="header__icons">
          <?php foreach (get_field('header_icons_link', 'option') as $link): ?>
            <a href="<?= $link['button']['url'] ?>"
               title="<?= $link['button']['title'] ?>"
               class="button button__social"
               target="<?= $link['button']['target'] ? $link['button']['target'] : '_self' ?>">
              <img src="<?= $link['icon']['sizes']['large'] ?>" alt="<?= $link['button']['title'] ?>">
            </a>
          <?php endforeach ?>
        </div>
      </div>
    </div>

    <div class="header__sidebar" data-menu-wrapper>
      <div class="header__sidebar-top-bar">
        <button class="header__sidebar-button-close" data-menu-close>
        <img src="<?=get_field('header_close_icon', 'option')['sizes']['large']?>"
                 alt="<?=get_field('header_close_icon', 'option')['title']?>"/>
        </button>
      </div>
      <nav class="nav">
        <ul class="nav__basic-items">
          <?php foreach ($menu as $item) : ?>
            <li class="nav__basic-item">
              <a href="<?=$item['url']?>" class="nav__link <?=$item['active'] ? 'active' : ''?>"><?=$item['title']?></a>
            </li>
          <?php endforeach; ?>
        </ul>
      </nav>
    </div>
  </div>
</header>
