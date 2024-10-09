import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Button, Box, Chip, Typography, Link } from '@mui/material';

const roles = [
    {
        id: 1,
        name: 'Super Administratator',
        role: 'Admin',
        scopes: ['read', 'write', 'delete'],
    },
    {
        id: 2,
        name: 'Editor',
        role: 'Editor',
        scopes: ['read', 'write'],
    },
    {
        id: 3,
        name: 'Viewer',
        role: 'Viewer',
        scopes: ['read'],
    },
    {
        id: 4,
        name: 'Administrator',
        role: 'Admin',
        scopes: ['read', 'write'],
    },
];

export function RolesListPage() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'flex-start', padding: 8 }}>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>Roles</Typography>
            <TableContainer component={Paper} sx={{ flexGrow: 1, height: '100%' }}>
                <Table sx={{ minWidth: 650 }} aria-label="roles table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Permissions</TableCell> {/* New column for permissions */}
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {roles.map((role) => (
                            <TableRow key={role.id}>
                                <TableCell>{role.id}</TableCell>
                                <TableCell>{role.name}</TableCell>
                                <TableCell>{role.role}</TableCell>
                                {/* Display permissions/scopes */}
                                <TableCell>
                                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                        {role.scopes.map((scope) => (
                                            <Chip key={scope} label={scope} color="primary" size="small" />
                                        ))}
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Link href={`/roles/edit/${role.id}`}>
                                        <Button variant="contained" color="primary" size="small" sx={{ mr: 1 }}>
                                            Edit
                                        </Button>
                                    </Link>
                                    <Button variant="contained" color="secondary" size="small">
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
