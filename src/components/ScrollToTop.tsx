import { ChevronUpIcon } from "@chakra-ui/icons";
import { Fade, IconButton } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";

export default function ScrollToTop () {
  const [showButton, setShowButton] = useState(false);

  const watchScroll = useCallback(() => {
    const basePosition = 200;
    const scrollPosition = window.scrollY;
    setShowButton(basePosition <= scrollPosition);
  }, [setShowButton]);

  useEffect(() => {
    window.addEventListener("scroll", watchScroll);
    return () => {
      window.removeEventListener("scroll", watchScroll);
    };
  }, [watchScroll]);

  return (
    <Fade in={showButton}>
      <IconButton
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        colorScheme="teal"
        fontSize={40}
        position="fixed"
        right={6}
        bottom={6}
        size={"lg"}
        isRound
        aria-label="Scroll to tops"
        icon={<ChevronUpIcon />}
      />
    </Fade>
  );
};
