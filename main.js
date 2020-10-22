7

var BtnEj1 = document.querySelector("#Add");
var BtnEj2 = document.querySelector("#Del");
var BtnEj3 = document.querySelector("#Search");
var BtnEj4 = document.querySelector("#List");
var BtnEj5 = document.querySelector("#ListInv");
var BtnEj6 = document.querySelector("#Insert");

var codigo = document.querySelector("#codigo");
var nombre = document.querySelector("#nombre");
var desc = document.querySelector("#desc");
var cantidad = document.querySelector("#cantidad");
var costo = document.querySelector("#costo");
var pos = document.querySelector("#pos");


var res = document.querySelector("#Description");
var v = []

var longitud = 0

class Main{
  
  llenar(){
    for (let i=0;i!=20;i++)
    {
      v[i] = new Array ()
    }
  }
  check()
  {
    for (let i=0;i!=20;i++)
    {
      if(v[i][0] == codigo.value)
      {
        return true
      }
    }
    return false
  }

  search()
  {
    for (let i=0;i!=20;i++)
    {
      if(v[i][0] == codigo.value)
      {
        return i
      }
    }
  }

  listar()
  {
    for(let i=0; i!=20 && i!=longitud;i++)
    {
      res.innerHTML += v[i][0]+" "+v[i][1]+" "+v[i][2]+" "+v[i][3]+" "+v[i][4]+" "+v[i][5]+"</br >"
    }
  }
  listarInv()
  {
    for(let i=longitud-1; i!=-1;i--)
    {
      res.innerHTML += v[i][0]+" "+v[i][1]+" "+v[i][2]+" "+v[i][3]+" "+v[i][4]+" "+v[i][5]+"</br >"
    }
  }

  remove(xd){

      for(let i=xd; i!=longitud-1;i++)
      {
        v[i] = new Array (v[i+1][0],v[i+1][1],v[i+1][2],v[i+1][3],v[i+1][4],v[i+1][5])
      }
    
  }

}
let c = new Main()
c.llenar()
BtnEj1.addEventListener("click", () => {
  if(longitud!=20 && c.check()==false)
  {
    console.log(longitud)
    v[longitud] = new Array (codigo.value,nombre.value,desc.value,cantidad.value,costo.value,(Number(cantidad.value) * Number(costo.value)))
    res.innerHTML = v[longitud][0]+" "+v[longitud][1]+" "+v[longitud][2]+" "+v[longitud][3]+" "+v[longitud][4]+" "+v[longitud][5]+ "</br > Agregado con exito"
    longitud++
    }
  else{
  alert("El inventario esta lleno o el codigo esta repetido.")
  }

});

BtnEj2.addEventListener("click", () => {
  if(c.check()==true)
  {
    let xd = c.search()
    res.innerHTML = v[xd][0]+" "+v[xd][1]+" "+v[xd][2]+" "+v[xd][3]+" "+v[xd][4]+" "+v[xd][5]+ "</br > Eliminado con exito"
    v[xd] = new Array ()
    c.remove(xd)
    longitud--;
  }
  else{
    alert("el producto seleccionado no existe")
  }
});

BtnEj3.addEventListener("click", () => {
  if(c.check()==true)
  {
    let xd = c.search()
    res.innerHTML = v[xd][0]+" "+v[xd][1]+" "+v[xd][2]+" "+v[xd][3]+" "+v[xd][4]+" "+v[xd][5]+ "</br > Busqueda exitosa"
  }
  else{
    alert("el producto que busca no existe")
  }
});

BtnEj4.addEventListener("click", () => {
  res.innerHTML = ""
  c.listar()
  res.innerHTML += "Lista terminada"
});

BtnEj5.addEventListener("click", () => {
  res.innerHTML = ""
  c.listarInv()
  res.innerHTML += "Lista terminada"
});

BtnEj6.addEventListener("click", () => {
if(longitud==19)
{
  alert("el inventario esta lleno")
}
else if(c.check()==true)
{
  alert("el codigo ingresado ya esta siendo utilizado")
}
else if(Number(pos.value) > longitud)
{
  alert("no hay datos en esa posicion aun")
}
else{
  let xd = Number(pos.value)
  let aux = new Array(v[xd][0],v[xd][1],v[xd][2],v[xd][3],v[xd][4],v[xd][5])
  v[xd] = new Array (codigo.value,nombre.value,desc.value,cantidad.value,costo.value,(Number(cantidad.value) * Number(costo.value)))
  for(let i=xd+1;i!=longitud+2;i++)
  {
    aux2 = new Array(v[i][0],v[i][1],v[i][2],v[i][3],v[i][4],v[i][5])
    v[i] = aux;
    aux = aux2
    
  }
  longitud++
  res.innerHTML = v[xd][0]+" "+v[xd][1]+" "+v[xd][2]+" "+v[xd][3]+" "+v[xd][4]+" "+v[xd][5]+ "</br > Insertado con exito"
}
});


