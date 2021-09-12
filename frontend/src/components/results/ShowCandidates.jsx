import React, { useState, useEffect } from 'react';
import CandidateService from '../../services/CandidateService';


function ShowCandidates(props) {

    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        CandidateService.getCandidates().then((res) => {
            setCandidates(res.data);
        })
    }, [])

    return (
            <div className="row">
                <table className="table table-Striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th className="">Name</th>
                            <th className="">Stream</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            candidates.map(
                                candidate =>
                                    <tr key={candidate.id}>
                                        <td> {candidate.firstName} {candidate.lastName} </td>
                                        <td> {candidate.stream.streamName} </td>

                                    </tr>
                            )
                        }
                    </tbody>

                </table>
            </div>
    );
}

export default ShowCandidates;