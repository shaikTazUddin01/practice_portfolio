

const About = () => {
    return (
        <div className='max-w-4xl mx-auto bg-yellow-100 p-20 mt-20'>
            <div className='text-center space-y-2'>
                <h1 className='text-4xl font-bold'>About Me</h1>
                <p className='text-[16px]'>I, m a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional resulfs while working with me. Delivering work within time and budget which meets clients requirements in our mata.</p>
            </div>
            <div className='flex justify-between mt-4'>
                <div className="text-center">
                    <p>Name<br /><span className="font-semibold">Mary Hardy</span></p>
                </div>
                <div className="text-center">
                    <p>Email:<br /><span className="font-semibold">info@gmail.com</span></p>
                </div>
                <div className="text-center">
                    <p>Date of birth<br /><span className="font-semibold">11 Npvember 1987</span></p>
                </div>
                <div className="text-center">
                    <p>From<br /><span className="font-semibold">Los Angeles, USA</span></p>
                </div>
            </div>
        </div>
    );
};

export default About;