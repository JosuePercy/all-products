import NavigationLinks from './navigationLinks';

export default function Navbar() {

    return (
     <header className="bg-white shadow sticky top-0 z-50 w-full">
           <div className="flex items-center justify-between max-w-screen-xl mx-auto px-8 py-4 w-full">
                {/* Logo */}
                <a href="/" className="text-2xl font-bold text-red-500 tracking-wide">Mitienda</a>

                {/* Navigation Links */}
                <NavigationLinks />

                {/* Cart Button */}
                <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-red-50 hover:bg-red-100 text-red-600 transition shadow">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.6 17h8.8a1 1 0 00.95-.68L21 13M7 13V6h13" />
                    </svg>
                    <span>Carrito</span>
                </button>
            </div>
        </header>
    )
}