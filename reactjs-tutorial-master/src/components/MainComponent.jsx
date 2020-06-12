import React, { Component } from 'react';
import ItemBox from './itemBox/ItemBox';

import Raththi from '../images/products/raththi.jpg'
class MainComponent extends Component {



    render() {
        return (
            <div style={{ display: 'flex' }}>

                
                <ItemBox title="Raththi" price="450.00" desc="l;s;khs ;lkjslk jkj jls" image={Raththi} />
                <ItemBox title="Anchor" price="600.00" desc="Anchor milk powder" image={Raththi} />
                <ItemBox title="Viva" price="350.00" desc="lgaoih " image={Raththi} />
                <ItemBox title="Highland" price="250.00" desc="Made in Sri Lanka" image={Raththi} />
                <ItemBox title="Nestomalt" price="300.00" desc="Balaya Jawaya Shakthiya" image={Raththi} />

            </div>
        );
    }
}

export default MainComponent;