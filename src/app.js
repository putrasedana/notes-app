import "./styles/style.css";
import "./script/components/index.js";
import home from "./script/view/home.js";
import "toastr/build/toastr.min.css";
import gsap from "gsap";
import Swal from "sweetalert2";
import toastr from "toastr";

document.addEventListener("DOMContentLoaded", () => {
  home();
});
