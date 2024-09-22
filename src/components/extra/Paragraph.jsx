import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TitleName from '../extra/TitleName.jsx';

export default function Paragraph({ text }) {
    return (
        <div style={{
            fontSize:"1.1em",
            // fontFamily:'"Shippori Antique", sans-serif',
            color:'#181C14'


        }}>
           <p>{text}</p>
        </div>
    )
}