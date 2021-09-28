import React, { useContext } from 'react';
import img from '../../../images/appointment-doctor.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';


const Doctor = ({doctor}) => {
    
    return (
        <div className="doctor text-center col-md-4" style={{marginBottom:'100px'}}>
            
                {/* doctor.image ? <img src={`data:image/png;base64,${doctor.image.img}`} alt=""/> 
                :  */}
                <img src={img} alt="doctor" className="img-fluid" />
            
            <h5 className="my-3">Dr. Coudi</h5>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +880-188-934789</p>
        </div>
    );
};

export default Doctor;