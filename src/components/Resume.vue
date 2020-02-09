<template>
<section class="section  is-centered" id="resume">
    <div class="columns">
        <div class="column is-offset-6">
            <h3 class="title is-3">{{ $t('resume.resume') }}</h3>
            <h4 class="subtitle">{{ $t('resume.message') }}</h4>
            <a href="/ressources/CV/cvEnglish.pdf" class="button is-link is-medium">
                <span class="icon">
                    <i class="fas fa-file-alt"></i>
                </span>
                <span> {{ $t('button.download') }}</span>
            </a>
        </div>
    </div>
</section>
</template>
