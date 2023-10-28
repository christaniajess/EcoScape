<template>
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>EcoScape</title>
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
            crossorigin="anonymous"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link rel="stylesheet" href="../">

    </head>
    <body>
        <navbar/>
    </body>


</template>
<script>
    import navbar from "@/components/navbar.vue";
    export default
    {
        components:
        {
            navbar
        },
    }
</script>
<style scoped>
    #footer-separation
    {
        background-color: #8ebe6d;
        border:none;
        height:1px;
        width:80%;
        margin: 0 auto;
    }
</style>