"use client"

import { FC } from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Category } from "@/types";

interface MainNavProps {
    data: Category[];
}

const MainNav: FC<MainNavProps> = ({data}) => {
    const pathname = usePathname();
    const routes = data.map((route)=>({
        href:`/category/${route.id}`,
        label:route.name,
        active: pathname===`/category/${route.id}`
    }))
  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
        {routes.map((link)=>(
            <Link key={link.href} href={link.href} className={cn("text-sm font-medium transition-colors hover:text-black",link.active ? "text-black":"text-neutral-500")}>{link.label}</Link>
        ))}
    </nav>
  )
}

export default MainNav;