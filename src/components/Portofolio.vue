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
                    img: '/ressources/images/shareUP.PNG',
                    tags: ['2018', 'Angular v2', 'Bootstrap']
                },
                {
                    titel: 'Game for TCS',
                    href: 'https://gomeandr.ch/panne/',
                    img: '/ressources/images/panne.PNG',
                    tags: ['2017', 'Twine']
                },
                {
                    titel: 'Search Engine for Companies',
                    href: 'https://gomeandr.ch/search-engine/',
                    img: '/ressources/images/searchTool.PNG',
                    tags: ['2016', 'Angular v1', 'Bootstrap']
                },
                {
                    titel: 'Personal page university',
                    href: 'https://tecfaetu.unige.ch/perso/maltt/andresg0/',
                    img: '/ressources/images/2012_Unige_pagePerso.PNG',
                    tags: ['2012', 'HMLT', 'Bootstrap']
                },
            ]
        };
    }
};
</script>
