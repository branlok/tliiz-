'use client'

import { createContext, useContext, useRef } from "react"
import { useStore } from "zustand"
import { createListStructure, newClientStore } from "."
import { listStructure } from "./server"
export const CounterStoreContext = createContext(
    undefined,
)



export const ListStoreProvider = ({
    children,
}) => {
    const storeRef = useRef()

    if (!storeRef.current) {
        // context for those who are offline 
        storeRef.current = createListStructure(newClientStore)
    }

    return (
        <CounterStoreContext.Provider value={storeRef.current}>
            {children}
        </CounterStoreContext.Provider>
    )
}

export const useCounterStore = <T,>(
    selector: (store) => T,
): T => {
    const counterStoreContext = useContext(CounterStoreContext)

    if (!counterStoreContext) {
        throw new Error(`useCounterStore must be used within ListStoreProvider`)
    }

    return useStore(counterStoreContext, selector)
}