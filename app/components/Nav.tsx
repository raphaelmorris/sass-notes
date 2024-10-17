'use client'

import Link from "next/link"
import Logo from '@/public/logo.svg'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./ThemeToggle"


export default function Nav() {
    return (
        <nav className="max-w-[1200px] w-full mx-auto h-[80px] flex items-center justify-between p-5 border-b border-gray-300">
            <div>
                <Link href={'/'}>
                    <Image width={30} height={30} src={Logo} alt="Logo" className="w-12 h-12"></Image>
                </Link>
            </div>
            <div className="flex items-center gap-4">
                <ThemeToggle></ThemeToggle>
            </div>
        </nav>
    )
}
