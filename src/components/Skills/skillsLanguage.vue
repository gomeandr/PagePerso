<template>
<div>
    <h3 class="title is-2">{{ $t('skills.skills') }}</h3>
    <div class="columns has-same-height">
        <div class="column is-one-third">
            <!-- Skills -->
            <div class="card">
                <div class="card-content skills-content">
                    <h3 class="title is-4">{{ $t('lang.lang') }}</h3>
                    <div class="content">
                        <article class="media">
                            <div class="media-content">
                                <div class="content">
                                    <p>
                                        <strong>{{ $t('lang.french') }}:</strong>
                                        <br>
                                        <progress class="progress is-primary" value="100" max="100"></progress>
                                    </p>
                                </div>
                            </div>
                        </article>
                        <article class="media">
                            <div class="media-content">
                                <div class="content">
                                    <p>
                                        <strong>{{ $t('lang.english') }}</strong>
                                        <br>
                                        <progress class="progress is-primary" value="90" max="100"></progress>
                                    </p>
                                </div>
                            </div>
                        </article>
                        <article class="media">
                            <div class="media-content">
                                <div class="content">
                                    <p>
                                        <strong>{{ $t('lang.german') }}</strong>
                                        <br>
                                        <progress class="progress is-primary" value="70" max="100"></progress>
                                    </p>
                                </div>
                            </div>
                        </article>

                        <article class="media">
                            <div class="media-content">
                                <div class="content">
                                    <p>
                                        <strong>{{ $t('lang.italian') }}</strong>
                                        <br>
                                        <progress class="progress is-primary" value="80" max="100"></progress>
                                    </p>
                                </div>
                            </div>
                        </article>
                        <article class="media">
                            <div class="media-content">
                                <div class="content">
                                    <p>
                                        <strong>{{ $t('lang.spanish') }}</strong>
                                        <br>
                                        <progress class="progress is-primary" value="75" max="100"></progress>
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
