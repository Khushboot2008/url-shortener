import { Link2 } from "lucide-react";
import { ModeToggle } from "../modetoggle";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="px-6 md:px-20 lg:px-32 py-10 text-center grid place-content-center">
            <div className="grid gap-2 place-items-center">
                <span><Link2 className="h-5 w-5" /></span>
                <h3 className="text-lg -mb-1 -mt-2">URL Shortner</h3>
               
            </div>
           
            <div className="mt-4">
                <ModeToggle />
            </div>
        </footer>
    )
};