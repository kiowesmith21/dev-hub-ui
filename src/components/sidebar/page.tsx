import Link from "next/link";
import { HomeIcon, Cog6ToothIcon, ChartBarIcon, CommandLineIcon } from "@heroicons/react/24/outline";

const links = [
  { href: "/dashboard", label: "Dashboard", icon: <HomeIcon className="h-6 w-6" /> },
  { href: "/usage", label: "Usage", icon: <ChartBarIcon className="h-6 w-6" /> },
  { href: "/config", label: "Config", icon: <Cog6ToothIcon className="h-6 w-6" /> },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white flex flex-col p-4 min-h-screen">
      <div className="flex flex-row justify-content-between">
        <CommandLineIcon className="h-6 w-6 mb-8 mx-3 mt-1"/>
        <p className="text-2xl font-bold">Dev Hub</p>
        </div>
      <nav className="flex flex-col gap-2">
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-800 transition"
          >
            {link.icon}
            <span>{link.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}