import { useEffect, useRef, MutableRefObject, useState } from "react";
import Link from "next/link";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { heroAnimation } from "../animations/hero";
import { heroImages, heroHeading } from "../data/hero";
import { useAuthState } from "../utils/hooks";

export default function Hero() {
  const headingRef = useRef<MutableRefObject<null>[] | null[]>([
    null,
    null,
    null,
  ]);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const boxRef = useRef<MutableRefObject<null>[] | null[]>([null, null, null]);
  const imageRef = useRef<MutableRefObject<null>[] | null[]>([
    null,
    null,
    null,
  ]);

  const loggedIn = useAuthState();

  useEffect(() => {
    heroAnimation(
      headingRef.current,
      subtitleRef.current,
      boxRef.current,
      buttonRef.current,
      imageRef.current
    );
  }, []);

  return (
    <Container maxWidth="lg">
      <Navbar />
      <Grid
        sx={{ minHeight: "90vh", alignItems: "center" }}
        pt={3}
        container
        spacing={4}
      >
        <Grid item xs={12} md={6}>
          <Typography
            lineHeight={1}
            color="primary"
            variant="h1"
            component="h1"
            mb={2}
            gutterBottom
          >
            {heroHeading.map(({ text }, index) => (
              <Box
                key={text}
                sx={{ overflow: "hidden", display: "inline-block" }}
                component="span"
              >
                <Box
                  ref={(element: MutableRefObject<null> | null) => {
                    headingRef.current[0] = element;
                  }}
                  sx={{ display: "inline-block" }}
                  component="span"
                >
                  {text} &nbsp;
                </Box>
              </Box>
            ))}
          </Typography>
          <Typography
            sx={{ overflow: "hidden" }}
            variant="body1"
            component="p"
            mb={3}
            gutterBottom
          >
            <Box
              ref={subtitleRef}
              sx={{ overflow: "hidden", display: "inline-block" }}
              component="span"
              className="textAnim"
            >
              A choir is made up of many voices, including yours and mine. If
              one by one all go silent then all that will be left are the
              soloists.
            </Box>
          </Typography>
          <Stack spacing={2} direction="row">
            <Link href={loggedIn ? "/dashboard/biodata" : "/login"}>
              <a>
                <Button ref={buttonRef} variant="contained">
                  {loggedIn ? "Dashboard" : "Login"}
                </Button>
              </a>
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid
            sx={{ justifyContent: "space-between", alignItems: "center" }}
            container
            spacing={1}
          >
            {heroImages.map(({ height, src }, index) => (
              <Grid
                key={height}
                sx={{
                  height: { xs: `${height - 200}px`, sm: `${height}px` },
                  position: "relative",
                  overflow: "hidden",
                }}
                item
                xs={4}
              >
                <Box
                  ref={(element: MutableRefObject<null> | null) => {
                    imageRef.current[index] = element;
                  }}
                  component="img"
                  sx={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    transform: "scale(1.06)",
                  }}
                  src={src}
                  alt=""
                />
                <Box
                  ref={(element: MutableRefObject<null> | null) => {
                    boxRef.current[index] = element;
                  }}
                  component="div"
                  position="absolute"
                  sx={{
                    height: "100%",
                    width: "100%",
                    backgroundColor: "white",
                    top: 0,
                    left: 0,
                  }}
                ></Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
