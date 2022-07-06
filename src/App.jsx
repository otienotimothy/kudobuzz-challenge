import { useState } from "react";

// Mui Components
import { Container } from "@mui/material";

//Custom Components
import { Navbar } from "./components/Navbar";
import { UploadCSV } from "./components/UploadCSV";
import { DisplayTable } from "./components/DisplayTable";

function App() {
	const [csvFile, setCsvFile] = useState();
	const [error, setError] = useState("");
	const [data, setData] = useState([]);

	const buildCsvData = (str) => {
		const tableHeaders = str.slice(0, str.indexOf("\n") - 1).split(",");
		const tableRows = str.slice(str.indexOf("\n") + 1).split("\n");
		console.log(tableHeaders);
		console.log(tableRows);

		let dataArray = tableRows.map((row) => {
			let values = row.split(",");
			let dataObj = tableHeaders.reduce((obj, header, i) => {
				obj[header] = values[i];
				return obj;
			}, {});
			return dataObj;
		});
		
		dataArray.pop()
		let uniqueData = [...new Set(dataArray.map(item => JSON.stringify(item)))]
		uniqueData = uniqueData.map(item => JSON.parse(item))
		setData(uniqueData);
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

	console.log(data.map((item) => item.name));

	return (
		<>
			<Navbar />
			<Container maxWidth="md">
				<UploadCSV
					setFile={setCsvFile}
					handleSubmit={handleSubmit}
					error={error}
				/>
				{csvFile ? <DisplayTable rows={data} /> : <p> Add a CSV File to show data </p> }
			</Container>
		</>
	);
}

export default App;
