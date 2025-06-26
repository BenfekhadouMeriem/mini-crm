import { clients } from '@/data/clients'

export default async function ClientDetail({ params }: { params: { id: string } }) {
  const client = clients.find(c => c.id === params.id)

  if (!client) return <p>Client introuvable</p>

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">
        {client.prenom} {client.nom}
      </h2>
      <p className="mb-2"><span className="font-semibold">Email:</span> {client.email}</p>
      <p className="mb-2"><span className="font-semibold">Téléphone:</span> {client.telephone}</p>
      <p className="mb-4"><span className="font-semibold">Créé le:</span> {client.createdAt}</p>

      <h3 className="text-lg font-semibold mb-2 text-indigo-600">Historique</h3>
      <ul className="list-disc list-inside space-y-1">
        {client.historique.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
