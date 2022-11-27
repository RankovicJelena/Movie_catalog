<template>
  <footer>
    <div class="wrap">
      <div class="left">
        <p>developed at the end of 2022</p>
      </div>
      <div class="right">
        <p>powered by</p>
        <a href="https://www.themoviedb.org/" target="_blank">
          <img
            src="@/assets/img/tmbd_logo.svg"
            alt="TMDB"
            style="width: 38px; height: 30px"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
}

.wrap {
  max-width: 980px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.right {
  font-size: larger;
  display: flex;
  justify-content: center;
}
</style>
