<template>
    <!-- HEADER -->
    <main class="main">
        <section class="home section" id="home">
            <div class="home__container container grid">
                <div class="home__content grid">
                    <div class="home__img">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FF0066" d="M48.1,-74.1C62.6,-65.6,74.6,-52.6,77.2,-37.9C79.7,-23.2,72.8,-6.9,69.5,9.4C66.2,25.6,66.6,41.8,60.1,55.7C53.7,69.5,40.4,81.1,26.3,81.9C12.1,82.6,-3.1,72.4,-20.1,67.8C-37.1,63.1,-56,64,-68.6,55.9C-81.3,47.8,-87.6,30.6,-84.7,15.5C-81.8,0.3,-69.6,-13,-60,-24.7C-50.4,-36.3,-43.4,-46.5,-33.8,-57.2C-24.2,-67.9,-12.1,-79.3,2.4,-83C16.8,-86.7,33.7,-82.7,48.1,-74.1Z" transform="translate(100 100)" />
                        </svg>

                    </div>
                </div>
            </div>

        </section>


    </main>
    
</template>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
    :root
    {
        /* FOR THE COLORS */
        --header-height: 3rem;
        --hue-color: 250 ; /* initial hsl was hsl(250, 69%, 61%) */
        --first-color: hsl((var(--hue-color)), 69%, 61%); /* can change this later by going to HSL calculator */
        --first-color-alt: hsl(var(--hue-color), 57%, 53%);
        --first-color-lighter: hsl(var(--hue-color), 92%,85%);
        --title-color: hsl(var(--hue-color),8%,15%);
        --text-color: hsl(var(--hue-color), 8%, 65%);
        --input-color: hsl(var(--hue-color),70%,61%);
        --body-color: hsl(var(--hue-color),60%,99%);
        --container-color:#FFF;

        /* FOR THE FONTS */
        --body-font: 'Poppins', sans-serif;
        --big-font-size: 2rem;
        --h1-font-size:1.5rem;
        --h2-font-size: 1.25rem;
        --h3-font-size:1.125rem;
        --normal-font-size:.938rem;
        --small-font-size: .813rem;
        --smaller-font-size:.75rem;

        --font-medium: 500;
        --font-semi-bold:600;

        /* MARGINS */
        --mb-0-25: .25rem;
        --mb-0-5: .5rem;
        --mb-0-75: .75rem;
        --mb-1: 1rem;
        --mb-1-5: 1.5rem;
        --mb-2: 2rem;
        --mb-2-5: 2.5rem;
        --mb-3:3rem;

        /* Z-INDEX */
        --z-tooltip:10;
        --z-fixed:100;
        --z-modal:1000;
    }
    /* FONT SIZES FOR LARGE SCREENS */
    @media screen and (min-width:968px)
    {
        :root
        {
            --big-font-size: 3rem;
            --h1-font-size:2.25rem;
            --h2-font-size: 1.5rem;
            --h3-font-size:1.25rem;
            --normal-font-size:1rem;
            --small-font-size: .875rem;
            --smaller-font-size:.813rem;

        }
    }

    /* BASE */
    *
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
        margin: 0 0 var(--header-height) 0;
        font-family: var(--body-font);
        font-size: var(--normal-font-size);
        background-color: var(--body-color);
        color: var(--text-color);
    }
    h1,h2,h3,h4
    {
        color:var(--title-color);
        font-weight: var(--font-semi-bold);

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
    }

    /* CSS CLASSES */
    .section
    {
        padding:2rem 0 4 rem;
    }
    .section__title
    {
        font-size: var(--h1-font-size);
    }
    .section__subtitle
    {
        display:block;
        font-size: var(--small-font-size);
        margin-bottom: var(--mb-3);

    }
    .section__title, .section__subtitle
    {
        text-align:center;

    }

    /* LAYOUT */
    .container
    {
        max-width: 768px;
        margin-left:var(--mb-1-5);
        margin-right: var(--mb-1-5);
    }
    .grid
    {
        display:grid;
        gap:1.5rem;
    }





</style>