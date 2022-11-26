<template>
  <header>
    <div>
      <label for=""></label>
      <input type="text" id="" />
      <button>
        <img
          src="@/assets/img/magnifying-glass.svg"
          alt=""
          style="width: 22px; height: 22px"
        />
      </button>
    </div>
    <div class="wrap"></div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  height: 80px;
}

header .wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 980px;
}
</style>
