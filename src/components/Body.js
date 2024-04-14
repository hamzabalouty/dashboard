import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Body() {
  return (
    <Box sx={{ flexGrow: 1 }} style={{backgroundColor: '#f6f6f6', margin: '0', padding: '0'}}>
      <Grid container spacing={2}>
        <Grid item xs={3}  style={{margin: '0', padding: '0'}}>
          <Item style={{padding: '20px'}}>
            <Sidebar />
          </Item>
        </Grid>
        <Grid item xs={8.5} style={{width: '100%', border: 'none', boxShadow: 'none'}}>
          <Item>
            <Dashboard />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Body;