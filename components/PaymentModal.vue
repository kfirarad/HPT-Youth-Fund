<script lang="ts" setup>
import { CheckCircleIcon, XCircleIcon } from "@heroicons/vue/solid";

enum Status {
  Form,
  Payment,
  Success,
  Failure,
}

const { getIframeUrl } = useSupabase();

const iframeUrl = ref<String | null>();
const currentStatus = ref<Status>(Status.Form);

const handlePaymentClick = async (
  paymentDetails: PaymentDetails,
  amount: number
) => {
  currentStatus.value = Status.Payment;
  iframeUrl.value = await getIframeUrl({ paymentDetails, amount });
  window.addEventListener(
    "message",
    (event: MessageEvent) => {
      console.log("a");
      const { origin, data } = event;
      if (origin === window.document.location.origin && data === "SUCCESS") {
        currentStatus.value = Status.Success;
      } else {
        currentStatus.value = Status.Failure;
      }
    },
    { once: true }
  );
};
</script>

<template>
  <div v-if="currentStatus === Status.Success">
    <span class="text-blue-500"
      ><CheckCircleIcon className="h-20 w-20 "
    /></span>
    <p>התשלום התקבל בהצלחה!</p>
    <p>אנו מודים לך על תרומתך לקרן מחלקת הנוער של הפועל פתח-תקוה.</p>
    <p>יאללה הפועל!</p>
  </div>
  <div v-else-if="currentStatus === Status.Failure">
    <span class="text-red-500"><XCircleIcon className="h-20 w-20" /></span>
    <p>תקלה בתשלום. לא בוצע חיוב.</p>
    <p>אנא נסה שנית.</p>
  </div>
  <div v-else-if="currentStatus === Status.Payment" class="h-full">
    <iframe
      :src="(iframeUrl as string)"
      style="height: 90vh; width: 90vh"
    ></iframe>
  </div>
  <div v-else>
    <Form :handlePaymentClick="handlePaymentClick" />
  </div>
</template>
