'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Loader2, AlertCircle, CheckCircle2, Droplets } from 'lucide-react'

export default function Login() {
  const router = useRouter()

  const [loginMode, setLoginMode] = useState<'email' | 'mobile'>('email')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const [formData, setFormData] = useState({
    emailOrMobile: '',
    password: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    setSuccess(false)

    try {
      await new Promise(res => setTimeout(res, 1500))

      if (!formData.emailOrMobile || !formData.password) {
        setError('Please fill in all fields')
        return
      }

      setSuccess(true)
      setTimeout(() => router.push('/user/devices'), 1000)
    } catch {
      setError('Login failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className='min-h-screen w-full bg-linear-to-br from-black via-zinc-950 to-zinc-900 flex items-center justify-center px-4 py-16 relative overflow-hidden'>

      {/* Background Glow */}
      <div className='absolute inset-0 opacity-30'>
        <div className='absolute top-[-20%] left-[-10%] w-150 h-150 bg-blue-500 rounded-full blur-[180px]' />
        <div className='absolute bottom-[-20%] right-[-10%] w-150 h-150 bg-cyan-400 rounded-full blur-[180px]' />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='relative z-10 w-full max-w-md'
      >

        {/* Logo */}
        <div className='text-center mb-8'>
          <div className='flex items-center justify-center gap-3 mb-4'>
            <div className='p-3 rounded-2xl bg-blue-500/20'>
              <Droplets className='text-blue-400' />
            </div>
            <h1 className='text-3xl font-bold text-white'>Neernaya</h1>
          </div>
          <p className='text-white/60'>Sign in to your dashboard</p>
        </div>

        {/* Alerts */}
        {error && (
          <Alert className='mb-6 border-red-500/40 bg-red-500/10'>
            <AlertCircle className='h-4 w-4 text-red-400' />
            <AlertDescription className='text-red-400'>{error}</AlertDescription>
          </Alert>
        )}

        {success && (
          <Alert className='mb-6 border-green-500/40 bg-green-500/10'>
            <CheckCircle2 className='h-4 w-4 text-green-400' />
            <AlertDescription className='text-green-400'>Login successful! Redirecting...</AlertDescription>
          </Alert>
        )}

        {/* Card */}
        <div className='rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-8'>

          <Tabs value={loginMode} onValueChange={(v) => setLoginMode(v as 'email' | 'mobile')}>

            <TabsList className='grid w-full grid-cols-2 mb-6 bg-white/5 border border-white/10'>
              <TabsTrigger value='email'>Email</TabsTrigger>
              <TabsTrigger value='mobile'>Mobile</TabsTrigger>
            </TabsList>

            <form onSubmit={handleSubmit} className='space-y-5'>

              <TabsContent value='email' className='mt-0'>
                <LabelInput label='Email Address'>
                  <Input
                    name='emailOrMobile'
                    type='email'
                    placeholder='you@example.com'
                    value={formData.emailOrMobile}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    className='bg-white/5 border-white/10 text-white placeholder:text-white/40'
                  />
                </LabelInput>
              </TabsContent>

              <TabsContent value='mobile' className='mt-0'>
                <LabelInput label='Mobile Number'>
                  <Input
                    name='emailOrMobile'
                    type='tel'
                    placeholder='+91 98765 43210'
                    value={formData.emailOrMobile}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    className='bg-white/5 border-white/10 text-white placeholder:text-white/40'
                  />
                </LabelInput>
              </TabsContent>

              <LabelInput label='Password'>
                <Input
                  name='password'
                  type='password'
                  placeholder='••••••••'
                  value={formData.password}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  className='bg-white/5 border-white/10 text-white placeholder:text-white/40'
                />
              </LabelInput>

              <div className='flex justify-end'>
                <Link href='#' className='text-sm text-blue-400 hover:text-blue-300'>
                  Forgot password?
                </Link>
              </div>

              <Button
                type='submit'
                disabled={isLoading}
                className='w-full rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 hover:opacity-90 font-semibold'
              >
                {isLoading ? (
                  <>
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                    Signing in...
                  </>
                ) : 'Sign In'}
              </Button>

            </form>
          </Tabs>

          <div className='mt-6 text-center'>
            <p className='text-white/60 text-sm'>
              Don&apos;t have an account?{' '}
              <Link href='/auth/signup' className='text-blue-400 hover:text-blue-300'>
                Sign up here
              </Link>
            </p>
          </div>

        </div>

      </motion.div>
    </main>
  )
}

function LabelInput({ label, children }: { label: string, children: React.ReactNode }) {
  return (
    <div className='space-y-2'>
      <Label className='text-white/70'>{label}</Label>
      {children}
    </div>
  )
}
