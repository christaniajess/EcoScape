<template>
    <div>
        <input v-for="tab in tabs" :id="tab.id" type="radio" name="tabs" :checked="tab.checked">
        <label v-for="tab in tabs" :for="tab.id">{{ tab.label }}</label>
    </div>
</template>

<script>

export default {
  data() {
    return {
      tabs: [
        { id: "tab1", label: "All", checked: true },
        { id: "tab2", label: "Central", checked: false },
        { id: "tab3", label: "East", checked: false },
        { id: "tab4", label: "South", checked: false },
        { id: "tab5", label: "North", checked: false },
        { id: "tab6", label: "West", checked: false },
      ],
    };
  },
};
</script>