<template>
    
        <h3>
            Discover 
            <!-- figures out how to make this into typewriting -->
        </h3>
    <div id="tab-container" class="tab-container">
          <div class="container-fluid">
            <div class="col-md-10 col-md-offset-1">
        
              <input id="tab1" type="radio" name="tabs" checked>
              <label for="tab1">All</label>
          
              <input id="tab2" type="radio" name="tabs">
              <label for="tab2">Central</label>
          
              <input id="tab3" type="radio" name="tabs">
              <label for="tab3">East</label>
          
              <input id="tab4" type="radio" name="tabs">
              <label for="tab4">South</label>
    
              <input id="tab5" type="radio" name="tabs">
              <label for="tab5">North</label>
    
              <input id="tab6" type="radio" name="tabs">
              <label for="tab6">West</label>
            </div>
        </div>       
    </div>
</template>

<style>

    h3
    {
        font-size: 25px;
        padding: 1.5rem;
        /* margin-bottom:2rem; */    
        font-weight: 50px;
        margin-left:2.1cm;
    }
  
    /* tabs */
    #tab-container 
    {
        /* margin-top: 20px;
        margin-bottom: 10px; */
        padding:1.5rem;
        margin-left:3rem;
    }

    .tab-content 
    {
        display: none;
        padding: 20px 0 0;
    }

    input 
    {
        display: none;
        &:checked 
        {
        &+label 
        {
            color: #bd235d;
        }
        }
    }
    label 
    {
        display: inline-block;
        padding: 0 25px;
        font-weight: 600;
        &:not(:first-of-type) 
        {
            border-left: 2px solid #628a5c;
            @media screen and (max-width: 480px) 
            {
                border-left: none;
            }
        }
        @media screen and (max-width: 480px) 
        {
            display: block;
        }
        &:hover 
        {
            color: #bd235d;
            cursor: pointer;
        }
    }
    #tab1 {
        &:checked {
        &~#content1 {
            display: block;
        }
        }
    }
    #tab2 {
        &:checked {
        &~#content2 {
            display: block;
        }
        }
    }
    #tab3 {
        &:checked {
        &~#content3 {
            display: block;
        }
        }
    }
    #tab4 {
        &:checked {
        &~#content4 {
            display: block;
        }
        }
    }
    #tab5 {
        &:checked {
        &~#content5 {
            display: block;
        }
        }
    }
    #tab6 {
        &:checked {
        &~#content6 {
            display: block;
        }
        }
    }

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
    
</style>