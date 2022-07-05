import MUIDataTable from "mui-datatables";

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
	}
];

const options = {
	responsive: 'simple',
	rowsPerPage: 10,
	selectableRows: false
};

export const DisplayTable = ({rows}) => {
	return (
		<MUIDataTable
			title={"CSV File Data"}
			data={rows}
			columns={columns}
			options={options}
		/>
	);
};
