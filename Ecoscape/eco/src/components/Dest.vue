<template>
    <article class="card">
      <figure>
        <img :src="image" >
        <figcaption>
          <h3>{{ name }}</h3>
        </figcaption>
      </figure>
    </article>
  </template>
  
  <script>
  export default {
    created() {
    },
    props: ['name', 'image', 'url'],
  };

  </script>
  
  <style scoped>
    .card {
      position: relative;
      left: 1.5rem;
      width: 190px;
      height: 140px;
      border-radius: 8px;
      transition: 1000ms all;
      transform-origin: center left;
      box-shadow: 0 5px 13px rgba(0, 0, 0, 0.5);
      outline: 1px solid #3c343d;
      overflow: hidden;
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
      background: linear-gradient(
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
  