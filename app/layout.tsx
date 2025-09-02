import './globals.css'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Més Impacte — MVP', description: 'Gestió de xarxes socials, contingut i Social Ads' }
export default function RootLayout({ children }: { children: React.ReactNode }) { return (<html lang='ca'><body>{children}</body></html>) }
