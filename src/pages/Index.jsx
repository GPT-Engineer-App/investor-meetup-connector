import { Container, Text, VStack, Heading, Box, Image, Button } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container
      centerContent
      width="100vw"
      height="100vh"
      padding="0"
      margin="0"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bg="#21E09B"
    >
      <VStack spacing={4} maxWidth="80vw">
        <Heading as="h1" size="2xl" textAlign="center" color="white">Welcome to the Greens Investor Meetup</Heading>
        <Text fontSize="lg" textAlign="center" color="white">
          Excited to invite you all to our next gathering! The location is still being explored/upgraded and the agenda will primarily be the usual - fun & making sure you know everyone in the community that could help you!
        </Text>
        <Box boxSize="sm">
          <Image src="https://d33wubrfki0l68.cloudfront.net/7ef13f6a84110c15f68eed7eef50087a8c7328b5/f8e93/img/logo.svg" alt="Investor Meetup Logo" filter="hue-rotate(90deg) saturate(200%);" />
        </Box>
        <Text fontSize="md" textAlign="center" color="white">
          As we grow and our events grow, we’re still very focused on them being high-trust by keeping it to those on the inside - startup founders who let us back them, advisors, Greens members/investors and our newest addition, Seed Booster investors.
        </Text>
        <Button rightIcon={<FaRocket />} colorScheme="teal" variant="solid" size="lg" color="white">
          Join the Meetup
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;