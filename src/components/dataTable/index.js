import React, {useState, useEffect}from 'react';

import './style.css';

import Sidenav from '../sidenav';
export default function DataTable({columns, data, children}) {
    const [dataFiltered, setDataFiltered] = useState([...data]);
    const [quantityPages, setQuantityPages] = useState(Math.ceil(data.length / 10));
    const [pagination, setPagination] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');

    useEffect(() => {
        if(search){
            setDataFiltered(dataFiltered.filter(value => value.name.toLowerCase().includes(search.toLowerCase())));
        }else{
            setDataFiltered([...data]);
        }
    }, [search])

    useEffect(() => {
        setQuantityPages(Math.ceil(dataFiltered.length / 10));
    }, [dataFiltered])

    useEffect(() => {
        let paginationArray = [];
        for (let index = 0; index < quantityPages; index++) {
            paginationArray.push(index + 1);
        }
        setPagination(paginationArray);
    }, [quantityPages])

    return (
        <>
            <div className="datatable-content">
                <div className="toolbar">
                    {children}
                    {
                        (data.length > 0)
                        ?
                            <div className="search-content">
                                <input type="text" name="search" id="search" placeholder="Pesquisar" onChange={(e) => setSearch(e.target.value)}/>
                                <i className="material-icons-round">search</i>
                            </div>
                        :
                            null
                    }
                    
                </div>
                {
                    (data.length > 0)
                    ?
                        <>
                            <table className="mt-4">
                                <thead>
                                    <tr>
                                        {
                                            columns.map((column, index) => <th key={index}>{column.name}</th> )
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        dataFiltered.slice((currentPage != 1) ? (currentPage * (5 * currentPage) - 10) : 0, currentPage * 10).map(value => {
                                            return (
                                                <>
                                                    <tr key={value.id}>
                                                        <td width="80">{value.id}</td>
                                                        <td width="350">{value.name}</td>
                                                        <td>{value.send}</td>
                                                        <td>{value.answers}</td>
                                                        <td className="d-flex justify-content-center">
                                                            <button>
                                                                <i className="material-icons-outlined edit-data">edit</i>
                                                            </button>
                                                            <button>
                                                                <i className="material-icons-outlined delete-data">delete</i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                            {
                                (pagination.length > 1)
                                ?
                                    <div className="pagination-content mt-4">
                                        <button type="button" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage == 1}>
                                            <i class="material-icons-round">keyboard_arrow_left</i>
                                        </button>
                                        {/* {
                                            pagination.map(value => <button type="button" onClick={() => setCurrentPage(value)}>{value}</button> )
                                        } */}
                                        <button type="button" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage == quantityPages}>
                                            <i class="material-icons-round">keyboard_arrow_right</i>
                                        </button>
                                    </div>
                                :
                                    null
                            }
                        </>
                    :
                        <div className="mt-4">
                            <p>Nenhum registro encontrado!</p>
                        </div>
                }
            </div>
        </>
    );
}