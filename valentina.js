window.onload= function(){
const nomDiv = div => document.getElementById(div);
const Presupuesto = () => {
let inicio = nomDiv("inicio").value;
let mercado = nomDiv("mercado").value;
let ser = nomDiv("ser").value;
let tra = nomDiv("tra").value;
let mov = nomDiv("mov").value;
let arr = nomDiv("arr").value;
let edu = nomDiv("edu").value;
let vij = nomDiv("vij").value;
let sal = nomDiv("sal").value;
if (inicio.length === 0 || mercado.length === 0 || ser.length === 0
    || tra.length === 0 || mov.length === 0 || arr.length === 0
    || edu.length === 0 || vij.length === 0 || sal.length === 0){
alert("Favor ingresar las cantidades solicitadas");
}else{
    const sum = parseInt(mercado) + parseInt(ser) + parseInt(tra) + parseInt(mov) + parseInt(arr) + parseInt(edu) + parseInt(vij) + parseInt(sal);
    const total = parseInt(inicio) - parseInt(sum); 
    nomDiv("respuesta").innerHTML = "Sus gastos totales del mes son : " + 
    parseInt(sum).toFixed(1) + "  El dinero excedente mensual es : " + 
    parseInt(total).toFixed(1) + ".  NOTA: si el excedente es negativo, tus gastos superan tus ingresos";
}
};

nomDiv("evaluar").addEventListener("click", function(event){
    Presupuesto();
});
};