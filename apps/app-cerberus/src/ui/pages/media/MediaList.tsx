import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Button, Box, Typography } from '@mui/material';
import Link from 'next/link';

const mediaItems = [
    {
        id: 1,
        name: 'Landing Page Banner',
        type: 'Image',
        size: '2.4MB',
        dateUploaded: '2024-01-10',
        previewUrl: 'https://via.placeholder.com/100',  // Placeholder for image preview
    },
    {
        id: 2,
        name: 'Product Video',
        type: 'Video',
        size: '10.5MB',
        dateUploaded: '2024-01-08',
        previewUrl: 'https://via.placeholder.com/100',  // Placeholder for video preview
    },
    {
        id: 3,
        name: 'Whitepaper',
        type: 'Document',
        size: '500KB',
        dateUploaded: '2024-01-09',
        previewUrl: 'https://via.placeholder.com/100',  // Placeholder for document preview
    },
];

export function MediaListPage() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'flex-start', padding: 8 }}>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>Media</Typography>
            <TableContainer component={Paper} sx={{ flexGrow: 1, height: '100%' }}>
                <Table sx={{ minWidth: 650 }} aria-label="media table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Preview</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Size</TableCell>
                            <TableCell>Date Uploaded</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mediaItems.map((media) => (
                            <TableRow key={media.id}>
                                <TableCell>{media.id}</TableCell>
                                {/* Display media preview */}
                                <TableCell>
                                    <Avatar
                                        variant="square"
                                        src={media.previewUrl}
                                        alt={media.name}
                                        sx={{ width: 50, height: 50 }}
                                    />
                                </TableCell>
                                <TableCell>{media.name}</TableCell>
                                <TableCell>{media.type}</TableCell>
                                <TableCell>{media.size}</TableCell>
                                <TableCell>{media.dateUploaded}</TableCell>
                                <TableCell>
                                    <Link href={`/media/edit/${media.id}`}>
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
