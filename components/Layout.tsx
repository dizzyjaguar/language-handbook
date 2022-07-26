import { Box, Container } from "@chakra-ui/react"
import Header from "./Header"

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box>
      <Header />
      <Container>
        {children}
      </Container>
    </Box>
  )
}

export default Layout;