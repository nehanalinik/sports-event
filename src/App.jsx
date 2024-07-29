import EventVideo from "./assets/EventVideo.mp4";
import Logo from "./assets/logo.png";
function App() {
  return (
    <section>
      <div className="background"></div>
      <div className="overflow-auto h-[99vh] bg-white/10 z-10 m-1 rounded-md scroll-smooth">
        <div className="flex flex-col p-4 items-center justify-center w-full">
          <div className="flex items-center w-full">
          <img src={Logo} alt="logo" width={110} />
          <div className=" w-[80%] flex flex-col items-center">
              <div className="text-xl md:text-2xl lg:text-4xl text-slate-200">
              BPBO Sports Event 
              </div>
              <div className="text-lg md:text-xl lg:text-2xl font-bold text-slate-200 tracking-wide">
               2024-25
              </div>
            </div>
          </div>
          <div className="mt-4 mb-12 w-full md:w-1/2 lg:w-2/5 flex items-center justify-center">
            <video
              type="video/mp4"
              className="rounded-lg object-fill"
              src={EventVideo}
              controls
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
