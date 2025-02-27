import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

// Definición del componente GifGrid que recibe la categoría como prop
export const GifGrid = ({ category }) => {

    // Uso del hook useFetchGifs para obtener las imágenes y el estado de carga
    const { images, isLoading } = useFetchGifs(category);
    
    return (
        <>
            {/* Título de la categoría */}
            <h3>{category}</h3>
            {
                // Operador lógico AND para mostrar el mensaje de carga si isLoading es true
                isLoading && ( <p>Cargando...</p> )
            }
            
            {/* Contenedor de la cuadrícula de tarjetas */}
            <div className="card-grid">
                {
                    // Mapeo de las imágenes para renderizar un GifItem por cada imagen
                    images.map( ( image ) => (
                        <GifItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}