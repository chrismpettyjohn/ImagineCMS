'use client';
import React, { useState } from 'react';
import 'monaco-editor/esm/vs/basic-languages/yaml/yaml.contribution';
import { SchemaEditor } from '../../components/schema-editor/SchemaEditor';

const initialType = {
    title: "Person",
    type: "object",
    properties: {
        name: { type: "string", title: "Name" },
        addressline1: { type: "string", title: "Address Line 1" },
        addressline2: { type: "string", title: "Address Line 2" },
        city: { type: "string", title: "City" }
    }
};

interface ContentTypesEditTypeProps {
    contentTypeID: number;
}

export function ContentTypesEditPage({ contentTypeID }: ContentTypesEditTypeProps) {
    const [fileName, setFileName] = useState('/types/landing/christmas-2024.yml');
    const [type, setType] = useState<any>(initialType);
    return <SchemaEditor fileName={fileName} defaultType={type} onSave={setType} />
}
