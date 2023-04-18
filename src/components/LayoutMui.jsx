import { Box, Button, Container, Stack, Typography } from "@mui/material";

export const LayoutMui = () => {
  return (
    <Container>
      <Box sx={{ backgroundColor: "green" }}>
        Box
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          cupiditate atque, perspiciatis dignissimos neque velit commodi ea,
          nulla voluptas unde voluptatibus blanditiis maxime ex eligendi quis
          quam. Atque harum expedita quis qui aut delectus repellat esse aliquam
          amet tempora. Magnam, perferendis temporibus! Sit harum nam deserunt
          delectus quidem illum hic ab esse blanditiis neque recusandae eum,
          sapiente quae voluptatum necessitatibus distinctio odio rem dolorum?
          Atque ipsam voluptas accusantium optio dolorem ratione possimus? Harum
          dolorem voluptate iusto, nulla amet aliquam odit natus, laboriosam est
          tenetur asperiores aperiam ratione nobis! Possimus atque totam natus
          facere dicta eaque illum dolor saepe eius est!
        </Typography>
        <Button>Send</Button>
      </Box>

      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems={"center"}
        spacing={10}
      >
        <Button>Button1</Button>
        <Button>Button1</Button>
        <Button>Button1</Button>
      </Stack>
    </Container>
  );
};
