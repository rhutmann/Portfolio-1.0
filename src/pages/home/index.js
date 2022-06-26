import { useState } from "react";
import {
  About,
  Footer,
  Header,
  Languages,
  Profile,
  Projects,
  Tabs,
  Cup,
  Modal,
} from "../../components";

const Home = ({ setShowModal }) => {
  const [activeTab, setActiveTab] = useState("Projects");

  const tabs = ["Projects", "More"];
  return (
    <div>
      <div className='flex flex-col gap-10 '>
        <div className='flex flex-col md:flex-row md:justify-center gap-5 px-5  md:gap-28 mt-16 lg:px-[200px]'>
          <Profile setShowModal={setShowModal} />
          <About setActiveTab={setActiveTab} setShowModal={setShowModal} />
        </div>

        {/* languages */}
        <div className=' whitespace-nowrap lg:px-[200px]'>
          <Languages />
        </div>

        {/* tabs ::: projects
         */}
        <div className='mb-10'>
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
          <div className=''>{activeTab === "Projects" && <Projects />}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
