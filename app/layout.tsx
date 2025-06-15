import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Workspace',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="p-4">
        <nav className="flex space-x-4 mb-4">
          <Link href="/journal">Journal</Link>
          <Link href="/habits">Habits</Link>
          <Link href="/knowledge">Knowledge</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
