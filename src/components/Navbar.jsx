import logobg from '../assets/imgs/logobg.png';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full bg-[#83B053]">
        <div className="py-5 space-y-3">
          <div className="border-4 border-white"></div>
          <div className="border-2 border-white"></div>
        </div>

        <div className="flex justify-between items-center md:my-14 my-5 md:flex-row flex-col">
          <div className="md:w-[7%] w-full flex items-center justify-center md:pb-0 pb-3">
            <Link to="/">
              <img src={logobg} alt="" className="md:w-full md:h-full w-20 h-20" />
            </Link>
          </div>
          <div className="text-center md:w-[80%] w-full flex items-center flex-col md:space-y-5 space-y-2">
            <h1 className="md:text-6xl text-base text-white coustard-regular font-black">
              Loving hearts Senior Living LLC
            </h1>
            <h1 className="md:text-4xl text-lg text-white open-sans font-medium">
              Assisted Living &amp; Respite Home
            </h1>
          </div>
          <div className="text-center w-[10%] items-center flex-col md:block hidden"></div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-[60%]">
            <div className="border-2 border-dashed border-white my-3"></div>
          </div>
        </div>

        <nav className="flex justify-center items-center">
          <div className="md:w-[50%] w-full flex justify-between md:gap-0 gap-2 items-center coustard-regular text-white uppercase md:px-0 px-5">
            <button className="uppercase md:text-base text-xs hover:text-sec" onClick={() => navigate('/')}>
              home
            </button>
            <button className="uppercase md:text-base text-xs hover:text-sec" onClick={() => navigate('/amenities')}>
              Amenities
            </button>
            <button className="uppercase md:text-base text-xs hover:text-sec" onClick={() => navigate('/gallerypage')}>
              Gallery
            </button>
            <button className="uppercase md:text-base text-xs hover:text-sec" onClick={() => navigate('/contactpage')}>
              Contact Us
            </button>
          </div>
        </nav>

        <div className="py-5 space-y-3">
          <div className="border-4 border-white"></div>
          <div className="border-2 border-white"></div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
