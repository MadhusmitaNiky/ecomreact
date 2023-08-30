import React from "react";
import {
  Card,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
  Button,
  Text,
  CardBody,
  CardFooter,
  Image,
  Box,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SingleProduct = (props) => {
  const api =
    "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products";
  const { id, brand, img, price, details, category } = props;
  const nav=useNavigate()
   function navigate(){
    nav(`/products/${id}`)
  }

  return (
    <Box>
      <Card maxW="sm">
        <CardBody>
          <Image
            src={img}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{brand}</Heading>
            <Text>{details}</Text>
            <Text color="blue.600" fontSize="2xl">
              {category}
            </Text>
            <Text color="blue.600" fontSize="2xl">
              ${price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button onClick={navigate}variant="ghost" colorScheme="blue">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default SingleProduct;
