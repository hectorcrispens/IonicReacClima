import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonText,
  IonCol,
  IonItemDivider,
  IonButton
} from '@ionic/react';
import { sunny, umbrella, rainy, thunderstorm, cloud, call } from 'ionicons/icons';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Tab2: React.FC = () => {
  const API_KEY = '7cf1d03c7aab53b9a719411f7a699cef';
  const API_URL = "http://api.openweathermap.org/data/2.5/weather?lat=-31.6291409&lon=-60.71936410000001&APPID=7cf1d03c7aab53b9a719411f7a699cef";
  const [count, setCount] = useState();
  const [error, setError] = useState();
  /*
  function componentDidMount() {
    axios.get(API_URL).then(response => response.data)
     .then((data) => {
       setCount(JSON.stringify(data))
       console.log(""+data.base)
      })
    }
componentDidMount();
*/

async function fetchData() {
  const res = await fetch(API_URL);
  res
    .json()
    .then(res => setCount(JSON.stringify(res)))
    .catch(err => setError(err));
}

useEffect(() => {
  fetchData();
});
  return (
   <IonPage><IonContent>{count}</IonContent></IonPage>
  );
};

export default Tab2;
