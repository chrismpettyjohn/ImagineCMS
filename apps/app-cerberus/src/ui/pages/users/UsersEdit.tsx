'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Button, TextField, Typography, MenuItem, Table, TableBody, TableCell, TableHead, TableRow, Divider, Paper, TableContainer } from '@mui/material';

const users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', avatar: '', role: 'Admin', status: 'Active', lastActive: '2024-10-07', activities: [{ date: '2024-10-07', action: 'Logged in' }, { date: '2024-10-05', action: 'Updated profile' }] },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', avatar: '', role: 'Editor', status: 'Suspended', lastActive: '2024-09-15', activities: [{ date: '2024-09-15', action: 'Logged in' }] },
    { id: 3, name: 'Samuel Green', email: 'samuel.green@example.com', avatar: '', role: 'Viewer', status: 'Active', lastActive: '2024-10-06', activities: [{ date: '2024-10-06', action: 'Logged in' }] },
    { id: 4, name: 'Emily Johnson', email: 'emily.johnson@example.com', avatar: '', role: 'Admin', status: 'Active', lastActive: '2024-10-08', activities: [{ date: '2024-10-08', action: 'Logged in' }] },
];

interface UsersEditPageProps {
    userID: number;
}

export function UsersEditPage({ userID }: UsersEditPageProps) {
    const router = useRouter();
    const [formData, setFormData] = useState({ name: '', email: '', role: '', status: '', lastActive: '', activities: [] });

    useEffect(() => {
        if (userID) {
            const user = users.find((u) => u.id === userID);
            if (user) {
                setFormData({
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    status: user.status,
                    lastActive: user.lastActive,
                    activities: user.activities,
                });
            }
        }
    }, [userID]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Updated user data:', formData);
        router.push('/users');
    };

    const handleResetPassword = () => {
        alert('Password reset link sent to user\'s email.');
    };

    const handleSuspendAccount = () => {
        setFormData((prevData) => ({ ...prevData, status: prevData.status === 'Active' ? 'Suspended' : 'Active' }));
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', padding: 4, maxWidth: '800px', margin: 'auto' }}>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>User Editor</Typography>
            <Paper sx={{ padding: 3, marginBottom: 4 }}>
                <Typography variant="h6" gutterBottom style={{ color: 'black' }}>Personal Information</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        fullWidth
                        select
                        label="Role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                    >
                        <MenuItem value="Admin">Admin</MenuItem>
                        <MenuItem value="Editor">Editor</MenuItem>
                        <MenuItem value="Viewer">Viewer</MenuItem>
                    </TextField>
                    <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                        Save Changes
                    </Button>
                </form>
            </Paper>

            <Paper sx={{ padding: 3, marginBottom: 4 }}>
                <Typography variant="h6" gutterBottom style={{ color: 'black' }}>Account Controls</Typography>
                <Typography variant="body1" sx={{ marginBottom: 2 }}>
                    <strong>Status:</strong> {formData.status}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 2 }}>
                    <strong>Last Active:</strong> {formData.lastActive}
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button variant="outlined" color="secondary" onClick={handleResetPassword}>
                        Reset Password
                    </Button>
                    <Button
                        variant="outlined"
                        color={formData.status === 'Active' ? 'error' : 'primary'}
                        onClick={handleSuspendAccount}
                    >
                        {formData.status === 'Active' ? 'Suspend Account' : 'Activate Account'}
                    </Button>
                </Box>
            </Paper>

            <Paper sx={{ padding: 3 }}>
                <Typography variant="h6" gutterBottom style={{ color: 'black' }}>Recent Activity</Typography>
                <TableContainer component={Paper} sx={{ flexGrow: 1, height: '100%' }}>
                    <Table sx={{ mt: 2 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell><strong>Date</strong></TableCell>
                                <TableCell><strong>Action</strong></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {formData.activities.length > 0 ? (
                                formData.activities.map((activity, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{activity.date}</TableCell>
                                        <TableCell>{activity.action}</TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={2} align="center">No recent activity</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
}
