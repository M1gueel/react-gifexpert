// Definición del componente GifItem que recibe props: title, url, id
export const GifItem = ({ title, url, id }) => {
  
    return (
        // Contenedor principal con la clase "card"
        <div className="card">
            {/* Imagen que utiliza la URL y el título para el atributo alt */}
            <img src={ url } alt={ title } />
            {/* Párrafo que muestra el título */}
            <p>{ title }</p>
        </div>
    )
}