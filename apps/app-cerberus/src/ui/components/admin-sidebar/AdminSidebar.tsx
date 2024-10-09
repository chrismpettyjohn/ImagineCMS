import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Link } from "@mui/material";
import { Dashboard, People, Group, Schema, Mms, Wysiwyg } from "@mui/icons-material"; // Correct import for icons
import { ReactNode } from "react";

export const SIDEBAR_WIDTH = 250;

interface SidebarLink {
    label: ReactNode;
    icon: typeof Dashboard;  // Use the correct type for MUI Icons
    href: string;
}

const SIDEBAR_LINKS: SidebarLink[] = [
    { label: 'Dashboard', icon: Dashboard, href: '/dashboard' },
    { label: 'Users', icon: People, href: '/users' },
    { label: 'Roles', icon: Group, href: '/roles' },
    { label: 'Media', icon: Mms, href: '/media' },
    { label: 'Content', icon: Wysiwyg, href: '/content' },
    { label: 'Schemas', icon: Schema, href: '/schemas' },
];

export function AdminSidebar() {
    return (
        <Drawer
            sx={{
                width: SIDEBAR_WIDTH,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: SIDEBAR_WIDTH,
                    boxSizing: 'border-box',
                    bgcolor: 'primary.main', // Use the primary color from the palette
                    color: 'text.primary',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar />
            <List>
                {SIDEBAR_LINKS.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        sx={{
                            textDecoration: 'none',
                            color: 'inherit', // Inherit color from parent (Drawer's paper)
                            '&:hover': {
                                bgcolor: 'action.hover',
                            },
                        }}
                    >
                        <ListItem button>
                            <ListItemIcon sx={{ color: 'text.primary' }}>
                                <link.icon /> {/* Inherit color for the icons too */}
                            </ListItemIcon>
                            <ListItemText primary={link.label} />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Drawer>
    );
}
