<template>
  <div>
    <welcome />

    <recent-projects />

    <about-me />

    <get-in-touch />
  </div>
</template>

<script>
export default {
  name: "CoreView",

  components: {
    AboutMe: () => import("@/components/AboutMe"),
    GetInTouch: () => import("@/components/GetInTouch"),
    RecentProjects: () => import("@/components/RecentProjects"),
    Welcome: () => import("@/components/Welcome"),
  },
};
</script>
