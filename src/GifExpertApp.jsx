import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

// Definición del componente principal GifExpertApp
export const GifExpertApp = () => {
    
    // Estado para manejar las categorías, inicializado con 'One Punch'
    const [ categories, setCategories ] = useState([ 'One Punch' ]);
    
    // Función para agregar una nueva categoría
    const onAddCategory = ( newCategory ) => {
        // Verifica si la categoría ya existe para evitar duplicados
        if ( categories.includes(newCategory) ) return;
        // Actualiza el estado de categorías agregando la nueva categoría al inicio
        setCategories([ newCategory, ...categories ]);
    }
    
    return (
        <>
            {/* Título principal de la aplicación */}
            <h1>GifExpertApp</h1>

            {/* Componente para agregar una nueva categoría */}
            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value) }
            />
            { 
                // Mapeo de las categorías para renderizar un GifGrid por cada una
                categories.map( ( category ) => (
                    <GifGrid 
                        key={ category } 
                        category={ category }
                    />
                ))
            }
        </>
    )
}