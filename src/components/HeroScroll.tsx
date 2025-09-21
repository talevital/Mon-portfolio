'use client'
import React from 'react'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import Image from 'next/image'

export function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Découvrez l'univers de <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none gradient-text">
               Vital
              </span>
            </h1>
          </>
        }
      >
        <Image
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1400&h=720&q=80&auto=format&fit=crop"
          alt="Portfolio de Vital Oura - Développeur Full Stack"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  )
}
