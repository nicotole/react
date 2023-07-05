import React, {useState} from 'react'

export const Excercise01 = (props) => {
    const [ year, setYear ] = useState(props.year);//defino el estado por defecto

    const changeYear = (e, year) => {
        if(Number.isInteger(parseInt(year))){
            setYear(year);
        }else{
            setYear(props.year);
        }
    } 

    return (
        <div>
            <h3>Excercise01</h3>
            <strong>{year}</strong>
            &nbsp;
            <button onClick={e => changeYear(e, year-1)}>
                Año Anterior
            </button>
            &nbsp;
            <button onClick={e => changeYear(e, year+1)}>
                Proximo Año
            </button>
            <input type="text" onKeyUp={e => changeYear(e, e.target.value ) } placeholder='Escribe un año' ></input>
        </div>
    )
}

