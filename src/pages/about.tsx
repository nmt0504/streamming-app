import { Container, Box, Typography, Button } from "@material-ui/core";
import Link from 'next/link';

export default function About() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js Example About page
        </Typography>
        <Link href="/">
          <Button variant="contained" color="primary">
            Go to home page
          </Button>
        </Link>
      </Box>
    </Container>
  )
}