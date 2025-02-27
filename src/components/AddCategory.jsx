import { useState } from 'react';

// Definición del componente AddCategory que recibe onNewCategory como prop
export const AddCategory = ({ onNewCategory }) => {

    // Estado para manejar el valor del input
    const [inputValue, setInputValue] = useState();

    // Función para manejar el cambio en el input
    const onInputChange = ({ target }) => {
        setInputValue( target.value );   
    }

    // Función para manejar el envío del formulario
    const onSubmit = ( event ) => {
        event.preventDefault();

        // Se valida que el input no esté vacío
        if( inputValue.trim().length <= 1) return;   

        // Se limpia el input
        setInputValue('');
        // Se llama al callback de la función onNewCategory
        // para agregar la nueva categoría al arreglo de categorías
        onNewCategory( inputValue.trim() );
    }

    return (
        // Formulario que llama a onSubmit al enviarse
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}