

import { useState } from 'react'

export default function Navbar() {

    const [searchQuery, setSearchQuery] = useState("")

    const handleSearch = () => {
        console.log("Buscando...", );
    }


    return (
        <header className='bg-gray-900 text-white p-4'>
            <h1>Mi Navbar</h1>                
        </header>
    )
}