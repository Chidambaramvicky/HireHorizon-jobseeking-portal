import React from 'react';
import { Box, CssBaseline, Toolbar, Typography, Grid, Paper } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Sidebar from './Components3/Sidebarr';
import AddJob from './Components3/AddJob';
import ManageCompany from './Components3/ManageCompany';
import ApplicantDetails from './Components3/ApplicantDetails';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const drawerWidth = 240;

const data = [
  { name: 'Applicants Placed', value: 400 },
  { name: 'Jobs Provided', value: 300 },
  { name: 'Companies', value: 300 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const AdminDashboard = () => {
  return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Sidebar />
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, marginLeft: `${drawerWidth}px` }}
        >
          <Toolbar />
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Paper sx={{ padding: 2, textAlign: 'center' }}>
                <Typography variant="h6">Applicants Placed</Typography>
                <Typography variant="h4">400</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ padding: 2, textAlign: 'center' }}>
                <Typography variant="h6">Jobs Provided</Typography>
                <Typography variant="h4">300</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ padding: 2, textAlign: 'center' }}>
                <Typography variant="h6">Companies</Typography>
                <Typography variant="h4">300</Typography>
              </Paper>
            </Grid>
          </Grid>
          <Box sx={{ marginY: 4 }}>
            <Typography variant="h5" align="center">Overall Statistics</Typography>
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </Box>
            <Link path="/add-job" element={<AddJob />} />
            <Link path="/manage-company" element={<ManageCompany />} />
            <Link path="/applicant-details" element={<ApplicantDetails />} />
         
        </Box>
      </Box>
  );
};

export default AdminDashboard;
