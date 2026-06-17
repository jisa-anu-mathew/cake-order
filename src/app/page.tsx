export default function Home() {
  return (
    <main className="min-h-screen bg-amber-50 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-amber-900 mb-4">
        🎂 CakeOrder
      </h1>
      <p className="text-amber-700 text-lg mb-8">
        Custom cakes, delivered with love
      </p>
      <div className="flex gap-4">
        
       <a   href="/login"
          className="bg-amber-800 text-white px-6 py-3 rounded-lg hover:bg-amber-900"
        >
          Login
        </a>
        
         <a href="/register"
          className="border border-amber-800 text-amber-800 px-6 py-3 rounded-lg hover:bg-amber-100"
        >
          Register
        </a>
      </div>
    </main>
  )
}