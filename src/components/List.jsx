import Item from './Item'
<Item></Item>

function List() {
    return (
        <>
           <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985}/>
                <Item marca="Fiat"  ano_lancamento={1964}/>
                <Item marca="Renault" />
                <Item marca="Chevrolet" ano_lancamento={1999}/>
                {/* Se nenhum valor for passado, o componente usará os valores padrão */}
                <Item />
            </ul>
        </>
    )
}

export default List