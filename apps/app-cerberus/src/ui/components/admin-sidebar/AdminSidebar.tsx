import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import { Dashboard, People, Group, Schema, SvgIconComponent, Mms, Wysiwyg } from "@mui/icons-material";
import { ReactNode } from "react";
import Link from "next/link";

const SIDEBAR_WIDTH = 250;

interface SidebarLink {
    label: ReactNode;
    icon: SvgIconComponent;
    href: string;
}

const SIDEBAR_LINKS: SidebarLink[] = [
    {
        label: 'Dashboard',
        icon: Dashboard,
        href: '/dashboard',
    },
    {
        label: 'Users',
        icon: People,
        href: '/users',
    },
    {
        label: 'Roles',
        icon: Group,
        href: '/roles',
    },
    {
        label: 'Content',
        icon: Wysiwyg,
        href: '/content',
    },
    {
        label: 'Media',
        icon: Mms,
        href: '/media',
    },
    {
        label: 'Schemas',
        icon: Schema,
        href: '/schemas',
    },
]

export function AdminSidebar() {
    return (
        <Drawer
            sx={{
                width: SIDEBAR_WIDTH,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: SIDEBAR_WIDTH,
                    boxSizing: 'border-box',
                    height: '100vh', // Full height of the viewport
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar />
            <List>
                {
                    SIDEBAR_LINKS.map(link => (
                        <Link key={`sidebar_link_${link.href}`} href={link.href}>
                            <ListItem button>
                                <ListItemIcon>
                                    <link.icon />
                                </ListItemIcon>
                                <ListItemText>
                                    {link.label}
                                </ListItemText>
                            </ListItem>
                        </Link>
                    ))
                }
            </List>
        </Drawer>
    )
}