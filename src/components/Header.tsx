import React from 'react';
import { useRouter} from "next/router";
import Link from "next/link";
export default function Header() {
    const router = useRouter();
    function pathMathRoute(route: string){
        if (route === router.route) {
            return true;
        };
    }

    return (
        <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
            <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
                <div>
                    <Link href="/"><img src='https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg' alt='Realtor logo' className='h-5 cursor-pointer'/></Link>
                </div>
                <div>
                    <ul className='flex space-x-10'>
                        <li className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${pathMathRoute("/") ? "text-black border-b-red-500" : "text-gray-400 border-b-transparent"}`}><Link href="/">Home</Link></li>

                        <li className={`cursor-pointer py-3 text-sm font-semibold  border-b-[3px] ${pathMathRoute("/offers") ? "text-black border-b-red-500" : "text-gray-400 border-b-transparent" }`}><Link href="/offers">Offers</Link></li>
                        
                        <li className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${pathMathRoute("/sign-in") ? "text-black border-b-red-500" : "text-gray-400 border-b-transparent"}`}><Link href="/sign-in">Sign in</Link></li>
                    </ul>
                </div>
            </header>
        </div>
    );
}
