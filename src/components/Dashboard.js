import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Item } from './Body';
import Img1 from '../assets/Frame 4.png';
import Img2 from '../assets/Filled - Chart.png';

function Dashboard() {
  return (
    <div style={{width: '100%', textAlign: 'left', padding: '15px'}}>
      <h2 style={{color: '#23272E', fontWeight: '600', fontSize: '22px'}}>Hello, username</h2>
      <p>Your current sales summary and activity</p>
      <div style={{width: '100%', display: 'flex', gap: '1%', marginBottom: '60px'}}>
        <div style={{ marginTop: '20px', border: '1px solid #ddd', borderRadius: '15px', padding: '10px', textAlign: 'left', width: '19%'}}>
          <div style={{width: '80px', backgroundColor: '#2A5E74', color: '#fff', borderRadius: '30px', padding: '7px 0px', textAlign: 'center'}}>
            <p>2 New</p>
          </div>
          <p style={{marginTop: '7px'}}>New Orders</p>
          <h3 style={{color: '#2A5E74'}}>2,837.90 SAR</h3>
        </div>
        <div style={{ marginTop: '20px', border: '1px solid #ddd', borderRadius: '15px', padding: '10px', textAlign: 'left', width: '19%'}}>
          <div style={{width: '80px', backgroundColor: '#2A5E74', color: '#fff', borderRadius: '30px', padding: '7px 0px', textAlign: 'center'}}>
            <p>2 New</p>
          </div>
          <p style={{marginTop: '7px'}}>Overdue Invoices</p>
          <h3 style={{color: '#2A5E74'}}>2,837.90 SAR</h3>
        </div>
        <div style={{ marginTop: '20px', border: '1px solid #ddd', borderRadius: '15px', padding: '10px', textAlign: 'left', width: '19%'}}>
          <div style={{width: '80px', backgroundColor: '#2A5E74', color: '#fff', borderRadius: '30px', padding: '7px 0px', textAlign: 'center'}}>
            <p>2 New</p>
          </div>
          <p style={{marginTop: '7px'}}>Today's Quotations</p>
          <h3 style={{color: '#2A5E74'}}>2,837.90 SAR</h3>
        </div>
        <div style={{ marginTop: '20px', border: '1px solid #ddd', borderRadius: '15px', padding: '10px', textAlign: 'left', width: '19%'}}>
          <div style={{width: '80px', backgroundColor: '#FF9900', color: '#fff', borderRadius: '30px', padding: '7px 0px', textAlign: 'center'}}>
            <p>9 New</p>
          </div>
          <p style={{marginTop: '7px'}}>In review Quotations</p>
          <h3 style={{color: '#FF9900'}}>2,037.90 SAR</h3>
        </div>
        <div style={{ marginTop: '20px', border: '1px solid #ddd', borderRadius: '15px', padding: '10px', textAlign: 'left', width: '19%'}}>
          <div style={{width: '80px', backgroundColor: '#065AFF', color: '#fff', borderRadius: '30px', padding: '7px 0px', textAlign: 'center'}}>
            <p>3 New</p>
          </div>
          <p style={{marginTop: '7px'}}>unproved Quotations</p>
          <h3 style={{color: '#065AFF'}}>2,037.90 SAR</h3>
        </div>
      </div>

      <Box sx={{ flexGrow: 1 }} style={{ margin: '0', padding: '0'}}>
        <Grid container spacing={2}>
          <Grid item xs={6}  style={{ margin: '0', height: '100%', padding: '0'}}>
            <Item style={{ marginTop: '30px', width: '100%'}}>
              <img src={Img1} style={{ width: '100%'}} alt='image'/>
            </Item>
          </Grid>
          <Grid item xs={6} style={{width: '100%', height: '100%', border: 'none', boxShadow: 'none'}}>
            <Item style={{width: '100%'}}>
              <img src={Img2} style={{width: '100%'}} alt='image'/>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Dashboard;