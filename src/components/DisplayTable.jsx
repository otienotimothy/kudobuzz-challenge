import { DataGrid } from "@mui/x-data-grid";

const columns = [
	{ field: "name", headerName: "Name", width: 230 },
	{ field: "email", headerName: "Email", width: 400 },
	{
		field: "phone",
		headerName: "Phone",
		type: "number",
		width: 210
	}
];


export const DisplayTable = ({rows}) => {
    console.log(rows)
	return (
		<div style={{ height: 480 }}>
			<DataGrid
				rows={rows}
				columns={columns}
				pageSize={10}
				rowsPerPageOptions={[5]}
			/>
		</div>
	);
};
