'use client'
export const dynamic = 'force-dynamic'

import { Suspense } from 'react'
import ResetPasswordForm from './ResetPasswordForm'

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div className="flex min-h-svh items-center justify-center"><p>Lädt…</p></div>}>
      <ResetPasswordForm />
    </Suspense>
  )
}
