import { cookies } from 'next/headers'
import ProfileSection from './ProfileSection/ProfileSection'
import { redirect } from 'next/navigation'
import DeskSection from './DeskSection/DeskSection'
import PropingSection from './PropingSection/PropingSection'

export default function DashboardPage() {
  const cookieStore = cookies().get('access-token')

  if (!cookieStore) {
    redirect('login')
  }

  return (
    <section>
      <ProfileSection />
      <hr className='my-6 w-full rounded-3xl border border-secondary' />

      <DeskSection />
      <hr className='my-6 w-full rounded-3xl border border-secondary' />

      <PropingSection />
    </section>
  )
}
