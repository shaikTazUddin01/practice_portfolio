import About from "../component/About";
import MainBanner from "../component/MainBanner";
import WhatDo from "../component/WhatDo";

const Home = () => {
    return (
        <div>
            <MainBanner></MainBanner>
            <About></About>
            <WhatDo></WhatDo>
        </div>
    );
};

export default Home;