'use client';
import React, { useMemo, useState } from 'react';
import { Box, Breadcrumbs, Container, Typography, Menu, MenuItem, IconButton } from '@mui/material';
import MonacoEditor from 'react-monaco-editor';
import YAML from 'js-yaml';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import 'monaco-editor/esm/vs/basic-languages/yaml/yaml.contribution';

interface SchemaEditorProps {
    fileName: string;
    defaultSchema: any;
    onSave(newSchema: object): void;
}

export function SchemaEditor({ fileName, defaultSchema, onSave }: SchemaEditorProps) {
    const filePath = useMemo(() => fileName.split('/').filter(Boolean), [fileName]);
    const [schema, setSchema] = useState<any>(YAML.load(defaultSchema));
    const [yamlText, setYamlText] = useState(YAML.dump(defaultSchema));
    const [validationError, setValidationError] = useState<any>(null);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    function onSchemaChange(newSchema: any) {
        setYamlText(newSchema);
        try {
            const parsedSchema = YAML.load(newSchema);
            setSchema(parsedSchema);
            setValidationError(null);
        } catch (error: any) {
            setValidationError(`Invalid YAML Schema: ${error.message}`);
        }
    }

    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleAction = (action: string) => {
        console.log(`Action: ${action}`);
        handleMenuClose();
    };

    return (
        <>
            {/* Breadcrumbs and Actions */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', mb: 4 }}>
                <Breadcrumbs aria-label="breadcrumb">
                    {filePath.map((part, index) => (
                        <Typography key={index} variant="body1">
                            {part}
                        </Typography>
                    ))}
                </Breadcrumbs>

                {/* Action Button with Menu */}
                <IconButton
                    aria-controls="action-menu"
                    aria-haspopup="true"
                    onClick={handleMenuClick}
                    aria-label="more actions"
                >
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    id="action-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                >
                    <MenuItem onClick={() => handleAction('Publish')}>Publish</MenuItem>
                    <MenuItem onClick={() => handleAction('Save Draft')}>Save Draft</MenuItem>
                    <MenuItem onClick={() => handleAction('Copy')}>Copy</MenuItem>
                    <MenuItem onClick={() => handleAction('Archive')}>Archive</MenuItem>
                </Menu>
            </Box>

            {/* Main Editor and Preview Area */}
            <Box sx={{ display: 'flex', flex: 1, pt: 4 }}>
                <Container sx={{ flex: 1, mr: 2 }}>
                    <Typography variant="h5">
                        Schema
                    </Typography>
                    <MonacoEditor
                        language="yaml"
                        value={yamlText}
                        onChange={onSchemaChange}
                        height="80vh"
                        options={{ automaticLayout: true }}
                    />
                    {validationError && <Typography color="error">{validationError}</Typography>}
                </Container>
                <Container sx={{ flex: 1, ml: 2 }}>
                    <Typography variant="h5">
                        Preview
                    </Typography>
                    <Typography variant="body1">
                        {/* Add your preview rendering logic here */}
                        Preview of the YAML content goes here.
                    </Typography>
                </Container>
            </Box>
        </>
    );
}
