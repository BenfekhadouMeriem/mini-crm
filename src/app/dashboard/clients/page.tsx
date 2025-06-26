import ClientTable from '@/components/ClientTable'

export default function ClientsPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Liste des Clients</h1>
      <ClientTable />
    </div>
  )
}
