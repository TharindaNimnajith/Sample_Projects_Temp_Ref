import React from 'react';


// My stuff
import HospitalCount from './HospitalCount';

function HospitalList(props) {
  
  return (
    <div>

      {
        props.tableData.map(row => {
          return (
            <div data-toggle="tooltip" data-placement="top" title={props.tooltip} className={`small-box bg-light `}>
              <div className="inner">

                <h6 className="text-center">{row.hospital.name}</h6>
                <h6 className="text-center">{row.hospital.name_si}</h6>
                <h6 className="text-center">{row.hospital.name_ta}</h6>

                <HospitalCount
                  count={row.treatment_local}
                  text="Sri Lankans on treatment/observation"
                  bgcolor="danger"
                />
                <HospitalCount
                  count={row.treatment_foreign}
                  text="Foreigners on treatment/observation"
                  bgcolor="warning"
                />
                <HospitalCount
                  count={row.cumulative_local}
                  text="Treated/Observed Sri Lankans"
                  bgcolor="success"
                />
                <HospitalCount
                  count={row.cumulative_foreign}
                  text="Treated/Observed Foreign"
                  bgcolor="primary"
                />
                


              </div>


            </div>
          )
        })
      }
    </div>
   
  );
}



export default HospitalList;
