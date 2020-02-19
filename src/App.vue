<template>
<div>
    <app-nav></app-nav>
    <app-header></app-header>
    <app-about></app-about>
    <app-portofolio></app-portofolio>
    <app-resume></app-resume>
    <app-history></app-history>
    <app-skills></app-skills>
    <app-footer></app-footer>
</div>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Nav from './components/Nav.vue';
import About from './components/About.vue';
import Skills from './components/Skills.vue';
import Resume from './components/Resume.vue';
import Portofolio from './components/Portofolio.vue'
import History from './components/History.vue'

export default {
    name: 'app',
    components: {
        'app-footer': Footer,
        'app-header': Header,
        'app-nav': Nav,
        'app-about': About,
        'app-skills': Skills,
        'app-resume': Resume,
        'app-portofolio': Portofolio,
        'app-history': History
    }
}
</script>
