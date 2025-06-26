'use client'
import { clients } from '@/data/clients'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function ClientTable() {
  const router = useRouter()
  const [search, setSearch] = useState('')

  const filteredClients = clients.filter(client =>
    client.nom.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <input
        type="text"
        placeholder="🔍 Rechercher par nom..."
        className="mb-4 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400"
        onChange={(e) => setSearch(e.target.value)}
      />
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-indigo-100 text-indigo-800">
            <th className="p-3 text-left">Nom</th>
            <th className="p-3">Email</th>
            <th className="p-3">Téléphone</th>
            <th className="p-3">Créé le</th>
          </tr>
        </thead>
        <tbody>
          {filteredClients.map(client => (
            <tr
              key={client.id}
              onClick={() => router.push(`/dashboard/clients/${client.id}`)}
              className="hover:bg-indigo-50 cursor-pointer transition-all duration-150"
            >
              <td className="p-3">{client.nom} {client.prenom}</td>
              <td className="p-3 text-center">{client.email}</td>
              <td className="p-3 text-center">{client.telephone}</td>
              <td className="p-3 text-center">{client.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
