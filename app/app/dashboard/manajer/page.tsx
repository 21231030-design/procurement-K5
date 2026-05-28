'use client'
import { useState } from 'react'

const dataPR = [
  { id: 'PR-001', nama_barang: 'Laptop Dell', jumlah: 2, satuan: 'unit', urgensi: 'tinggi', status: 'menunggu_approval', tanggal: '2026-05-28' },
  { id: 'PR-002', nama_barang: 'Kertas A4', jumlah: 10, satuan: 'rim', urgensi: 'rendah', status: 'menunggu_approval', tanggal: '2026-05-27' },
]

export default function ManajerDashboard() {
  const [prs, setPrs] = useState(dataPR)
  const [catatan, setCatatan] = useState('')
  const [selected, setSelected] = useState<string | null>(null)

  const handleApprove = (id: string) => {
    setPrs(prs.map(p => p.id === id ? {...p, status: 'disetujui'} : p))
    setSelected(null)
  }

  const handleReject = (id: string) => {
    setPrs(prs.map(p => p.id === id ? {...p, status: 'ditolak'} : p))
    setSelected(null)
  }

  const badgeColor = (status: string) => {
    if (status === 'disetujui') return 'bg-green-100 text-green-700'
    if (status === 'ditolak') return 'bg-red-100 text-red-700'
    return 'bg-yellow-100 text-yellow-700'
  }

  const urgensiColor = (urgensi: string) => {
    if (urgensi === 'tinggi') return 'bg-red-100 text-red-600'
    if (urgensi === 'sedang') return 'bg-yellow-100 text-yellow-600'
    return 'bg-green-100 text-green-600'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-blue-700 text-white px-6 py-4 flex justify-between items-center shadow">
        <div className="flex items-center gap-3">
          <div className="bg-white text-blue-700 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm">P</div>
          <span className="font-semibold text-lg">ProcureITK</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-blue-200">👤 Manajer</span>
          <button onClick={() => window.location.href = '/'} className="text-sm bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded-lg">Keluar</button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard Manajer</h1>
          <p className="text-gray-500 text-sm">Approval Purchase Request</p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">Menunggu Approval</p>
            <p className="text-3xl font-bold text-yellow-500 mt-1">{prs.filter(p => p.status === 'menunggu_approval').length}</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">Disetujui</p>
            <p className="text-3xl font-bold text-green-500 mt-1">{prs.filter(p => p.status === 'disetujui').length}</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">Ditolak</p>
            <p className="text-3xl font-bold text-red-500 mt-1">{prs.filter(p => p.status === 'ditolak').length}</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-4 border-b border-gray-100">
            <p className="text-sm font-medium text-gray-700">Daftar Purchase Request</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-3 text-gray-600">Kode PR</th>
                  <th className="text-left px-4 py-3 text-gray-600">Nama Barang</th>
                  <th className="text-left px-4 py-3 text-gray-600">Jumlah</th>
                  <th className="text-left px-4 py-3 text-gray-600">Urgensi</th>
                  <th className="text-left px-4 py-3 text-gray-600">Status</th>
                  <th className="text-left px-4 py-3 text-gray-600">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {prs.map(pr => (
                  <tr key={pr.id} className="border-t border-gray-50 hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-blue-600">{pr.id}</td>
                    <td className="px-4 py-3">{pr.nama_barang}</td>
                    <td className="px-4 py-3">{pr.jumlah} {pr.satuan}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${urgensiColor(pr.urgensi)}`}>
                        {pr.urgensi}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${badgeColor(pr.status)}`}>
                        {pr.status.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      {pr.status === 'menunggu_approval' && (
                        <div className="flex gap-2">
                          <button onClick={() => handleApprove(pr.id)} className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-xs">Setujui</button>
                          <button onClick={() => handleReject(pr.id)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-xs">Tolak</button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
