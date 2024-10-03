import { ForwardRefExoticComponent, RefAttributes } from 'react'
import { IconProps } from '@radix-ui/react-icons/dist/types'

import * as motion from 'framer-motion/client'

type CardType = {
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
  number: number
  description: string
  percent?: boolean
}

export default function Card({
  icon: Icon,
  number,
  description,
  percent
}: CardType) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className='my-4 flex w-full flex-col items-end gap-5 rounded-3xl p-4 py-8 shadow-sm'
    >
      <Icon className='text-primary mb-2 size-7' />

      {percent ? (
        <h3 className='text-xl font-bold'>{number} %</h3>
      ) : (
        <h3 className='text-xl font-bold'>{number}</h3>
      )}
      <p className='text-sm text-gray-500'>{description}</p>
    </motion.div>
  )
}
