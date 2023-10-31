<template>
    <div id="tab-container" class="tab-container">
        <div class="container-fluid">
            <div class="col-md-10 col-md-offset-1">
                
             
            </div>
        </div>
    </div>


    
</template>

<style>
    .gallery
    {
        display: flex;
        gap:1.5cm;
        padding-top: 1rem;
        
        
    }
    .card
    {
        position:relative;
        left:1.5rem;
        width:190px;
        height:140px;
        border-radius:8px;
        transition:1000ms all;
        transform-origin: center left;
        box-shadow: 0 5px 13px rgba(0, 0, 0, 0.5);
        outline: 1px solid #3c343d;
        overflow:hidden;
    }
    .card img {
        height: 160px;
        object-fit: cover;
        border-radius: 4px;
    }

    .card:hover {
        cursor: pointer;
        transform: scale(1.15);
    }

    .card:hover figcaption {
        font-size: 0.6rem;
        position: absolute;
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

    .card:hover ~ .card {
        font-weight: bold;
        cursor: pointer;
        transform: translateX(22px);
    }
    .gallery {
    display: grid;
    grid-template-columns: repeat(6, 1fr); /* Display 3 cards per row by default */
    gap: 20px; /* Adjust the gap between cards */
    }

    .card {
    border: 1px solid #ccc; /* Card border */
    border-radius: 8px; /* Rounded corners */
    padding: 0;
    display: flex; /* Make the card a flex container */
    flex-direction: column; /* Arrange card contents vertically */
    }

    /* Media queries for responsive design */
    @media (max-width: 1400px) {
    .gallery {
        grid-template-columns: repeat(4, 1fr); /* Display 2 cards per row for medium-sized screens */
    }
    
    }
    @media (max-width: 992px) {
    .gallery {
        grid-template-columns: repeat(3, 1fr); /* Display 2 cards per row for medium-sized screens */
    }
    
    }
    @media (max-width: 768px) {
    .gallery {
        grid-template-columns: repeat(2, 1fr); /* Display 2 cards per row for medium-sized screens */
    }
    
    }

    @media (max-width: 480px) {
    .gallery {
        grid-template-columns: 1fr; /* Display 1 card per row for small screens */
    }
    
    }

</style>