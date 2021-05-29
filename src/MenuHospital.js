import { Table } from 'reactstrap';
import { useHistory } from 'react-router-dom';

function MenuHospital(){
    let history = useHistory();

  const redirect = (event) => {
    history.push('/paciente/'+event.code)
  }

    let dados = [
        {nome: "Maria", code: "1234", outro:"47-A"},
        {nome: "Diogo", code: "1234", outro:"47-A"},
        {nome: "Naomi", code: "1234", outro:"47-B"},
        {nome: "Yumi", code: "1234", outro:"61-A"},
        {nome: "Mariana", code: "1234", outro:"47-A"},
        {nome: "Daniela", code: "1234", outro:"47-A"},
    ]
    let linhas = []
    for (let index = 0; index < dados.length; index++) {
        linhas.push(
            <tr onClick={()=>redirect(dados[index])}>
          <th scope="row">{index+1}</th>
          <td>{dados[index].nome}</td>
          <td>{dados[index].code}</td>
          <td>{dados[index].outro}</td>
        </tr>
        )
        
    }

    return(
        <Table stripped hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Código de acesso</th>
          <th>Outro</th>
        </tr>
      </thead>
      <tbody>
        {linhas}
      </tbody>
    </Table>
    )

}

export default MenuHospital;