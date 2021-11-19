<template>
  <div class="w-full flex justify-center items-center">
    <div
      class="w-full max-w-screen-lg flex flex-col justify-center items-center"
    >
      <div class="w-full mx-2 my-8 grid grid-cols-2">
        <createUser class="max-w-sm" />
        <tablet />
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
