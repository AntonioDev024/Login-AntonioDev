// Esperar que todo el contenido del DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {

  const container = document.querySelector(".container");
  const signInBtn = document.querySelector(".signup-btn");
  const loginBtn = document.querySelector(".login-btn");

  // Cuando se presiona "Sign In"
  signInBtn.addEventListener("click", () => {
    container.classList.add("active");
  });

  // Cuando se presiona "Login"
  loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
  });

});

// Espera que todo el contenido HTML esté cargado antes de ejecutar el script
document.addEventListener("DOMContentLoaded", () => {

  /* ----------------------------
     VALIDACIÓN DEL FORMULARIO LOGIN
  -----------------------------*/
  const loginForm = document.querySelector(".form-box.login form");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita recargar la página al enviar

    // Captura los valores del formulario de Login
    const username = loginForm.querySelector("input[placeholder='Username']").value.trim();
    const password = loginForm.querySelector("input[placeholder='Password']").value.trim();


    if (!username || !password) {
      Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Por favor completa todos los campos antes de continuar.",
        confirmButtonColor: "#00ccff"
      });
    } else {
      // Éxito: muestra alerta de bienvenida
      Swal.fire({
        icon: "success",
        title: "¡Bienvenido!",
        text: `Inicio de sesión exitoso, ${username}!`,
        showConfirmButton: false,
        timer: 2000
      });
    }
  });



   


  /* ----------------------------
     VALIDACIÓN DEL FORMULARIO SIGN IN
  -----------------------------*/
  const signInForm = document.querySelector(".form-box.signin form");

  signInForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita el envío real del formulario

    // Captura los valores del formulario de registro
    const username = signInForm.querySelector("input[placeholder='Username']").value.trim();
    const email = signInForm.querySelector("input[placeholder='Email']").value.trim();
    const password = signInForm.querySelector("input[placeholder='Password']").value.trim();

    // Verifica campos vacíos
    if (!username || !email || !password) {
      Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Por favor llena todos los campos antes de registrarte.",
        confirmButtonColor: "#00ccff"
      });
      return;
    }

    // Valida formato de email con expresión regular sencilla
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Correo no válido",
        text: "Por favor ingresa un correo electrónico válido.",
        confirmButtonColor: "#00ccff"
      });
      return;
    }

    // Si todo está correcto
    Swal.fire({
      icon: "success",
      title: "¡Registro completado!",
      text: `Bienvenido, ${username}. Tu cuenta ha sido creada correctamente.`,
      showConfirmButton: false,
      timer: 2500
    });
  });

});



/* ----------------------------
   VALIDACIÓN DEL FORMULARIO LOGIN
-----------------------------*/
const loginForm = document.querySelector(".form-box.login form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita recargar la página

  // Captura los valores ingresados en Login
  const username = loginForm.querySelector("input[placeholder='Username']").value.trim();
  const password = loginForm.querySelector("input[placeholder='Password']").value.trim();

  // Verifica campos vacíos
  if (!username || !password) {
    Swal.fire({
      icon: "warning",
      title: "Campos incompletos",
      text: "Por favor completa todos los campos antes de continuar.",
      confirmButtonColor: "#00ccff"
    });
    return;
  }
});

// script.js
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector(".form-box.login form");
    const usernameInput = loginForm.querySelector('input[type="text"]');
    const passwordInput = loginForm.querySelector('input[type="password"]');

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Evita recargar la página

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Credenciales de prueba
        if (username === "admin" && password === "admin123") {
            // Redirige al HomePage
            window.location.href = "./HomePage.html";
        } else {
            // Muestra un mensaje de error
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Usuario o contraseña incorrectos",
            });
        }
    });
}); 