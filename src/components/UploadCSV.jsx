export const UploadCSV = ({setFile, handleSubmit, error}) => {

	return (
		<>
			{error ? <p> {error} </p> : null}
			<form onSubmit={handleSubmit}>
				<input
					type="file"
					accept=".csv"
					name="csv"
					onChange={(e) => setFile(e.target.files[0])}
				/>
				<button>Submit</button>
			</form>
		</>
	);
};
