import React, { useState } from "react";

function Input(props) {
    const [item,setItem]=useState("");

    function handleChange(event){
        const {value}=event.target;

        setItem(prevItems=>{
            return{
                ...prevItems,
                item: value
            };
        });
        
    }

    function submitItem(event){
        event.preventDefault();
        props.onAdd(item);
        setItem({
            title:"",
            completed:false,
        });
        
        setItem({item:""});

    }


    return (
            <form class="item">
                <input type="text" onChange={handleChange} name="item" placeholder="✍ New Item" value={item.item} autocomplete="off" />
                <button onClick={submitItem}>+</button>
            </form>
    )
};

export default Input;