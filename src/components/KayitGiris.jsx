import React from 'react';
import GirisimciKayit from '../components/GirisimciKayit'
import DestekciKayit from '../components/DestekciKayit';

import DestekciGirisYap from '../components/DestekciGirisYap';
import GirisimciGirisYap from '../components/GirisimciGirisYap';

class KayitGiris extends React.Component {
  state = {
    durum : "",
  }
  KayitChange = () =>{
    console.log(this.state.durum)
   
    this.setState({durum:"Kayit"})
  }
  girisChange = () =>{
    console.log(this.state.durum)
   
    this.setState({durum:"Giris"})
  }
  render(){
    if(this.state.durum === "Giris") {
      return(
        <div className="container">
          <br />
            <div className="row">
              <DestekciGirisYap />
              <GirisimciGirisYap />             
            </div>
        </div>
      )
    }else if (this.state.durum === "Kayit"){
        return(
          <div className="container">
              <div className="row">
              <DestekciKayit />            
              <GirisimciKayit /> 
                
              </div>
          </div>
        )
    }else{
      return (
        <div className="container">
          <br />
            <div className="row">
              
              <button onClick={this.girisChange}
              className="btn btn-outline-success"
              >Giriş Ekranı</button>

              <button onClick={this.KayitChange}
              className="btn btn-outline-success"
              >Kayıt Ekranı</button>

            </div>
                        
        </div>
        
      )
    }
    
  };
  
}

export default KayitGiris;
