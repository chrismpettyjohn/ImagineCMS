import React, { useState } from 'react';
import {
    Box,
    Drawer,
    Typography,
    Divider,
} from '@mui/material';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { ComponentCategory, ComponentItem } from "@/ui/components/visual-editor/VisualEditor.types";
import { DraggableComponent } from './draggable-component/DraggableComponent';
import { DroppableArea } from './droppable-component/DroppableComponent';


const componentsList: ComponentCategory[] = [
    {
        category: 'Basic',
        components: [
            {
                id: 'header',
                name: 'Header',
                preview: <Typography variant="h4">Header</Typography>,
            },
            {
                id: 'paragraph',
                name: 'Paragraph',
                preview: <Typography>Paragraph text...</Typography>,
            },
        ],
    },
    {
        category: 'Media',
        components: [
            {
                id: 'image',
                name: 'Image',
                preview: (
                    <img src="https://via.placeholder.com/150" alt="Placeholder" width="100%" />
                ),
            },
        ],
    },
];

export function VisualEditor() {
    const [pageComponents, setPageComponents] = useState<ComponentItem[]>([]);

    const handleDragEnd = (event: DragEndEvent) => {
        const { over, active } = event;
        if (over && over.id === 'droppable') {
            setPageComponents((prevComponents) => [
                ...prevComponents,
                active.data.current!.component,
            ]);
        }
    };

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <Box sx={{ display: 'flex' }}>
                <Drawer variant="permanent" anchor="left">
                    <Box sx={{ width: 240, padding: 2 }}>
                        {componentsList.map((category) => (
                            <Box key={category.category} sx={{ marginBottom: 2 }}>
                                <Typography variant="h6" gutterBottom>
                                    {category.category}
                                </Typography>
                                <Divider sx={{ marginBottom: 1 }} />
                                {category.components.map((component) => (
                                    <DraggableComponent key={component.id} component={component} />
                                ))}
                            </Box>
                        ))}
                    </Box>
                </Drawer>
                <DroppableArea>
                    {pageComponents.map((component, index) => (
                        <Box key={index} sx={{ marginBottom: 2 }}>
                            {component.preview}
                        </Box>
                    ))}
                </DroppableArea>
            </Box>
        </DndContext>
    );
}
