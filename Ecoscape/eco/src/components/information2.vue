<template>
     <main class="main">

        <!-- HOME SECTION -->
        <section class="home section" id="home">
            <div class="home__container container grid">
                <svg class="svg__img svg__color home__img" id="10015.io" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" >
                        <defs>
                            <clipPath id="blob">
                                <path fill="#474bff" d="M406,292.5Q403,345,354.5,365Q306,385,256.5,428Q207,471,164.5,423.5Q122,376,94,333.5Q66,291,46.5,234Q27,177,57.5,121Q88,65,151,60.5Q214,56,258,80.5Q302,105,338.5,129Q375,153,392,196.5Q409,240,406,292.5Z" />
                            </clipPath>
                        </defs>
                        <image x="0" y="18" width="100%" height="100%" clip-path="url(#blob)" href="../images/mbs.jpg" preserveAspectRatio="xMidYMid slice"></image>
                </svg>
                <div class="home-data">
                    <h1 class="home__title">Marina Bay Sands</h1>
                    <h3 class="home__subtitle">Green Rating: 4.6/5</h3>
                    <h3 class="home__subtitle">Rating: 4.6/5</h3>
                    <a href="#" class="button">Get Started</a>
                </div>
            </div>
        </section>

        <!-- ABOUT SECTION -->
        <section class="about section container" id="about">
            <div class="about__container grid">
                <div class="about__data">
                    <h2 class="section__title-center">Find Out A Little More About Them</h2>
                    <p class="about__description">
                        Where luxury unfolds at every turn. Discover Marina Bay Sands, a landmark destination in the heart of Singapore's vibrant city district. Envisioned by renowned architect
                        Mosche Safdie, the striking aesthetic defiantly blurs the line between art and architecture.
                        Experience unparalleled luxury matched by exceptional service, in a land where every detail whispers indulgence. An exhilirating oasis
                        of tranquility and thrill. Gaze down on the glittering expanse of the city from the world-famous Infinity Pool and immerse yourself in a world of infinite possibilities all 
                        in one extraordinary destination. There is nowhere else on earth quite like this.
                    </p>
                </div>
                <img src="../images/mbs.jpg" alt="" class="about__img">
            </div>

        </section>



     </main>
     
</template>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
    /* VARIABLE CSS */
    :root
    {
        --header-height:3rem;
        /* COLORS */

        --hue:45;
        --sat:98%;
        --first-color: hsl(var(--hue),var(--sat),60%);
        --first-color-light: hsl(var(--hue),var(--sat),85%);
        --first-color-lighten: hsl(var(--hue),var(--sat),80%);
        --first-color-alt: hsl(var(--hue),var(--sat),53%);
        --title-color: hsl(var(--hue),var(--sat),80%);
        --text-color: hsl(var(--hue),4%,15%);
        --text-color-light: hsl(var(--hue),4%,65%);
        --body-color:hsl(var(--hue),0%,100%)
        --container-color:#FFF;
        --scroll-bar-color: hsl(var(--hue),4%,85%);
        --scroll-thumb-color: hsl(var(--hue),4%,15%);

        /* FONTS */
        --body-font: 'Poppins', sans-serif;
        --biggest-font-size: 2rem;
        --h2-font-size:1.25rem;
        --h3-font-size:1.125rem;
        --normal-font-size:.938rem;
        --small-font-size: .813rem;
        --smaller-font-size: .75rem;

        /* RESPONSIVE TYPOGRAPHY */
        /* @media screen and (min-width:968px)
        {
            --biggest-font-size:3rem;
            --h2-font-size:1.75rem;
            --h3-font-size:1.25rem;
            --normal-font-size:1rem;
            --small-font-size: .875rem;
            --smaller-font-size: .813rem;
        } */

        /* FONT WEIGHT */
        
        --font-semi-bold:600;
         --font-bold:700;
        

        /* MARGINS */
        --mb-0-5: .5rem;
        --mb-0-75:.75rem;
        --mb-1: 1rem;
        --mb-1-5: 1.5rem;
        --mb-2: 2rem;

        /* Z-INDEX */
        --z-tooltip:10;
        --z-fixed:100;
    }
    /* BASE */
    *, ::before, ::after
    {
        box-sizing:border-box;
        padding:0;
        margin:0;
    }
    html
    {
        scroll-behavior: smooth;
    }
    body
    {
        margin: var(--header-height);
        font-family: var(--body-font);
        font-size: var(--normal-font-size);
        background-color:var(--body-color);
        color: var(--text-color);
    }
    h1,h2,h3
    {
        font-weight: var(--font-semi-bold);
        color:var(--title-color);
        line-height:1.5;
    }
    ul
    {
        list-style:none;
    }
    a
    {
        text-decoration: none;
    }
    img
    {
        max-width: 100%;
        height:auto;
    }

    /* CSS CLASSES */
    .section
    {
        padding: 4.5rem 0 1rem;
        &__title, &__title-center
        {
            font-size:var(--h2-font-size);
            color:var(--title-color);
            text-align: center;
            margin-bottom: var(--mb-1);
        }
    }
    .svg
    {
        &__color
        {
            fill:var(--first-color)l
        }
        &__blob
        {
            fill:var(--first-color-light)
        }
        &__img
        {
            width:300px;
        }
    }
    /* LAYOUT */
    .container
    {
        max-width:968px;
        margin-left:var(--mb-1-5);
        margin-right: var(--mb-1-5);
    }
    .grid
    {
        display:grid;
        gap:1.5rem;
    }

    /* HOME */
    .home
    {
        &__container
        {
            row-gap:3rem;
        }
        &__title
        {
            font-size:var(--biggest-font-size);
            font-weight: var(--font-bold);
            margin-bottom: var(--mb-0-75);
        }
        &__subtitle
        {
            font-size: var(--normal-font-size);
            margin-bottom: var(--mb-2)
        }
    }

    /* BUTTONS */
    .button
    {
        display:inline-block;
        background-color: var(--first-color);
        color:#1A1A1A;
        padding: .75rem 1.5rem;
        border-radius:3rem;
        font-weight:var(--font-semi-bold);
        transition: .3s;
    }
    &:hover
    {
        background-color:var(--first-color-alt);
    }

    /* ABOUT */
    .about
    {
        &__container
        {
            gap:2.5rem;
        }
        &__data
        {
            text-align: center;
        }
    }
</style>