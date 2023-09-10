import { useQueryState } from '@/hooks/useQueryState';
import { CloseIcon, SearchIcon } from '@chakra-ui/icons';
import { IconButton, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react';
import { Suspense, useDeferredValue, useRef, useState } from 'react';
import FocusToInput from './FocusToInput';
import ResultField from './ResultField';

type Props = {};

export default function Main (props: Props) {
  const {  } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const [keyword = "", setKeyword] = useQueryState("s", { lazyTime: 1e3 });
  const deferredQuery = useDeferredValue(keyword);

  return (
    <>
      <InputGroup w="100%">
        <InputLeftElement pointerEvents='none'>
          <SearchIcon color='gray.500' />
        </InputLeftElement>
        <Input
          rounded={20}
          ref={inputRef}
          placeholder="Search..."
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
        />
        <InputRightElement>
          <IconButton
            aria-label='clear'
            isRound
            size={"sm"}
            bgColor={"transparent"}
            icon={<CloseIcon />}
            onClick={() => setKeyword("")}
          />
        </InputRightElement>
      </InputGroup>
      <Suspense>
        <ResultField keyword={deferredQuery} />
      </Suspense>
      <FocusToInput
        inputRef={inputRef}
      />
    </>
  );
}
