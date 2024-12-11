import React from 'react';
import { Settings, User, Mail, Home } from 'lucide-react';
import Sidebar from './Sidebar';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export const navigationItems = [
  { icon: Home, label: 'Dashboard', href: '/' },
  { icon: User, label: 'Profile', href: '/profile' },
  { icon: Mail, label: 'Email', href: '/email' },
  { icon: Settings, label: 'Settings', href: '/settings' },
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-[#030712]">
      <Sidebar items={navigationItems} />
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}