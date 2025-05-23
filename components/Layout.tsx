import Navbar from './Navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="p-4 max-w-4xl mx-auto">{children}</main>
    </>
  )
}