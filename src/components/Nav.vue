<template>
<div>
    <!-- Navigation bar -->
    <nav class="navbar is-link is-fixed-top">
        <div class="navbar-brand">
            <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div id="navbarExampleTransparentExample" class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item" href="#about">
                    <span class="icon">
                        <i class="fa fa-info"></i>
                    </span>
                    <span>{{ $t('nav.about') }}</span>
                </a>
                <a class="navbar-item" href="#skills">
                    <span class="icon">
                        <i class="fas fa-glasses"></i>
                    </span>
                    <span>{{ $t('skills.skills') }}</span>
                </a>

                <a class="navbar-item" href="#resume">
                    <span class="icon">
                        <i class="fas fa-file-alt"></i>
                    </span>
                    <span>{{ $t('nav.resume') }}</span>
                </a>

                <a class="navbar-item" href="#portfolio">
                    <span class="icon">
                        <i class="fas fa-th-list"></i>
                    </span>
                    <span>{{ $t('portfolio.portfolio') }}</span>
                </a>
            </div>
        </div>
        <div class="navbar-end">
            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                    {{ $t('lang.lang') }}
                </a>

                <div class="navbar-dropdown">
                    <router-link class="navbar-item" to="/fr/">
                        {{ $t('lang.french') }}
                    </router-link>
                    <router-link class="navbar-item" to="/en/">
                        {{ $t('lang.english') }}
                    </router-link>
                </div>
            </div>
        </div>
    </nav>

</div>
</template>
