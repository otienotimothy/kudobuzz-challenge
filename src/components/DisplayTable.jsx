import { DataGrid } from "@mui/x-data-grid";

const columns = [
	{ field: "name", headerName: "Name", width: 200 },
	{ field: "email", headerName: "Email", width: 500 },
	{
		field: "phone",
		headerName: "Phone",
		type: "number",
		width: 200
	}
];


export const DisplayTable = ({rows}) => {
    console.log(rows)
	return (
		<div style={{ height: 400 }}>
			<DataGrid
				rows={rows}
				columns={columns}
				pageSize={5}
				rowsPerPageOptions={[5]}
			/>
		</div>
	);
};
