import React,{useState,useEffect} from 'react'
import Marker from './marker.svg'
import { YMaps, Map,Placemark,ZoomControl,SearchControl } from 'react-yandex-maps';

interface Location{
    setLocation?:any;
}
const YandexMap: React.FC<Location> = ({setLocation}) => {
    const [geometry,setgeometry] = useState([41.31207798268884, 69.24238483965644]);
    
    
    const getAddress = (e:any) => {
        setgeometry(e.get('target').geometry.getCoordinates());
        setLocation({latitude:geometry[0],longitude:geometry[1]});
    }
    // console.log(geometry);
    return (
        <YMaps
        //     enterprise
        //     query={{
        //     apikey: '7ddb1dfe-52c0-4810-b8ab-9fe60a10265f',
        // }}
        >
            <Map
                // modules={["Placemark", "geocode", "geoObject.addon.balloon"]}
                width={'100%'}
                height={'100%'}
                defaultState={{
                center: [41.31207798268884, 69.24238483965644],
                zoom: 8,
                behaviors: ["default", "scrollZoom"],
                controls: [],
                yandexMapDisablePoiInteractivity: true,
                }}
                options={{
                    mapAutoFocus:true,
                }}
                // panes={(e:any)=>console.log(e.get('events').getElement().style)}

            >
                <Placemark 
                    onDragEnd={(e:any) => getAddress(e)}
                    geometry={geometry}
                    options={{
                        draggable: true,
                        // hasBallon:true,
                        iconLayout: 'default#image',
                        iconImageHref:`${Marker}`,
                        iconImageSize: [40, 40],
                        // pane:"right",
                        // iconImageOffset: [-50, -18],
                        // useMapMarginInDragging:true

                        
                    }}
                    
                
                />
        
                
                <ZoomControl options={
                    { 
                        float: 'left',
                        size:'small'
                        }} />
                <SearchControl options={{ float: 'right' }} />
            </Map>
        </YMaps>
    )
}

export default React.memo(YandexMap);
