<template>
  <div class="w-full flex justify-center items-center">
    <div
      class="
        w-full
        max-w-sm
        px-10
        py-10
        flex flex-col
        justify-center
        border-2
        rounded-md
      "
    >
      <p class="text-center text-2xl pb-4">Nuevo usuario</p>
      <el-form :model="form" :rules="rules" ref="form" class="">
        <p>Nombres</p>
        <el-form-item prop="first_name" required>
          <el-input
            v-model="form.first_name"
            placeholder="Introducir nombres"
          ></el-input>
        </el-form-item>
        <p>Apellidos</p>
        <el-form-item prop="last_name" required>
          <el-input
            v-model="form.last_name"
            placeholder="Introducir apellidos"
          ></el-input>
        </el-form-item>
        <p>Fecha nacimiento</p>
        <el-form-item prop="date" required class="w-full">
          <el-date-picker
            type="date"
            placeholder="Fecha nacimiento"
            v-model="form.date"
            class="w-full"
          ></el-date-picker>
        </el-form-item>
        <p>Email</p>
        <el-form-item prop="email" required>
          <el-input
            type="email"
            v-model="form.email"
            placeholder="Introducir email"
          ></el-input>
        </el-form-item>
        <div class="w-full flex flex-col">
          <el-button
            type="primary"
            @click="submitForm('form')"
            class="w-full"
            style="margin-bottom: 10px"
            >Agregar usuario</el-button
          >
          <el-button
            @click="resetForm('form')"
            style="margin-left: 0px"
            class="w-full m-0 p-0"
            >Limpiar campos</el-button
          >
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateUser",
  created() {
    let tempData = localStorage.getItem("test");
    this.tableData = JSON.parse(tempData);
  },
  data() {
    return {
      tableData: "",
      form: {
        id: "",
        first_name: "",
        last_name: "",
        date: "",
        email: "",
      },
      rules: {
        first_name: [
          {
            required: true,
            message: "Por favor introducir el nombre",
            trigger: "blur",
          },
          {
            min: 3,
            max: 30,
            message: "La longitud debe ser de 3 a 30",
            trigger: "blur",
          },
        ],
        last_name: [
          {
            required: true,
            message: "Por favor introducir el apellido",
            trigger: "blur",
          },
          {
            min: 3,
            max: 30,
            message: "La longitud debe ser de 3 a 30",
            trigger: "blur",
          },
        ],
        date: [
          {
            type: "date",
            required: true,
            message: "Por favor, elija una fecha",
            // trigger: "change",
          },
        ],
        email: [
          {
            type: "email",
            required: true,
            message: "Por favor introducir el correo",
            // validator: checkEmail,
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          this.form.id = this.tableData.length + 1;
          var hoy = new Date();
          var cumpleanos = new Date(this.form.date);
          var edad = hoy.getFullYear() - cumpleanos.getFullYear();
          var m = hoy.getMonth() - cumpleanos.getMonth();
          if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--;
          }

          this.form.date = edad;
          this.$store.state.set += 1;
          this.tableData.push(this.form);
          localStorage.setItem("test", JSON.stringify(this.tableData));
          this.$message({
            message: "Se agrego correctamente",
            type: "success",
          });
          this.$refs[form].resetFields();
        } else {
          this.$message.error("Por favor llenar los campos");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[form].resetFields();
    },
  },
};
</script>

<style scoped>
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100%;
}
</style>
