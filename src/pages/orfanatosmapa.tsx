import React from 'react';
import mapLogo from '../img/minilogo.svg';
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';
import '../styles/pages/orfanatosmapa.css';
import {Map, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
function OrfanatosMapa(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapLogo} alt="Logo Mapa Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>São Paulo</strong>
                    <span>Mauá</span>
                </footer>
            </aside>

            <Map
                center={[-23.6672495,-46.4696307]}
                zoom={15}
                style={{ width: '100%', height: '100%'}}
            >
              <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
              />
            </Map>

            <Link to="" className="criar-orfanato">
                <FiPlus size={32} color="#fff"></FiPlus>
            </Link>
        </div>
    );
}

export default OrfanatosMapa;