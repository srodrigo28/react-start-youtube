import { useState } from "react"

export function Cadastro(){
    const [nome, setNome] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [preco, setPreco] = useState('');
    const [status, setStatus] = useState('')
    const [descricao, setDescricao] = useState('')

    const Inserir = (e) => {
        e.preventDefault()

    
        if(nome === ''){
            alert('Preencha o campo nome do produto')
        }else if(quantidade === ''){
            alert('Preencha o campo quantidade do produto')
        }else if(preco === ''){
            alert('Preencha o campo preço do produto')
        }else if(status === ''){
            alert('Preencha o campo status do produto')
        }else if(descricao === ''){
            alert('Preencha o campo descrição do produto')
        }else{
            console.log(
                "Produto: " + nome 
                + "\n Quantidade: " + quantidade
                + "\n Preço: " + preco
                + "\n Status: " + status
                + "\n Descrição: " + descricao
               )
        }
    }

    return(
        <div className="container">
            <h1 className="mt-5 mb-3">Cadastro</h1>

            <form onSubmit={Inserir}>
                <div className="row">

                    <div className="col-5">
                        <input 
                            type="text" className="form-control" 
                            placeholder="nome do produto"
                            value={nome}
                            onChange={ e => setNome(e.target.value)}
                        />
                    </div>

                    <div className="col">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="quantidade"
                            value={quantidade}
                            onChange={ e => setQuantidade(e.target.value)}
                        />
                    </div>

                    <div className="col">
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="preço"
                            value={preco}
                            onChange={ e => setPreco(e.target.value)}
                        />
                    </div>

                    <div className="col">
                        <select className="form-control" value={status} onChange={ e => setStatus(e.target.value)}>
                            <option value="Ativo">Ativo</option>
                            <option value="Falta">Falta</option>
                        </select>
                    </div>

                </div>

                <div className="row mt-3">
                    <div className="col">
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="descrição"
                            value={descricao}
                            onChange={ e => setDescricao(e.target.value)}
                        />
                    </div>
                </div>

                <button className="btn btn-outline-success mt-3">Inserir</button>
            </form>
        </div>
    )
}