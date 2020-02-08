<template>
    <section class="section" id="about">
    <!-- Title -->
    <div class="section-heading">
      <h3 class="title is-2">About Me </h3>
      <h4 class="subtitle is-5">{{ $t("perso.job") }}</h4>
      <div class="container">
          <p v-html ="$t('aboutme')"></p>
        </div>
    </div>

    <div class="columns">
      <div class="column is-three-fifths is-offset-one-fifth">
        <!-- Profile -->
        <div class="card">
          <div class="card-content">
            <h3 class="title is-4">{{ $t('profile.profile') }}</h3>

            <div class="content">
              <table class="table-profile">
                <tr>
                  <th colspan="1"></th>
                  <th colspan="2"></th>
                </tr>
                <tr>
                  <td>{{ $t('profile.address') }} : </td>
                  <td>rue des Pitons 15<br>
                    CH-1205 Genève</td>
                </tr>
                <tr>
                  <td>{{ $t('profile.address') }} 2 :</td>
                  <td>rue des Amandiers 1<br>
                    CH-1950 Sion</td>
                </tr>
                <tr>
                  <td>{{ $t('profile.phone') }} : </td>
                  <td>+41 77 446 93 59</td> 
                </tr>
                <tr>
                  <td>{{ $t('profile.email') }} :</td>
                  <td>
                    <a href="mailto:gomeandr@gmail.com">gomeandr@gmail.com</a>  
                  </td>
                </tr>
              </table>
            </div>
            <br>
            <!--
              <div class="buttons has-addons is-centered">
              <a href="#" class="button is-link">Github</a>
              <a href="#" class="button is-link">LinkedIn</a>
              <a href="#" class="button is-link">Twitter</a>
              <a href="#" class="button is-link">CodeTrace</a>
            </div>
          -->
          </div>
        </div>
      </div>
    </div>
      </section>
</template>