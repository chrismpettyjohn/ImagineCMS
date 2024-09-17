

import {Header} from "../web-ui/Header";
import {Button} from "../web-ui/Button";

const componentRegistry: Record<string, React.FC> = {
    Header,
    Button,
};

export const getComponentForType = (type: string): React.FC => {
    return componentRegistry[type] || null;
};
