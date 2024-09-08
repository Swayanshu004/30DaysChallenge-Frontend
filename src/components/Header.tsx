
import Image from "next/image";

function Header() {
  return (
//     <div className=" h-screen bg-gray-900">
//     <div className=" text-2xl  rounded font-bold sm:text-3xl md:text-4xl lg:text-5xl">
//       <span className="text-orange-600">codingआश्रम</span>
      
//     </div>
//   </div>
<header className="bg-gray-800 text-white py-4">
  <div className="container mx-auto flex justify-between items-center">
    <div className="flex items-center">
      <a href="/" className="font-bold text-xl">coding
      <span>आश्रम</span></a>
    </div>
    <nav className="hidden md:flex space-x-4">
      {/* <a href="/" className="hover:text-blue-500">Home</a>
      <a href="/about" className="hover:text-blue-500">About</a>
      <a href="/contact" className="hover:text-blue-500">Contact</a> */}
    </nav>
  </div>
</header>
  );
}
  



 export default Header;
