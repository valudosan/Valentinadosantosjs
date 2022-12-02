class Cartera {
    constructor(tamaño, material, precio, color) {
        this.tamaño = tamaño;
        this.material = material;
        this.precio = parseFloat(precio);
        this.color = color;
        this.disponible = true;
    }
}