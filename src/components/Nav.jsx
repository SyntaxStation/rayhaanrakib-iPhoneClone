import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants/index';
const Nav = () => {
    return (
        <header className='container mx-auto py-6 sm:px-12 px-5'>
            <nav className='grid grid-cols-3 w-full justify-between items-center'>
                <img src={appleImg} alt="Apple" height={18} width={16} />
                <div className='flex flex-1 justify-center max-sm:opacity-0'>
                    {navLists.map((nav) => (
                        <div className='font-medium text-sm px-5 cursor-pointer text-gray-200 hover:text-white transition-all duration-300' key={nav}>
                            {nav}
                        </div>
                    ))}
                </div>

                <div className='flex  items-baseline gap-7 justify-end max-sm:flex-1'>
                    <img className='cursor-pointer text-gray hover:text-white transition-all duration-300' src={searchImg} alt="search" width={16} height={18} />
                    <img className='cursor-pointer text-gray hover:text-white transition-all duration-300' src={bagImg} alt="bag" width={16} height={18} />
                </div>
            </nav>
        </header>
    );
};

export default Nav;