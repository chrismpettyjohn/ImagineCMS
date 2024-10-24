export interface ComponentAttribute {
    name: string;
    type: 'text' | 'number' | 'color' | 'image'; // You can add more types as needed
    value: string | number;
}

export interface ComponentItem {
    id: string;
    name: string;
    preview: React.ReactNode;
    attributes: ComponentAttribute[];  // Each component will have an array of attributes
}

export interface ComponentCategory {
    category: string;
    components: ComponentItem[];
}
