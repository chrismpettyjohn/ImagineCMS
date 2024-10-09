import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Box, Chip, Typography, Link } from '@mui/material';

// Sample data structure for pages
const contentPages = [
    {
        id: 1,
        name: 'Home Page',
        description: 'Main landing page of the site',
        version: 'v1.0',
        components: ['heroImage', 'headline', 'subheading', 'cta'],
    },
    {
        id: 2,
        name: 'Blog Post',
        description: 'Content page for a blog post',
        version: 'v1.2',
        components: ['title', 'author', 'body', 'publishedDate'],
    },
    {
        id: 3,
        name: 'Product Page',
        description: 'Page for individual product display',
        version: 'v2.0',
        components: ['productName', 'price', 'description', 'images'],
    },
];

export function ContentPageListPage() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'flex-start', padding: 8 }}>
            <Typography variant="h4" sx={{ marginBottom: 3 }}>
                Pages
            </Typography>
            <TableContainer component={Paper} sx={{ flexGrow: 1 }}>
                <Table sx={{ minWidth: 650 }} aria-label="content pages table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Version</TableCell>
                            <TableCell>Components</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {contentPages.map((page) => (
                            <TableRow key={page.id}>
                                <TableCell>{page.id}</TableCell>
                                <TableCell>{page.name}</TableCell>
                                <TableCell>{page.description}</TableCell>
                                <TableCell>{page.version}</TableCell>
                                <TableCell>
                                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                        {page.components.map((field) => (
                                            <Chip key={field} label={field} size="small" variant="outlined" />
                                        ))}
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Link href={`/content-pages/edit/${page.id}`}>
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
