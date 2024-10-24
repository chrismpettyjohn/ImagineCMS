import { Paper, Typography } from "@mui/material";
import { ComponentItem } from "../VisualEditor.types";
import { useDraggable } from "@dnd-kit/core";

export interface DraggableComponentProps {
    component: ComponentItem;
}

export function DraggableComponent({ component }: DraggableComponentProps) {
    const { attributes, listeners, setNodeRef } = useDraggable({
        id: component.id,
        data: { component },
    });

    return (
        <Paper
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            sx={{
                padding: 1,
                marginBottom: 1,
                cursor: 'grab',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            {component.preview}
            <Typography variant="caption">{component.name}</Typography>
        </Paper>
    );
}