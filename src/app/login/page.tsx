'use client'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()

  const handleLogin = () => {
    router.push('/dashboard')
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-sm">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">Connexion</h2>
        <input placeholder="Email" className="mb-4 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500" />
        <input placeholder="Mot de passe" type="password" className="mb-6 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500" />
        <button onClick={handleLogin} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md font-semibold">
          Se connecter
        </button>
      </div>
    </div>
  )
}
