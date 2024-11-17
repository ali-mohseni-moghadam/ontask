import DeskPage from '@/components/Desk/DeskPage'

export type DeskParams = {
  params: {
    id: string
  }
}

export default function page({ params }: DeskParams) {
  return <DeskPage params={params} />
}
