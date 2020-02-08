<template>
  <section class="section" id="portfolio">
    <div class="container">
      <div class="section-heading">
        <h3 class="title is-2">{{ $t('portfolio.portfolio') }}</h3>
        <h4 class="subtitle is-5">My latest works</h4>
      </div>
      <br />
      <div class="container portfolio-container">
        <div class="columns">
          <div class="column is-4">
            <a href="https://gomeandr.ch">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">
                    <span>Personal Page</span>
                    <span class="is-pulled-right">
                      <span class="tag is-default">2020</span>
                      <span class="tag is-default">HTML</span>
                      <span class="tag is-default">Vue.js</span>
                      <span class="tag is-default">Bulma</span>
                    </span>
                  </p>
                </header>
                <div class="card-content">
                  <figure class="image">
                    <img src="/ressources/images/2020_pagePerso.PNG" alt="Page personnelle" />
                  </figure>
                </div>
                <footer class="card-footer">
                  <a href="https://github.com/gomeandr/PagePerso" class="card-footer-item">{{ $t('button.codeSource') }}</a>
                </footer>
              </div>
            </a>
            <a href="https://tecfaetu.unige.ch/perso/maltt/andresg0/">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">
                    <span>Personal Page</span>
                    <span class="is-pulled-right">
                      <span class="tag is-default">2012</span>
                      <span class="tag is-default">HTML</span>
                      <span class="tag is-default">Bootstrap</span>
                      <span class="tag is-default"></span>
                    </span>
                  </p>
                </header>
                <div class="card-content">
                  <figure class="image">
                    <img src="\ressources\images\2012_Unige_pagePerso.PNG" alt="Page personnelle Unige" />
                  </figure>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
