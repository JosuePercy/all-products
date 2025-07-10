import SearchBar from './searchBar';
import NavigationLinks from './navigationLinks';

export default function Navbar() {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50 w-full">
            <div className="flex items-center justify-between max-w-screen-xl mx-auto p-4 w-full">
                {/* Logo */}
                <a href="">Mitienda</a>

                {/* Search Bar */}
                <SearchBar />

                {/* Navigation Links */}
                <NavigationLinks />
                <button className='flex items-center gap-2 text-gray-700 hover:text-red-500 transition'>
                    <span className='material-icons'>shopping_cart</span>
                    <span>Carrito</span>
                </button>
            </div>
        </header>
    )
}