import React from 'react';
import {
    Box,
    Drawer,
    Typography,
    Divider,
    TextField,
} from '@mui/material';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { ComponentCategory } from './VisualEditor.types';
import { DraggableComponent } from './draggable-component/DraggableComponent';
import { DroppableArea } from './droppable-component/DroppableComponent';
import { useVisualEditorStore } from './useVisualEditorStore';

const componentsList: ComponentCategory[] = [
    {
        category: 'Basic',
        components: [
            {
                id: 'header',
                name: 'Header',
                preview: (attributes) => (
                    <Typography variant="h4" style={{ fontSize: `${attributes[1].value}px` }}>
                        {attributes[0].value}
                    </Typography>
                ),
                attributes: [
                    { name: 'Text', type: 'text', value: 'Header Text' },
                    { name: 'Font Size', type: 'number', value: 32 },
                ],
            },
            {
                id: 'paragraph',
                name: 'Paragraph',
                preview: (attributes) => (
                    <Typography style={{ fontSize: `${attributes[1].value}px` }}>
                        {attributes[0].value}
                    </Typography>
                ),
                attributes: [
                    { name: 'Text', type: 'text', value: 'Paragraph text...' },
                    { name: 'Font Size', type: 'number', value: 16 },
                ],
            },
        ],
    },
    {
        category: 'Media',
        components: [
            {
                id: 'image',
                name: 'Image',
                preview: (attributes) => (
                    <img
                        src={attributes[0].value}
                        alt="Placeholder"
                        style={{ width: `${attributes[1].value}%` }}
                    />
                ),
                attributes: [
                    { name: 'Image URL', type: 'text', value: 'https://via.placeholder.com/150' },
                    { name: 'Width', type: 'number', value: 100 },
                ],
            },
        ],
    },
];

export function VisualEditor() {
    const { pageComponents, selectedComponent, addComponent, setSelectedComponent, setPageComponents } = useVisualEditorStore();

    const handleDragEnd = (event: DragEndEvent) => {
        const { over, active } = event;
        if (over && over.id === 'droppable') {
            const component = active.data.current!.component;
            addComponent(component); // Add component to state
            setSelectedComponent(component); // Select the added component
        }
    };

    const updatePreview = (updatedComponent) => {
        // Update preview in pageComponents to reflect new attributes
        const updatedPageComponents = pageComponents.map((comp) => {
            if (comp.id === updatedComponent.id) {
                return {
                    ...updatedComponent,
                    preview: updatedComponent.preview, // Ensure preview remains the same
                };
            }
            return comp;
        });
        setPageComponents(updatedPageComponents);
    };

    const renderAttributes = () => {
        if (!selectedComponent) {
            return <Typography>Select a component to edit its attributes</Typography>;
        }

        return (
            <Box>
                {selectedComponent.attributes.map((attr, index) => (
                    <Box key={index} sx={{ marginBottom: 2 }}>
                        {attr.type === 'text' && (
                            <TextField
                                label={attr.name}
                                value={attr.value}
                                fullWidth
                                onChange={(e) => {
                                    const updatedAttributes = [...selectedComponent.attributes];
                                    updatedAttributes[index].value = e.target.value;
                                    const updatedComponent = {
                                        ...selectedComponent,
                                        attributes: updatedAttributes,
                                        preview: selectedComponent.preview, // Preserve preview function
                                    };
                                    setSelectedComponent(updatedComponent); // Update the selected component
                                    updatePreview(updatedComponent); // Update the preview for changes
                                }}
                            />
                        )}
                        {attr.type === 'number' && (
                            <TextField
                                label={attr.name}
                                type="number"
                                value={attr.value}
                                fullWidth
                                onChange={(e) => {
                                    const updatedAttributes = [...selectedComponent.attributes];
                                    updatedAttributes[index].value = parseInt(e.target.value);
                                    const updatedComponent = {
                                        ...selectedComponent,
                                        attributes: updatedAttributes,
                                        preview: selectedComponent.preview, // Preserve preview function
                                    };
                                    setSelectedComponent(updatedComponent); // Update the selected component
                                    updatePreview(updatedComponent); // Update the preview for changes
                                }}
                            />
                        )}
                    </Box>
                ))}
            </Box>
        );
    };

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <Box sx={{ display: 'flex', width: '100%' }}>
                {/* Left Drawer */}
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

                {/* Main Content */}
                <DroppableArea>
                    {pageComponents.map((component, index) => (
                        <Box key={index} sx={{ marginBottom: 2 }} onClick={() => setSelectedComponent(component)}>
                            {component.preview(component.attributes)}
                        </Box>
                    ))}
                </DroppableArea>

                {/* Right Sidebar */}
                <Drawer variant="permanent" anchor="right">
                    <Box sx={{ width: 240, padding: 2 }}>
                        <Typography variant="h6" gutterBottom>
                            Component Attributes
                        </Typography>
                        <Divider sx={{ marginBottom: 1 }} />
                        {renderAttributes()}
                    </Box>
                </Drawer>
            </Box>
        </DndContext>
    );
}
