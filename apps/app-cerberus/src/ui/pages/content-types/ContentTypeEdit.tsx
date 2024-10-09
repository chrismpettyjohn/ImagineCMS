'use client';
import React, { useState } from 'react';
import 'monaco-editor/esm/vs/basic-languages/yaml/yaml.contribution';
import { SchemaEditor } from '../../components/schema-editor/SchemaEditor';
import { Box, Typography } from '@mui/material';

const initialSchema = {
    "contentType": {
        "key": "siteHeader",
        "version": "1.0",
        "props": {
            "logo": {
                "type": "image",
                "required": true
            },
            "title": {
                "type": "string",
                "required": true
            },
            "tagline": {
                "type": "string",
                "required": false
            },
            "navLinks": {
                "type": "list",
                "items": {
                    "type": "object",
                    "props": {
                        "label": {
                            "type": "string",
                            "required": true
                        },
                        "url": {
                            "type": "string",
                            "required": true
                        },
                        "newTab": {
                            "type": "boolean",
                            "required": false
                        }
                    }
                },
                "required": true
            },
            "backgroundColor": {
                "type": "string",
                "required": false
            },
            "sticky": {
                "type": "boolean",
                "required": false
            }
        }
    }
}

interface ContentTypesEditPageProps {
    contentTypeID: number;
}

export function ContentTypesEditPage({ contentTypeID }: ContentTypesEditPageProps) {
    const [fileName, setFileName] = useState('/types/landing/christmas-2024.yml');
    const [schema, setSchema] = useState<any>(initialSchema);
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: 8 }}>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>Type Editor</Typography>
            <SchemaEditor fileName={fileName} defaultSchema={schema} onSave={setSchema} />
        </Box>
    )
}
