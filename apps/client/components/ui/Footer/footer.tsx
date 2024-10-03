export default function Footer() {
  return (
    <footer className='bg-secondary w-full py-6' id='footer'>
      <div className='container mx-auto flex flex-col items-center justify-between px-4'>
        {/* Logo and About */}
        <div className='mb-1 text-center'>
          <h2 className='text-primary text-2xl font-bold'>Ontask</h2>

          <p className='text-md'>مدیریت تسک و ابزار رشدِ مورد اعتماد شما</p>
        </div>
      </div>

      {/* Links */}

      {/* Copyright */}
      <div className='mx-auto mt-8 w-fit border-b-[1px] text-center text-sm'>
        <p>
          تمامی حقوق برای <span className='text-primary'>ontask</span> محفوظ است
        </p>
      </div>
    </footer>
  )
}
