import * as motion from "framer-motion/client"

import { CheckIcon } from "@radix-ui/react-icons"

const Text = [
  {
    title: "تماس تصویری"
  },

  {
    title: "چت به صورت همزمان"
  },
  {
    title: "انجام تسک به صورت گروهی"
  }
]

export default function SecondSection() {
  return (
    <section className="mt-16">
      <div>
        <motion.div
          className="mb-16 rounded-3xl bg-secondary py-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="mb-6 rounded-lg border-b border-secondary bg-secondary text-2xl lg:text-3xl">
            ویژگی های{" "}
            <span className="text-3xl font-bold text-primary">آنتَسک</span>
          </p>
          {Text.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center py-2 text-xl"
            >
              <CheckIcon className="ml-2 size-5" />
              <p>{item.title}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
