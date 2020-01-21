import {
    IonContent,
    IonPage
   
  } from '@ionic/react';
  import React, { useState, useEffect } from 'react';
  
  const Tab3: React.FC = () => {
    // Weather API sample javascript code
    // Requires: jQuery and crypto-js (v3.1.9)
    // 
    // Copyright 2019 Oath Inc. Licensed under the terms of the zLib license see https://opensource.org/licenses/Zlib for terms.
    
    var url = 'https://weather-ydn-yql.media.yahoo.com/forecastrss';
    var method = 'GET';
    var app_id = 'ww9K9I32';
    var consumer_key = 'dj0yJmk9MW5lV0FKYVo5Z3Z2JmQ9WVdrOWQzYzVTemxKTXpJbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTE1';
    var consumer_secret = 'fad0a45470bf59a94dbc96e93d545b428e954f40';
    var concat = '&';
    var query = {'location': 'sunnyvale,ca', 'format': 'json'};
    var oauth = {
        'oauth_consumer_key': consumer_key,
        'oauth_nonce': Math.random().toString(36).substring(2),
        'oauth_signature_method': 'HMAC-SHA1',
        'oauth_timestamp': parseInt((new Date().getTime() / 1000).toString()),
        'oauth_version': '1.0'
    };
    
    var merged = {}; 
    $.extend(merged, query, oauth);
    // Note the sorting here is required
    var merged_arr = Object.keys(merged).sort().map(function(k) {
      return [k + '=' + encodeURIComponent(merged[k])];
    });
    var signature_base_str = method
      + concat + encodeURIComponent(url)
      + concat + encodeURIComponent(merged_arr.join(concat));
    
    var composite_key = encodeURIComponent(consumer_secret) + concat;
    var hash = CryptoJS.HmacSHA1(signature_base_str, composite_key);
    var signature = hash.toString(CryptoJS.enc.Base64);
    
    oauth['oauth_signature'] = signature;
    var auth_header = 'OAuth ' + Object.keys(oauth).map(function(k) {
      return [k + '="' + oauth[k] + '"'];
    }).join(',');
    
    $.ajax({
      url: url + '?' + $.param(query),
      headers: {
        'Authorization': auth_header,
        'X-Yahoo-App-Id': app_id 
      },
      method: 'GET',
      success: function(data){
        console.log(data);
      }
    });
  
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
  
  export default Tab3;
  