import { create } from 'zustand';
import { ComponentItem } from './VisualEditor.types';

interface VisualEditorState {
    pageComponents: ComponentItem[];
    selectedComponent: ComponentItem | null;
    setPageComponents: (components: ComponentItem[]) => void;
    addComponent: (component: ComponentItem) => void;
    setSelectedComponent: (component: ComponentItem | null) => void;
}

export const useVisualEditorStore = create<VisualEditorState>((set) => ({
    pageComponents: [],
    selectedComponent: null,

    setPageComponents: (components: ComponentItem[]) => set({ pageComponents: components }),

    addComponent: (component: ComponentItem) =>
        set((state) => ({
            pageComponents: [...state.pageComponents, component],
        })),

    setSelectedComponent: (component: ComponentItem | null) =>
        set({ selectedComponent: component }),
}));
