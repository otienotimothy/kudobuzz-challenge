import MUIDataTable from "mui-datatables";

import DeleteIcon from "@mui/icons-material/Delete";


export const DisplayTable = ({ rows }) => {

	const columns = [
		{
			name: "name",
			label: "Name",
			options: {
				filter: true,
				sort: true
			}
		},
		{
			name: "email",
			label: "Email",
			options: {
				filter: true,
				sort: false
			}
		},
		{
			name: "phone",
			label: "Phone",
			options: {
				filter: true,
				sort: false
			}
		},
		{
			name: "delete",
			label: "Delete",
			options: {
				customBodyRender: (value, tableMeta, updateValue) => {
					console.log(value);
					// console.log(tableMeta);
					return (
						<DeleteIcon
							onClick={() => {
								console.log(tableMeta.rowIndex)
								console.log(tableMeta.tableData[tableMeta.rowIndex])
								tableMeta.tableData.filter(
									(_, index) => tableMeta.rowIndex !== index
								);
							}}
							color="primary"
						/>
					);
				}
			}
		}
	];
	
	const options = {
		responsive: "simple",
		rowsPerPage: 10,
		selectableRows: "none"
	};
	

	return (
		<MUIDataTable
			title={"CSV File Data"}
			data={rows}
			columns={columns}
			options={options}
		/>
	);
};
