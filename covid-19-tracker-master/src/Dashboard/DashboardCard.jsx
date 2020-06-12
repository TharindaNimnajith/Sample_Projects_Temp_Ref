import React from 'react';

function DashboardCard(props) {

  return (
    <div>
      <div data-toggle="tooltip" data-placement="top" title={props.tooltip} className={`small-box bg-${props.colorLevel} `}>
        <div className="inner">
          <h1 className="text-center">{props.count}</h1>

          <h5 className="text-center">{props.cardTitle}</h5>
        </div>

        {
          props.lastUpdated && (
            <p className="small-box-footer">{`Last updated: ${props.lastUpdated}`} <i className="fas fa-clock"></i></p>
          )
        }

      </div>
    </div>

  );
}

export default DashboardCard;
