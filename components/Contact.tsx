import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { WhatsApp } from '@mui/icons-material';

const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
];

export default function BasicSpeedDial() {
    return (
        <Box sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 9999 }}>
            <a target="_blank" href="https://wa.me/6285815042056?text=Hallo Selamat Pagi, Saya Tertarik">
                <SpeedDial
                    ariaLabel="WhatsApp Contact"
                    icon={<WhatsApp sx={{ background: "green", borderRadius: "50px" }} />}
                    className="animate-bounce"
                >
                </SpeedDial>
            </a>
        </Box>
    );
}
