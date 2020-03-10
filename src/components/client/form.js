import React, { useReff }from 'react';

import Sidenav from '../sidenav';

export default function ClientForm({actionSidenav}) {
  
    return (
        <Sidenav title="Adicionar cliente" action={actionSidenav}>
            <form>
                <div className="input-block">
                    <label htmlFor="client_name">Nome</label>
                    <input type="text" name="name" id="client_name" placeholder="Nome"/>
                </div>
                <div className="input-block">
                    <label htmlFor="client_email">E-mail</label>
                    <input type="text" name="email" id="client_email" placeholder="E-mail"/>
                </div>
                <div className="input-block">
                    <label htmlFor="client_resposible_name">Nome do responsável</label>
                    <input type="text" name="responsible_name" id="client_responsible_name" placeholder="Nome do responsável"/>
                </div>
                <div className="submit-form">
                    <button type="submit">Cadastrar</button>
                </div>
            </form>
        </Sidenav>
  );
}
