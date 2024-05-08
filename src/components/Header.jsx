export default function Header() {
  return (
    <header
      style={{ backgroundImage: 'url("./images/header.jpg")' }}
      className="w-full bg-left bg-cover bg-no-repeat h-[75vh] sm:h-screen relative flex lg:justify-end justify-center mb-64 lg:mb-20 items-center p-8"
    >
      <div className="mx-5 md:mx-8 text-center max-w-md lg:static absolute top-full mt-16 lg:mt-0">
        <h2 className="text-4xl md:text-6xl text-slate-800 font-bold font-playFair text-center">
          Find your favourite movie here
        </h2>
        <p className="mt-5 text-slate-600 text-base md:text-lg font-semibold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla error
          eligendi iure quaerat neque dolores quae quibusdam provident tenetur
          repudiandae?
        </p>
      </div>
    </header>
  );
}
