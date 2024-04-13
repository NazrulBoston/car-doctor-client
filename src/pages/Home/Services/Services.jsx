import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="text-center">
                <h3 className="text-3xl text-red-400">Our Services</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem id, harum sunt amet consequatur velit architecto <br /> voluptates quasi inventore fugiat quo hic aut molestias aliquid maiores asperiores eveniet earum dicta.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    
                    ></ServiceCard>   )
                }

            </div>
        </div>
    );
};

export default Services;