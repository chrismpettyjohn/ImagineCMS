'use client';
import { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Menu, MenuItem, Avatar } from "@mui/material";
import { SIDEBAR_WIDTH } from "../admin-sidebar/AdminSidebar";

export function AdminHeader() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
                ml: `${SIDEBAR_WIDTH}px`,
                boxShadow: 'none',
                bgcolor: 'background.primary',
                color: 'text.primary',
                pl: 4,
            }}
        >
            <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Box>
                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        onClick={handleMenuOpen}
                    >
                        <Avatar alt="User Name" src="/user-avatar.jpg" sx={{ mr: 1 }} />
                        <Typography variant="subtitle2" sx={{ color: '#fff' }}>
                            Chris P
                        </Typography>
                    </IconButton>

                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleMenuClose}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
