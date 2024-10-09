import React from 'react';
import Link from 'next/link';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Box, Chip, Typography, } from '@mui/material';

const contentTypes = [
    {
        id: 1,
        name: 'Blog Post',
        description: 'Schema for blog posts',
        version: 'v1.0',
        fields: ['title', 'body', 'author', 'publishedDate'],
        scopes: ['read', 'write', 'publish'],
    },
    {
        id: 2,
        name: 'Product',
        description: 'Schema for eCommerce products',
        version: 'v2.0',
        fields: ['name', 'price', 'description', 'category'],
        scopes: ['read', 'write', 'delete'],
    },
    {
        id: 3,
        name: 'Landing Page',
        description: 'Schema for landing page content',
        version: 'v1.5',
        fields: ['heroImage', 'headline', 'cta'],
        scopes: ['read', 'write'],
    },
];

export function ContentSchemaListPage() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'flex-start', padding: 8 }}>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>Content Schemas</Typography>
            <TableContainer component={Paper} sx={{ flexGrow: 1, height: '100%' }}>
                <Table sx={{ minWidth: 650 }} aria-label="content types table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Version</TableCell>
                            <TableCell>Fields</TableCell>
                            <TableCell>Permissions</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {contentTypes.map((contentSchema) => (
                            <TableRow key={contentSchema.id}>
                                <TableCell>{contentSchema.id}</TableCell>
                                <TableCell>{contentSchema.name}</TableCell>
                                <TableCell>{contentSchema.description}</TableCell>
                                <TableCell>{contentSchema.version}</TableCell>
                                {/* Display fields */}
                                <TableCell>
                                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                        {contentSchema.fields.map((field) => (
                                            <Chip key={field} label={field} size="small" variant="outlined" />
                                        ))}
                                    </Box>
                                </TableCell>
                                {/* Display permissions/scopes */}
                                <TableCell>
                                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                        {contentSchema.scopes.map((scope) => (
                                            <Chip key={scope} label={scope} color="primary" size="small" />
                                        ))}
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Link href={`/content-schemas/edit/${contentSchema.id}`}>
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
