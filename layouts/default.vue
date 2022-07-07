<script setup>
useHead({
  title: "קרן מחלקת הנוער של הפועל פתח-תקוה",
  link: [
    {
      href: "https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap",
      rel: "stylesheet",
    },
    {
      href: "https://fonts.googleapis.com/",
      rel: "preconnect",
    },
    {
      href: "https://fonts.googleapis.com/",
      rel: "preconnect",
      crossorigin: true,
    },
  ],
});
</script>
<template>
  <Header />
  <div class="p-5">
    <slot />
  </div>
  <Footer />
</template>
