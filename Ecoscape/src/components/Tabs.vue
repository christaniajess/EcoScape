<template>
    <div class="animated-text">
        Discover <span></span>
    </div>
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

              <Cards />
            </div>
        </div>       
    </div>
</template>
<script>
import Cards from "@/components/Cards.vue";
export default {
    components: {
        Cards
    }
}</script>
<style>

    .animated-text
    {
        padding:1.5rem;
        font-weight:600;
        margin-left:1.8cm;
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
    /* tabs */
    #tab-container 
    {
        /* margin-top: 20px;
        margin-bottom: 10px; */
        padding:1rem;
        margin-left:2.5rem;
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
    #tab1 
    {
        &:checked  
        {
            &~#content1 
            /* & this will refer to the content1` */
            {
                display: block;
            }
        }
    }
    #tab2 
    {
        &:checked 
        {
            &~#content2 
            {
                display: block;
            }
        }
    }
    #tab3 
    {
        &:checked 
        {
            &~#content3 
            {
                display: block;
            }
        }
    }
    #tab4 
    {
        &:checked 
        {
            &~#content4 
            {
                display: block;
            }
        }
    }
    #tab5 {
        &:checked 
        {
            &~#content5 
            {
                display: block;
            }
        }
    }
    #tab6 
    {
        &:checked 
        {
            &~#content6 
            {
                display: block;
            }
        }
    }
</style>
