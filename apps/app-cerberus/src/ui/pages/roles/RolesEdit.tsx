'use client';
import React, { useState, ChangeEvent, SyntheticEvent } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

interface RolesEditPageProps {
    roleID: number;
}

export function RolesEditPage({ roleID }: RolesEditPageProps) {
    const [role, setRole] = useState({
        name: '',
        scopes: ['user:list', 'user:view']
    })

    function onChange(event: ChangeEvent<HTMLInputElement>) {
        setRole(_ => ({
            ..._,
            [event.target.name]: event.target.value,
        }))
    }

    function onSubmit(event: SyntheticEvent) {
        event.preventDefault();
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'flex-start', padding: 8 }}>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>Editing Role</Typography>
            <form onSubmit={onSubmit}>
                <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={role.name}
                    onChange={onChange}
                    margin="normal"
                    variant="outlined"
                />
                <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                    Save
                </Button>
            </form>
        </Box>
    );
}
