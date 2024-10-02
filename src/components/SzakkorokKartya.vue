<template>
  <div class="card my-card bg-dark text-red card-border-dark">
    <div class="card-header"></div>
    <div class="card-body text-dark text-red mp-2">
      <span
        class="my-span"
        v-for="(tanulo, index) in TanulokSzakkorben"
        :key="tanulo.id"
        >
        {{ tanulo.nev }} <span v-if="index < TanulokSzakkorben.lenght - 1"></span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["szakkor", "tanulo"],
  computed: {
    TanulokSzakkorben() {
      return this.tanulok
        .filter((t) => t.tanulo == this.szakkor.id)
        .sort((a, b) => a.nev.localeCompare(b.nev));
    },
  },
};
</script>

<style>
</style>