import React from 'react';
import { 
	Box, 
	Table, 
	TableBody, 
	TableCell, 
	TableContainer, 
	TableHead, 
	TableRow, 
	Typography 
} from '@mui/material';

const TableComponent = ({ data }) => {
  const keys = Object.keys(data);

  return (
    <TableContainer component={Box} spacing={2}>
      <Table>
        <TableHead>
          <TableRow>
            {keys.map((key) => (
              <TableCell key={key}>
                <Typography variant="h6" fontWeight={500}>{key}</Typography>
                </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
            {keys.map((key) => (
              <TableCell key={key}>
                {typeof data[key] === 'object' ? (
                  Object.entries(data[key]).map(([nestedKey, nestedValue]) => (
                    <Typography key={nestedKey} variant="body1">{`${nestedKey}: ${nestedValue}`}</Typography>
                  ))
                ) : (
                  <Typography variant="body1">{data[key]}</Typography>
                )}
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;