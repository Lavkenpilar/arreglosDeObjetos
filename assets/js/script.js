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