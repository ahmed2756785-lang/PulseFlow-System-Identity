import type { Metadata, Viewport } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'PulseFlow — Plan with clarity', description: 'A focused workspace for projects, priorities, and decisions.', applicationName: 'PulseFlow' };
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#101426' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
