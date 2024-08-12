import React from 'react'
import { SignUp } from '@clerk/nextjs'
import { dark } from '@clerk/themes';
import Background from '@/assets/images/background.jpg';


const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-zinc-900 to-black flex items-center justify-center"
    style={{
      backgroundImage: `url("${Background.src}"), linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3))`,
      backgroundBlendMode: 'overlay',
    }}>
      <div className="max-w-lg w-full space-y-8 bg-black px-14 pb-8 pt-2 rounded-lg shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-zinc-400">
            Sign Up for CyberAI
          </h2>
          <p className="mt-2 text-center text-sm text-zinc-600">
            Join the community and start your journey
          </p>
        </div>
        <div className="mt-8 justify-center">
          <SignUp
          appearance={{
            baseTheme: dark,
            layout: {
              socialButtonsPlacement: 'bottom',
            },
            elements: {
              backgroundColor: "red" ,
              formButtonPrimary: "bg-slate-500 hover:bg-slate-400 text-sm",
            },
          }}
           />
        </div>
      </div>
    </div>
  )
}

export default Page