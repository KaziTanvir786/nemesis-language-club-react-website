import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const spinnerStyle = {
        marginTop: '200px',
        width: '100px',
        height: '100px'
    }
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div style={{ marginLeft: '20px', marginRight: '20px' }}>
            <h1 style={{ textAlign: "left" }}>Our Language Development Programs</h1>
            <hr />
            {
                services.length === 0 ?
                    <Spinner style={spinnerStyle} animation="grow" />
                    :
                    <Row xs={1} md={3} className="g-4">
                        {
                            services.map(service => <Service
                                key={service.id}
                                service={service}
                            ></Service>)
                        }
                    </Row>
            }
        </div>
    );
};

export default Services;