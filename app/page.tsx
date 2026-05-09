'use client'

import { useState } from 'react'
import { signIn, signUp } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function AuthPage() {
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { error: signInError } = await signIn(email, password)
    if (signInError) {
      setError(signInError.message)
    } else {
      router.push('/dashboard')
    }
    setLoading(false)
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (!name || !email || !password) {
      setError('Semua field wajib diisi')
      setLoading(false)
      return
    }

    const { error: signUpError } = await signUp(email, password, name)
    if (signUpError) {
      setError(signUpError.message)
    } else {
      setError('')
      setMode('login')
      setEmail('')
      setPassword('')
      setName('')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1b5e20] to-[#2e7d32] p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#e8f5e9] rounded-full flex items-center justify-center mx-auto mb-3 text-4xl">
            ☪
          </div>
          <h1 className="text-3xl font-bold text-[#1b5e20] mb-1">Quranify</h1>
          <p className="text-sm text-[#7a9477]">Platform Hafalan Al-Qur'an</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-3 mb-4 rounded text-sm text-red-700">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={mode === 'login' ? handleLogin : handleRegister} className="space-y-4">
          {mode === 'register' && (
            <div>
              <label className="block text-xs font-bold text-[#4a6741] mb-1 uppercase tracking-wider">
                Nama Lengkap
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama kamu"
                className="w-full px-4 py-2 border-2 border-[#d4e6d0] rounded-lg focus:border-[#4caf50] focus:outline-none"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-[#4a6741] mb-1 uppercase tracking-wider">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              className="w-full px-4 py-2 border-2 border-[#d4e6d0] rounded-lg focus:border-[#4caf50] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#4a6741] mb-1 uppercase tracking-wider">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 border-2 border-[#d4e6d0] rounded-lg focus:border-[#4caf50] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#2e7d32] hover:bg-[#1b5e20] text-white font-bold py-2 px-4 rounded-lg transition-colors disabled:opacity-50"
          >
            {loading ? 'Memproses...' : mode === 'login' ? 'Masuk' : 'Daftar'}
          </button>
        </form>

        {/* Switch Mode */}
        <div className="text-center mt-4 text-sm text-[#7a9477]">
          {mode === 'login' ? (
            <>
              Belum punya akun?{' '}
              <button
                onClick={() => setMode('register')}
                className="text-[#2e7d32] font-bold hover:underline"
              >
                Daftar sekarang
              </button>
            </>
          ) : (
            <>
              Sudah punya akun?{' '}
              <button
                onClick={() => setMode('login')}
                className="text-[#2e7d32] font-bold hover:underline"
              >
                Masuk di sini
              </button>
            </>
          )}
        </div>

        {/* Demo Credentials */}
        <div className="mt-6 p-3 bg-[#e8f5e9] rounded-lg text-xs text-[#4a6741]">
          <strong>Demo:</strong>
          <br />
          admin@quranify.id / admin123
        </div>
      </div>
    </div>
  )
}
