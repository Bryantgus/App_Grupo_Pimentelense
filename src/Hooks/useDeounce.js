import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  // Estado para almacenar el valor debounced
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Establecer un temporizador para el debounce
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Limpiar el temporizador si el valor o el delay cambian
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Se ejecuta cuando 'value' o 'delay' cambian

  return debouncedValue;
}

export default useDebounce;
