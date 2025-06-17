import PropTypes from 'prop-types'

function Item({marca ='Faltou a marca', ano_lancamento = 0}) {
    return (
       <> 
        <li style={{ textAlign: 'center' }}>
            {marca} - {ano_lancamento}
        </li>
       </> 
    )
}

Item.propTypes = {
    marca: PropTypes.string,
    ano_lancamento: PropTypes.number,
}

export default Item