<script lang="ts" setup>
const supabase = useSupabase();
const { params } = useRoute();
const { id: projectId } = params;
const project = await supabase.fetchProject(projectId as string);
const isFormOpen = ref(false);
const donation = ref<number>(100);

const { title, description, image, raised, target, donorsCount, details } =
  project;
const formatter = new Intl.NumberFormat("he-IL", {
  style: "currency",
  currency: "ILS",
  maximumFractionDigits: 0,
});

const closeModal = () => {
  isFormOpen.value = false;
};

const ctaHandler = () => {
  isFormOpen.value = true;
};

useHead({
  title: ` ${title} | קרן מחלקת הנוער של הפועל פתח-תקוה`,
});
</script>

<template>
  <div>
    <NuxtLink to="/">&rarr;קרן מחלקת הנוער של הפועל פתח-תקוה</NuxtLink>
    <h1 class="size-1/2 text-4xl mb-10 text-center">{{ title }}</h1>
    <div class="w-full flex flex-col lg:flex-row">
      <div class="w-full lg:w-1/2 pl-10">
        <ProgressBar :value="(raised / target) * 100" />

        <div>
          <div class="text-slate-500 text-lg">{{ donorsCount }} תורמים</div>
          <div class="text-blue-500 text-2xl font-bold">
            {{ formatter.format(raised) }}
          </div>
          <div class="text-slate-500 text-lg">
            מתוך יעד של {{ formatter.format(target) }}
          </div>
        </div>

        <div class="text-xl mt-5">
          {{ description }}
        </div>
        <div>
          <CTAButton :handler="ctaHandler" />
        </div>
      </div>
      <div class="w-full lg:w-1/2">
        <img :src="image" class="w-full" />
      </div>
    </div>

    <!-- More Details -->
    <div v-if="details && details.length">
      <h2 class="text-2xl mt-10">תיאור הפרוייקט</h2>
      <div v-html="details" />
      <div>
        <CTAButton :handler="ctaHandler" />
      </div>
    </div>

    <MoreProjects :exclude-project-id="project.id" />
  </div>

  <Modal :is-open="isFormOpen" :close-modal="closeModal" title="תמיכה בפרוייקט">
    <Form />
  </Modal>
</template>

<style scoped>
input[type="range"] {
  direction: ltr;
}
</style>
