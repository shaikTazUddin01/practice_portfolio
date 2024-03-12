import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='bg-yellow-100 flex justify-between mx-auto gap-10'>
            <div className="p-10 space-y-2 w-[50%] pl-10">
                <h1 className="text-3xl font-bold">Lets Connect</h1>
                <p>Please fill out the form on this section to contact with me or call between 9:00 A.M and 8.00 P.M ET, Monday through Friday.</p>
                <div className="text-yellow-500 flex gap-2 text-xl mt-2">
                    <FaFacebookF></FaFacebookF>
                    <FaTwitter></FaTwitter>
                    <FaInstagram></FaInstagram>
                </div>
            </div>
            
            <div className="space-y-3 grid grid-cols-1 w-[50%]">
                <h1 className="text-3xl font-bold pt-10">Let’s Message me</h1>
                <form className="w-[70%] space-y-2">
                    <div className="form-control">
                        <input type="text" placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">

                        <input type="email" placeholder="Your Email" className="input input-bordered" required />

                    </div>
                    <div className="form-control">

                        <input type="text" placeholder="Message" className="input input-bordered" required />

                    </div>
                    <div className=" mt-6 flex justify-end pb-10">
                        <button className="bg-yellow-500 px-5 py-3 rounded text-white">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Footer;