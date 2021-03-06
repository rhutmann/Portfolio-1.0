import { useState } from "react";
import Dropdown from "../../assets/dropdown.svg";
import Github from "../../assets/github.svg";
import Linkdln from "../../assets/linkedin.svg";
import Eben from "../../assets/eben1.svg";
import { Login } from "../../components";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const showMenu = (id) => {
    const menu = document.getElementById(id);
    menu.classList.toggle("hidden");
  };

  return (
    <nav className='bg-white sticky top-0 z-10 w-full border-b border-[#CACACA] py-4'>
      <div className=' flex items-center justify-around '>
        <h1 className=" text-2xl text-[#302c2dc5] font-['Pacifico']">
          Ebenezer Frimpong
        </h1>
        <div className='relative'>
          <button
            onClick={() => showMenu("menu")}
            className='hover:bg-[#f0f0f0] transition-all flex items-center justify-center h-[35px] w-[35px] rounded-full'
          >
            <img src={Dropdown} alt='' className='' />
          </button>

          <div id='menu' className='hidden'>
            <div className='absolute grid grid-cols-2 gap-2 right-[0px] w-[150px] h-[100px] z-10 bg-white rounded border border-[#cacaca] shadow-xl top-[40px] py-2 px-3'>
              <a
                href='//instagram.com/1rutmann'
                target='_blank'
                rel='noopener noreferrer'
                className='flex rounded justify-center items-center border'
              >
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg'
                  alt='instagram'
                  className='w-[24px] h-[24px] '
                />
              </a>
              <a
                href='//linkedin.com/in/ebenezer-frimpong-310390222'
                target='_blank'
                rel='noopener noreferrer'
                className='flex rounded justify-center items-center border'
              >
                <img
                  src={Linkdln}
                  alt='instagram'
                  className='w-[24px] h-[24px] '
                />
              </a>
              <div
                onClick={() => setShowModal(true)}
                className='flex rounded cursor-pointer justify-center items-center border'
              >
                <img
                  src={Eben}
                  alt='instagram'
                  className='w-[24px] h-[24px] '
                />
              </div>
              <a
                href='//github.com/rhutmann'
                target='_blank'
                rel='noopener noreferrer'
                className='flex rounded justify-center items-center border'
              >
                <img
                  src={Github}
                  alt='instagram'
                  className='w-[24px] h-[24px] '
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div>social media</div> */}
      <Login showModal={showModal} setShowModal={setShowModal} />
    </nav>
  );
};

export default Header;
