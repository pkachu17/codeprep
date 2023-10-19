import React, { useState } from 'react';
import Checkbox from './Components/Checkbox';
import TooltipButton from './Components/TooltipButton';
import './ProblemListAccordion.css'; // Import your CSS file

const ProblemListAccordion = ({ problemsData }) => {
    const [openCategory, setOpenCategory] = useState(null);
    const statusTooltipMessage = "Changes saved and fetched from local storage";

    console.log(Object.keys(problemsData).map((category) => (
        problemsData[category]
    )));

    const toggleCategory = (category) => {
        if (openCategory === category) {
            setOpenCategory(null);
        } else {
            setOpenCategory(category);
        }
    };

    return (
        <div className="problem-body">
            {Object.keys(problemsData).map((category) => (
                <div key={category} className="category">
                    <div
                        className={`category-header ${openCategory === category ? 'open' : ''}`}
                        onClick={() => toggleCategory(category)}
                    >
                        {category}
                    </div>
                    <div className={`problem-list ${openCategory === category ? 'open' : 'close'}`}>

                        <table className='problem-table'>
                            <thead className='problem-table-head'>
                                <tr className='problem-table-head-row'>
                                    <th>No.</th>
                                    <th>Name</th>
                                    <th>Difficulty</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {problemsData[category].map((problem) => (
                                    <tr key={problem.ID} className='problem'>
                                        <td className='problem-serial'>
                                            {problem.ID}
                                        </td>
                                        <td className="problem-name">
                                            <a href={problem.Link} target="_blank" rel="noopener noreferrer">{problem.Name}</a>
                                        </td>
                                        <td className={`problem-difficulty ${problem.Difficulty}`}>
                                            {problem.Difficulty}
                                        </td>
                                        <td className='problem-status'>
                                            <Checkbox id={problem.ID} label={problem.Name} />  
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProblemListAccordion;
