'use client'
import { useForm } from 'react-hook-form'

export default function ClientForm() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data: any) => {
    alert('✅ Client ajouté avec succès !')
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <h2 className="text-xl font-semibold text-indigo-600 mb-4">Ajouter un client</h2>

      <div>
        <input {...register('nom', { required: true })} placeholder="Nom" className="w-full border p-2 rounded" />
        {errors.nom && <p className="text-red-500 text-sm mt-1">Nom requis</p>}
      </div>

      <div>
        <input {...register('prenom', { required: true })} placeholder="Prénom" className="w-full border p-2 rounded" />
        {errors.prenom && <p className="text-red-500 text-sm mt-1">Prénom requis</p>}
      </div>

      <div>
        <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} placeholder="Email" className="w-full border p-2 rounded" />
        {errors.email && <p className="text-red-500 text-sm mt-1">Email invalide</p>}
      </div>

      <div>
        <input {...register('telephone', { required: true, pattern: /^\+?\d{9,}$/ })} placeholder="Téléphone" className="w-full border p-2 rounded" />
        {errors.telephone && <p className="text-red-500 text-sm mt-1">Téléphone invalide</p>}
      </div>

      <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded font-semibold">
        Ajouter
      </button>
    </form>
  )
}
