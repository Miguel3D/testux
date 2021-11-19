<template>
  <div>
    <el-table :data="tableData" lazy>
      <el-table-column prop="id" label="Id" width="60"> </el-table-column>
      <el-table-column label="Nombre" width="150">
        <template slot-scope="scope" class="flex flex-col">
          <p>{{ scope.row.first_name }} {{ scope.row.last_name }}</p>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="Edad" width="60"> </el-table-column>
      <el-table-column prop="email" label="email" width="230">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "tabletUser",
  created() {
    let tempData = localStorage.getItem("test");
    this.tableData = JSON.parse(tempData);
  },
  data() {
    return {
      tableData: "",
    };
  },
  computed: {
    set() {
      return this.$store.state.set;
    },
  },
  watch: {
    set() {
      let tempData = localStorage.getItem("test");
      this.tableData = JSON.parse(tempData);
    },
  },
};
</script>
