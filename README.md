# Aplicación web de inicio de sesión
Esta es una aplicación web de inicio de sesión que consta de dos vistas: "Login" y "Listado".

## Vista: "Login"
La vista "Login" se encuentra en la ruta /login y tiene un formulario que requiere que el usuario ingrese su nombre de usuario y contraseña para iniciar sesión. El formulario está conectado al endpoint POST https://reqres.in/api/login, que devuelve un token de sesión si el inicio de sesión es exitoso. Este token se almacena en el navegador para que el usuario no tenga que volver a iniciar sesión después de cerrar la ventana o pestaña del navegador.

### El formulario se compone de:

- Un campo de texto para el usuario.
- Un campo de texto para la contraseña.
- Un botón de submit con el texto "Iniciar Sesión".

Para acceder a la vista de "Listado", se debe ingresar el usuario eve.holt@reqres.in y la contraseña cityslicka.

## Vista: "Listado"
La vista "Listado" se encuentra en la ruta /users y muestra una lista paginada de usuarios obtenidos del endpoint GET https://reqres.in/api/users. La lista muestra el avatar, el nombre, el apellido y el correo electrónico de cada usuario. También incluye un botón "Cerrar Sesión" que devuelve al usuario a la vista "Login" y lo desconecta.

### El listado se compone de:

 - El avatar, el nombre, el apellido y el correo electrónico de cada usuario.
 - Paginación, mostrando no más de 6 elementos por página.
 - Un botón con el texto "Cerrar Sesión" que devuelva a la vista de "Login" y haga perder sesión al usuario.
 
### Consideraciones adicionales de la aplicación:

 - Si el usuario tiene sesión, se le mostrará la vista "Listado". De lo contrario, no podrá acceder nunca a ella.
 - Un usuario con sesión en el navegador no podrá acceder a "Login" salvo que la pierda (por ejemplo, pulsando el botón "Cerrar Sesión").
 - La aplicación se visualiza correctamente en dispositivos móviles a partir de una resolución de 375px x 667px (resolución de iPhone 6).