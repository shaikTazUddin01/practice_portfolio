import DeveloperImg from '../assets/Developer.png'
import bg from '../assets/Group 12.png'
import user from '../assets/user.png'

const MainBanner = () => {
    console.log('Background Image Path:', bg);

    return (
        <div className="flex items-center">
            <div className="w-[10%]">
                <img src={DeveloperImg} alt="" className='h-full -mt-20 ' />
            </div>
            <div className="w-[40%] space-y-5 items-center">
                <h3 className='text-4xl font-semibold -mt-10'>Hi, I am</h3>
                <h1 className='text-6xl font-bold'>Mary Hardy</h1>
                <p className='text-[16px]'>Shot what able cold new see hold.Friendly as an betrayed formerly he. Morning because as to society behaved moments.</p>
            </div>
            <div className="w-[50%] cover h-[600px]  relative z-0 flex justify-center items-center"
                style={{ backgroundImage: `url(${bg})`}}
            >
                <img src={user} alt="" className='w-[80%] z-20' />
                <img src={bg} alt="" className='absolute top-[200px] -z-10' />
            </div>
        </div>
    );
};

export default MainBanner;