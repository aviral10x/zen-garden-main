import Head from "next/head";

import DraggableSprites from "@/components/DraggableSprites";
import ListOfSprites from "@/components/ListOfSprites";

import { Flex, Heading } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (
    <>
      <Head>
        <title>Zen Garden</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Flex
          padding="1.5% 0"
          justify="space-evenly"
          bgColor={"#accb7a"}
        >
          <Heading color={"green.900"}>Zen Garden</Heading>
          <ConnectButton />
        </Flex>
        <Flex direction="row" justify="space-between" align="flex-end"  className="bg-img-container">
          <DraggableSprites />
          <ListOfSprites />
        </Flex>
      </main>
    </>
  );
}
