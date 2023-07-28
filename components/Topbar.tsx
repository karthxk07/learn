export default function Topbar() {
  return (
    <div className="topbar shadow-md shadow-gray-300 fixed top-0 start-1/2 -translate-x-1/2 backdrop-blur-sm rounded-lg m-5 w-[80%] h-10 flex flex-row bg-black/50">
      <p className="my-auto mx-5 flex-grow text-white font-sans font-semibold">
        <a href="/home">manojkalyanam.com</a>
      </p>
      <p className="text-white text-xl my-auto mx-5 cursor-pointer hover:scale-105 duration-100 ease-in-out">
        ☰
      </p>
    </div>
  );
}
