<template>
<section class="section" id="portfolio">
    <div class="container">
        <div class="section-heading">
            <h3 class="title is-2">{{ $t('portfolio.portfolio') }}</h3>
            <h4 class="subtitle is-5">{{ $t('portfolio.message') }}</h4>
        </div>
        <br />
        <div class="container">
            <div class="columns is-multiline is-centered">
                <div class="column is-half" v-for="portfolio in portfolios" :key="portfolio.id">
                    <a v-bind:href="portfolio.href">
                        <div class="card">
                            <header class="card-header">
                                <p class="card-header-title">
                                    <span>{{ (portfolio.titel) }} </span>
                                    <span class="is-pulled-right">
                                        <span v-for="tag in portfolio.tags" :key="tag.id" class="tag is-default"> {{ tag }}</span>
                                    </span>
                                </p>
                            </header>
                            <div class="card-content">
                                <figure class="image is-2by1">
                                    <img v-bind:src="portfolio.img" v-bind:alt="portfolio.titel" />
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

<script>
export default {
    data() {
        return {
            portfolios: [{
                    titel: 'E-commerce Page',
                    href: 'https://drakar.ch',
                    img: '/ressources/images/2020_drakar.PNG',
                    tags: ['2020', 'Wordpress', 'E-commerce']
                },
                {
                    titel: 'Personal Page ',
                    href: 'https://gomeandr.ch',
                    img: '/ressources/images/2020_pagePerso.PNG',
                    source: 'https://github.com/gomeandr/PagePerso',
                    tags: ['2020', 'Vue.js', 'Bulma']
                },
                {
                    titel: 'ShareUp Association',
                    href: 'https://gomeandr.ch/shareup/',
                    img: '/ressources/images/shareUp.PNG',
                    tags: ['2018', 'HMLT', 'Bootstrap']
                },
                {
                    titel: 'Game for TCS',
                    href: 'https://gomeandr.ch/panne/',
                    img: '/ressources/images/panne.PNG',
                    tags: ['2017', 'Twine']
                },
                {
                    titel: 'Game for CERAH',
                    href: '/ressources/files/H2O.exe',
                    img: '/ressources/images/CERAH.PNG',
                    tags: ['2016', 'Clickteam Fusion 2.5', 'Point&Click Game']
                },
                {
                    titel: 'Video',
                    href: 'http://tecfaetu.unige.ch/etu-maltt/volt/andresg0/stic-1/ex4/video.html',
                    img: '/ressources/images/sautHauteur.PNG',
                    tags: ['2015', 'HTML5 Player', 'Pedagogique']
                },
                {
                    titel: 'Personal page university',
                    href: 'https://tecfaetu.unige.ch/perso/maltt/andresg0/',
                    img: '/ressources/images/2012_Unige_pagePerso.PNG',
                    tags: ['2012', 'HMLT', 'Bootstrap']
                },
            ],
        };
    }
};
</script>
