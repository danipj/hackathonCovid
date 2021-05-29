import { Button } from 'reactstrap';

function Paciente(){

    return(
        <div>
            Informações do paciente:<br/>
            Nome<br/>
            Contato da familia<br/>
            <Button>Gerar novo código</Button><br/>
            <Button>Apagar código</Button><br/>
            <Button>Apagar registro do paciente</Button>
        </div>
    )

}

export default Paciente;