 // crea un objeto llamado usuario que permita autenticr a la persona que quiere iniciar sesion en el sistema
 const usuario = {
    nombre: "Lucia",
    nombreUsuario: "Lucia21",
    contrasena: "123456",
    login:function(nombreUsuario, contrasena) {
        if (nombreUsuario === this.nombreUsuario && contrasena === this.contrasena) {
            console.log("Sesión iniciada con éxito");
    }else {
        console.log("Credenciales no válidas");
    }
}
}
usuario.login("Lucia21", "123456");
usuario.login("Lucia21", "ABCDE");

// añade otra propiedad al objeto usuario
usuario.edad = 25;
console.log(usuario.edad);
