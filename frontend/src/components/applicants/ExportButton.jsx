import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExport, faFilePdf, faFileCsv } from '@fortawesome/free-solid-svg-icons';

function ExportButton({ exportToExcel, exportToPdf }) {

    return (
        <div>
            <div class="btn-group p-0 float-start dropend" style={{ "marginTop": "-43px", "marginBottom": "20px" }}>
                <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <FontAwesomeIcon className="fa-lg me-2" icon={faFileExport} />Export
                </button>
                <ul class="dropdown-menu dropdown-menu-dark">
                    <li>
                        <button class="dropdown-item" type="button" onClick={() => exportToExcel()} >
                            <FontAwesomeIcon className="fa-lg me-2" icon={faFileCsv} />Export to Excel
                        </button>
                    </li>
                    <li><hr class="dropdown-divider" /></li>
                    <li>
                        <button class="dropdown-item" type="button" onClick={() => exportToPdf()}>
                            <FontAwesomeIcon className="fa-lg me-2" icon={faFilePdf} />Export to PDF
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );

}

export default ExportButton;