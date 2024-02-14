import { useState } from "react"

export function State1(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    /*** Função tradicional
    function inserir1(){
        alert('Function1')
    }
    */

    /*** Função tradicional usando prevenir eventos
    function inserir2(e){
        e.preventDefault()

        alert(email)
    }
     */
    /*** Função mais moderna usando 
    const inserir3 = () => {
        alert('Testando')
    }
    */

    /*** Função mais moderna usando prevenir eventos     */ 
    const inserir4 = (e) => {
        e.preventDefault()

        if(nome === ''){
            alert('por favor, preencher o nome')
        }else if(email === ''){
            alert('por favor, preencher o e-mail')
        }else{
            alert('Cadastrado com sucesso')
        }
    }
 
    return(
        <div className="container">
            <h1 className="mt-5 mb-5">State1 Bootstrap</h1>

           <form onSubmit={inserir4}>
                <div className="row">
                    <div className="col">
                        <input
                            type="text"
                            value={nome}
                            className="form-control"
                            placeholder="nome"
                            onChange={ e => setNome(e.target.value )}
                        />
                    </div>

                    <div className="col">
                        <input 
                            type="text"
                            className="form-control"
                            value={email}
                            placeholder="@email"
                            onChange={ e => setEmail(e.target.value )}
                        />
                    </div>
                </div>

                <button className="btn btn-outline-primary mt-3 mb-3" type="submit"> Inserir </button>
           </form>

            <p className="alert bg-primary"> {nome} - {email} </p>
        </div>
    )
}