import bannerImg from '../../assets/user.png'
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img 
                    src={bannerImg}
                    className="max-w-sm rounded-lg shadow-2xl w-[300px] md:w-[500px]" />
                <div className='space-y-2 px-2'>
                    <h1 className="text-6xl font-bold">One Step Closer To Your<br /> <span className="text-[rgb(126,144,254)]">Dream Job</span> </h1>
                    <p className="py-6 w-[200px] md:w-[500px] text-gray-400">
                        Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;