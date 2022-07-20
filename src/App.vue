<template>
  <router-view />
</template>

<style>
body {
  background: linear-gradient(
      180deg,
      #0668c2 0%,
      #1c0168 100%,
      rgba(68, 12, 158, 0) 100%
    ),
    linear-gradient(0deg, #c4c4c4, #c4c4c4);
  min-height: 100vh;
}
#app {
  font-family: "Roboto";
  font-style: normal;
  text-align: center;
  color: white;
  height: 100vh;
  display: flex;
  justify-content: center;
}
h3 {
  margin-bottom: 0;
}
h5 {
  margin-bottom: 0.25rem;
}
@media only screen and (min-width: 800px) {
  .row-column {
    flex-direction: row;
  }
  .column-row {
    flex-direction: column;
  }
}
@media only screen and (max-width: 801px) {
  .row-column {
    flex-direction: column;
  }
  .column-row {
    flex-direction: row;
  }
}
</style>
