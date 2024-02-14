import { useState } from "react"

import "./registro.css"

export function Registro(){

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')

    const [sexo, setSexto] = useState('')
    const [senha, setSenha] = useState('')
    const [senhaC, setSenhaC] = useState('')

    const salve = (e) => {
        e.preventDefault()

        if( nome === '' ) {
            alert(' Por favor preencher o campo nome ')
        }else if( email === ''){
            alert(' Por favor preencher o campo e-mail ')
        }else if( telefone === ''){
            alert(' Por favor preencher o campo telefone ')
        }else if( sexo === ''){
            alert(' Por favor selecionar o campo sexo ')
        }else if( senha === ''){
            alert(' Por favor preencher o campo senha ')
        }else if(senhaC === ''){
            alert(' Por favor preencher o campo confirmar senha ')
        }else{
            alert(' Seja bem vindo ');
        }
    }

    return(
        <main className="container">
            <h1 className="mt-4">Registro</h1>

            <form onSubmit={salve}>
                <div className="row mt-5">
                    <div className="col">
                        <input 
                            type="text"
                            value={nome}
                            placeholder="nome"
                            className="form-control"
                            onChange={ e => setNome(e.target.value)}
                        />
                    </div>
                    <div className="col">
                        <input 
                            type="text"
                            value={email}
                            placeholder="e-mail"
                            className="form-control"
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="col">
                        <input 
                            type="text"
                            value={telefone}
                            placeholder="telefone"
                            className="form-control"
                            onChange={e => setTelefone(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row mt-3 mb-3">
                    <div className="col">
                        <select className="form-control" value={sexo} onChange={ e => setSexto(e.target.value)} >
                            <option value="feminino" >Feminino</option>
                            <option value="masculino">Masculino</option>
                        </select>
                    </div>
                    <div className="col">
                        <input 
                            type="password"
                            value={senha}
                            placeholder="senha"
                            className="form-control"
                            onChange={ e => setSenha(e.target.value)}
                        />
                    </div>
                    <div className="col">
                        <input 
                            type="password"
                            value={senhaC}
                            className="form-control"
                            placeholder="confirmar-senha"
                            onChange={e => setSenhaC(e.target.value)}
                        />
                    </div>
                </div>
                <button className="btn btn-primary">Cadastrar</button>
                <button className="btn btn-warning">Cancelar</button>
            </form>
        </main>
    )
}