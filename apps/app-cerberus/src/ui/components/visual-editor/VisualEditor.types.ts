import React from "react";

export interface ComponentItem {
    id: string;
    name: string;
    preview: React.ReactNode;
}

export interface ComponentCategory {
    category: string;
    components: ComponentItem[];
}