import Button from './evento/Button'

function Evento() {
    function meuEvento() {
        console.log("Ativando primeiro Evento!")   
    }

    function segundoEvento() {
        console.log("Ativadno o segundo evento!")
    }

    return(
        <div>
        <p>Clique para disparar um evento</p>
        <Button event={meuEvento}text="Primeiro Evento" />
        <Button event={segundoEvento}text="Segundo Evento" />
        </div>
    );
}
export default Evento;