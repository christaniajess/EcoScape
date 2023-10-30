<template>
    <h3>
        Discover      
        <!-- <span id="typewriter">sustainable places here!
            <span id="cursor">|</span>
        </span> -->
        <vue-typer
            :text="['sustainable places here']"
            :repeat = 'infinty'
            :shuffle = 'false'
        >

        </vue-typer>
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
        padding: 1.5rem;  
        font-weight: 500px;
        margin-left:1.8cm;

        /* 
        #typewriter
        {
            color:#628a5c;
        }
        #cursor
        {
            color:#21321F;
            font-weight:bold;
            animation: blink 1s linear infinite;
        }
        @keyframes blink
        {
            100% {opacity:1;}
            50% {opacity:0}
        } */
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

<script>
    // import { VueTyper } from 'vue-typer'
    var VueTyper = require('vue-typer').VueTyper
</script>
