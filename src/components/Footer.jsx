export default function Footer() {
  return (
    <footer className="bg-slate-700 border-t border-t-slate-400 mt-36">
      <div className="container flex justify-center flex-wrap mx-auto px-12 pt-12 pb-5">
        <p className="text-center text-sm md:text-base text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius ipsam
          id illum explicabo tenetur dolores accusantium nesciunt officiis eum
          inventore? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Reprehenderit, atque.
        </p>

        <div className="flex items-center border-b gap-4 w-full mt-4 md:mt-8 pb-3 justify-center">
          <a href="#" className="hover:scale-125">
            <img src="../images/ig.svg" className="w-6 md:w-8 transition-transform" alt="" />
          </a>
          <a href="#" className="hover:scale-125 transition-transform">
            <img src="../images/whatsapp.svg" className="w-6 md:w-8 " alt="" />
          </a>
          <a href="#" className="hover:scale-125 transition-transform">
            <img src="../images/github.svg" className="w-6 md:w-8 " alt="" />
          </a>
          <a href="#" className="hover:scale-125 transition-transform">
            <img src="../images/discord.svg" className="w-6 md:w-8 " alt="" />
          </a>
        </div>
        <p className="mt-2 text-slate-400">
          Made by &copy; Bima Arya Sena | 2024
        </p>
      </div>
    </footer>
  );
}
