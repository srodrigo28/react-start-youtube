import { useState } from "react"
import "./login.css"

export function Login(){
   const [email, setEmail] = useState('')
   const [senha, setSenha] = useState('')

    const salve = (e) => {
        e.preventDefault()

        if(email == ''){
            alert('Precisa preencher o campo e-mail')
        }else if(senha == ''){
            alert('Precisa preencher o campo senha')
        }else{
            alert('Seja bem vindo ...')
        }
    }


    return(
        <main className="container text-center">
            <h1 className="mt-5 mb-4 ">Login</h1>

            <div className="container login-container">

                <form onSubmit={salve}>
                    <div className="row">
                        <div className="col">
                            <input
                                type="text"
                                value={email}
                                placeholder="e-mail"
                                className="form-control mb-3"
                                onChange={ e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="col">
                            <input
                                type="password"
                                value={senha}
                                placeholder="**********"
                                className="form-control"
                                onChange={ e => setSenha(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="btn-group">
                        <button className="btn btn-primary">Entrar</button>
                        <button className="btn btn-success">Cadastrar</button>
                    </div>
                </form>
                
            </div>
        </main>
    )
}