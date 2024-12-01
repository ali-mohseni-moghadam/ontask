import ProfileSection from "./ProfileSection/ProfileSection"
import DeskSection from "./DeskSection/DeskSection"
import PropingSection from "./PropingSection/PropingSection"

export default function DashboardPage() {
  return (
    <section>
      <ProfileSection />
      <hr className="my-6 w-full rounded-3xl border border-secondary" />

      <DeskSection />
      <hr className="my-6 w-full rounded-3xl border border-secondary" />

      <PropingSection />
    </section>
  )
}
