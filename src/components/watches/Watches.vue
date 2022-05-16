<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">
          List Watches Brand
        </h3>
      </div>
      <div class="panel-body">
        <div class="dropdown">
          <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" @click="openDropdown">
            Brand
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu" :class="{ 'show' : isActive }" aria-labelledby="dropdownMenu1">
            <li><a @click="addStock">Citizen</a></li>
            <li><a href="#">Casio</a></li>
            <li><a href="#">Fossil</a></li>
            <li><a href="#">Gucci</a></li>
            <li><a href="#">Guess</a></li>
            <li><a href="#">Sekonda</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    openDropdown() {
      this.isActive =! this.isActive
    },
    addStock() {
      const item = {
        stockId: 5,
        stockName: 'Citizen',
        stockPrice: 100,
      };
      this.$store.dispatch("addStock", item);
    },
  },
};
</script>

