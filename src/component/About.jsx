

const About = () => {
    return (
        <div className='px-28'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold'>About Me</h1>
                <p className='text-[16px]'>I, m a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional resulfs while working with me. Delivering work within time and budget which meets clients requirements in our mata.</p>
            </div>
            <div className='flex justify-between'>
                <div>
                    <p>Name<br /><span>Mary Hardy</span></p>
                </div>
                <div>
                    <p>Email:<br /><span>info@gmail.com</span></p>
                </div>
                <div>
                    <p>Date of birth<br /><span>11 Npvember 1987</span></p>
                </div>
                <div>
                    <p>From<br /><span>Los Angeles, USA</span></p>
                </div>
            </div>
        </div>
    );
};

export default About;