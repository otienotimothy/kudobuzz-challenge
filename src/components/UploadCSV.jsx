import { useState } from "react";

export const UploadCSV = () => {
	const [csvFile, setCsvFile] = useState();

    const handleSubmit = (e) => {
        e.preventDefault()
        const reader = new FileReader()

        reader.onload = (e) => {
            const text = e.target.result;
            console.log(text)
        }

        reader.readAsText(csvFile)
    }

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="file"
				accept=".csv"
				name="csv"
				onChange={(e) => setCsvFile(e.target.files[0])}
			/>
			<button>Submit</button>
		</form>
	);
};
