<template>
  <section id="metrics">
    <div class="counter">
      <p>Status</p>
      <div class="odometer" ref="odometer">0</div>
      <h6 class="title">Carbon Emission Calculator</h6>
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
  z-index: 2;
  width: 100%;
  align-items: center;
  min-height: 25vh;
}

.odometer {
  font-size: 3.5rem;
}

.counter.title {
  letter-spacing: 1.5px;
  line-height: 1.25;
}

.counter {
  position: relative;
  text-align: center;
  color: black;
}
</style>
