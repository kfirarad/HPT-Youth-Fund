<script lang="ts" setup>
const { handlePaymentClick } = defineProps(["handlePaymentClick"]);
const x = ref(100);
const options = [100, 200, 500];
const paymentDetails = ref<PaymentDetails>({});
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
  <div class="w-full">
    <fieldset class="border border-solid border-gray-300 p-3">
      <legend>סכום התמיכה</legend>
      <button
        v-for="option in options"
        class="input"
        :class="{
          'bg-blue-500': option === x,
          'text-white': option === x,
          'hover:bg-blue-400': option !== x,
        }"
        @click="handleClick(option)"
      >
        ₪{{ option }}
      </button>

      <input
        type="tel"
        pattern="d+"
        placeholder="סכום אחר"
        size="8"
        class="outline-gray-300 border-2 border-gray-300 rounde-md py-1 px-2 input text-center"
        :class="{
          'bg-blue-500': !options.includes(x),
          'text-white': !options.includes(x),
        }"
        @change="handleChange"
        ref="otherAmountInput"
      />
    </fieldset>
  </div>

  <div class="w-full">
    <fieldset class="border border-solid border-gray-300 p-3">
      <legend>פרטי חיוב</legend>
      <input
        type="tel"
        placeholder="ת.ז / ח.פ"
        v-model="paymentDetails.ID"
        class="input"
      />

      <input
        type="text"
        placeholder="שם מלא / שם העסק"
        v-model="paymentDetails.name"
        class="input"
      />
      <input
        type="tel"
        placeholder="טלפון"
        v-model="paymentDetails.phone"
        class="input"
      />
      <input
        type="text"
        placeholder="כתובת מלאה"
        v-model="paymentDetails.address"
        class="input"
      />
    </fieldset>
  </div>
  <div>
    <button
      @click="handlePaymentClick(paymentDetails, x)"
      class="text-white bg-blue-500 px-4 py-2 rounded-md mt-4 w-full md:w-auto"
    >
      המשך לתשלום
    </button>
  </div>
</template>
