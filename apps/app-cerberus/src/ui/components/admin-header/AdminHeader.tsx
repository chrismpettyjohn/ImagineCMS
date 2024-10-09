import { AppBar, Toolbar, Typography } from "@mui/material";
import { SIDEBAR_WIDTH } from "../admin-sidebar/AdminSidebar";

export function AdminHeader() {
    return (
        <AppBar
            position="fixed"
            sx={{
                width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
                ml: `${SIDEBAR_WIDTH}px`,
                boxShadow: 'none',
                bgcolor: 'background.primary',
                color: 'text.primary',
                pl: 4
            }}
        >
            <Toolbar>
                <Typography variant="h6" noWrap>
                    Cerberus
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
