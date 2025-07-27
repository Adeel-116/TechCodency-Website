import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="w-full h-screen bg-[#0A090F] relative overflow-hidden">
      
      {/* Header placed at the top */}
      <header className="w-full absolute top-0 left-0 z-50">
        <Header />
      </header>

      {/* Top right background glows */}
      <div
        className="w-[500px] h-[500px] absolute rounded-full -top-[200px] -right-[50px] m-4 bg-[#32370F] opacity-100"
        style={{
          filter: 'blur(150px)', 
          boxShadow: 
            '0 0 300px rgba(50, 55, 15, 1), ' +
            '0 0 600px rgba(50, 55, 15, 0.9), ' +
            '0 0 900px rgba(50, 55, 15, 0.7), ' +
            '0 0 1300px rgba(50, 55, 15, 0.5), ' +
            'inset 0 0 200px rgba(107, 127, 47, 0.6)'
        }}
      ></div>

      <div
        className="w-[300px] h-[300px] absolute rounded-full -top-[50px] -right-[70px] bg-[#6B7F2F] opacity-80"
        style={{
          filter: 'blur(100px)',
          boxShadow: 
            '0 0 200px rgba(107, 127, 47, 1), ' +
            '0 0 200px rgba(139, 179, 63, 0.8), ' +
            '0 0 200px rgba(180, 220, 90, 0.4)'
        }}
      ></div>

      {/* Bottom left background glows */}
      <div
        className="w-[300px] h-[200px] absolute rounded-full -bottom-[130px] -left-[80px] m-4 bg-[#32370F] opacity-100"
        style={{
          filter: 'blur(150px)', 
          boxShadow: 
            '0 0 280px rgba(50, 55, 15, 1), ' +
            '0 0 260px rgba(50, 55, 15, 0.9), ' +
            '0 0 440px rgba(50, 55, 15, 0.7), ' +
            '0 0 700px rgba(50, 55, 15, 0.5), ' +
            'inset 0 0 180px rgba(107, 127, 47, 0.6)'
        }}
      ></div>

      <div
        className="w-[200px] h-[200px] absolute rounded-full -bottom-[60px] -left-[60px] bg-[#6B7F2F] opacity-80"
        style={{
          filter: 'blur(80px)',
          boxShadow: 
            '0 0 200px rgba(107, 127, 47, 1), ' +
            '0 0 200px rgba(139, 179, 63, 0.8), ' +
            '0 0 200px rgba(180, 220, 90, 0.4)'
        }}
      ></div>

    </div>
  );
}
