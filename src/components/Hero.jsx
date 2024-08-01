import headshot from '../assets/headshot.png';

export default function Hero() {
  return (
    <header className="flex h-[100vh] relative">
        <div className="bg-white lg:w-2/3 w-full flex flex-col items-center justify-center">
          <div className="w-2/3">
            <h2 className="text-6xl font-bold my-8 [text-shadow:_-2px_5px_10px_rgb(0_0_0_/_20%)]">
              Hello, My name&apos;s <span className="text-navy-blue">Muhammad Ali</span> Ghaznavi
            </h2>
            <h3 className='text-4xl my-8 text-navy-blue [text-shadow:_-2px_5px_10px_rgb(0_0_0_/_20%)]'>I&apos;m a Software Developer</h3>
            <button className="bg-navy-blue hover:bg-white text-white hover:text-navy-blue font-bold p-4 rounded-lg
                              [box-shadow:_-2px_10px_20px_rgb(0_0_0_/_20%)] hover:[box-shadow:_-2px_10px_20px_rgb(0_0_0_/_40%)]">
              Download Resume
            </button>
          </div>
        </div>
        <div className="bg-navy-blue w-1/3 hidden lg:block"></div>
        <img src={headshot} className="absolute bottom-0 left-2/3 h-[75%] -translate-x-1/2 hidden lg:block" />
    </header>
  );
}