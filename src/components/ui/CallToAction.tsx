import React from 'react'
import { Button } from './button'
import { cn } from '@/lib/utils'

export default function CallToAction() {
  return (
    <div className={cn("bg-threeCircles absolute -top-1/4 left-1/2 -translate-x-1/2  h-[379px] max-w-[327px]  w-full rounded-lg bg-peach  text-white",
    'md:max-w-[690px]',
    'lg:max-w-[1111px] ')}>

      <div className={cn('flex flex-col items-center justify-center gap-8 h-full md:p-14'," lg:flex-row lg:justify-between")}>
          <header className="flex flex-col gap-4 w-full px-6 justify-center items-center  lg:items-start lg:text-left lg:max-w-lg ">
            <h1 className='md:max-w-sm '>Let’s talk about your project</h1>
            <p>
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </header>
          <Button className="h-[56px] w-[152px] uppercase">Get in touch</Button>
          <div className="-z-10 bg-threeCircles absolute top-0 left-0 h-full w-full  bg-contain"></div>
          
          </div>
    </div>
  )
}
