import { composerLib } from "@imagine/lib-composer";
import { pluginBootstrapComponents } from "@imagine/plugin-bootstrap-components"

export function Button() {
    return (
        <button>
            Click me
            {composerLib}
            {pluginBootstrapComponents}
        </button>
    )
}