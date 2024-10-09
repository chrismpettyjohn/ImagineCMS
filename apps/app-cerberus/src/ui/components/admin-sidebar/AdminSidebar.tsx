'use client';

import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Typography, Divider, Link } from "@mui/material";
import { Dashboard, People, Group, Schema, Mms, Wysiwyg, Room, EventSeat, PeopleAlt } from "@mui/icons-material";
import { ReactNode } from "react";

export const SIDEBAR_WIDTH = 250;

interface SidebarLink {
    label: ReactNode;
    icon: typeof Dashboard;
    href: string;
}

interface SidebarGroup {
    title: string;
    links: SidebarLink[];
}

const SIDEBAR_GROUPS: SidebarGroup[] = [
    {
        title: 'General',
        links: [
            { label: 'Dashboard', icon: Dashboard, href: '/dashboard' },
            { label: 'Users', icon: People, href: '/users' },
            { label: 'Roles', icon: Group, href: '/roles' },
            { label: 'Media', icon: Mms, href: '/media' },
            { label: 'Content', icon: Wysiwyg, href: '/content' },
            { label: 'Schemas', icon: Schema, href: '/schemas' },
        ],
    },
    {
        title: 'Habbo Management',
        links: [
            { label: 'Players', icon: PeopleAlt, href: '/habbo/players' },
            { label: 'Rooms', icon: Room, href: '/habbo/rooms' },
            { label: 'Furniture', icon: EventSeat, href: '/habbo/furniture' },
        ],
    },
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
                    bgcolor: 'primary.main',
                    color: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Box>
                <Box sx={{ textAlign: 'center', py: 2, bgcolor: 'primary.dark', mb: 2 }}>
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', letterSpacing: '0.1rem' }}>
                        Cerberus
                    </Typography>
                </Box>

                {SIDEBAR_GROUPS.map((group, index) => (
                    <Box key={index}>
                        <Typography variant="subtitle2" sx={{ pl: 2, py: 1, color: 'rgba(255, 255, 255, 0.7)', textTransform: 'uppercase', fontWeight: 'medium', fontSize: '0.85rem' }}>
                            {group.title}
                        </Typography>
                        <List disablePadding>
                            {group.links.map((link) => (
                                <Link key={link.href} href={link.href} passHref>
                                    <ListItem button component="a" sx={{ pl: 4, py: 1 }}>
                                        <ListItemIcon sx={{ color: 'white' }}>
                                            <link.icon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={link.label}
                                            primaryTypographyProps={{
                                                fontSize: '1rem',
                                                fontWeight: '400',
                                                letterSpacing: '0.05rem',
                                                color: 'white',
                                            }}
                                        />
                                    </ListItem>
                                </Link>
                            ))}
                        </List>
                        {index < SIDEBAR_GROUPS.length - 1 && (
                            <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)', my: 1 }} />
                        )}
                    </Box>
                ))}
            </Box>

            <Box sx={{ p: 2, bgcolor: 'secondary.main', textAlign: 'center' }}>
                <Typography variant="body2" color="inherit">
                    <Link href="/about" passHref><b>Cerberus</b></Link> by <Link href="https://github.com/chrismpettyjohn" target="_blank" passHref>Chris P</Link>
                </Typography>
            </Box>
        </Drawer>
    );
}
