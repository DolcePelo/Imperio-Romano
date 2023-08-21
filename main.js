class Gladiador {
    constructor(nombre, esclavizadoEn, edad, precio, salud, energia, defensa, fuerza, arma, armadura, escudo) {
        this.nombre = nombre;
        this.esclavizadoEn = esclavizadoEn;
        this.edad = edad;
        this.precio = precio;
        this.salud = salud;
        this.energia = energia;
        this.defensa = defensa;
        this.fuerza = fuerza;
        this.arma = arma || null;
        this.armadura = armadura || null;
        this.escudo = escudo || null
        this.vestirArmadura();
    }

    vestirArmadura() {
        if (this.armadura) {
            this.defensa += this.armadura.defensa
        }
        if (this.escudo) {
            this.defensa += this.escudo.defensa
        }
    }

    ataque(gladiadorObjetivo) {
        const danio = this.calcularDanio();

        if (danio <= this.energia && this.energia > 0) {
            gladiadorObjetivo.recibirDanio(danio);
            this.energia -= this.arma.energiaConsumida
        } else {
            console.log(`${this.nombre} no cuenta con energia suficiente para realizar el ataque`)
        }
    }

    calcularDanio() {
        if (this.arma) {
            return this.arma.danio * this.fuerza;
        } else {
            return 2;
        }
    }


    recibirDanio(danio) {
        if (this.defensa > 0) {
            this.defensa = Math.max(this.defensa - danio, 0); //cuando el daño es mayor a el valor de la defensa me devuelve 0
            if (this.defensa === 0) {
                this.salud -= danio;
            }
        } else {
            this.salud -= danio
        }

        if (this.salud <= 0) {
            console.log(`${this.nombre} ha muerto`)
        }
    }
}

class Arma {
    constructor(nombre, danio, energiaConsumida, precio) {
        this.nombre = nombre;
        this.danio = danio;
        this.energiaConsumida = energiaConsumida;
        this.precio = precio;
    }
}

class Armadura {
    constructor(nombre, defensa, precio) {
        this.nombre = nombre;
        this.defensa = defensa;
        this.precio = precio;
    }
}

class Escudo {
    constructor(nombre, defensa, precio) {
        this.nombre = nombre;
        this.defensa = defensa;
        this.precio = precio;
    }
}


// Armas
const arma1 = new Arma("Espada basica", 10, 5, 17)
const arma2 = new Arma("Espada ligera", 12, 7, 16)
const arma3 = new Arma("Espada doble", 11, 8, 12)
const arma4 = new Arma("Espada legendaria", 22, 18, 30)
const arma5 = new Arma("Hacha doble", 18, 16, 25)
const arma6 = new Arma("Hacha simple", 14, 12, 20)
const arma7 = new Arma("Palo De Madera", 3, 3, 2)
const arma8 = new Arma("lanzas", 10, 7, 17)


// Armaduras
const armor1 = new Armadura("Armadura basica", 50, 22)
const armor2 = new Armadura("Armadura dorada", 60, 25)
const armor3 = new Armadura("Armadura ligera", 70, 28)
const armor4 = new Armadura("Armadura Negra", 75, 30)

// Escudos
const escudo1 = new Escudo("Escudo basico", 10, 5)
const escudo2 = new Escudo("Escudo hierro", 15, 8)
const escudo3 = new Escudo("Escudo reforzado", 20, 10)


// nombre, esclavizadoEn, edad, precio, salud, energia, defensa,fuerza,arma,armadura,escudo
const gladiador1 = new Gladiador("Espartaco", "Hispania", 27, 50, 100, 100, 0, 1.20, null, null, null)
const gladiador2 = new Gladiador("Achillia", "Hispania", 19, 60, 100, 100, 0, 1.30, null, null, null)
const gladiador3 = new Gladiador("Tigranes", "Africa del Norte", 30, 20, 70, 100, 0, 1.10, null, null, null)
const gladiador4 = new Gladiador("Commodus", "Asia Menor", 15, 35, 100, 100, 0, 1.02, null, null, null)
const gladiador5 = new Gladiador("Flamma", "Medio Oriente", 17, 65, 100, 100, 0, 1.30, null, null, null)
const gladiador6 = new Gladiador("Priscus", "Esclavo Importado", 23, 50, 100, 100, 0, 1.10, null, null, null)
const gladiador7 = new Gladiador("Maximus", "Esclavo Importado", 23, 50, 100, 100, 0, 1.10, null, null, null)





// -------- botones de añadir al carrito -------------- //

const numGladiadores = 7; // Número total de gladiadores

for (let i = 1; i <= numGladiadores; i++) {
    const btn_gladiador = document.getElementById(`btn__gladiador${i}`);
    btn_gladiador.addEventListener('click', (e) => {
        e.preventDefault();

        if (carrito[`gladiador${i}`]) {
            carrito[`gladiador${i}`] += 1;
        } else {
            carrito[`gladiador${i}`] = 1;
        }

        Toastify({
            text: "Añadido al carrito",
            className: "info",
            position: "left",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
                width: '20rem',
                fontFamily: 'serif',
                fontSize: '1.5rem'
            }
        }).showToast();

        actualizarCarrito()
        guardarCarrito()
    });
}


// Armas
const numArmas = 8
for (let i = 1; i <= numArmas; i++) {
    const btn_armas = document.getElementById(`btn__arma${i}`);
    btn_armas.addEventListener('click', (e) => {
        e.preventDefault();

        if (carrito[`arma${i}`]) {
            carrito[`arma${i}`] += 1;
        } else {
            carrito[`arma${i}`] = 1;
        }


        Toastify({
            text: "Añadido al carrito",
            className: "info",
            position: "left",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
                width: '20rem',
                fontFamily: 'serif',
                fontSize: '1.5rem'
            }
        }).showToast();

        actualizarCarrito()
        guardarCarrito()
    
    });
}


// Armaduras 
const numArmaduras = 4
for (let i = 1; i <= numArmaduras; i++) {
    const btn_armaduras = document.getElementById(`btn__armadura${i}`);
    btn_armaduras.addEventListener('click', (e) => {
        e.preventDefault();

        if (carrito[`armor${i}`]) {
            carrito[`armor${i}`] += 1;
        } else {
            carrito[`armor${i}`] = 1;
        }


        Toastify({
            text: "Añadido al carrito",
            className: "info",
            position: "left",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
                width: '20rem',
                fontFamily: 'serif',
                fontSize: '1.5rem'
            }
        }).showToast();
        actualizarCarrito()
        guardarCarrito()
    });
}

// Escudos
const numEscudos = 3
for (let i = 1; i <= numEscudos; i++) {
    const btn_escudos = document.getElementById(`btn__escudo${i}`);
    btn_escudos.addEventListener('click', (e) => {
        e.preventDefault();

        if (carrito[`escudo${i}`]) {
            carrito[`escudo${i}`] += 1;
        } else {
            carrito[`escudo${i}`] = 1;
        }


        Toastify({
            text: "Añadido al carrito",
            className: "info",
            position: "left",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
                width: '20rem',
                fontFamily: 'serif',
                fontSize: '1.5rem'
            }
        }).showToast();
        actualizarCarrito()
        guardarCarrito()
    });
}


// ------------------------------------------------------ //


let carrito = {};

let gladiadores = [gladiador1, gladiador2, gladiador3, gladiador4, gladiador5, gladiador6, gladiador7];

let armas = [arma1, arma2, arma3, arma4, arma5, arma6, arma7, arma8];

let armors = [armor1, armor2, armor3, armor4];

let escudos = [escudo1, escudo2, escudo3];

function actualizarCarrito() {
    const carritoContainer = document.getElementById('carrito__container');
    carritoContainer.innerHTML = '';

    let total = 0;

    for (const item in carrito) {
        let itemNombre = '';
        let itemPrecio = 0;

        if (item.startsWith('gladiador')) {
            const gladiadorIndex = parseInt(item.substring(9)) - 1;
            itemNombre = gladiadores[gladiadorIndex].nombre;
            itemPrecio = gladiadores[gladiadorIndex].precio;
        } else if (item.startsWith('arma')) {
            const armaIndex = parseInt(item.substring(4)) - 1;
            itemNombre = armas[armaIndex].nombre;
            itemPrecio = armas[armaIndex].precio;
        } else if (item.startsWith('armor')) {
            const armorIndex = parseInt(item.substring(5)) - 1;
            itemNombre = armors[armorIndex].nombre;
            itemPrecio = armors[armorIndex].precio;
        } else if (item.startsWith('escudo')) {
            const escudoIndex = parseInt(item.substring(6)) - 1;
            itemNombre = escudos[escudoIndex].nombre;
            itemPrecio = escudos[escudoIndex].precio;
        }

        const cantidad = carrito[item];
        total += itemPrecio * cantidad;


        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `${itemNombre} x${cantidad}: $${itemPrecio * cantidad} <a class="btnDelete">x</a>`;
        carritoContainer.appendChild(itemDiv);


        let btnDelete = itemDiv.querySelector('.btnDelete')
        btnDelete.addEventListener('click',()=>{    
            delete carrito[item]
            actualizarCarrito()
            
        })

    }
    
    const totalContainer = document.getElementById('total__container');
    totalContainer.innerHTML = `Total: $${total}`;
    
    
    const itemContador = document.getElementById('itemCount');
    const sumaTotalItems = Object.values(carrito).reduce((acumulador,numero) => acumulador + numero,0)
    itemContador.innerText = sumaTotalItems;

}


function guardarCarrito(){
    const carritoJSON = JSON.stringify(carrito);
    localStorage.setItem("carritoData",carritoJSON)
}

function cargarCarrito(){
    const carritoJSON = localStorage.getItem("carritoData");
    if(carritoJSON){
        carrito = JSON.parse(carritoJSON);
        actualizarCarrito();
    }
}
window.addEventListener('load',cargarCarrito)







