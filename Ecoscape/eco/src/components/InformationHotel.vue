<template>
    <!-- HEADER -->
    <main class="main">
        <section class="home section" id="home">
            <div class="home__container container grid">
                <div class="home__content grid">
                    <div class="home__social">
                        <a href="" class="home__social-icon">
                            <i class="uiil uil-instagram-alt"></i>
                        </a>
                    </div>
                    <div class="home__img">
                        <svg class="home__blob" id="10015.io" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" >
                            <defs>
                                <clipPath id="blob">
                                    <path fill="#474bff" d="M406,292.5Q403,345,354.5,365Q306,385,256.5,428Q207,471,164.5,423.5Q122,376,94,333.5Q66,291,46.5,234Q27,177,57.5,121Q88,65,151,60.5Q214,56,258,80.5Q302,105,338.5,129Q375,153,392,196.5Q409,240,406,292.5Z" />
                                </clipPath>
                            </defs>
                            <image class="home__blob-img" x="12" y="18" width="100%" height="100%" clip-path="url(#blob)" :href="image" preserveAspectRatio="xMidYMid slice"></image>
                        </svg>
                    </div>
                    <div class="home__data">
                        <h1 class="home__title">{{ name }}</h1>  <!-- Edit name -->
                        <h3 class="home__subtitle">Green Rating: {{ greenScore }}</h3>  <!-- Edit  green rating -->
                        <h3 class="home__subtitle">Rating:{{ rating }}</h3> <!-- Edit rating  -->
                        <p class="home__description"> <!-- Edit description -->
                            {{ description }}
                        </p>
                        <a :href="url" class="button button-flex"> <!-- Edit url-->
                            Go To Their Website! <i class="uil uil-message button__icon"></i>
                        </a>
                    </div>
                </div>

                <div class="home__scroll"> 
                    <a href="#about" class="home__scroll-button button--flex">
                        <i class="uil uil-mouse-alt home__scroll-mouse"></i>
                        <span class="home__scroll-name">Scroll down</span>
                        <i class="uil uil-arrow-down home__scroll-arrow"></i>
                    </a>
                </div>

            </div>
        </section>

        <!-- ABOUT PAGE -->
        <section class="about section" id="about">
            <h2 class="section__title">About</h2>
            <span class="section__subtitle">{{ name }}</span>
            <div class="about__container container grid">
                <img :src="image" alt="" class="about__img">
            </div>
        </section>

        <!-- MAPS SERVICE SECTION --> 
        <section class="services section" id="services">
            <h2 class="section__title">Map</h2>
            <span class="section__subtitle">Where they are located</span>
            <div class="map__container container grid">
                <!-- insert map here and replace the image with the API-->
                <GoogleMap v-if="lat !== 0 && long !== 0" :lat="lat" :long="long" :name="name"/>
            </div>
        </section>  
        
    </main> 
</template>

<script>
import axios from 'axios';
import GoogleMap from '@/components/GoogleMap.vue';

export default {
    components: {
        GoogleMap
    },
    props: {
        index: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            image: "",
            url: "",
            name: "",
            greenScore: "",
            rating: "",
            description: "",
            lat: 0,
            long: 0
        };
    },
    created() {
        this.fetchDestinationData(); 
    },
    methods: {
        async fetchDestinationData() {
            try {
                const response = await axios.get('/hotel.json'); 
                // console.log(response.data);
                // console.log(this.index);
                const destination = response.data[this.index];
                this.image = "../" + destination.image;
                this.url = destination.url;
                this.name = destination.name;
                this.greenScore = destination.greenScore;
                this.rating = destination.rating;
                this.description = destination.description;
                this.lat = parseFloat(destination.lat);
                this.long = parseFloat(destination.long);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    }
};
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
    #map {
    height: 50%;
    width: 50%;
  }
    :root
    {
        /* FOR THE COLORS */
        --header-height: 3rem;
        --hue-color: 250 ; 
        --first-color: hsl((var(--hue-color)), 69%, 61%); /* can change this later by going to HSL calculator */
        --first-color-alt: #628a5c;
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

    /* HOME */
    .home__container
    {
        gap:1rem;
    }
    .home__content
    {
        grid-template-columns:.5fr;
        padding-top:3.5rem;
        align-items: center;
    } 
    .home__social
    {
        display:grid;
        grid-template-columns: max-content;
        row-gap: 1rem;
    }
    .home__social-icon
    {
        font-size:1.25rem;
        color:var(--first-color);
    }
    .home__social-icon:hover
    {
        color: var(--first-color-alt);
    }
    .home__blob
    {
        width:1000;
    }
    .home__blob-img
    {
        width: 900;
        
    }
    .home__data
    {
        grid-column:1/3;
    }
    .home__title
    {
        font-size: var(--big-font-size);
    }
    .home__subtitle
    {
        font-size: var(--h3-font-size);
        color: var(--text-color);
        font-weight: var(--font-medium);
        margin-bottom: var(--mb-0-75);
    }
    .home__description
    {
        margin-bottom: var(--mb-2);
    }
    .home__scroll-button
    {
        color: var(--first-color);
        transition: .3s;
    }
    .home__scroll-button:hover
    {
        transform: translateY(.25rem);
    }
    .home__scroll-mouse
    {
        font-size:2rem;
    }
    .home__scroll-name
    {
        font-size:var(--small-font-size);
        color:var(--title-color);
        font-weight: var(--font-medium);
        margin-right: var(--mb-0-25);
    }
    .home__scroll-arrow
    {
        font-size:1.25rem;
    }

    /* BUTTONS */
    .button
    {
        display:inline-block;
        background-color:#101207 ; /* can change the color of the button here */
        color:white;
        padding:1rem;
        border-radius: .5rem;
        font-weight:var(--font-medium);
        text-decoration: none;
    }
    .button:hover
    {
        background-color: var(--first-color-alt); 
    }
    .button__icon
    {
        font-size:1.25rem;
        margin-left:var(--mb-0-25);
        transition: .3s;
    }
    .button--flex
    {
        display:inline-flex;
        align-items:center;
    }

    /* ABOUT SECTION */
    .about__img
    {
        width:500px;
        border-radius: .5rem;
        justify-self: center ;
        align-self: center;
    }
    .about__description
    {
        text-align: center;
        margin-bottom:var(--mb-2-5);
    }
    .about__info
    {
        display:flex;
        justify-content: space-evenly;
        margin-bottom: var(--mb-2-5);
    }
    .about__info-title
    {
        font-size: var(--h2-font-size);
        font-weight: var(--font-semi-bold);
    }
    .about__info-name
    {
        font-size: var(--smaller-font-size);
    }
    .about__info-title,.about__info-name
    {
        display:block;
        text-align:center;
    }

</style>