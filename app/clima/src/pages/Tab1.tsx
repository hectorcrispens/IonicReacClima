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
import { sunny, umbrella, rainy, thunderstorm, cloud, arrowRoundUp, arrowRoundDown, moon, construct } from 'ionicons/icons';
import React, { useState, useEffect } from 'react';
import './Tab1.css';

const Tab1: React.FC = () => {
  
        const API_KEY = "http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=7cf1d03c7aab53b9a719411f7a699cef";
        const API_URL = "http://api.openweathermap.org/data/2.5/weather?lat=-31.6291409&lon=-60.71936410000001&APPID=7cf1d03c7aab53b9a719411f7a699cef";
        const [now, setNow] = useState("Santa Fe de la Vera Cruz");
        const [temp, setTemp] = useState(33);
        const [error, setError] = useState();
      
      useEffect(() => {
        fetch(API_URL)
  .then(response => response.text())
  .then(json => {
    console.log(json)
    setTemp(json)
  })
      });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="bar">
  <IonTitle>{ now }</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="background" fullscreen>
      <IonGrid>
      <IonRow>
        <IonCol>
          <IonIcon icon={ sunny } className="sun"></IonIcon>
     
       
        <IonText color="light">sol radiante</IonText>
        </IonCol>
      </IonRow>
     <IonRow>
     <IonCol>
     <IonText color="light">Min:15 <IonIcon icon={arrowRoundUp}></IonIcon> - Max:28 <IonIcon icon={arrowRoundDown}></IonIcon></IonText>
        </IonCol>
     </IonRow>
     <IonRow>
     <IonCol>
     <IonText color="light" className="temp">5°</IonText>
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
            <h4>{temp}</h4>
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
