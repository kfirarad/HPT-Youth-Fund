<script lang="ts" setup>
const options = [100, 200, 500];

const x = ref<number>(500);
const otherAmountInput = ref();
var formatter = new Intl.NumberFormat("he-IL", {
  style: "currency",
  currency: "ILS",
  maximumFractionDigits: 0,
});
const handleChange = (evt) => {
  const newValue = evt.target.value.match(/\d/g)?.join("");
  if (newValue) {
    setAmount(newValue);
    evt.target.value = formatter.format(newValue);
  } else {
    evt.target.value = null;
  }
};

const handleClick = (option) => {
  setAmount(option);
  otherAmountInput.value.value = "";
};

const setAmount = (a) => {
  x.value = a;
};
</script>

<template>
  <div>
    <button
      v-for="option in options"
      class="outline-blue-500 border-2 border-gray-300 px-2 py-1 ml-2 rounded-md hover:bg-blue-500 hover:text-white"
      :class="{ 'bg-blue-500': option === x, 'text-white': option === x }"
      @click="handleClick(option)"
    >
      ₪{{ option }}
    </button>

    <input
      type="tel"
      pattern="d+"
      placeholder="סכום אחר"
      size="8"
      class="outline-gray-300 border-2 border-gray-300 rounde-md py-1 px-2"
      :class="{
        'bg-blue-500': !options.includes(x),
        'text-white': !options.includes(x),
      }"
      @change="handleChange"
      ref="otherAmountInput"
    />
  </div>
  <div>
    <button class="text-white bg-blue-500 px-4 py-2 rounded-md mt-4">
      המשך לתשלום
    </button>
  </div>
</template>
