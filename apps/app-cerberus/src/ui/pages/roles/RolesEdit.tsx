'use client';
import React, { useState, ChangeEvent, SyntheticEvent } from 'react';
import { Box, Button, TextField, Typography, Paper, Checkbox, List, ListItem, ListItemText, ListItemIcon, Divider } from '@mui/material';

// Available scopes for selection (example scopes)
const availableScopes = [
    'user:view',
    'user:create',
    'user:delete',
    'user:update',
    'role:view',
    'role:create',
    'role:delete'
];

interface RolesEditPageProps {
    roleID: number;
}

export function RolesEditPage({ roleID }: RolesEditPageProps) {
    const [role, setRole] = useState({
        name: '',
        scopes: ['user:view', 'user:create'] // Example of default selected scopes
    });

    // Handle text input changes for the role name
    function onChange(event: ChangeEvent<HTMLInputElement>) {
        setRole({
            ...role,
            [event.target.name]: event.target.value,
        });
    }

    // Handle checkbox selection for scopes
    const handleScopeToggle = (scope: string) => {
        setRole((prevRole) => {
            const isSelected = prevRole.scopes.includes(scope);
            const updatedScopes = isSelected
                ? prevRole.scopes.filter((s) => s !== scope) // Remove scope if already selected
                : [...prevRole.scopes, scope]; // Add scope if not selected

            return {
                ...prevRole,
                scopes: updatedScopes
            };
        });
    };

    // Handle form submission
    function onSubmit(event: SyntheticEvent) {
        event.preventDefault();
        console.log('Updated Role:', role);
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'flex-start', padding: 8 }}>
            <Typography variant="h4" style={{ marginBottom: 2, color: 'black' }}>Editing Role</Typography>
            <form onSubmit={onSubmit}>
                {/* Role Name Input */}
                <TextField
                    fullWidth
                    label="Role Name"
                    name="name"
                    value={role.name}
                    onChange={onChange}
                    margin="normal"
                    variant="outlined"
                />

                {/* Available Scopes List */}
                <Typography variant="h6" style={{ marginTop: 4, color: 'black' }}>Available Scopes</Typography>
                <Paper sx={{ maxHeight: 300, overflow: 'auto', marginTop: 1, marginBottom: 2 }}>
                    <List>
                        {availableScopes.map((scope) => (
                            <ListItem key={scope} button onClick={() => handleScopeToggle(scope)}>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={role.scopes.includes(scope)}
                                        tabIndex={-1}
                                        disableRipple
                                    />
                                </ListItemIcon>
                                <ListItemText primary={scope} />
                            </ListItem>
                        ))}
                    </List>
                </Paper>

                <Divider sx={{ marginY: 2 }} />

                <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                    Save
                </Button>
            </form>
        </Box>
    );
}
