'use client';
import React, { useState, useEffect, ChangeEvent, SyntheticEvent } from 'react';
import { Box, Button, TextField, Typography, Paper, IconButton, ImageList, ImageListItem } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import DeleteIcon from '@mui/icons-material/Delete';

interface MediaEditPageProps {
    mediaID: number;
}

export function MediaEditPage({ mediaID }: MediaEditPageProps) {
    const [media, setMedia] = useState({
        name: '',
        currentFile: '', // URL of current file
    });

    const [files, setFiles] = useState<File[]>([]); // State to store uploaded files
    const [filePreviews, setFilePreviews] = useState<string[]>([]); // State to store file preview URLs

    useEffect(() => {
        // Mock current file setup
        // You could fetch the current file from your API or state management here
        setMedia((prevMedia) => ({
            ...prevMedia,
            currentFile: 'https://via.placeholder.com/150', // Example existing file (image)
        }));
    }, [mediaID]);

    function onChange(event: ChangeEvent<HTMLInputElement>) {
        setMedia((prevMedia) => ({
            ...prevMedia,
            [event.target.name]: event.target.value,
        }));
    }

    // Handle form submission
    function onSubmit(event: SyntheticEvent) {
        event.preventDefault();
        console.log('Media submitted:', media, files);
    }

    // Handle file drops using `react-dropzone`
    const onDrop = (acceptedFiles: File[]) => {
        setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]); // Add new files to state
        const newPreviews = acceptedFiles.map((file) => URL.createObjectURL(file)); // Generate preview URLs
        setFilePreviews((prevPreviews) => [...prevPreviews, ...newPreviews]); // Add previews to state
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: 'image/*,video/*', // Accept images and videos
    });

    // Handle file removal
    const removeFile = (index: number) => {
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
        setFilePreviews((prevPreviews) => prevPreviews.filter((_, i) => i !== index));
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'flex-start', padding: 8 }}>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>Editing Media</Typography>
            <form onSubmit={onSubmit}>
                <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={media.name}
                    onChange={onChange}
                    margin="normal"
                    variant="outlined"
                />

                {/* Show current file if available */}
                {media.currentFile && (
                    <Box sx={{ marginTop: 4 }}>
                        <Typography variant="h6">Current File</Typography>
                        <Paper sx={{ padding: 2, textAlign: 'center', marginBottom: 2 }}>
                            <img
                                src={media.currentFile}
                                alt="Current Media"
                                style={{ maxWidth: '100%', maxHeight: '200px' }}
                            />
                        </Paper>
                    </Box>
                )}

                {/* File Drop Area */}
                <Paper
                    {...getRootProps()}
                    sx={{
                        padding: 4,
                        textAlign: 'center',
                        border: '2px dashed grey',
                        backgroundColor: isDragActive ? '#e3f2fd' : '#fafafa',
                        cursor: 'pointer',
                        marginTop: 4,
                        marginBottom: 4
                    }}
                >
                    <input {...getInputProps()} />
                    <Typography variant="body1">
                        {isDragActive ? 'Drop the files here...' : 'Drag & drop some files here, or click to select files'}
                    </Typography>

                    {/* Preview of dropped files */}
                    {filePreviews.length > 0 && (
                        <ImageList sx={{ width: '100%', height: 200, marginTop: 2 }} cols={3} rowHeight={164}>
                            {filePreviews.map((preview, index) => (
                                <ImageListItem key={index}>
                                    <img
                                        src={preview}
                                        alt={`preview-${index}`}
                                        style={{ maxHeight: '100%' }}
                                    />
                                    <IconButton
                                        onClick={() => removeFile(index)}
                                        sx={{ position: 'absolute', top: 0, right: 0, color: 'white' }}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </ImageListItem>
                            ))}
                        </ImageList>
                    )}
                </Paper>

                <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                    Save
                </Button>
            </form>
        </Box>
    );
}
