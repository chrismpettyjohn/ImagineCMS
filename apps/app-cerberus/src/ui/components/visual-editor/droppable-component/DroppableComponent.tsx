import { useDroppable } from "@dnd-kit/core";
import { Box } from "@mui/material";

export interface DroppableAreaProps {
    children: React.ReactNode;
}

export function DroppableArea({ children }: DroppableAreaProps) {
    const { isOver, setNodeRef } = useDroppable({
        id: 'droppable',
    });

    return (
        <Box
            ref={setNodeRef}
            sx={{
                flexGrow: 1,
                padding: 2,
                minHeight: '100vh',
                backgroundColor: isOver ? 'grey.200' : 'grey.100',
                transition: 'background-color 0.2s ease',
            }}
        >
            {children}
        </Box>
    );
}