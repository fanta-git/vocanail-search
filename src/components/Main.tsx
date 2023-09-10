import { useQueryState } from '@/hooks/useQueryState';
import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement, InputRightElement, Spinner } from '@chakra-ui/react';
import { Suspense, memo, useDeferredValue, useRef } from 'react';
import FocusToInput from './FocusToInput';
import ResultField from './ResultField';

type Props = {};

export default function Main (props: Props) {
  const {  } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const [keyword = "", setKeyword] = useQueryState("s", { lazyTime: 1e3 });
  const deferredQuery = useDeferredValue(keyword);
  const isDeffered = keyword !== deferredQuery;

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
        {isDeffered &&
          <InputRightElement pointerEvents='none'>
            <Spinner color={"green.600"} size={"sm"} />
          </InputRightElement>
        }
      </InputGroup>
      <ResultFieldWrapper keyword={deferredQuery} />
      <FocusToInput
        inputRef={inputRef}
      />
    </>
  );
}

const ResultFieldWrapper = memo(function ResultFieldWrapper (props: { keyword: string }) {
  const { keyword } = props;

  return (
    <Suspense>
      <ResultField keyword={keyword} />
    </Suspense>
  );
});

