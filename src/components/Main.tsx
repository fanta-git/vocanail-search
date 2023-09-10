import { useQueryState } from '@/hooks/useQueryState';
import { HStack, Input } from '@chakra-ui/react';
import ResultField from './ResultField';
import FocusToInput from './FocusToInput';
import { useRef } from 'react';

type Props = {};

export default function Main (props: Props) {
  const {  } = props;
  const [keyword = "", setKeyword] = useQueryState("s", { lazyTime: 1e3 });
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <HStack w="100%">
        <Input
          ref={inputRef}
          placeholder="Search..."
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
        />
      </HStack>
      <ResultField keyword={keyword} />
      <FocusToInput
        inputRef={inputRef}
      />
    </>
  );
}
