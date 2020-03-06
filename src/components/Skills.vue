<template>
<section class="section" id="skills">
    <div class="column is one-third">
        <div class="card">
            <div class="card-content skills-content">
                <h3 class="title is-4">{{ $t('skills.computer') }}</h3>
                <div class="content">
                    <article class="media">
                        <div class="media-content">
                            <div class="content">
                                <p>
                                    <strong>OpenSource</strong>
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
                                    <strong>HTML5/CSS3</strong>
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
                                    <strong>Vue.js</strong>
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
                                    <strong>Angular.js</strong>
                                    <br>
                                    <progress class="progress is-primary" value="50" max="100"></progress>
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>

    <div class="column is one-third">
        <div class="card">
            <div class="card-content skills-content">
                <h3 class="title is-4">{{ $t('skills.social') }}</h3>
                <div class="content">

                    <article class="media">
                        <div class="media-content">
                            <div class="content">
                                <p>
                                    <strong>{{ $t('skills.independance') }}</strong>
                                    <br>
                                    <progress class="progress is-primary" value="95" max="100"></progress>
                                </p>
                            </div>
                        </div>
                    </article>

                    <article class="media">
                        <div class="media-content">
                            <div class="content">
                                <p>
                                    <strong>{{ $t('skills.presentation') }}</strong>
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
                                    <strong>{{ $t('skills.projectManagement') }}</strong>
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
                                    <strong>{{ $t('skills.organisation') }}</strong>
                                    <br>
                                    <progress class="progress is-primary" value="70" max="100"></progress>
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
</section>
</template>
