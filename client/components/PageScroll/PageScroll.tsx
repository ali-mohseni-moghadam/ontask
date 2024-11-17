'use client'

import { useScroll } from 'framer-motion'
import { motion } from 'framer-motion'

export default function PageScroll() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className='progress-bar'
    ></motion.div>
  )
}
