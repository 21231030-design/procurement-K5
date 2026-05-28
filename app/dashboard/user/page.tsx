'use client'
import { useState } from 'react'

export default function UserDashboard() {
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({
    nama_barang: '',
    spesifikasi: '',
    jumlah: '',
    satuan: '',
    tanggal_butuh: '',
    urgensi: 'sedang',
  })

  const handleSubmit = async () => {
    alert('Purchase Request berhasil diajukan!')
    setShowForm(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-blue-700 text-white px-6 py-4 flex justify-between items-center shadow">
        <div className="flex items-center gap-3">
          <div className="bg-white text-blue-700 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm">P</div>
          <span className="font-semibold text-lg">ProcureITK</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-blue-200">👤 User</span>
          <button
            onClick={() => window.location.href = '/'}
            className="text-sm bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded-lg"
          >
            Keluar
          </button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard User</h1>
          <p className="text-gray-500 text-sm">Ajukan permintaan barang atau jasa</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">Total PR Diajukan</p>
            <p className="text-3xl font-bold text-blue-600 mt-1">0</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">Menunggu Approval</p>
            <p className="text-3xl font-bold text-yellow-500 mt-1">0</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">Disetujui</p>
            <p className="text-3xl font-bold text-green-500 mt-1">0</p>
          </div>
        </div>

        {/* Tombol Buat PR */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-700">Purchase Request</h2>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
          >
            + Buat PR Baru
          </button>
        </div>

        {/* Form PR */}
        {showForm && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
            <h3 className="font-semibold text-gray-800 mb-4">Form Purchase Request</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600 mb-1 block">Nama Barang/Jasa</label>
                <input
                  type="text"
                  value={form.nama_barang}
                  onChange={(e) => setForm({...form, nama_barang: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Contoh: Laptop, Kertas A4"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600 mb-1 block">Jumlah</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={form.jumlah}
                    onChange={(e) => setForm({...form, jumlah: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0"
                  />
                  <input
                    type="text"
                    value={form.satuan}
                    onChange={(e) => setForm({...form, satuan: e.target.value})}
                    className="w-24 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="pcs/box"
                  />
                </div>
              </div>
              <div className="col-span-2">
                <label className="text-sm text-gray-600 mb-1 block">Spesifikasi</label>
                <textarea
                  value={form.spesifikasi}
                  onChange={(e) => setForm({...form, spesifikasi: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  placeholder="Jelaskan spesifikasi barang yang dibutuhkan..."
                />
              </div>
              <div>
                <label className="text-sm text-gray-600 mb-1 block">Tanggal Dibutuhkan</label>
                <input
                  type="date"
                  value={form.tanggal_butuh}
                  onChange={(e) => setForm({...form, tanggal_butuh: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600 mb-1 block">Urgensi</label>
                <select
                  value={form.urgensi}
                  onChange={(e) => setForm({...form, urgensi: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="rendah">Rendah</option>
                  <option value="sedang">Sedang</option>
                  <option value="tinggi">Tinggi</option>
                </select>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <button
                onClick={handleSubmit}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium"
              >
                Ajukan PR
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-lg text-sm font-medium"
              >
                Batal
              </button>
            </div>
          </div>
        )}

        {/* Tabel PR */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-4 border-b border-gray-100">
            <p className="text-sm font-medium text-gray-700">Riwayat Purchase Request</p>
          </div>
          <div className="p-8 text-center text-gray-400 text-sm">
            Belum ada purchase request. Klik "Buat PR Baru" untuk memulai.
          </div>
        </div>
      </div>
    </div>
  )
}
