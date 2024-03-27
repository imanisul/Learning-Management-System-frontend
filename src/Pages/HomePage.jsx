import { BiSolidShoppingBags } from "react-icons/bi";
import { FaMedal } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import { IoCodeSlash } from "react-icons/io5";
import { Link } from "react-router-dom";

import HomePageImage from "../assets/course2.png";
import HomeLayout from "../Layout/HomeLayout";
function HomePage() {


  const stats = [
    { id: 1, name: 'Different Courses', value: '20+' },
    { id: 2, name: 'Career Transitions', value: '12000+' },
    { id: 3, name: 'Salray Hike', value: '55%' },
    {id: 4, name: "Hiring Patners", value: "500+"},
  ]

  const features = [
    {
      name: 'Push to deploy',
      description:
        'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
      icon: IoCodeSlash,
    },
    {
      name: 'SSL certificates',
      description:
        'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
      icon: BiSolidShoppingBags,
    },
    {
      name: 'Simple queues',
      description:
        'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
      icon: GiAchievement ,
    },
    {
      name: 'Advanced security',
      description:
        'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
      icon: FaMedal ,
    },
  ]
  

  return (
    <HomeLayout>
      <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[96vh]">
        <div></div>
        <div className="w-1/2 space-y-6">
          <h1 className="text-5xl font-semibold">
            Find the best
            <div className="w-max">
              <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">
                courses
              </h1>
            </div>
          </h1>
          <p className="text-xl text-gray-200">
            Best courses are avialable here with highly skilled and qualified
            teachers at a very afforable cost.
          </p>

          <div className="space-x-6">
            <Link to="/courses">
              <button className="bg-rose-700 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-orange-500 transition-all ease-in-out duration-300">
                Explore Courses
              </button>
            </Link>

            <Link to="/contact">
              <button className="border border-rose-700 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-rose-700 transition-all ease-in-out duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        <div className="w-1/2 flex items-center justify-center">
          <img src={HomePageImage} alt="homepage image" />
        </div>
      </div>

      <div className="sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4 ">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4 shadow-[0_0_10px_black] px-10 py-5 rounded-lg">
              <dt className="text-base leading-7 text-orange-600 italic ">  {stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))} 
        </dl>
      </div>
    </div>  


  


    <div className=" sm:py-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-orange-600 sm:text-4xl">
            Explore Our Ecosystem
          </p>
          <p className="mt-6 text-lg leading-8 text-white">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-orange-600">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-rose-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-white">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  


    <div className="sm:py-10">
      <div className="mx-auto max-w-7xl px-2 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-orange-600">
          Our Achivers Works Here
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
            alt="Transistor"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
            alt="Reform"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
            alt="Tuple"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
            alt="Statamic"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
 

    </HomeLayout>
  );
}

export default HomePage;
