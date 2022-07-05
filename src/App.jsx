import { useState } from "react"
import { UploadCSV } from "./components/UploadCSV"

function App() {
  const [csvFile, setCsvFile] = useState();
	const [error, setError] = useState("");
  const [data, setData] = useState([])

  const buildCsvData = (str) => {
		const tableHeaders = str.slice(0, str.indexOf("\n") - 1).split(",");
		const tableRows = str.slice(str.indexOf("\n") + 1).split("\n");
		console.log(tableHeaders);
		console.log(tableRows);

		const dataArray = tableRows.map((row) => {
			let values = row.split(",");
			let dataObj = tableHeaders.reduce((obj, header, i) => {
				obj[header] = values[i];
				return obj;
			}, {});
			return dataObj;
		});
    console.log(dataArray)
    setData(dataArray)
	};

  const handleSubmit = (e) => {
		e.preventDefault();

		if (csvFile) {
			const reader = new FileReader();

			reader.onload = (e) => {
				const text = e.target.result;
				console.log(text);
				buildCsvData(text);
			};
			reader.readAsText(csvFile);
		} else {
			setError("Please Upload a CSV File");
		}
	};

  console.log(data.map(item => item.name))

  return (
    <>
     <UploadCSV setFile={setCsvFile} handleSubmit={handleSubmit} error={error} />
     {data && data.map(item => <p> {item.name} </p>)}
    </>
  )
}

export default App
