import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Button, Box, Typography, Link } from '@mui/material';

const users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', avatar: '', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', avatar: '', role: 'Editor' },
    { id: 3, name: 'Samuel Green', email: 'samuel.green@example.com', avatar: '', role: 'Viewer' },
    { id: 4, name: 'Emily Johnson', email: 'emily.johnson@example.com', avatar: '', role: 'Admin' },
];

export function UsersListPage() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'flex-start', padding: 8 }}>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>Users</Typography>
            <TableContainer component={Paper} sx={{ flexGrow: 1, height: '100%' }}>
                <Table sx={{ minWidth: 650 }} aria-label="users table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>{user.id}</TableCell>
                                <TableCell sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
                                    <Avatar alt={user.name} src={user.avatar} sx={{ marginRight: 0 }} />
                                    <Box
                                        sx={{
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            flexGrow: 1,
                                            textAlign: 'center',
                                            fontSize: '1rem',
                                            maxWidth: '125px',
                                        }}
                                    >
                                        {user.name}
                                    </Box>
                                </TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.role}</TableCell>
                                <TableCell>
                                    <Link href={`/users/edit/${user.id}`}>
                                        <Button variant="contained" color="primary" size="small" sx={{ mr: 1 }}>
                                            Edit
                                        </Button></Link>
                                    <Button variant="contained" color="secondary" size="small">
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box >
    );
}
