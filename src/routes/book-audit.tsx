import { createFileRoute } from '@tanstack/react-router'
import { ScannerAudit } from '@/components/scanner-audit'
import { TrustReviews } from '@/components/trust-reviews'

export const Route = createFileRoute('/book-audit')({
  component: BookAuditPage,
})

function BookAuditPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-10">
      <ScannerAudit />
      <TrustReviews />
    </div>
  )
}
export default BookAuditPage