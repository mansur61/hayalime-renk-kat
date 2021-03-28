//import React from 'react'
const DestekciGirisYap = () =>{

    return(
        <div className="col-md-6">
            <input type="text" name="destekciEposta" className="form-control mb-3"
            placeholder="E-postanızı Giriniz" />

            <input type="password" name="destekciSifre" className="form-control mb-3"
            placeholder="Şifrenizi Giriniz" />

            <input type="password" name="destekciKodu" className="form-control mb-3"
            placeholder="Size Verilen Özel Kodu Giriniz" />

        <button className="btn btn-outline-success btn-block">Destek Veren Girişi</button>
        </div>

    )
}
export default DestekciGirisYap;