const ventasDeLaSemana = [
    {dia:"lunes", total:34000 },
    {dia:"martes", total:50000},
    {dia:"miercoles", total:60000},
    {dia:"jueves", total:10000},
    {dia:"viernes", total:45000},
    {dia:"sabado", total:33000},
    {dia:"domingo", total:80000},
]
const ul=document.querySelector("ul")
for (let venta of ventasDeLaSemana) {
    ul.innerHTML+= `<li> ${venta.dia}:${venta.total}</li>`
}

const departamentos = [
    {departamento:323, propietario:"Natalia Jiménez", fono:"+569 5312 4578"},
    {departamento:123, propietario:"Luis Fonsi", fono:"56 9 4612 7894"},
    {departamento:341, propietario:"David Bisbal", fono:"56 9 8978 6432"},
    {departamento:412, propietario:"Ricardo Montaner", fono:"56 9 9874 4465"},
    {departamento:369, propietario:"Patricia Hernández", fono:"56 9 8579 2546"},
]
const tbody = document.querySelector ('.tbody')
for (let dpto of departamentos) {
    let template =/*html*/`
    <tr>
    <td>${dpto.departamento}</td>
    <td>${dpto.propietario}</td>
    <td>${dpto.fono}</td>
    </tr>
    `
    tbody.innerHTML+=template
}