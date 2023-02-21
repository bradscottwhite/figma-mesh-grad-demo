import bgImg from './bg.png';

const App = () => {
  return (
    <div className="w-screen h-screen relative">
      <img
        src={bgImg}
        alt='background'
        className="w-full h-full fixed left-0 top-0 object-cover"
      />

      <div className="w-full h-[125px] absolute left-0 top-0 bg-slate-400/20 shadow-xl">
        <p className="pl-[78px] pt-[52px] text-[22px] font-semibold text-left text-black [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
          Figma Mesh Gradient Test
        </p>
      </div>

      <div
        className="w-[425px] h-[272px] absolute left-[150px] top-[253px] rounded-[10px] bg-slate-400/20 shadow-2xl"
      >
        <p className='px-10 py-8 text-xl font-medium text-left text-black'>
          This is a test of the mesh gradient in the Figma plugin. With it it converts the designs to React and Tailwind CSS.
        </p>
        <button
          className="float-right mr-14 rounded-[14px] bg-teal-500 border border-[#7ca69e] px-6 py-2 hover:bg-teal-600 transition ease-in-out delay-100 duration-100 hover:scale-95 shadow-xl"
        >
          <p className="text-lg font-medium text-left text-[#f9fafa]">
            Click Here
          </p>
        </button>
      </div>

      <div className="w-full h-[200px] absolute left-0 top-[695px] bg-slate-400/20"></div>
    </div>
  );
};

export default App;
