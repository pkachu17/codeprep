import React from 'react';
import './App.css';
import ProblemListAccordion from './ProblemListAccordion';
import data from "./ProblemData.json";
import TooltipButton from './Components/TooltipButton';

function App() {


  const [problemsData, setProblemsData] = React.useState(data);
  const statusTooltipMessage = "Changes saved and fetched from local storage";

  const url = "ProblemData.json";

  const brand = "{CodePrep}";

  // React.useEffect(() => {
  //   // Use fetch to load the JSON file
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((jsonData) => setProblemsData(jsonData))
  //     .catch((error) => console.error('Error fetching data:', error));
  // }, []);

  if (!problemsData) {
    return <div>Loading data...</div>;
  }

  return (
    <div className="App">
      <div className='header'>
        {`${brand}`}
      </div>
      <div className='body'>
        <ProblemListAccordion problemsData={problemsData} />
      </div>
      <div className='footer'>
      Make it work, make it right, make it fast – Kent Beck
      </div>
    </div>
  );
}

export default App;


