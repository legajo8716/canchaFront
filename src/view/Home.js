import React from 'react'
import CardCancha from'../component/cardCancha.js'
import './Home.css';
import { Carousel} from 'react-bootstrap';
import CanchaList from'./canchasList.js'
import SugerenciasList from './sugerenciasList.js'
import pelota from '../pelota.png'
import fondoAzul from '../fondoAzul.jpg'


 export default function Home(){



return(
<div className="homeContainer">
        <div className="head">
            <h1 className="p">Planeta gol</h1>
                <div className="pelota">
                    <img className="im"   src={pelota} />
                </div>
        </div>
        <div className="contenedorCajas">
            <div className="caja caja1">
                <SugerenciasList/>
            </div>

            <div className="caja caja2">
                <h3> cancha 1</h3>
                 <CanchaList className="canchaList"/>
                                 <h3> cancha 2</h3>

                 <CanchaList className="canchaList"/>
                <h3> cancha 3</h3>

                 <CanchaList className="canchaList"/>

                 <CanchaList className="canchaList"/>
                 <CanchaList className="canchaList"/>

             </div>

            <div className="caja caja3">
                <p>caja3</p>
             </div>
        </div>
        <div className="footer">
                    <p>head</p>

                </div>


</div>
)
}