<template>
  <h1>Conversor de Moeda</h1>
  <h2>BRL $ USD</h2>
  <div class="div-imputNumber">
    <span class="p-float-label">
      <InputNumber
        id="real"
        v-model="realAmount"
        mode="currency"
        currency="BRL"
        locale="pt-br"
      />
      <label class="label-inputnumber" for="real">Quantidade em Reais</label>
    </span>
  </div>
  <div class="div-imputNumber">
    <span class="p-float-label">
      <InputNumber
        id="dollar"
        v-model="dollarAmount"
        mode="currency"
        currency="USD"
        locale="pt-br"
      />
      <label class="label-inputnumber" for="dollar">Cotação Dollar</label>
    </span>
  </div>
  <div>
    <ButtonPrime
      v-on:click="convertCurrency"
      label="Calcular"
      class="p-button-outlined"
    />
    <ButtonPrime
      v-on:click="clearData"
      label="Limpar"
      class="p-button-outlined"
    />
  </div>

  <p class="p-result" v-if="result">
    Com {{ formatCurrency(realAmount) }} reais é possível comprar
    {{ formatCurrency(result) }} dollar a
    {{ formatCurrency(dollarAmount) }} cada.
  </p>
</template>

<script>
export default {
  name: "ConversorMoeda",
  data() {
    return {
      realAmount: 0,
      dollarAmount: 0,
      result: null,
    };
  },
  methods: {
    convertCurrency: function () {
      if (!this.realAmount | !this.dollarAmount) {
        return;
      }

      const result = this.realAmount / this.dollarAmount;
      if (isNaN(result)) {
        return;
      }
      this.result = result;
    },
    clearData: function () {
      this.result = null;
      this.realAmount = 0;
      this.dollarAmount = 0;
    },
    formatCurrency(valor) {
      return Number.parseFloat(valor).toFixed(2).replace(".", ",");
    },
  },
  watch: {
    realAmount: function (newValue) {
      if (!newValue) {
        this.result = null;
      }
    },

    dollarAmount: function (newValue) {
      if (!newValue) {
        this.result = null;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.div-imputNumber {
  margin: 25px auto auto auto;
  width: 181px;
  text-align: center;
}
.p-result {
  font-size: 1em;
  font-weight: 800;
}
</style>
