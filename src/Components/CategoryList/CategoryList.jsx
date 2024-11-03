import categoryImgOne from '../../assets/accounts.png'
import categoryImgTwo from '../../assets/creative.png'
import categoryImgThree from '../../assets/marketing.png'
import categoryImgFour from '../../assets/chip.png'

const CategoryList = () => {
    return (
        <div className='mt-6'>
            <div className='text-center space-y-3'>
            <h2 className="text-5xl font-bold">Job Category List</h2>
            <p className="text-gray-500">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-5'>
                <div className='space-y-3 shadow-xl bg-gray-100 rounded-lg p-4 py-6'>
                    <div className='bg-blue-50 w-[50px] rounded-full'>
                    <img src={categoryImgOne} alt="" />
                    </div>
                    <h2 className='font-bold '>Account & Finance</h2>
                    <p className='text-gray-600'>300 jobs Available</p>
                </div>
                <div className='space-y-3 shadow-xl bg-gray-100 rounded-lg p-4 py-6'>
                    <div className='bg-blue-50 w-[50px] rounded-full'>
                    <img src={categoryImgTwo} alt="" />
                    </div>
                    <h2 className='font-bold'>Creative Design</h2>
                    <p className='text-gray-600'>100+ jobs Available</p>
                </div>
                <div className='space-y-3 shadow-xl bg-gray-100 rounded-lg p-4 py-6'>
                    <div className='bg-blue-50 w-[50px] rounded-full'>
                    <img src={categoryImgThree} alt="" />
                    </div>
                    <h2 className='font-bold'>Marketing & Sales</h2>
                    <p>150 jobs Available</p>
                </div>
                <div className='space-y-3 shadow-xl bg-gray-100 rounded-lg p-4  py-6'>
                    <div className='bg-blue-50 w-[50px] rounded-full'>
                    <img src={categoryImgFour} alt="" />
                    </div>
                    <h2 className='font-bold'>Engineering Job</h2>
                    <p className='text-gray-600 '>224 jobs Available</p>
                </div>
            </div>
        </div>
    );
};

export default CategoryList;