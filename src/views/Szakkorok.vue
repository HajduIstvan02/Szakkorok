<template>
  <div class="row justify-content-center">
    <div class="col-6 d-flex p-2 table-decor">
      <table>
        <thead>
          <tr>
            <th class="th-decor" scope="col">Név</th>
            <th class="th-decor" scope="col">Osztály</th>
            <th class="th-decor" scope="col">szakkör</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(tanulo, i) in tanulok" :key="i">
            <td class="td-decor">{{ tanulo.nev }}</td>
            <td class="td-decor">{{ tanulo.osztaly }}</td>
            <td class="td-decor">
              <select
                class="form-select"
                aria-label="Default select explame"
                v-model="tanulo.szakkor"
              >
                <option
                  v-for="(szakkor, i) in szakkorok"
                  :key="i"
                  :value="szakkor.id"
                >
                  {{ szakkor.neve }}
                </option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-6 my-card">
      <SzakkorokKartya
        v-for="szakkor in szakkorok"
        :key="szakkor.id"
        :szakkor="szakkor"
        :tanulok="tanulok"
      />
    </div>
  </div>
</template>

<script>
import SzakkorokKartya from "@/components/SzakkorokKartya.vue";
export default {
  components: { SzakkorokKartya },
  data() {
    return {
      tanulok: [
        { id: 1, nev: "Kovács Péter", osztaly: "1A", szakkor: 1 },
        { id: 2, nev: "Pásztor Dénes", osztaly: "1A", szakkor: 1 },
        { id: 3, nev: "Kovács Rebeka", osztaly: "1B", szakkor: 1 },
        { id: 4, nev: "Farkas Anna", osztaly: "1B", szakkor: 1 },
        { id: 5, nev: "Lugosi Gergő", osztaly: "1C", szakkor: 1 },
        { id: 6, nev: "Vörös Endre", osztaly: "1C", szakkor: 1 },
        { id: 7, nev: "Pri Dávid", osztaly: "1D", szakkor: 1 },
        { id: 8, nev: "Bodó Atilla", osztaly: "1D", szakkor: 1 },
        { id: 9, nev: "Szűcs Szabi", osztaly: "1E", szakkor: 1 },
        { id: 10, nev: "Fodor Armando Szabolcs", osztaly: "1E", szakkor: 1 },
      ],
      szakkorok: [
        {
          id: 1,
          neve: "Nincs szakkörben",
        },
        {
          id: 2,
          neve: "Tánc",
        },
        {
          id: 3,
          neve: "Zene",
        },
        {
          id: 4,
          neve: "Történelem",
        },
        {
          id: 5,
          neve: "Röpi",
        },
      ],
      components: {
        SzakkorokKartya,
      },
    };
  },
};
</script>

<style>
</style>