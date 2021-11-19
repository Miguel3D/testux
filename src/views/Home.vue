<template>
  <div class="w-full flex justify-center items-center">
    <div class="w-full max-w-screen-lg flex justify-center items-center">
      <div class="w-full mx-2 my-8 grid responsive">
        <createUser />
        <tablet class="md:mt-10 rmt" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import tablet from "@/components/tablet.vue";
import createUser from "@/components/createUser.vue";
export default {
  name: "Home",
  created() {
    let tempData = localStorage.getItem("test");
    let data = JSON.parse(tempData);
    if (data) {
      console.log("Ya tiene data");
    } else {
      this.getUser();
    }
  },
  components: {
    tablet,
    createUser,
  },
  methods: {
    getUser() {
      axios.get("https://reqres.in/api/users?page=1").then((response) => {
        localStorage.setItem("test", JSON.stringify(response.data.data));
      });
    },
  },
};
</script>
<style scoped>
.responsive {
  @apply grid grid-cols-2;
}
.rmt {
  @apply mt-0;
}
@media (max-width: 768px) {
  .responsive {
    @apply grid grid-cols-1;
  }
  .rmt {
    @apply mt-10;
  }
}
@media (max-width: 640px) {
  .responsive {
    @apply grid grid-cols-1;
  }
  .rmt {
    @apply mt-5;
  }
}
</style>
