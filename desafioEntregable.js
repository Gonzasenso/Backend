
// Realizar una clase “ProductManager” que gestione un conjunto de productos.
class ProductManager {

    static idCounter = 0; // Variable estatica creada dentro de la class "ProductManager para despues pasarla como propiedad al crear el producto"

    // Debe crearse desde su constructor con el elemento products, el cual será un array vacío.
    constructor(){
        this.products = [];
    }

    // Debe contar con un método “addProduct” el cual agregará un producto al array de productos inicial.
    addProduct(title, code, thumbnail, stock, price, description){
        //Validar que no se repita el campo “code” y que todos los campos sean obligatorios
        if (!title || !code || !thumbnail || !stock || !price || !description) return "Todos los campos son obligatorios"
        if (this.products.some(product => product.code == code)) return "Codigo repetido"
   
        
        // Con el metodo "push" se agregaran los productos al array vacio con sus correspondientes propiedades
        this.products.push({
            title,
            code,
            thumbnail,
            stock,
            price,
            description,
            id: ProductManager.idCounter++  // Al agregarlo, debe crearse con un id autoincrementable
   
        })

        return "Producto Cargado con exito"

    }

    // Debe contar con un método “getProducts” el cual debe devolver el arreglo con todos los productos creados hasta ese momento.
    getProducts(){
        return this.products
    }


    // Debe contar con un método “getProductById” el cual debe buscar en el array el producto que coincida con el id
    getProductById(id){
        /* Con el metodo "find" nos encargamos de encontrar el elemento que coincida con las condiciones proporcionadas por una funcion de prueba,
         en este caso le pasamos el metodo "find" a this products para que luego esto evalue si el elemento product.id coincide (==) con el elemento id que anteriormente pasamos como argumento.*/
        let encontrado = this.products.find(product => product.id == id);
        
        // En caso de no coincidir ningún id, mostrar en consola un error “Not found”
        if (!encontrado) {
            return "Not Found"
        // y si coincide retornar encontrado    
        } else {
            return encontrado;
        }
    }
    
}

// Por ultimo creamos la variable unica PM1 la cual se encargara de crear un nuevo producto
const PM1 = new ProductManager();

// Esto mostrara en la consola las claves creadas por nosotros de cada producto junto con las keys correspondientes -creadas anteriormente en addProduts- de manera ordenada.
// orden de las entradas> title,code,thumbnail,stock,price,description
console.log(PM1.addProduct("title1", "code1", "thumbnail", 21, 2000, "description1"))
console.log(PM1.addProduct("title2", "code2", "thumbnail", 25, 2000, "description2"))
console.log(PM1.addProduct("title3", "code3", "thumbnail", 30, 2000, "description3"))
console.log(PM1.addProduct("title4", "code2", "thumbnail", 20, 2000, "description4"))


console.log(PM1.getProductById(1))
console.log(PM1.getProductById(4))

console.log(PM1.getProducts())