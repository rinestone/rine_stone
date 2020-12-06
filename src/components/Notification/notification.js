import React from 'react';
import './notification.css'


function Notification() {
    return (
        <div className="notification">
            <div className="square_box box_three"/>
            <div className="square_box box_four"/>
            <div className="container mt-5">
                <div className="col-sm-12">
                    <div
                        className="alert fade alert-simple alert-info alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show"
                        role="alert" data-brk-library="component__alert">
                        <button type="button" className="close font__size-18" data-dismiss="alert">
                        </button>
                        <i className="start-icon  fa fa-exclamation-triangle faa-shake animated"/>
                        <strong className="font__weight-semibold">Atentie !</strong> Comenzile sunt disponibile doar prin numarul de WAPP: 0752780336 si pagina de facebook.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Notification;