'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = () => {
    router.push('/login')
  }

  return (
    <nav className="bg-white border-b shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-indigo-600">Mini CRM</div>
      <div className="flex gap-4 items-center">
        <Link href="/dashboard" className={`${pathname === '/dashboard' ? 'underline' : ''} hover:text-indigo-600`}>Dashboard</Link>
        <Link href="/dashboard/clients" className={`${pathname.includes('/clients') ? 'underline' : ''} hover:text-indigo-600`}>Clients</Link>
        <Link href="/dashboard/add-client" className={`${pathname === '/dashboard/add-client' ? 'underline' : ''} hover:text-indigo-600`}>Ajouter Client</Link>
        <button onClick={handleLogout} className="ml-4 text-red-500 hover:text-red-700 font-semibold">Déconnexion</button>
      </div>
    </nav>
  )
}
