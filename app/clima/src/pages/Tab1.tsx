  import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonText,
  IonCol,
  IonAvatar
} from '@ionic/react';
import { sunny, umbrella, rainy, thunderstorm, cloud, arrowRoundUp, arrowRoundDown, moon, cloudyNight, cloudy, partlySunny } from 'ionicons/icons';
import React, { useState, useEffect } from 'react';
import './Tab1.css';

const Tab1: React.FC = () => {
  
        const API_KEY = "http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=7cf1d03c7aab53b9a719411f7a699cef";
        const API_URL = "http://api.openweathermap.org/data/2.5/weather?lat=-31.6291409&lon=-60.71936410000001&APPID=7cf1d03c7aab53b9a719411f7a699cef";
        const now = '{"coord":{"lon":-60.72,"lat":-31.63},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":296.48,"pressure":1007,"humidity":79,"temp_min":296.48,"temp_max":296.48},"wind":{"speed":2.32,"deg":351},"clouds":{"all":0},"dt":1575972444,"sys":{"type":3,"id":2019769,"country":"AR","sunrise":1575967859,"sunset":1576018826},"timezone":-10800,"id":3836277,"name":"Santa Fe de la Vera Cruz","cod":200}';
        const [city, setCity] = useState();
        const [temp, setTemp] = useState();
        const [max, setMax] =useState();
        const [min, setMin] = useState();
        const [icono, setIcono]=useState(sunny);
        const [descripcion, setDescription]=useState();
        const [resp, setResp] = useState();
        const [clase, setClase] = useState("background")
        

        const [error, setError] = useState();
        async function fetchData() {
          const res = await fetch(API_URL);
          res
            .json()
            .then(res => {
              setResp(JSON.stringify(res));
              var obj= JSON.parse(resp);

  setCity(obj.name)
  setTemp(Math.round((obj.main.temp) - 273.15));
  setMax(Math.round((obj.main.temp_max)- 273.15));
  setMin(Math.round((obj.main.temp_min)- 273.15));
  setDescription(obj.weather[0].description)
  switch(obj.weather[0].icon){
      case "01d":
        setIcono(sunny);
        setClase("sunny")
        break;
      case "02d":
        setIcono(partlySunny)
        setClase("partlySunny")
        break;
      case "03d":
        setIcono(cloudy)
        setClase("cloudy")
        break;
      case "04d":
        setIcono(cloudyNight)
        setClase("cloudyNight")
        break;
      case "09d":
        setIcono(umbrella)
        setClase("umbrella")
        break;
      case "10d":
        setIcono(rainy)
        setClase("rainy")
        break;
      case "11d":
        setIcono(thunderstorm)
        setClase("thunderstorm")
        break;
      default:
       setIcono(cloudy)
       setClase("cloudy")
       break;
  }
            })
            .catch(err => setError(err));
        }
        
        useEffect(() => {
          fetchData();
        });

  return(
    <IonPage>
      <IonHeader>
        <IonToolbar className="bar">
  <IonTitle>{ city }</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className={ clase } fullscreen>
      <IonGrid>
      <IonRow>
        <IonCol>
          <IonIcon icon={ icono } className="sun"></IonIcon>
     
       
        <IonText color="light">{ descripcion }</IonText>
        </IonCol>
      </IonRow>
     <IonRow>
     <IonCol>
     <IonText color="light">Min:{min} <IonIcon icon={arrowRoundUp}></IonIcon> - Max:{max} <IonIcon icon={arrowRoundDown}></IonIcon></IonText>
        </IonCol>
     </IonRow>
     <IonRow>
     <IonCol>
     <IonText color="light" className="temp">{temp}°</IonText>
     <IonText color="light" className="escale">C</IonText>
        </IonCol>
     </IonRow>
      
     <IonItem lines="full" className="divider">
 
        </IonItem>
    
        <IonRow>
        <IonCol size="3" size-lg></IonCol>
        <IonCol size="9" size-lg>
        <IonItem lines="full" className="divider">    <IonText color="light">
        <h3>Extendido 5 dias</h3>
        </IonText>
        </IonItem>
        </IonCol>
        </IonRow>      
        
        <IonRow>
        <IonCol size="sizeSm">
        <IonAvatar>
      <IonIcon icon={sunny} className="ext"/>
    </IonAvatar>
    </IonCol>
    <IonCol>
          <IonLabel>
            <h2>Lunes</h2>
            <h3>13°<IonIcon icon={arrowRoundDown}></IonIcon> - 24°<IonIcon icon={arrowRoundUp}></IonIcon></h3>
            <h4>priasodiasoi</h4>
          </IonLabel>
          </IonCol>
        </IonRow>
        <IonRow>
        <IonCol size="sizeSm">
        <IonAvatar>
      <IonIcon icon={thunderstorm} className="ext"/>
    </IonAvatar>
    </IonCol>
    <IonCol>
          <IonLabel>
            <h2>Martes</h2>
            <h3>13°<IonIcon icon={arrowRoundDown}></IonIcon> - 28°<IonIcon icon={arrowRoundUp}></IonIcon></h3>
            <h4>Tormentas Fuertes ...</h4>
          </IonLabel>
          </IonCol>
        </IonRow>
        <IonRow>
        <IonCol size="sizeSm">
        <IonAvatar>
      <IonIcon icon={rainy} className="ext"/>
    </IonAvatar>
    </IonCol>
    <IonCol>
          <IonLabel>
            <h2>Miercoles</h2>
            <h3>10°<IonIcon icon={arrowRoundDown}></IonIcon> - 24°<IonIcon icon={arrowRoundUp}></IonIcon></h3>
            <h4>LLuvias Intensas ...</h4>
          </IonLabel>
          </IonCol>
        </IonRow>
        <IonRow>
        <IonCol size="sizeSm">
        <IonAvatar>
      <IonIcon icon={cloud} className="ext"/>
    </IonAvatar>
    </IonCol>
    <IonCol>
          <IonLabel>
            <h2>Jueves</h2>
            <h3>17°<IonIcon icon={arrowRoundDown}></IonIcon> - 33°<IonIcon icon={arrowRoundUp}></IonIcon></h3>
            <h4> Parcialmente Nublado ...</h4>
          </IonLabel>
          </IonCol>
        </IonRow>
        <IonRow>
        <IonCol size="sizeSm">
        <IonAvatar>
      <IonIcon icon={moon} className="ext"/>
    </IonAvatar>
    </IonCol>
    <IonCol>
          <IonLabel>
            <h2>Viernes</h2>
            <h3>13°<IonIcon icon={arrowRoundDown}></IonIcon> - 24°<IonIcon icon={arrowRoundUp}></IonIcon></h3>
            <h4>Soleado ...</h4>
          </IonLabel>
          </IonCol>
        </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
