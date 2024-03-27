
import aboutPageimg from "../assets/course1.png";
import CarouselSlide from '../components/CarouselSlide';
import { celeb } from "../Constants/CelebData";
import HomeLayout from "../Layout/HomeLayout";

function AboutUsPage() {


  const people = [
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    // More people...
  ]


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

       <div className=" sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-orange-600 sm:text-4xl">Meet our leadership</h2>
          <p className="mt-6 text-lg leading-8 text-white">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
            suspendisse.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-rose-600">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-white">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>



    </HomeLayout>
  );  
}

export default AboutUsPage;
