"use client";

import React from 'react';
import { getComponentForType } from './ComponentRegistry';

interface ComposerClientProps {
    components: any[];
    slug: string;
}

const ComposerClient: React.FC<ComposerClientProps> = ({ components }) => {
    return (
        <div>
            {components.map((component, index) => {
                const { type, props } = component;
                const Component = getComponentForType(type);

                if (!Component) {
                    return <p key={index}>Unknown component type: {type}</p>;
                }

                return <Component key={index} {...props} />;
            })}
        </div>
    );
};

export default ComposerClient;
