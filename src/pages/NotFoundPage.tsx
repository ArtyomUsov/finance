import { Box } from '@mui/material';
import React from 'react';

const NotFoundPage = () => {
    return (
        <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: 20,
        }}
      >
        <h2>Это не те дроиды</h2>
      </Box>
    );
};

export default NotFoundPage;