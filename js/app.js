let usuarioLogeado = JSON.parse(localStorage.getItem("usuarioLogeado"));

if (!usuarioLogeado) {
    usuarioLogeado = {
        email: "none@mail.com",
        nombre: "Jhon",
        apellido: "Doe",
        nombreNegocio: "Ninguno",
        password: "Ninguna..",
        rol: "Ninguno",
    };
}

document.addEventListener("DOMContentLoaded", () => {
    // Inicializa solo si no existe el storage
    inicializarStorage();
    asignarNombreUsuarioLogeado();
    renderizarUsuarios();
    iniciarSesion();
    registrarUsuario();
    agregarUsuarioModal();
    actualizarUsuarioModal();
});

const KEY = "usuariosMap";

// Inicialización
function inicializarStorage() {
    if (!localStorage.getItem(KEY)) {
        const mapaUsuarios = new Map();

        const usuarios = [
            [
                "correo@correo.com",
                "Usuario",
                "Superior",
                "Tienda A",
                "123",
                "Admin",
            ],
            [
                "correo1@correo.com",
                "Usuario",
                "Visualizador",
                "Tienda A",
                "123",
                "Visualizador",
            ],
            [
                "usuario1@mail.com",
                "German",
                "Matthensen",
                "Tienda A",
                "Contraseña2",
                "Admin",
            ],
            [
                "usuario2@mail.com",
                "Jermain",
                "Dempster",
                "Tienda C",
                "Contraseña1",
                "Visualizador",
            ],
            [
                "usuario3@mail.com",
                "Giulietta",
                "Redmire",
                "Tienda C",
                "Contraseña1",
                "Admin",
            ],
            [
                "usuario4@mail.com",
                "Donni",
                "Halvosen",
                "Tienda B",
                "Contraseña2",
                "Admin",
            ],
            [
                "usuario5@mail.com",
                "Kimberlyn",
                "Brocklesby",
                "Tienda B",
                "Contraseña1",
                "Admin",
            ],
            [
                "usuario6@mail.com",
                "Paul",
                "Fist",
                "Tienda A",
                "Contraseña2",
                "Visualizador",
            ],
            [
                "usuario7@mail.com",
                "Carly",
                "Bleddon",
                "Tienda A",
                "Contraseña2",
                "Visualizador",
            ],
            [
                "usuario8@mail.com",
                "Felicity",
                "Lyvon",
                "Tienda B",
                "Contraseña2",
                "Visualizador",
            ],
            [
                "usuario9@mail.com",
                "Killy",
                "Leeke",
                "Tienda B",
                "Contraseña1",
                "Visualizador",
            ],
            [
                "usuario10@mail.com",
                "Pace",
                "Finn",
                "Tienda B",
                "Contraseña2",
                "Admin",
            ],
            [
                "usuario11@mail.com",
                "Coletta",
                "Shorbrook",
                "Tienda B",
                "Contraseña1",
                "Visualizador",
            ],
            [
                "usuario12@mail.com",
                "Ellynn",
                "Roches",
                "Tienda C",
                "Contraseña2",
                "Admin",
            ],
            [
                "usuario13@mail.com",
                "Janie",
                "Playle",
                "Tienda B",
                "Contraseña2",
                "Admin",
            ],
            [
                "usuario14@mail.com",
                "Parry",
                "Michiel",
                "Tienda B",
                "Contraseña2",
                "Visualizador",
            ],
            [
                "usuario15@mail.com",
                "Derrek",
                "Tedstone",
                "Tienda B",
                "Contraseña2",
                "Visualizador",
            ],
            [
                "usuario16@mail.com",
                "Elene",
                "Eydel",
                "Tienda B",
                "Contraseña2",
                "Admin",
            ],
            [
                "usuario17@mail.com",
                "Madelena",
                "Bolin",
                "Tienda A",
                "Contraseña1",
                "Admin",
            ],
            [
                "usuario18@mail.com",
                "Pegeen",
                "Omond",
                "Tienda C",
                "Contraseña1",
                "Visualizador",
            ],
            [
                "usuario19@mail.com",
                "Cassi",
                "Ibotson",
                "Tienda A",
                "Contraseña2",
                "Visualizador",
            ],
            [
                "usuario20@mail.com",
                "Golda",
                "Meritt",
                "Tienda B",
                "Contraseña2",
                "Visualizador",
            ],
            [
                "usuario21@mail.com",
                "Pia",
                "Durning",
                "Tienda B",
                "Contraseña2",
                "Visualizador",
            ],
            [
                "usuario22@mail.com",
                "Sharia",
                "Einchcombe",
                "Tienda A",
                "Contraseña2",
                "Admin",
            ],
            [
                "usuario23@mail.com",
                "Cullen",
                "Caps",
                "Tienda C",
                "Contraseña1",
                "Admin",
            ],
            [
                "usuario24@mail.com",
                "Carolyne",
                "Lindenblatt",
                "Tienda C",
                "Contraseña1",
                "Admin",
            ],
            [
                "usuario25@mail.com",
                "Godfry",
                "Matejka",
                "Tienda B",
                "Contraseña1",
                "Admin",
            ],
        ];

        usuarios.forEach(
            ([email, nombre, apellido, nombreNegocio, password, rol]) => {
                mapaUsuarios.set(email, {
                    email,
                    nombre,
                    apellido,
                    nombreNegocio,
                    password,
                    rol,
                });
            }
        );

        guardarMapa(mapaUsuarios);
    }
}

// Guardar el mapa en localStorage
function guardarMapa(mapa) {
    const obj = Object.fromEntries(mapa);
    localStorage.setItem(KEY, JSON.stringify(obj));
}

// Obtener el mapa desde localStorage
function obtenerMapa() {
    const data = localStorage.getItem(KEY);
    const obj = data ? JSON.parse(data) : {};
    return new Map(Object.entries(obj));
}

// CREATE
function crearUsuario(usuario) {
    const mapa = obtenerMapa();
    if (mapa.has(usuario.email)) {
        alert("El usuario ya existe!");
        return false;
    }
    mapa.set(usuario.email, usuario);
    guardarMapa(mapa);
    return true;
}

// READ
function obtenerUsuario(email) {
    const mapa = obtenerMapa();
    return mapa.get(email);
}

function obtenerTodosLosUsuarios() {
    return Array.from(obtenerMapa().values());
}

// UPDATE
function actualizarUsuario(email, nuevosDatos) {
    const mapa = obtenerMapa();
    if (!mapa.has(email)) return false;
    mapa.set(email, { ...mapa.get(email), ...nuevosDatos });

    if(usuarioLogeado.email === email) {
        console.log({ ...mapa.get(email), ...nuevosDatos });
        localStorage.setItem("usuarioLogeado", JSON.stringify({ ...mapa.get(email), ...nuevosDatos }));
    }

    guardarMapa(mapa);
    return true;
}

// DELETE
function eliminarUsuario(email) {
    const mapa = obtenerMapa();
    if (!mapa.has(email)) return false;
    mapa.delete(email);
    guardarMapa(mapa);
    location.reload();
}

//** Iniciar Sesion **/
const iniciarSesion = () => {
    const form = document.querySelector("#formLogin");
    const alerta = document.querySelector("#alert");

    if (!form) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const { email, password } = event.target.elements;

        if (obtenerUsuario(email.value)) {
            const storedPassword = obtenerUsuario(email.value).password;

            if (password.value === storedPassword) {
                localStorage.setItem(
                    "usuarioLogeado",
                    JSON.stringify(obtenerUsuario(email.value))
                );
                window.location.replace("usuarios.html");
            }
            alerta.classList.add("hidden");
        } else {
            alerta.classList.remove("hidden");
        }
    });
};

const asignarNombreUsuarioLogeado = () => {
    const txtUsuario = document.querySelector("#usuarioLogeado");
    if (txtUsuario) {
        txtUsuario.innerText = usuarioLogeado.nombre;
    }
};

const llenarModal = (nombre, apellido, rol, email) => {
    const form = document.querySelector("#actualizarUsuario");

    const {lastname, name, rol: rolModal, email: correo} = form.elements;

    name.value = nombre;
    lastname.value = apellido;
    rolModal.value = rol;
    correo.value = email;
}

const renderizarUsuarios = () => {
    obtenerTodosLosUsuarios().forEach((usuario) => {
        if (
            !(
                usuario.nombreNegocio.toLowerCase() ===
                usuarioLogeado.nombreNegocio.toLowerCase()
            )
        )
            return;

        const wrapper = document.createElement("div");
        wrapper.className = "my-4";

        const card = document.createElement("div");
        card.className = "card w-100";

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const titulo = document.createElement("p");
        titulo.className = "card-title";
        titulo.id = "nombresApellidos";
        titulo.innerHTML = ` ${
            usuario.email === usuarioLogeado.email
                ? '<span class="badge bg-success">Usuario actual: </span>'
                : ""
        } ${usuario.nombre} ${usuario.apellido} - ${usuario.rol}`;

        const subtitulo = document.createElement("p");
        subtitulo.className = "card-subtitle mb-2 text-muted";
        subtitulo.innerHTML = `Tienda: <span id="tienda">${usuario.nombreNegocio}</span>`;

        const textoEmail = document.createElement("p");
        textoEmail.className = "card-text";
        textoEmail.innerHTML = `Email: <span id="email">${usuario.email}</span>`;

        
        
        // Armado de la estructura
        cardBody.appendChild(titulo);
        cardBody.appendChild(subtitulo);
        cardBody.appendChild(textoEmail);

        if(!(usuarioLogeado.rol.toLowerCase() === "visualizador")){
            const linkActualizar = document.createElement("a");
            linkActualizar.href = "#";
            linkActualizar.className = "card-link";
            linkActualizar.textContent = "Actualizar";
            linkActualizar.dataset.bsToggle = "modal";
            linkActualizar.dataset.bsTarget = "#actualizarModal";
    
            linkActualizar.addEventListener("click", () => {
                llenarModal(usuario.nombre, usuario.apellido, usuario.rol, usuario.email);
            });
    
            const linkEliminar = document.createElement("a");
            linkEliminar.href = "#";
            linkEliminar.className = "card-link";
            linkEliminar.textContent = "Eliminar";
            linkEliminar.id = usuario.email;

            linkEliminar.addEventListener("click", () => {
                eliminarUsuario(usuario.email);
            })

            cardBody.appendChild(linkActualizar);
            cardBody.appendChild(linkEliminar);
        }
       
        card.appendChild(cardBody);
        wrapper.appendChild(card);

        // Insertarlo en el DOM (por ejemplo, en un div con id="contenedor")
        const contenedor = document.getElementById("visualizarUsuarios");
        if (contenedor) {
            contenedor.appendChild(wrapper);
        }
    });
};

//** Registro de Usuarios **/

const registrarUsuario = () => {
    const form = document.querySelector("#registroForm");
    const alerta = document.querySelector("#alert");

    if (!form) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const { email, password, password2, name, lastname, nombreNegocio } =
            event.target.elements;

        if (password.value !== password2.value) {
            alerta.classList.remove("hidden");
        } else {
            alerta.classList.add("hidden");
        }

        const usuario = {
            email: email.value,
            nombre: name.value,
            apellido: lastname.value,
            nombreNegocio: nombreNegocio.value,
            password: password.value,
            rol: "",
        };

        const tienda = usuario.nombreNegocio;
        if (
            obtenerTodosLosUsuarios().filter(
                (usuario) =>
                    usuario.nombreNegocio.toLowerCase() === tienda.toLowerCase()
            ).length === 0
        ) {
            usuario.rol = "Admin";
        } else {
            usuario.rol = "Visualizador";
        }
        if (crearUsuario(usuario)) {
            localStorage.setItem(
                "usuarioLogeado",
                JSON.stringify(obtenerUsuario(email.value))
            );
            window.location.replace("usuarios.html");
        } else {
            alert("Ah ocurrido un error intente nuevamente!");
        }
    });
};

const agregarUsuarioModal = () => {
    const form = document.querySelector("#agregarUsuario");

    if (!form) return;
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const { email, password, password2, name, lastname, rol } =
            event.target.elements;

        const rolSelect = rol.value;

        if (password.value !== password2.value) {
            alert("Las contraseñas no son iguales");
            return;
        }

        if (rolSelect === "NA") {
            alert("Debe seleccionar un rol!");
            return;
        }

        const usuario = {
            email: email.value,
            nombre: name.value,
            apellido: lastname.value,
            nombreNegocio: usuarioLogeado.nombreNegocio,
            password: password.value,
            rol: rolSelect,
        };

        console.log(usuario);
        if (crearUsuario(usuario)) {
            alert("Usuario creado exitosamente!");
            location.reload();
        } else {
            alert("Ah ocurrido un error intente nuevamente!");
        }
        form.reset();
    });
};
const actualizarUsuarioModal = () => {
    const form = document.querySelector("#actualizarUsuario");

    if (!form) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const { name, lastname, rol, email } = event.target.elements;

        const rolSelect = rol.value;

        if (rolSelect === "NA") {
            alert("Debe seleccionar un rol!");
            return;
        }

        const usuario = {
            nombre: name.value,
            apellido: lastname.value,
            rol: rolSelect,
            email: email.value,
        };

        console.log(usuario);
        if (actualizarUsuario(usuario.email, usuario)) {
            alert("Usuario actualizado exitosamente!");
            location.reload();
        } else {
            alert("Ah ocurrido un error intente nuevamente!");
        }
        form.reset()
    });
};
