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
            <li>Citizen</li>
            <li>Casio</li>
            <li>Fossil</li>
            <li>Gucci</li>
            <li>Guess</li>
            <li>Sekonda</li>
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
  },
};
</script>

