import Link from 'next/link';

function Navbar() {
  return (
    <nav className='bg-slate-300 mb-4 flex justify-between items-center px-20 p-5 font-bold text-black'>
        <Link href="/">HOME</Link>
        <ul>
            <li>
                <Link href="/about">ABOUT</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar