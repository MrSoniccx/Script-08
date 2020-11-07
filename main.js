7

var BtnEj1 = document.querySelector("#Add");
var BtnEj2 = document.querySelector("#Del");
var BtnEj3 = document.querySelector("#Search");
var BtnEj4 = document.querySelector("#List");
var BtnEj5 = document.querySelector("#ListInv");
var BtnEj6 = document.querySelector("#Insert");
var BtnEj7 = document.querySelector("#AddFirst");
var BtnEj8 = document.querySelector("#DelFirst");

var codigo = document.querySelector("#codigo");
var nombre = document.querySelector("#nombre");
var desc = document.querySelector("#desc");
var cantidad = document.querySelector("#cantidad");
var costo = document.querySelector("#costo");
var pos = document.querySelector("#pos");


var res = document.querySelector("#Description");

class Producto {

  constructor(codigo, nombre, desc, cantidad, costo, total, next){
    this.codigo = codigo
    this.nombre = nombre
    this.desc = desc
    this.cantidad = cantidad
    this.costo = costo
    this.total = total
    this.next = next
  }
}

class Lista {
  constructor()
  {
    this.head = null
    this.size = 0
  }

  check(codigo)
  {
    if(this.head == null){return false}
    let aux=this.head
    while(aux)
    {
      if(aux.codigo==codigo){return true}
      aux = aux.next
    }
    return false
  }
  
  search(codigo)
  {
    if(this.head == null){return null}
    let aux=this.head
    while(aux)
    {
      if(aux.codigo==codigo){return aux}
      aux = aux.next
    }
    return null
  }

  agregarFinal(item)
  {
    let nuevo = new Producto(item[0], item[1], item[2], item[3], item[4], item[5], null)
    if(!this.head){
      this.head = nuevo
    } else{
      let aux = this.head
      while (aux.next){
        aux = aux.next
      }
      aux.next = nuevo
    }
    this.size++
  }

  eliminarCodigo(item)
  {
    if(this.size==1) { this.head = null}
    else if(this.head==item){ this.head = this.head.next}
    else{ 
    let aux = this.head
    while(aux.next!=item)
    {
      aux=aux.next
    }
    if(aux.next.next){aux.next = aux.next.next}
    else {aux.next=null}
    }
    this.size--;
  }

  recorrer(producto)
  {
    if(producto==null) {return this.head}
    else { return producto.next}
  }

  insert(pos, item)
  {
    let nuevo = new Producto(item[0], item[1], item[2], item[3], item[4], item[5], pos.next)
    pos.next = nuevo
    this.size++
  }

  agregarInicio(item)
  {
    let nuevo = new Producto(item[0], item[1], item[2], item[3], item[4], item[5], this.head)
    List.head = nuevo
    this.size++
  }

  EliminarInicio()
  {
    if(this.size>1) {List.head = List.head.next;}
    this.size--
  }
}



const List = new Lista()  

BtnEj1.addEventListener("click", () => {
  if(List.check(codigo.value)==false)
  {
    let v = new Array (codigo.value,nombre.value,desc.value,cantidad.value,costo.value,(Number(cantidad.value) * Number(costo.value)))
    List.agregarFinal(v)
    res.innerHTML = v[0]+" "+v[1]+" "+v[2]+" "+v[3]+" "+v[4]+" "+v[5]+ "</br > Agregado con exito"
    }
  else{
  alert("El codigo esta repetido.")
  }

});

BtnEj2.addEventListener("click", () => {
  let xd = List.search(codigo.value)
  if(xd!=null)
  {
    res.innerHTML = xd.codigo+" "+xd.nombre+" "+xd.desc+" "+xd.cantidad+" "+xd.costo+" "+xd.total+" "+ "</br > Eliminado con exito"
    List.eliminarCodigo(xd)
  }
  else{
    alert("el producto seleccionado no existe")
  }
});

BtnEj3.addEventListener("click", () => {
  let xd = List.search(codigo.value)
  if(xd!=null)
  {
    res.innerHTML = xd.codigo+" "+xd.nombre+" "+xd.desc+" "+xd.cantidad+" "+xd.costo+" "+xd.total+" "+ "</br > El producto ha sido encontrado!"
  }
  else{
    alert("el producto que busca no existe")
  }
});

BtnEj4.addEventListener("click", () => {
  res.innerHTML = ""
  let aux = null
  for(let i=0;i!=List.size;i++)
  {
    aux = List.recorrer(aux)
    res.innerHTML += aux.codigo+" "+aux.nombre+" "+aux.desc+" "+aux.cantidad+" "+aux.costo+" "+aux.total+" "+ "</br >"
  }
  res.innerHTML += "Lista terminada"
});

BtnEj5.addEventListener("click", () => {
  res.innerHTML = ""
  let aux = null
  let v = new Array()
  for(let i=0;i!=List.size;i++)
  {
    aux = List.recorrer(aux)
    v[i] = aux
  }
  for(let i=List.size-1;i!=-1;i--)
  {
    res.innerHTML += v[i].codigo+" "+v[i].nombre+" "+v[i].desc+" "+v[i].cantidad+" "+v[i].costo+" "+v[i].total+ "</br >"
  }
  res.innerHTML += "Lista terminada"
});

BtnEj6.addEventListener("click", () => {
 if(List.check(codigo.value)==true)
  {alert("el codigo ingresado ya esta siendo utilizado")}
  else if(Number(pos.value) > List.size)
  {alert("no hay datos en esa posicion aun")}
  else{
    let position = Number(pos.value)
    let aux = null
    let v = new Array (codigo.value,nombre.value,desc.value,cantidad.value,costo.value,(Number(cantidad.value) * Number(costo.value)))
    for(let i=0; i!=position;i++)
    {
      aux = List.recorrer(aux)
      if(i+1==position){
        List.insert(aux,v)
      }
    }
    res.innerHTML = v[0]+" "+v[1]+" "+v[2]+" "+v[3]+" "+v[4]+" "+v[5]+ "</br > Insertado con exito"
  }
  });

BtnEj7.addEventListener("click", () => {
  if(List.check(codigo.value)==false)
  {
    let v = new Array (codigo.value,nombre.value,desc.value,cantidad.value,costo.value,(Number(cantidad.value) * Number(costo.value)))
    List.agregarInicio(v)
    res.innerHTML = v[0]+" "+v[1]+" "+v[2]+" "+v[3]+" "+v[4]+" "+v[5]+ "</br > Agregado con exito"
    }
  else{
  alert("El codigo esta repetido.")
  }
  
});

BtnEj8.addEventListener("click", () => {
  if(List.head)
  {
    let aux = List.recorrer(null)
    res.innerHTML = aux.codigo+" "+aux.nombre+" "+aux.desc+" "+aux.cantidad+" "+aux.costo+" "+aux.total+" "+ "</br >  Eliminado con exito!"
    List.EliminarInicio()
    
    }
  else{
  alert("No hay productos aun.")
  }
  
});