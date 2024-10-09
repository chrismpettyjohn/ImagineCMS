import { Box, Typography, Paper, Grid } from "@mui/material";

export function AboutPage() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'flex-start', padding: 8, bgcolor: 'background.default' }}>
            <Typography variant="h4" sx={{ marginBottom: 4, fontWeight: 'bold', textAlign: 'center', color: 'primary.main' }}>About Cerberus</Typography>

            <Grid container spacing={4}>
                {/* Text Section */}
                <Grid item xs={12} md={6}>
                    <Paper sx={{ padding: 4, bgcolor: 'background.paper', boxShadow: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            What is Cerberus?
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Cerberus is a powerful and intuitive admin panel designed to help you manage your application's users, roles, media, content, and data schemas. With its user-friendly interface, Cerberus provides a seamless experience for administrators and developers alike, offering robust tools for managing critical system features.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Whether you're managing users, organizing content, or controlling system roles and permissions, Cerberus gives you the control and flexibility to handle complex administrative tasks with ease. Its modular design ensures that it can be customized to fit a variety of needs, from simple user management to intricate content workflows.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Cerberus is built with scalability and security in mind, ensuring that your system remains efficient and secure as it grows. From managing media libraries to configuring content schemas, Cerberus is your all-in-one solution for efficient system administration.
                        </Typography>
                    </Paper>
                </Grid>

                {/* Video Section */}
                <Grid item xs={12} md={6}>
                    <Paper sx={{ padding: 4, bgcolor: 'background.paper', boxShadow: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Watch Cerberus in Action
                        </Typography>
                        <Box sx={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: 2, boxShadow: 3, mb: 2 }}>
                            <iframe
                                src="https://www.youtube.com/embed/JPYWEIkvD_s?autoplay=1&start=60"
                                title="Cerberus Admin Panel Demo"
                                frameBorder="0"
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </Box>
                        <Typography variant="body2" color="textSecondary">
                            Learn how to make the most out of Cerberus by watching this quick demo of its features and capabilities.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}
