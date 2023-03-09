import React from 'react';

const styles = {
    color: 'red',
    fontSize: '20',
    fontFamily: 'Arial'
}

function ItemListContainer(props){
    return (
        <h1 style={styles}>{props.greeting}</h1>
    );
}

ItemListContainer.defaultProps={
    greeting:"No hay elementos"
}

export default ItemListContainer;
