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
                <div class="column is-one-third" v-for="portfolio in portfolios" :key="portfolio.id">
                    <a v-bind:href="portfolio.href">
                        <div class="card">
                            <header class="card-header">
                                <p class="card-header-title">
                                    <span v-if="$t('lang.current') === 'fr'">{{ portfolio.titel_fr }}</span>
                                    <span v-else-if="$t('lang.current') === 'en'">{{ portfolio.titel_en }}</span>
                                    
                                    <span class="is-pulled-right">
                                        <span v-for="tag in portfolio.tags" :key="tag.id" class="tag is-default"> {{ tag }}</span>
                                    </span>
                                </p>
                            </header>
                            <div class="card-content">
                                <figure class="image is-2by1">
                                    <img v-bind:src="portfolio.img" v-bind:alt="portfolio.titel_en" />
                                </figure>
                            </div>
                            <footer v-if="portfolio.source" class="card-footer">
                                <a v-bind:href="portfolio.source" class="card-footer-item is-danger">Source</a>
                            </footer>
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
            portfolios: [
                {
                    titel_fr: 'Blog TechnoElectrik',
                    titel_en: 'Blog TechnoElectrik',
                    href: 'https://technoelectrik.ch',
                    img: '/ressources/images/TechnoElectrik.png',
                    tags: ['2020', 'Wordpress', 'Blog', 'Energies Renouvelables', 'Technologies']
                },
                {
                    titel_en: 'E-commerce Page',
                    titel_fr: 'Page E-commerce',
                    href: 'https://drakar.ch',
                    img: '/ressources/images/2020_drakar.PNG',
                    tags: ['2020', 'Wordpress', 'E-commerce']
                },
                {
                    titel_en: 'Personal Page ',
                    titel_fr: 'Page personnelle ',
                    href: 'https://gomeandr.ch',
                    img: '/ressources/images/2020_pagePerso.PNG',
                    source: 'https://github.com/gomeandr/PagePerso',
                    tags: ['2020', 'Vue.js', 'Bulma']
                },
                {
                    titel_en: 'Association ShareUp ',
                    titel_fr: 'ShareUp Association',
                    href: 'https://gomeandr.ch/shareup/',
                    img: '/ressources/images/shareUP.PNG',
                    source: 'https://github.com/gomeandr/shareupgeneve',
                    tags: ['2018', 'Angular v2', 'Bootstrap']
                },
                {
                    titel_fr: 'Jeux pédagogique (Touring Club Suisse)',
                    titel_en: 'Game for Touring Club Switzerland',
                    href: 'https://gomeandr.ch/panne/',
                    img: '/ressources/images/panne.PNG',
                    tags: ['2017', 'Twine']
                },
                {
                    titel_en: 'Search Engine for Companies',
                    titel_fr: 'Petit moteur de recherche',
                    href: 'https://gomeandr.ch/search-engine/',
                    img: '/ressources/images/searchTool.PNG',
                    source: 'https://github.com/gomeandr/search-tool',
                    tags: ['2016', 'Angular v1', 'Bootstrap']
                },
                {
                    titel_en: 'Personal page university',
                    titel_fr: 'Page personnelle de l\'université',
                    href: 'https://tecfaetu.unige.ch/perso/maltt/andresg0/',
                    img: '/ressources/images/2012_Unige_pagePerso.PNG',
                    tags: ['2012', 'HMLT', 'Bootstrap']
                },
            ]
        };
    }
};
</script>
