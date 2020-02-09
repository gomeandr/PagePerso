<template>
    <nav class="navbar is-link is-fixed-top is-transparent">
        <div id="navbarExampleTransparentExample" class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item" href="#about">
                    <span class="icon">
                        <i class="fa fa-info"></i>
                    </span>
                    <span>{{ $t('about.about') }}</span>
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
                    <span>{{ $t('resume.resume') }}</span>
                </a>

                <a class="navbar-item" href="#portfolio">
                    <span class="icon">
                        <i class="fas fa-th-list"></i>
                    </span>
                    <span>{{ $t('portfolio.portfolio') }}</span>
                </a>

            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="field is-grouped">
                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                                {{ $t('lang.lang') }}
                            </a>
                            <div class="navbar-dropdown is-boxed">
                                <router-link class="navbar-item" to="/fr/">
                                    {{ $t('lang.french') }}
                                </router-link>
                                 <router-link class="navbar-item" to="/en/">
                                    {{ $t('lang.english') }}
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
