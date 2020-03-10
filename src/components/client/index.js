import React, {useState, createContext}from 'react';

import DataTable from '../dataTable';
import ClientForm from './form';

export default function Clients() {
  const [actionSidenav, setActionSidenav] = useState(false);
  const contextActionSidenav = createContext([actionSidenav, setActionSidenav]);
  const [clients, setClients] = useState([])


  // {id: 0, uuid: 12323313, name: 'Nutri Mi', send: 120, answers: 115},
  // {id: 1, uuid: 12323314, name: 'Verticis', send: 120, answers: 115},
  // {id: 2, uuid: 12323314, name: 'Verticis 1', send: 120, answers: 115},
  // {id: 3, uuid: 12323314, name: 'Verticis 2', send: 120, answers: 115},
  // {id: 4, uuid: 12323314, name: 'Verticis 3', send: 120, answers: 115}


  const columns = [
    {
      name: '#',
      selector: 'id'
    },
    {
      name: 'Nome',
      selector: 'name'
    },
    {
      name: 'Disparos',
      selector: 'send'
    },
    {
      name: 'Respostas',
      selector: 'answers'
    },
    {
      name: 'Ações',
      selector: 'actions'
    }
  ]

  return (
    <div id="clients-page">
      <ClientForm actionSidenav={contextActionSidenav}/>

      <DataTable columns={columns} data={clients} >
        <div className="actions-button">
            <button type="button" onClick={() => setActionSidenav(!actionSidenav)}>
                <span>Adicionar</span>
                <i className="material-icons-round ml-2">add</i>
            </button>
        </div>  
      </DataTable>
    </div>
  );
}
