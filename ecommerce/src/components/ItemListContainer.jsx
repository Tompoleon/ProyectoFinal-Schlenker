import React from 'react';

const Container = ({ saludo }) => {
    var cantidad = 0;
    return (
        <div className='ItemListcontainer'>
            <h2>{saludo}</h2>
        </div>
    );
};

export default Container;