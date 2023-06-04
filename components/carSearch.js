import React, { useState } from 'react';
import useSWR from 'swr';
import {Box, Button, Input, Typography} from '@mui/material'
import TableComponent from './tableComponent';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const CarSearch = () => {
  const [id, setId] = useState('');

  const { data, error, isValidating } = useSWR(id ? `/api/cars/${id}` : null, fetcher);

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.target.elements.myInput.value;
    setId(inputValue);
  };

  if (error) {
    return (
			<Box sx={{textAlign: 'center'}}>
				<Typography variant="body1">Failed to load</Typography>
			</Box>
		)
  }

  if (isValidating) {
    return (
			<Box sx={{textAlign: 'center'}}>
				<Typography variant="body1">Loading...</Typography>
			</Box>
		)
  }

  return (
		<Box 
			id="car-finder-component" 
			sx={{ 
				textAlign: 'center', 
				display: 'flex', 
				flexDirection: 'column', 
				alignItems: 'center' 
			}}
		>
			<Typography 
				variant="h3" 
				sx={{ marginBottom: '1rem' }}
			>
				Car search
			</Typography>
			<Box display="flex" flexDirection="column" alignItems="center">
				<form onSubmit={handleSubmit}>
					<Input
						type="text"
						name="myInput"
						placeholder="Enter ID"
						defaultValue={id}
						sx={{ 
							fontSize: '1.5rem', 
							marginBottom: '1rem', 
							textAlign: 'center',
							'& input': {
								textAlign: 'center',
							},
						}}
					/>
					<br/>
					<Button type="submit" variant="outlined" sx={{ fontSize: '1.2rem' }}>
						Search
					</Button>
				</form>
			</Box>
			
			{data && typeof data === 'object' ? (
				<TableComponent data={data} />
			) : (
				<Box sx={{marginTop: '15px'}}>
					<Typography variant="h5">No car data available</Typography>
				</Box>
			)}
		</Box>
	);

};

export default CarSearch;