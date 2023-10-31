<template>
    
    <!-- TYPEWRITER TEXT -->
    <div class="animated-text">
        Discover <span></span>
    </div>

    <section class="gallery">
        <div class="container">
            <div class="row">
                <div class="gallery-filter">
                    <span class="filter-item" data-filter="all">All|</span>
                    <span class="filter-item" data-filter="central">Central|</span>
                    <span class="filter-item" data-filter="east">East|</span>
                    <span class="filter-item" data-filter="south">South|</span>
                    <span class="filter-item" data-filter="north">North|</span>
                    <span class="filter-item" data-filter="west">West|</span>
                </div>
            </div>
            <div class="row">
                <!-- GALLERY ITEM START -->
                <div class="gallery-item central">
                    <div class="gallery-item-inner">
                        <!-- make this into a card please -->
                        <img src="../images/reservoir.jpg" alt="Reservoir">
                    </div>
                </div>
                <!-- GALLERY ITEM END -->
                 <!-- GALLERY ITEM START -->
                 <div class="gallery-item east">
                    <div class="gallery-item-inner">
                        <!-- make this into a card please -->
                        <img src="../images/ecp.jpg" alt="East Coast Park">
                    </div>
                </div>
                <!-- GALLERY ITEM END -->
                 <!-- GALLERY ITEM START -->
                 <div class="gallery-item south">
                    <div class="gallery-item-inner">
                        <!-- make this into a card please -->
                        <img src="../images/fcpark.jpg" alt="Fort Canning Park">
                    </div>
                </div>
                <!-- GALLERY ITEM END -->
                 <!-- GALLERY ITEM START -->
                 <div class="gallery-item north">
                    <div class="gallery-item-inner">
                        <!-- make this into a card please -->
                        <img src="../images/Singapore_Zoo.jpg" alt="Singapore zoo">
                    </div>
                </div>
                <!-- GALLERY ITEM END -->
                 <!-- GALLERY ITEM END -->
                 <!-- GALLERY ITEM START -->
                 <div class="gallery-item west">
                    <div class="gallery-item-inner">
                        <!-- make this into a card please -->
                        <img src="../images/jlg.png" alt="Jurong Lake Garden">
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
    /* .gallery
    {
        display: flex;
        gap:1.5cm;
    } */
    *
    {
        margin:0;
        box-sizing:border-box;
    }
    .gallery
    {
        width:100%;
        display:block;
        min-height:100vh;
    }
    .gallery .gallery-filter
    {
        padding: 0 15px;
        width:100%;
    }
    .gallery .gallery-filter .filter-item
    {
        /* color:#FFFFFF; */
        font-size:18px;
        /* text-transform:uppercase; */
        display:inline-block;
        margin: 0 10px;
        cursor:pointer;
        border-bottom: 2px solid transparent;
        line-height:1.2;
        transition: all 0.3s ease;
    }

    .gallery .gallery-filter .filter-item.active
    {
        color: #FF9800;
        border-color: #FF9800;
    }
    /* .gallery .gallery-item
    {
  
    } */
    .gallery .gallery-item.show
    {
        animation:fadeIn 0.5s ease;

    }
    @keyframes fadeIn
    {
        0%
        {
            opacity:0;
        }
        100%
        {
            opacity:1;
        }
    }
    .gallery .gallery-item.hide
    {
        display:none;
    }

</style>
<!-- <script>
    const filtercontainer = documnet.querySelector('.gallery-filter'),
    galleryItems = document.querySelectorAll('.gallery-item');
    filtercontainer.addEventListener('click', (event)=>
    {
        if(event.target.classList.contains('filter-item'))
        {
            //deactivate existing active 'filter-item'
            filtercontainer.querySelector('.active').classList.remove('active');
            //activate new 'filter-item'
            event.target.classList.add('active');
            const filterValue = event.target.getAttribute('data-filter');
            galleryItems.forEach((item)=>
            {
                if(item.classList.contains(filterValue))
                {
                    item.classList.remove('hide')
                    item.classList.add('show')
                }
                else
                {
                    item.classList.remove('show')
                    item.classList.add('hide')
                }
            })
        };
    })
</script> -->