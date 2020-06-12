import React from 'react';
import QRCode from 'qrcode.react';

class QRCodeGenerator extends React.Component {

    render() {
        return(
            <QRCode value="http://facebook.github.io/react/" />
        );

    }

}

export default QRCodeGenerator;
