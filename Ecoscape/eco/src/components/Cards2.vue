<template>
    
    <!-- TYPEWRITER TEXT -->
    <div class="animated-text">
        Discover <span></span>
    </div>

    <section class="gallery">
        <div class="container">
            <div class="row">
                <div class="gallery-filter">
                    <span class="filter-item" data-filter="All">All</span>
                    <span class="filter-item" data-filter="central">Central</span>
                    <span class="filter-item" data-filter="East">East</span>
                    <span class="filter-item" data-filter="South">South</span>
                    <span class="filter-item" data-filter="north">North</span>
                    <span class="filter-item" data-filter="West">West</span>
                </div>
            </div>
            <div class="row">
                <!-- GALLERY ITEM START -->
                <div class="gallery-item central">
                    <div class="gallery-item-inner">
                        <article class="card">
                            <figure>
                                <img src="../images/mbs.jpg">
                                <figacaption><h3>Marina Bay Sands</h3></figacaption>
                            </figure>
                        </article>
                    </div>
                </div>
                <!-- GALLERY ITEM END -->
                 <!-- GALLERY ITEM START -->
                 <div class="gallery-item north">
                    <div class="gallery-item-inner">
                        <article class="card">
                            <figure>
                                <img src="../images/Singaopre_Zoo.jpg">
                                <figacaption><h3>Marina Bay Sands</h3></figacaption>
                            </figure>
                        </article>
                    </div>
                </div>
                <!-- GALLERY ITEM END -->


            </div>

        </div>

    </section>






</template>

<style>

    /* TYPEWRITER STYLE */
    .animated-text
    {
        padding:1.5rem;
        font-weight:600;
        margin-left:2.6cm;
        font-size:1.5rem;
    }
    .animated-text span
    {
        position:relative;
        font-weight: 500;
    }
    .animated-text span::before
    {
        content: 'eco-friendly places here!';
        color:#628a5c;
        animation: words 20s infinite;
    }
    .animated-text span::after
    {
        content:'';
        background-color: #FFF;
        position:absolute;
        width: calc(100% + 8px);
        height:100%;
        border-left:3px solid #21321F;
        right: -8px; /* makes the cursor have space between the words */
        animation:cursor .6s infinite, typing 20s steps(14) infinite;
    }
    @keyframes typing
    {
        10%,15%,30%,35%,50%,55%,70%,75%,90%,95%
        {
            width:0;
        }
        5%,20%,25%,40%,45%,60%,65%,80%,85%
        {
            width: calc(100% +8px);
        }
    }

    .container
    {
        max-width:1170px;
        margin:auto;
    }
    .row
    {
        display:flex;
        flex-wrap:wrap;
    }

    /* GALLERY */
    .gallery
    {
        display: flex;
        gap:1.5cm;
        /* padding-top: 1rem; */  
    }
    .gallery .gallery-filter
    {
        padding: 0 15px;
        width:100%;
    }


    .gallery .gallery-filter.filter-item
    {
        color:#FFF;
        font-size:18px;
        text-transform:uppercase;
        display:inline-block;
        margin: 0 10px;
        cursor:pointer;
        border-bottom: 2px solid transparent;
        line-height:1.2;
    }

    .gallery .gallery-filter .filter-item.active
    {
        color: #FF9800;
        border-color: #FF9800;
    }

    /* CARD CSS */
    .card
    {
        position:relative;
        left:1.5rem;
        width:190px;
        height:140px;
        border-radius:8px;
        transition:1000ms all;
        transform-origin: center-left;
        box-shadow: 0 5px 13px rgba(0,0,0,0.5);
        outline: 1px solid #3c343d;
        overflow:hidden;
    }
    .card img
    {
        height:160px;
        object-fit:cover;
        border-radius:4px;
    }
    .card:hover
    {
        cursor:pointer;
        transform: scale(1.15);
    }
    .card:hover figcaption
    {
        font-size:0.6rem;
        position:absolute;
        height: 180px;
        width: 190px;
        display: flex;
        align-items: end;
        background: 
        linear-gradient(
            to top, 
            rgba(0, 0, 0, 0.9) 0%,
            rgba(0, 0, 0, 0) 100%
        );
        color: white;
        left: 0px;
        bottom: 0px;
        padding-left: 12px;
        padding-bottom: 10px;
    }


</style>