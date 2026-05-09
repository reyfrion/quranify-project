'use client'

import { supabase } from '../../lib/supabase'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  const router = useRouter()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-[#f7faf7]">
      {/* Navbar */}
      <nav className="bg-[#1b5e20] text-white p-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">☪ Quranify</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-semibold transition"
          >
            Keluar
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="text-6xl mb-4">🚀</div>
          <h2 className="text-3xl font-bold text-[#1b5e20] mb-4">Selamat Datang di Quranify!</h2>
          <p className="text-[#7a9477] text-lg mb-8">
            Platform hafalan Al-Qur'an modern sudah siap digunakan.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-[#e8f5e9] p-6 rounded-xl">
              <div className="text-4xl mb-3">📖</div>
              <h3 className="font-bold text-[#1b5e20] mb-2">Tracker Hafalan</h3>
              <p className="text-sm text-[#7a9477]">Catat dan kelola hafalan kamu</p>
            </div>
            <div className="bg-[#e8f5e9] p-6 rounded-xl">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="font-bold text-[#1b5e20] mb-2">Leaderboard</h3>
              <p className="text-sm text-[#7a9477]">Bersaing dengan penghafal lainnya</p>
            </div>
            <div className="bg-[#e8f5e9] p-6 rounded-xl">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="font-bold text-[#1b5e20] mb-2">Halaqah</h3>
              <p className="text-sm text-[#7a9477]">Bergabung dengan komunitas belajar</p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-[#fff9c4] rounded-xl border-2 border-[#f9a825]">
            <p className="text-[#7b5800] font-semibold">
              💡 Fitur lengkap sedang dikembangkan. Kembali lagi segera!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
