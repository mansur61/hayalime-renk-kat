//import React from 'react'
const GirisimciGirisYap = () =>{

    return(
        <div className="col-md-6">
            <input type="text" name="girisimciEposta" className="form-control mb-3"
            placeholder="E-postanızı Giriniz" />

            <input type="password" name="girisimciSifre" className="form-control mb-3"
            placeholder="Şifrenizi Giriniz" />

        <button className="btn btn-outline-success btn-block">Girişimci Giriş Yap</button>
        </div>

    )
}
export default GirisimciGirisYap;