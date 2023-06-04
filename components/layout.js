import { Box, Container } from '@mui/material';


const Layout = ({ children }) => {

  return (
    <Container
      maxWidth={false}
      id="layout-container"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: `linear-gradient(180deg, #0055ff 0%, rgb(0, 153, 255) 100%)`,
        width: '100%',
        minHeight: '100vh',
      }}
    >
      <Box
        maxWidth={'lg'}
        sx={{
          width: '100%',
          background: 'white',
          borderRadius: '10px',
          padding: '15px'
        }}
      >
        {children}
      </Box>
    </Container>
  );
};

export default Layout;