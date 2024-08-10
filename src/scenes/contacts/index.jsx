import { Box } from "@mui/material";
import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../component/Header1";
import { useTheme } from "@mui/material";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [applicants, setApplicants] = useState([]);
  useEffect(() => {
    // Fetch the applicant data from the backend
    axios.get('http://localhost:9009/api/users/applicants')
      .then(response => {
        setApplicants(response.data);
        console.log(applicants);
        console.log("-------------------------------------------------------------------------");
      })
      .catch(error => {
        console.error("There was an error fetching the applicants data!", error);
      });
  }, []);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    ,
    {
      field: "name",
      headerName: "FullName",
      flex: 1,
      cellClassName: "name-column--cell",
    },
  
  
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 1,
    },
    {
      field: "gender",
      headerName: "Gender",
      flex: 1,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "education",
      headerName: "Education",
      flex: 1,
    },
    {
      field: "experience",
      headerName: "Expereince",
      flex: 1,
    },
    {
      field: "location",
      headerName: "Location",
      flex: 1,
    },
    {
      field: "headline",
      headerName: "Resume HeadLine",
      flex: 1,
    },
    {
      field: "resume",
      headerName: "Resume ",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="APPLICANTS"
        subtitle="List of Applicants are Applied for Jobs"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
