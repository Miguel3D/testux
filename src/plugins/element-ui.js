import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import lang from "element-ui/lib/locale/lang/es";
import locale from "element-ui/lib/locale";
// import "../../public/index.css";

Vue.use(ElementUI, { locale });
locale.use(lang);
