import React from 'react';
import shoes from '../data/shoes';

function Deportivos() {

    return (
        <div>
            <h2>Zapatos Deportivos</h2>
            <div className="shoe-list">
                {shoes.map((shoe) => (
                    <div key={shoe.id} className="shoe-item">
                        <img src={shoe.image} alt={shoe.name} />
                        <h3>{shoe.name}</h3>
                        <p>{shoe.price}</p>
                        <button>Ver Detalles</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Deportivos;
