<template>
  <div class="row card my-card bg-danger card-border-dark"
  v-if="TanulokSzakkorben.length > 0">
    <div class="card-header">{{ szakkor.neve }}</div>
    <div class="card-body text-dark text-red mp-2">
      <span
        class="my-span"
        v-for="(tanulo, index) in TanulokSzakkorben"
        :key="index"
      >
        {{ tanulo.nev }}
        <span v-if="index < TanulokSzakkorben.length - 1">, </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["szakkor", "tanulok"],
  computed: {
    TanulokSzakkorben() {
      return this.tanulok
        .filter((t) => t.szakkor == this.szakkor.id)
        .sort((a, b) => a.nev.localeCompare(b.nev));
    },
  },
};
</script>

<style>
</style>
