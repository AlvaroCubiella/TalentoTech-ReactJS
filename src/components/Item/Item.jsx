import "./Item.css";

export const Item = ({name, description, price, image, children}) => {
    return (
        <article className="card">
            {/* alt sirve por si no encuentra la imagen, 
            // para que el usuario sepa de qué se trata la imagen*/}
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Precio: ${price}</p>

            {/* usamos children para poder renderizar contenido adicional 
            dentro del componente Item, como botones o enlaces */}
            {children}
        </article>
    );
};        
