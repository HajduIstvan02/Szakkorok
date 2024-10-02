<script setup>
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <div class="container-fluid my-border my-container">
    <h1>Szakkörök</h1>

    <nav class="my-border p-4">
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/szakkorok">Szakkörök</RouterLink> |
    </nav>
    <div>
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
</style>
