export const GuardarEnStorage = (clave, elemento) =>{
    //conseguir elementos que ya tenemos en localStorage
    let elementos = JSON.parse(localStorage.getItem(clave));
    
    //comprobar que sea un array
    if(Array.isArray(elementos)){
        //si es un array, ya hay datos entonces agrego el dato nuevo
      elementos.push(elemento);
    }else{
        //si no es un array, no hay datos entonces inicio el array con el primer valor
      elementos = [elemento];
    }

    //guardar en el localStorage
    localStorage.setItem(clave, JSON.stringify(elementos));
    
    //devolver objeto guardado
    return elemento;
  }