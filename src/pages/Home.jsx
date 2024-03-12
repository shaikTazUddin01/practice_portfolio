import About from "../component/About";
import MainBanner from "../component/MainBanner";
import Resume from "../component/Resume";
import WhatDo from "../component/WhatDo";

const Home = () => {
    return (
        <div>
            <MainBanner></MainBanner>
            <About></About>
            <WhatDo></WhatDo>
            <Resume></Resume>
        </div>
    );
};

export default Home;