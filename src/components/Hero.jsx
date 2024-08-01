import headshot from '../assets/headshot.png';

export default function Hero() {
  return (
    <header className="flex h-[100vh] relative">
        <div className="bg-white lg:w-2/3 w-full flex flex-col items-center justify-center">
          <div className="md:w-2/3 w-3/4">
            <h2 className="md:text-6xl md:my-8 text-4xl my-4 font-bold [text-shadow:_-2px_5px_10px_rgb(0_0_0_/_20%)]">
              Hello, My name&apos;s <span className="text-navy-blue">Muhammad Ali</span> Ghaznavi
            </h2>
            <h3 className='md:text-4xl md:my-8 text-3xl my-4 text-navy-blue [text-shadow:_-2px_5px_10px_rgb(0_0_0_/_20%)]'>I&apos;m a Software Developer</h3>
            <button
              className="bg-navy-blue hover:bg-white text-white hover:text-navy-blue font-bold
                        md:p-4 md:text-base p-3 text-sm my-4 rounded-lg [box-shadow:_-2px_10px_20px_rgb(0_0_0_/_20%)]">
              Download Resume
            </button>
          </div>
        </div>
        <div className="bg-navy-blue w-1/3 hidden lg:block"></div>
        <img src={headshot} className="absolute bottom-0 left-2/3 h-[75%] -translate-x-1/2 hidden lg:block" />
    </header>
  );
}