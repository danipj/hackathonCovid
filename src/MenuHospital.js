import { Table } from 'reactstrap';
function MenuHospital(){

    return(
        <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Código de acesso</th>
          <th>Leito atual</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    )

}

export default MenuHospital;