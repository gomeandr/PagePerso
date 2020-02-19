<template>
<div class="container">
    <div class="columns">
        <app-academic></app-academic>
        <app-professional></app-professional>
    </div>
</div>
</template>

<script>
import Academic from './History/HistoryAcademic.vue';
import Professional from './History/HistoryProfessional.vue';

export default {
    name: 'history',
    components: {
        'app-academic': Academic,
        'app-professional': Professional
    }
}
</script>
