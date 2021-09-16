import React, { useState, useEffect } from 'react';
import AssessmentCentreResponseService from '../../services/AssessmentCentreResponseService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faSearch } from '@fortawesome/free-solid-svg-icons';
import ExportButton from './ExportButton';
import XLSX from 'xlsx';
import jsPDF from 'jspdf';

function Responses(props) {

    const [responses, setResponses] = useState([]);
    const excludeSearchColumns = ['cv', 'id', 'aptitude_score', 'phoneNumber', 'notes', 'recruiter', 'questionBody', 'questionType', 'interviewer', 'general', 'technical', 'behavioural', 'curveball', 'overall', 'technicalTotal', 'generalTotal', 'curveballTotal', 'behaviouralTotal', 'grade', 'notes', 'email', 'encryptedPassword'];

    useEffect(() => {
        AssessmentCentreResponseService.getAssessmentCentreResponseGrouped().then((res) => {
            setResponses(res.data);
        })
    }, [])

    const handleSearch = (search) => {
        AssessmentCentreResponseService.getAssessmentCentreResponseGrouped().then((res) => {
            let filtered = res.data
                .filter(response => {
                    return Object.keys(response).some(key => {
                        return excludeSearchColumns.includes(key) ? false : response[key].toString().toLowerCase().includes(search.toLowerCase().trim())
                    })
                });
            setResponses(filtered);
        })
    }

    const columns = [
        { title: "ID", field: "id" },
    ]



    const exportToExcel = () => {
        const newData = responses.map(response => {
            return response;
        })
        const worksheet = XLSX.utils.json_to_sheet(newData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "responses")

        let buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
        XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
        XLSX.writeFile(workbook, "FDM_Candidates_Results_Data.xlsx");
    }

    const exportToPdf = () => {
        const doc = new jsPDF();
        doc.text("FDM Results List", 20, 10);
        doc.autoTable({
            columns: columns.map(col => ({ ...col, dataKey: col.field })),
            body: responses
        })
        doc.save("FDM_Results.pdf");
    }


    return (
            <div className="row">
            <div className="container-fluid ms-0 ps-0 mb-5">
                <form className="d-flex">
                    <FontAwesomeIcon className="fa-lg icon-link me-2" icon={faSearch} color="#0d6efd" style={{ "marginTop": "8px" }} />
                    <input className="form-control me-2 search-bar-input" type="search" placeholder="Search" aria-label="Search" onChange={e => handleSearch(e.target.value)} />
                </form>
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>

                <nav><ExportButton exportToExcel={exportToExcel} exportToPdf={exportToPdf} /> Export is not working (don't use)</nav>
                <table className="table table-Striped table-bordered table-hover">
                    <thead>
                   
                                    <tr>
                                        <td> Name </td>
                                        <td> Stream </td>
                                        <td> Aptitude </td>
                                        <td> General </td>
                                        <td> Technical </td>
                                        <td> Behavioural </td>
                                        <td> Overall </td>
                                        <td> Date </td>
                                        <td> More info </td>
                                    </tr>
                            
                        
                    </thead>
                    <tbody>
                        {
                            responses.map(
                                response =>
                                    <tr key={response.candidate.id}>
                                        <td> {response.candidate.firstName} {response.candidate.lastName}</td>
                                        <td> {response.candidate.stream.streamName} </td>
                                        <td> {response.candidate.aptitudeScore} </td>
                                        <td> {response.general} </td>
                                        <td> {response.technical} </td>
                                        <td> {response.behavioural} </td>
                                        <td> {response.overall} </td>
                                        <td> {response.date} </td>
                                        <td><a href={'/info/' + response.candidate.id}><FontAwesomeIcon className="fa-lg icon-link me-2" icon={faInfo} color="#0d6efd" /></a></td>
                                    </tr>
                            )
                        }
                    </tbody>

                </table>
            </div>
    );
}

export default Responses;