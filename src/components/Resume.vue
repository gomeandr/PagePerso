<template>
<section class="section  is-centered" id="resume">
    <div class="columns">
        <div class="column is-offset-6">
            <h3 class="title is-3">{{ $t('resume.resume') }} {{ $t('lang.current') }}</h3>
            <h4 class="subtitle">{{ $t('resume.message') }}</h4>
            <a v-if="$t('lang.current') === 'fr'" href="/ressources/CV/cvFrancais.pdf" class="button is-link is-medium">
                <span class="icon">
                    <i class="fas fa-file-alt"></i>
                </span>
                <span> {{ $t('button.download') }}</span>

            </a>
            <a v-else href="/ressources/CV/cEnglish.pdf" class="button is-link is-medium">
                <span class="icon">
                    <i class="fas fa-file-alt"></i>
                </span>
                <span> {{ $t('button.download') }}</span>

            </a>
        </div>
    </div>
</section>
</template>
