import about from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (

        <div className='mb-24'> 
            <h1 className='text-3xl text-red-400 font-bold text-center mt-8 mb-4 pt-8'>About Us</h1>
            <div className="hero ">

                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 relative'>
                        <img src={about} className="w-3/4 rounded-lg shadow-2xl" />
                        <img src={parts} className=" absolute right-5 top-1/2 w-1/2 rounded-lg shadow-2xl border-8 border-white" />

                    </div>
                    <div className='lg:w-1/2 md:mt-12 space-y-5'>

                        <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-warning">Get more info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;