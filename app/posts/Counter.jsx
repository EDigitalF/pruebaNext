'use client'/*tratar de ocuparlo en la parte mas pequeña del arbol, es una convención para declarar un límite entre un gráfico de módulo de componente de servidor y cliente.*/

import { useState } from "react"

export function Counter () {
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>Count:{count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    )
}