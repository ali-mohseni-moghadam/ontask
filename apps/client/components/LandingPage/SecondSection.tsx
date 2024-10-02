import * as motion from 'framer-motion/client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const ConstantImage = [
  {
    src: '',
    fallback: 1
  },
  {
    src: '',
    fallback: 2
  },
  {
    src: '',
    fallback: 3
  },
  {
    src: '',
    fallback: 4
  },
  {
    src: '',
    fallback: 5
  },
  {
    src: '',
    fallback: 6
  }
]

export default function SecondSection() {
  return (
    <section className='mt-16'>
      <div>
        <motion.div
          className='mb-20 rounded-3xl px-2 py-4 shadow-md'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className='flex flex-col pb-4'>
            <h4 className='text-primary mb-5 text-3xl'>اسپانسر‌ها</h4>

            <div className='flex flex-row flex-wrap justify-evenly gap-4'>
              {ConstantImage.map(item => (
                <Avatar key={item.fallback} className='h-[80px] w-[80px]'>
                  <AvatarImage src='https://img.icons8.com/external-flaticons-flat-circular-flat-icons/64/external-sponsor-live-streaming-flaticons-flat-circular-flat-icons.png' />
                  <AvatarFallback className='border-accentColor border shadow-md'>
                    {item.fallback}
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          className='mb-16 rounded-3xl px-3 py-5 shadow-md'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className='border-secondary mb-6 border-b'>
            ویژگی های <span className='text-primary text-xl'>آن تسک</span>
          </p>
          <h3 className='font-bolder mb-6 text-2xl'>
            ابزار عالی برای آسان تر کردن کار تیمی شما
          </h3>
          <p>تماس تصویری</p>
          <p className='my-3'>چت به صورت همزمان</p>
          <p>انجام تسک به صورت گروهی</p>
        </motion.div>
      </div>
    </section>
  )
}
