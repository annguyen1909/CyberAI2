import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import '../globals.css'
import { Inter } from "next/font/google"

export const metadata = {
    title: 'CyberAI',
    description: 'an optimized AI used for detecting vulnerabilities',
    icons:{
        icon: '/icons/logo2.png' 
    }
}

const inter = Inter({subsets: ["latin"]})

export default function RootLayout({ 
    children 
}: {
     children: React.ReactNode
}) {
    return (
        <ClerkProvider>
      <html className='min-w-svh min-h-svh' lang="en">
        <body>
          <main className='bg-black min-h-svh'>
            <div className='justify-center'>
                {children}
            </div>
          </main>
        </body>
      </html>
        </ClerkProvider>
    )
}