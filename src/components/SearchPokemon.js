import {useState} from 'react'
import Select from "react-select";


export default function SearchPokemon (props) {


    
    return (
        <div className="search-pokemon">
<Select
    defaultValue={props.defaultValue}
    options={props.options}
    placeholder="Search Pokemon"
    onChange={props.onChange}
  />
    </div>
    )
}