import React from 'react';

function ButtonLink(props) {
    // props=> {className: "Objeto"}

    //Gera herança pois quando é utilizada.

    return (
            <a href={props.href} className={props.className}>
                    {props.children} 
            {/* Sem a props, o que iria aparecer seria o texto dentro desta TAG, mas com a 'props.children', o React vai recuperar o texto da filha */}
            </a>
    );
}

export default ButtonLink;