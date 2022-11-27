<template>
  <header>
    <div class="wrap">
      <div class="form-group fg--search">
        <input
          v-model="inputValue"
          type="text"
          class="input"
          placeholder="Search..."
        />
        <button @click="clickOnButton" type="button">
          <img
            src="@/assets/img/magnifying-glass.svg"
            alt=""
            style="width: 22px; height: 22px"
          />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const inputValue = ref("");

const clickOnButton = () => {
  console.log(inputValue.value);
  inputValue.value = "";
};
</script>

<style scoped>
header {
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
}
.wrap {
  max-width: 980px;
  width: 100%;
}
.form-group {
  display: flex;
  justify-content: right;
  padding: 1rem;
  align-items: center;
}
.input {
  height: 22px;
  width: 200px;
  padding: 1rem;
}
button {
  height: 36px;
}
</style>
