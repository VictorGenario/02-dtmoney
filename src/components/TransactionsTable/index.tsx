import { useEffect } from "react";
import { api } from "../../serveces/api";
import { Container } from "./style";

export function TransactionsTable(){
  useEffect(() => {
    api.get('transactions')
    .then(response => console.log(response.data) )

  },[])


  return(
    <Container>
      <table>
         <thead>
           <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
           </tr>
         </thead>

         <tbody>
           <tr>
             <td>Desenvolvimento de um site</td>
             <td className="deposit">R$ 12.000</td>
             <td>Desenvolvimento</td>
             <td>20/11/22</td>
           </tr>
           <tr>
             <td>Aluguel</td>
             <td className="withdraw">-R$ 1.000</td>
             <td>Desenvolvimento</td>
             <td>20/11/22</td>
           </tr>
         </tbody>
      </table>
    </Container>
  );
}