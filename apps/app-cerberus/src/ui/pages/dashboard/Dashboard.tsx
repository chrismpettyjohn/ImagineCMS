import React from 'react';
import { Grid, Box, Typography, Card, CardContent, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// Sample data for recent activity
const recentActivity = [
    { id: 1, activity: 'Uploaded a new image', date: '2024-01-10' },
    { id: 2, activity: 'Created a new blog post', date: '2024-01-09' },
    { id: 3, activity: 'Updated product details', date: '2024-01-08' },
];

export function DashboardPage() {
    return (
        <Box sx={{ flexGrow: 1, padding: 8 }}>
            <Typography variant="h4" sx={{ marginBottom: 4 }}>
                Dashboard
            </Typography>

            {/* Key Stats */}
            <Grid container spacing={4}>
                {/* Total Users */}
                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Total Users</Typography>
                            <Typography variant="h3">1,240</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Total Content Items */}
                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Total Content</Typography>
                            <Typography variant="h3">324</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Total Media Items */}
                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Media Files</Typography>
                            <Typography variant="h3">128</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Media Storage Usage */}
                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Storage Used</Typography>
                            <Typography variant="h3">10.4 GB</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Quick Actions */}
            <Box sx={{ display: 'flex', gap: 2, marginY: 4 }}>
                <Button variant="contained" color="primary">
                    Create New Content
                </Button>
                <Button variant="outlined" color="primary">
                    Upload Media
                </Button>
                <Button variant="outlined" color="secondary">
                    Manage Users
                </Button>
            </Box>

            {/* Recent Activity */}
            <Typography variant="h5" sx={{ marginBottom: 2 }}>
                Recent Activity
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Activity</TableCell>
                            <TableCell>Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {recentActivity.map((activity) => (
                            <TableRow key={activity.id}>
                                <TableCell>{activity.id}</TableCell>
                                <TableCell>{activity.activity}</TableCell>
                                <TableCell>{activity.date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
