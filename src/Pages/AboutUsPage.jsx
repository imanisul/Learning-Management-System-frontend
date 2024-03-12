
import aboutPageimg from "../assets/course1.png";
import CarouselSlide from '../components/CarouselSlide';
import { celeb } from "../Constants/CelebData";
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
          {celeb && celeb.map(celebrity => <CarouselSlide {...celebrity} key={celebrity.slideNumber} totalSlides={celeb.length}/> )}
       </div>
       </div>
    </HomeLayout>
  );  
}

export default AboutUsPage;
