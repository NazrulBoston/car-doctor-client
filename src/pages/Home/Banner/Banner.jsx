
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';



const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-xl">
                    <div className='text-white space-y-8 w-1/2 pl-6 '>
                        <h1 className='text-5xl '>Affordable price for Car Serving</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit </p>
                        <div className='space-x-4 flex '>
                            <button className='btn btn-primary'>Discover more</button>
                            <button className='btn btn-outline btn-secondary'>Latest Projects</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-xl ">
                    <div className='text-white space-y-8 w-1/2 pl-6 '>
                        <h1 className='text-5xl '>Affordable price for Car Serving</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit </p>
                        <div className='space-x-4 flex '>
                            <button className='btn btn-primary'>Discover more</button>
                            <button className='btn btn-outline btn-secondary'>Latest Projects</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl" />
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-xl ">
                    <div className='text-white space-y-8 w-1/2 pl-6 '>
                        <h1 className='text-5xl '>Affordable price for Car Serving</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit </p>
                        <div className='space-x-4 flex '>
                            <button className='btn btn-primary'>Discover more</button>
                            <button className='btn btn-outline btn-secondary'>Latest Projects</button>
                        </div>
                    </div>
                </div>
            </div>

            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-xl" />
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-xl">
                    <div className='text-white space-y-8 w-1/2 pl-6 '>
                        <h1 className='text-5xl '>Affordable price for Car Serving</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit </p>
                        <div className='space-x-4 flex '>
                            <button className='btn btn-primary'>Discover more</button>
                            <button className='btn btn-outline btn-secondary'>Latest Projects</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;