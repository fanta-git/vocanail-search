import { SearchIcon } from "@chakra-ui/icons";
import { Fade, IconButton } from "@chakra-ui/react";
import { RefObject, useCallback, useEffect, useState } from "react";

type Props = {
  inputRef: RefObject<HTMLInputElement>;
};

export default function FocusToInput (props: Props) {
  const { inputRef } = props;

  const [showButton, setShowButton] = useState(false);

  const watchScroll = useCallback(() => {
    const basePosition = window.innerHeight / 3;
    const scrollPosition = window.scrollY;
    setShowButton(basePosition <= scrollPosition);
  }, [setShowButton]);

  useEffect(() => {
    window.addEventListener("scroll", watchScroll);
    return () => {
      window.removeEventListener("scroll", watchScroll);
    };
  }, [watchScroll]);

  const onClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    inputRef.current?.focus({ preventScroll: true });
  }, [inputRef]);

  return (
    <Fade in={showButton}>
      <IconButton
        onClick={onClick}
        variant='outline'
        color="#58A8F8"
        colorScheme="blue"
        fontSize={26}
        position="fixed"
        right={6}
        bottom={6}
        size={"lg"}
        isRound
        aria-label="Scroll to tops"
        icon={<SearchIcon />}
      />
    </Fade>
  );
};
