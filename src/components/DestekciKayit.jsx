//import react from 'react'

const DestekciKayit = () =>{

    const submitHandler = (e) =>{
        e.preventDefault();
    }
    const changeHandler = (e) =>{
        console.log(e.target.value)
    }
    return(
        
           
                <div className="col-md-6">
                Destek Veren Kayıt Ekranı
                <form onSubmit={submitHandler}>
                    
                    <input type="text" name="destekEposta" className="form-control mb-3"
                    placeholder="E-postanızı Giriniz" onChange={changeHandler}/>

                    <input type="password" name="destekSifre" className="form-control mb-3"
                    placeholder="Şifrenizi Belirleyiniz" onChange={changeHandler}/>

                    <input type="text" name="destekAd" className="form-control mb-3"
                    placeholder="Destek Veren Kişi  / Firma" onChange={changeHandler}/>

                    <input type="text" name="destekMebla" className="form-control mb-3"
                    placeholder="Ne kadar Destek Verebilirsin (Para olarak)" onChange={changeHandler}/>

                    <button className="btn btn-outline-success btn-block">Destek Veren Kayıt</button>
                </form>         
                </div>
                
        
    )
}

export default DestekciKayit;