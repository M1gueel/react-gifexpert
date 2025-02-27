import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

// Definición del hook personalizado useFetchGifs que recibe la categoría como argumento
export const useFetchGifs = ( category ) => {

    // Estado para almacenar las imágenes
    const [images, setImages] = useState([]);
    // Estado para manejar el estado de carga
    const [isLoading, setIsLoading] = useState(true);

    // Función asíncrona para obtener las imágenes
    const getImages = async() => {
        // Llama a la función getGifs y obtiene nuevas imágenes
        const newImages = await getGifs( category );
        // Actualiza el estado de las imágenes
        setImages(newImages);
        // Cambia el estado de carga a false
        setIsLoading(false);
    }

    // useEffect para ejecutar getImages cuando el componente se monta
    useEffect( () => {
        getImages();
    }, []); // Dependencias vacías para que se ejecute solo una vez
 
    return {
        // Cuando se retorna algo con el mismo nombre se puede simplificar
        images,
        isLoading
    }
}