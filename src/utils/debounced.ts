import { useEffect, useState } from "react"

export function useDebounce(value:string, delay = 300):string {
    const [search, setSearch] = useState('')

    useEffect(() => {
        const handle = setTimeout(() => {
            setSearch(value)
        }, delay)

        return () => clearTimeout(handle)
    },[value, delay])

    return search
}