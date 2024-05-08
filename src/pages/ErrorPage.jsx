export default function ErrorPage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-8 px-12">
        <img src="../images/error.svg" className="max-w-xs md:max-w-md" alt="" />

        <h2 className="mt-16 text-4xl font-bold md:text-5xl font-playFair text-center text-slate-600">
          Forbidden, the site can`t be reach !!!
        </h2>
      </div>
    </>
  );
}
