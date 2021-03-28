//import React from 'react';

const GirisimciKayit = () => {
    const submitHandler = (e) =>{
        e.preventDefault();
        //console.log(e.target.value); undefined

    }
    const changeHandler = (e) =>{
       console.log(e.target.value);

    }
    return(

        
            
                <div className="col-md-6">
                Girişimci Kayıt Ekranı
                <form onSubmit={submitHandler}>
                    
                    <input type="text" name="girisimciEposta" className="form-control mb-3"
                    placeholder="E-postanızı Giriniz" onChange={changeHandler}/>

                    <input type="password" name="girisimciSifre" className="form-control mb-3"
                    placeholder="Şifrenizi Belirleyiniz" onChange={changeHandler}/>

                    <input type="text" name="girisimciAd" className="form-control mb-3"
                    placeholder="Girişim Adı Giriniz" onChange={changeHandler}/>

                    <input type="text" name="girisimciKonusu" className="form-control mb-3"
                    placeholder="Girişim Konusu Giriniz" onChange={changeHandler}/>
                    
                    <textarea type="text" name="girisimciDetay" className="form-control mb-3"
                     onChange={changeHandler} value = "Girişiminizi Detaylı Açıklayınız"> </textarea>
                    
                    <input type="text" name="girisimIhtiyaci" className="form-control mb-3"
                    placeholder="Girişiminiz için İhtiyacınızı Belirtiniz" onChange={changeHandler}/>

                    <input type="text" name="girisimciMebla" className="form-control mb-3"
                    placeholder="Girişiminiz İçin İstenilen Destek (Para olarak)" onChange={changeHandler}/>

                    <button className="btn btn-outline-success btn-block">Girişimci Kayıt</button>
                </form>         
                </div>
           
           
            
        
    )



}
export default GirisimciKayit;