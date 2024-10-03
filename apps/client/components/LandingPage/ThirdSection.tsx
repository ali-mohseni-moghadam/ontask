import * as motion from 'framer-motion/client'

import { ArrowDownIcon } from '@radix-ui/react-icons'

import { PieChartIcon } from '@radix-ui/react-icons'
import { CheckboxIcon } from '@radix-ui/react-icons'
import { TokensIcon } from '@radix-ui/react-icons'
import { BarChartIcon } from '@radix-ui/react-icons'
import Card from './modules/Card'

const cardsData = [
  {
    icon: PieChartIcon,
    number: 92,
    description: 'رشد بهره‌وری',
    percent: true
  },
  {
    icon: CheckboxIcon,
    number: 564,
    description: 'تسک های انجام شده'
  },
  {
    icon: TokensIcon,
    number: 124,
    description: 'میانگین تعداد پروژه‌های تیم'
  },
  {
    icon: BarChartIcon,
    number: 64,
    description: 'رشد ثرمایه',
    percent: true
  }
]

export default function ThirdSection() {
  return (
    <section className='mb-10 flex flex-col items-center justify-center rounded-3xl px-2 py-4 shadow-md'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className=''
      >
        <h3 className='text-primary mb-4 text-2xl'>
          ما نتیجه محور هستیم و این را ثابت میکنیم
        </h3>
        <div className='mb-8 flex items-center justify-center gap-x-2'>
          <ArrowDownIcon className='size-5' />
          <p className='text-xl'>به نتایج نگاه کنید</p>
          <ArrowDownIcon className='size-5' />
        </div>
      </motion.div>
      <div className='flex w-full flex-col items-center justify-center md:grid md:grid-cols-2 md:gap-4'>
        {cardsData.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </section>
  )
}
