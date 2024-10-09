'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Button, TextField, Typography, MenuItem } from '@mui/material';

const users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', avatar: '', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', avatar: '', role: 'Editor' },
    { id: 3, name: 'Samuel Green', email: 'samuel.green@example.com', avatar: '', role: 'Viewer' },
    { id: 4, name: 'Emily Johnson', email: 'emily.johnson@example.com', avatar: '', role: 'Admin' },
];

interface UsersEditPageProps {
    userID: number;
}

export function UsersEditPage({ userID }: UsersEditPageProps) {
    const router = useRouter();
    const [formData, setFormData] = useState({ name: '', email: '', role: '' });

    // Fetch user based on the ID (this is mock, should be from API in real scenarios)
    useEffect(() => {
        if (userID) {
            const user = users.find((u) => u.id === userID);
            if (user) {
                setFormData({
                    name: user.name,
                    email: user.email,
                    role: user.role,
                });
            }
        }
    }, [userID]);

    // Handle form input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Updated user data:', formData);
        router.push('/users'); // Navigate back to users list after saving
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'flex-start', padding: 8 }}>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>Editing User</Typography>
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
                    Save
                </Button>
            </form>
        </Box>
    );
}
