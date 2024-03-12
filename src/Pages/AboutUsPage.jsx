import apj from '../assets/apj.png';
import billgates from '../assets/billGates.png';
import aboutPageimg from "../assets/course1.png";
import einsten from '../assets/einstein.png';
import nelson from '../assets/nelsonMandela.png';
import steve from '../assets/steveJobs.png';
import HomeLayout from "../Layout/HomeLayout";

function AboutUsPage() {
  return (
    <HomeLayout>
      <div className="pl-20 pt-20 flex flex-col text-whitw">
        <div className="flex items-center gap-5 mx-10">
          <section className="w-1/2 space-y-10 ">
            <h1 className="text-5xl font-semibold">
              Afforable and
              <div className="w-max">
                <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">
                  quaility Education
                </h1>
              </div>
            </h1>
            <p className="text-xl text-white">
              Our goal is to provide best education in the field of Computer
              Science. And in this era we the best we cab ebgdfnne f jfnmsdfms
              dfdf sd fnds fend fend dfbnd chefbe cfdebce cenc jedfbcece fjef
            </p>
          </section>

          <div className="w-1/2">
            <img
              id="test1"
              style={{ filter: "drop-shadow(0px 10px 10px rgb(0,0,0));" }}
              alt="about main page"
              className="drop-shadow-2xl"
              src={aboutPageimg}
            />
          </div>
        </div>
        
        <div className="carousel m-auto w-1/2 my-16">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              {/* for personality image */}
              <img
                className="w-40 rounded-full border-2 border-gray-400"
                src={nelson}
                alt="Nelson Mandela"
              />
              {/* for writting the quotes */}
              <p className="text-xl text-gray-200">
                Education is the most powerful tool you can use to change the
                world.
              </p>
              {/* for personality name */}
              <h3 className="text-2xl font-semibold">Nelson Mandela</h3>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide5" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide2" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              {/* for personality image */}
              <img
                className="w-40 rounded-full border-2 border-gray-400"
                src={apj}
                alt="APJ Abdul Kalam"
              />
              {/* for writting the quotes */}
              <p className="text-xl text-gray-200">
                Learning gives creativity, creativity leads to thinking,
                thinking provides knowledge, knowledge makes you great.
              </p>
              {/* for personality name */}
              <h3 className="text-2xl font-semibold">A. P. J. Abdul Kalam</h3>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide3" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              {/* for personality image */}
              <img
                className="w-40 rounded-full border-2 border-gray-400"
                src={einsten}
                alt="einstein"
              />
              {/* for writting the quotes */}
              <p className="text-xl text-gray-200">
                Education is not the learning of facts, but the training of the
                mind to think.
              </p>
              {/* for personality name */}
              <h3 className="text-2xl font-semibold">Albert Einstein</h3>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide4" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              {/* for personality image */}
              <img
                className="w-40 rounded-full border-2 border-gray-400"
                src={steve}
                alt="Steve Jobs"
              />
              {/* for writting the quotes */}
              <p className="text-xl text-gray-200">
                Innovation distinguishes between a leader and a follower.
              </p>
              {/* for personality name */}
              <h3 className="text-2xl font-semibold">Steve Jobs</h3>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide5" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide5" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              {/* for personality image */}
              <img
                className="w-40 rounded-full border-2 border-gray-400"
                src={billgates}
                alt="Bill Gates"
              />
              {/* for writting the quotes */}
              <p className="text-xl text-gray-200">
                Technology is just a tool. In terms of getting the kids working
                together and motivating them, the teacher is the most
                important.
              </p>
              {/* for personality name */}
              <h3 className="text-2xl font-semibold">Bill Gates</h3>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
    </div>
    </div>
    </HomeLayout>
  );
}

export default AboutUsPage;
