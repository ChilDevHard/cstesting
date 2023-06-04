import React from 'react';
import {Box, Typography} from '@mui/material'

const APIListComponent = () => {
  const apis = [
    '/api/cars/{id}',
    '/api/brands/{id}',
    '/api/companies/{id}',
  ];

  return (
    <Box 
      sx={{ 
        backgroundColor: '#333', 
        padding: '1rem', 
        borderRadius: '10px' 
      }}
    >
      <Typography style={{ color: '#fff' }} variant="h6">Available APIs:</Typography>
      <Box style={{ color: '#fff' }}>
        {apis.map((api, index) => (
          <Typography key={index} variant="body1">{process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000'}{api}</Typography>
        ))}
      </Box>
    </Box>
  );
};

export default APIListComponent;