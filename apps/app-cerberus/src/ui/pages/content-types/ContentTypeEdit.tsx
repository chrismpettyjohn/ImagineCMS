'use client';
import React, { useState } from 'react';
import 'monaco-editor/esm/vs/basic-languages/yaml/yaml.contribution';
import { SchemaEditor } from '../../components/schema-editor/SchemaEditor';
import { Box, Typography } from '@mui/material';

const initialSchema = {
    title: "Person",
    type: "object",
    properties: {
        name: { type: "string", title: "Name" },
        addressline1: { type: "string", title: "Address Line 1" },
        addressline2: { type: "string", title: "Address Line 2" },
        city: { type: "string", title: "City" }
    }
};

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
