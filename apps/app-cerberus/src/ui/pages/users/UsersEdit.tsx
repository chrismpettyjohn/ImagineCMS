'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Button, TextField, Typography, MenuItem, Table, TableBody, TableCell, TableHead, TableRow, Accordion, AccordionSummary, AccordionDetails, Avatar, Paper, TableContainer } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', avatar: '', role: 'Admin', status: 'Active', lastActive: '2024-10-07', location: 'New York', timezone: 'America/New_York', language: 'English', activities: [{ date: '2024-10-07', action: 'Logged in' }, { date: '2024-10-05', action: 'Updated profile' }] },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', avatar: '', role: 'Editor', status: 'Suspended', lastActive: '2024-09-15', location: 'London', timezone: 'Europe/London', language: 'English', activities: [{ date: '2024-09-15', action: 'Logged in' }] },
    // More users...
];

interface UsersEditPageProps {
    userID: number;
}

export function UsersEditPage({ userID }: UsersEditPageProps) {
    const router = useRouter();
    const [formData, setFormData] = useState({ name: '', email: '', role: '', status: '', lastActive: '', location: '', timezone: '', language: '', avatar: '', activities: [] });

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
                    location: user.location,
                    timezone: user.timezone,
                    language: user.language,
                    avatar: user.avatar,
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

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({
                ...formData,
                avatar: URL.createObjectURL(file),
            });
        }
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

            {/* Personal Information Section */}
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6" style={{ color: 'black' }}>Personal Information</Typography>
                </AccordionSummary>
                <AccordionDetails>
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

                        <TextField
                            fullWidth
                            label="Location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            fullWidth
                            select
                            label="Timezone"
                            name="timezone"
                            value={formData.timezone}
                            onChange={handleChange}
                            margin="normal"
                            variant="outlined"
                        >
                            <MenuItem value="America/New_York">America/New_York</MenuItem>
                            <MenuItem value="Europe/London">Europe/London</MenuItem>
                            {/* Add more timezone options as needed */}
                        </TextField>
                        <TextField
                            fullWidth
                            select
                            label="Language"
                            name="language"
                            value={formData.language}
                            onChange={handleChange}
                            margin="normal"
                            variant="outlined"
                        >
                            <MenuItem value="English">English</MenuItem>
                            <MenuItem value="Spanish">Spanish</MenuItem>
                            {/* Add more language options as needed */}
                        </TextField>

                        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                            Save Changes
                        </Button>
                    </form>
                </AccordionDetails>
            </Accordion>

            {/* Profile Picture Section */}
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6" style={{ color: 'black' }}>Profile Picture</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Avatar src={formData.avatar} sx={{ width: 100, height: 100, marginBottom: 2 }} />
                    <Button variant="contained" component="label">
                        Upload New Picture
                        <input type="file" hidden onChange={handleFileChange} />
                    </Button>
                </AccordionDetails>
            </Accordion>

            {/* Account Controls Section */}
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6" style={{ color: 'black' }}>Account Controls</Typography>
                </AccordionSummary>
                <AccordionDetails>
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
                </AccordionDetails>
            </Accordion>

            {/* Recent Activity Section */}
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6">Recent Activity</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TableContainer component={Paper}>
                        <Table>
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
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}
