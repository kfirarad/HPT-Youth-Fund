<script setup>
import db from "../db";
const { projects } = db;
</script>

<template>
  <div class="lg:w-1/2 w-full">
    <Jumbotron />
  </div>
  <div class="center w-full">
    <h2 class="text-4xl m-10">הפרוייקטים</h2>
    <ul
      class="flex justify-evenly lg:flex-row flex-col content-center items-center"
    >
      <li v-for="project in projects" class="m-5 w-full lg:w-1/4">
        <ProjectCard :project="project" />
      </li>
    </ul>
  </div>
</template>
