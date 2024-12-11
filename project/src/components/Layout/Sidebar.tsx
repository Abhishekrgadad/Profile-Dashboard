import React from 'react';
import { LucideIcon } from 'lucide-react';

type SidebarItem = {
  icon: LucideIcon;
  label: string;
  href: string;
};

type SidebarProps = {
  items: SidebarItem[];
};

export default function Sidebar({ items }: SidebarProps) {
  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-800">
      <div className="p-6">
        <h2 className="text-xl font-bold text-white">Dashboard</h2>
      </div>
      <nav className="space-y-1 px-3">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-150"
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}