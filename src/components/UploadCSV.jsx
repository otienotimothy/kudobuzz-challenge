import { FormControl } from "@mui/material";
export const UploadCSV = ({ setFile, handleSubmit, error }) => {
	return (
		<>
			{error ? <p> {error} </p> : null}
			<form onSubmit={handleSubmit}>
				<FormControl>
					<input
                        style={{margin: '1rem 0'}}
						type="file"
						accept=".csv"
						name="csv"
						onChange={(e) => setFile(e.target.files[0])}
					/>
					<button style={{marginBottom: '1rem'}} >Submit</button>
				</FormControl>
			</form>
		</>
	);
};
