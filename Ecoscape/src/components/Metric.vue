<template>
  <section id="metrics">
    <div class="counter">
      <p>State</p>
      <div class="odometer" ref="odometer">0</div>
      <h6 class="title">Air Quality Index</h6>
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

  min-height: 30vh;
}

.odometer {
  font-size: 3rem;
}

.counter.title {
  letter-spacing: 1.5px;
  line-height: 1.25;
}

.counter {
  position: relative;
  margin-bottom: 100px;
  text-align: center;
  color: black;
}
</style>
