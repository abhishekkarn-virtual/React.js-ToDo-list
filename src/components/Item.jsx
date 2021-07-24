import React from "react";


function Item(props) {

    function handleClick() {
        props.onDelete(props.id);
    }


    function completeH(event) {
        props.onComplete(props.id);
        event.preventDefault();
    };

    return (
        <form action="">
            <div class="item" >
                <div class="checked" onClick={completeH }><i class="fas fa-check-circle"></i></div>
                <p class={`${props.completed?"completed":""}`}>{props.item}</p>
                <div class="delete">
                    <i class="fas fa-trash" onClick={handleClick}></i>
                </div>
            </div>
        </form>
    )
};

export default Item;
