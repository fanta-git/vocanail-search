import { useQueryState } from '@/hooks/useQueryState';
import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import FocusToInput from './FocusToInput';
import ResultField from './ResultField';

type Props = {};

export default function Main (props: Props) {
  const {  } = props;
  const [keyword = "", setKeyword] = useQueryState("s", { lazyTime: 1e3 });
  const inputRef = useRef<HTMLInputElement>(null);

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
      </InputGroup>
      <ResultField keyword={keyword} />
      <FocusToInput
        inputRef={inputRef}
      />
    </>
  );
}
