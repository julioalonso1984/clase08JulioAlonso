let opcion = prompt("BIENVENIDOS \nLIQUIDACION TOTAL \n 1. Heladera: $90.000 \n 2. Lavarropas: $80.000 \n 3. Calefactor: $70.000 \n ° presione cualquier letra si desea comprar y luego aceptar ó; \n ° INGRESE LA PALABRA (SI) SI DESEA COMPRAR")

if ((opcion == "si" || opcion == "SI" || opcion == "Si")) {

    const productos = []
    let tabla
    let textoTotalVenta
    let textoTotalIVA
    let textoTotalVentaConIVA

    class Producto {
        constructor(nombre, precioVenta, precioIVA, precioConIVA) {
            this.nombre = nombre.toUpperCase()
            this.precioVenta = precioVenta
            this.precioIVA = precioIVA
            this.precioConIVA = precioConIVA
        }

        calcularPrecioVenta = () => this.precioVenta
        calcularPrecioIVA = () => this.precioVenta * 0.21
        calcularPrecioConIVA = () => this.precioVenta * 1.21
    }

    function inicializarElementos() {
        tabla = document.getElementById("tablaProductos")
        textoTotalVenta = document.querySelector("#totalVenta span")
        textoTotalIVA = document.querySelector("#totalIva span")
        textoTotalVentaConIVA = document.querySelector("#totalVentaConIVA span")
    }


    let heladera = prompt("Ingrese (SI ó NO) si desea comprar la Heladera y luego presione aceptar")
    let lavarropas = prompt("Ingrese (SI ó NO) si desea comprar el lavarropas y luego presione aceptar")
    let calefactor = prompt("Ingrese (SI ó NO) si desea comprar el calefactor y luego presione aceptar")

    if (heladera == "si" || heladera == "SI" || heladera == "Si") {
        productoHeladera = "HELADERA"
        precioHeladera = 90000
        precioHeladeraIVA = 90000 * 0.21
        precioHeladeraConIVA = 90000 * 1.21
    } else {
        productoHeladera = "NO SE COMPRA HELADERA"
        precioHeladera = 0
        precioHeladeraIVA = 0
        precioHeladeraConIVA = 0
    }
    if (lavarropas == "si" || lavarropas == "SI" || lavarropas == "Si") {
        productoLavarropas = "LAVARROPAS"
        precioLavarropas = 80000
        precioLavarropasIVA = 80000 * 0.21
        precioLavarropasConIVA = 80000 * 1.21
    } else {
        productoLavarropas = "NO SE COMPRA LAVARROPAS"
        precioLavarropas = 0
        precioLavarropasIVA = 0
        precioLavarropasConIVA = 0
    }
    if (calefactor == "si" || calefactor == "SI" || calefactor == "Si") {
        productoCalefactor = "calefactor"
        precioCalefactor = 70000
        precioCalefactorIVA = 70000 * 0.21
        precioCalefactorConIVA = 70000 * 1.21
    } else {
        productoCalefactor = "NO SE COMPRA CALEFACTOR"
        precioCalefactor = 0
        precioCalefactorIVA = 0
        precioCalefactorConIVA = 0
    }

    const heladera1 = productoHeladera
    const precioHeladera1 = precioHeladera
    const precioHeladeraIVA1 = precioHeladeraIVA
    const precioHeladeraConIVA1 = precioHeladeraConIVA


    const lavarropas1 = productoLavarropas
    const precioLavarropas1 = precioLavarropas
    const precioLavarropasIVA1 = precioLavarropasIVA
    const precioLavarropasConIVA1 = precioLavarropasConIVA

    const calefactor1 = productoCalefactor
    const precioCalefactor1 = precioCalefactor
    const precioCalefactorIVA1 = precioCalefactorIVA
    const precioCalefactorConIVA1 = precioCalefactorConIVA
    

    const total = "TOTAL"
    const totalIindividual = parseFloat(precioHeladera1 + precioLavarropas1 + precioCalefactor1)
    const totalIVA = parseFloat(precioHeladeraIVA1 + precioLavarropasIVA1 + precioCalefactorIVA1)
    const totalConIVA = parseFloat(precioHeladeraConIVA1 + precioLavarropasConIVA1 +  precioCalefactorConIVA1)
    console.log(totalConIVA)


    productos.push(new Producto(heladera1, precioHeladera1, precioHeladeraIVA1, precioHeladeraConIVA1))
    productos.push(new Producto(lavarropas1, precioLavarropas1, precioLavarropasIVA1, precioLavarropasConIVA1))
    productos.push(new Producto(calefactor1, precioCalefactor1, precioCalefactorIVA1, precioCalefactorConIVA1))
    productos.push(new Producto(total, totalIindividual, totalIVA, totalConIVA))

    const resultado = productos.filter((el) => el.precioVenta > 0)
    console.log(resultado)


    function agregarProductosTabla() {
        resultado.forEach((producto) => {
            let filaTabla = document.createElement("tr")
            filaTabla.innerHTML = `
        <td>${producto.nombre}</td>
        <td>${producto.precioVenta}</td>
        <td>${producto.precioIVA}</td>
        <td>${producto.precioConIVA}</td>
        `
            tabla.tBodies[0].append(filaTabla)
        })
    }

    function calcularTotales() {
        let totalVenta = 0

        totalVenta = productos.reduce((acumulador, elemento) => acumulador + elemento.calcularPrecioVenta(), 0)


        textoTotalVenta.innerText = totalIindividual
        textoTotalIVA.innerText = totalIVA
        textoTotalVentaConIVA.innerText = totalConIVA
    }

    function main() {
        inicializarElementos()
        agregarProductosTabla()
        calcularTotales()
    }
    main()
}else{
    alert ("GRACIAS, NOS VEMOS PRONTO")
}