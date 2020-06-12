import React from 'react';
import './styles.css'
// Material stuff

function HospitalCount(props) {
  return (

    <div>
      <div data-toggle="tooltip" data-placement="top" title={props.tooltip} className={`small-box bg-${props.bgcolor} `}>
        <div className="inner">
          <table style={{ width: '100%' }}>
            <tr style={{ width: '100%' }}>
              <td align="left" style={{ width: '90%' }}>
                {props.text}
              </td>
              <td style={{ width: '10%', textAlign: 'center' }}>

                <div class="circle">
                  <p>{props.count}</p>
                </div>
                {/* <div style={{borderRadius:'50%',behavior:'url(PIE.htc)', width: '40px', height:'40px',backgroundColor:'white',color:'black'}}>
                  {props.count}
                </div> */}

              </td>
            </tr>
          </table>


        </div>


      </div>
    </div>
  );
}

export default HospitalCount;
