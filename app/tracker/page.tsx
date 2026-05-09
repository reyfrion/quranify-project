'use client'
import { useState } from 'react'
import { supabase } from '../../lib/supabase'
import { useRouter } from 'next/navigation'

export default function TrackerPage() {
  const [surah, setSurah] = useState('')
  const [surahNum, setSurahNum] = useState('')
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const router = useRouter()

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // 1. Get the logged-in user
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return alert('Silakan login terlebih dahulu')

    // 2. Insert into your specific table columns
    const { error } = await supabase.from('hafalan').insert([
      { 
        user_id: user.id, // Supabase Auth ID
        surah: surah,
        surah_number: parseInt(surahNum),
        ayah_start: parseInt(start),
        ayah_end: parseInt(end),
        status: 'New',
        date: new Date().toLocaleDateString('id-ID') // Matches your 'date' TEXT column
      }
    ])

    if (error) {
      console.error(error)
      alert('Gagal menyimpan: ' + error.message)
    } else {
      alert('Hafalan berhasil disimpan!')
      router.push('/dashboard')
    }
  }

  return (
    <div className="min-h-screen bg-[#f7faf7] p-8">
      <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg border border-emerald-100">
        <h2 className="text-2xl font-bold text-[#1b5e20] mb-6 text-center">Tambah Hafalan</h2>
        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-2">
              <label className="block text-xs font-bold text-gray-500 uppercase">Nama Surah</label>
              <input type="text" value={surah} onChange={(e) => setSurah(e.target.value)}
                className="w-full p-3 bg-gray-50 rounded-lg border focus:ring-2 focus:ring-emerald-500" placeholder="Al-Baqarah" required />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase">No. Surah</label>
              <input type="number" value={surahNum} onChange={(e) => setSurahNum(e.target.value)}
                className="w-full p-3 bg-gray-50 rounded-lg border" placeholder="2" required />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase">Ayat Mulai</label>
              <input type="number" value={start} onChange={(e) => setStart(e.target.value)}
                className="w-full p-3 bg-gray-50 rounded-lg border" required />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase">Ayat Selesai</label>
              <input type="number" value={end} onChange={(e) => setEnd(e.target.value)}
                className="w-full p-3 bg-gray-50 rounded-lg border" required />
            </div>
          </div>

          <button type="submit" className="w-full bg-[#1b5e20] text-white p-4 rounded-xl font-bold hover:bg-[#154d1a] shadow-md transition-all">
            Simpan ke Tracker
          </button>
        </form>
      </div>
    </div>
  )
}