<template>
  <section id="metrics">
    <div class="counter text-white pt-4">
      <p>Status</p>
      <div class="odometer text-white" ref="odometer">0</div>
      <h6 class="title text-white">Carbon Emission Calculator</h6>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    // Initialize the odometer or add any logic related to the metric here
    this.initializeOdometer();
  },
  methods: {
    initializeOdometer() {
      // Initialize Odometer or add your logic here
      const odometer = new Odometer({
        el: this.$refs.odometer,
        value: 0, // Initial value
      });

      // Update the odometer value when needed
      // odometer.update(newValue);
    },
  },
};
</script>

<style scoped>
#metrics {
  position: relative;
  width: 100%;
  min-height: 25vh;
}

.counter{
    position:relative;
    align-items: center;
    text-align: center;
    min-height: 25vh;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(../../images/cloud-forest.jpg)no-repeat fixed;
    background-position:center;
    background-size:cover;
    z-index: 2;
}
.counter:before{
    position:absolute;
    content: "";
    z-index: 0;
    height:100%;
    width:100%;
    top:0;
    left:0;
}

.odometer {
  font-size: 3.5rem;
  z-index: 2;
}

.counter.title {
  letter-spacing: 1.5px;
  line-height: 1.25;
}
</style>
