import { useQueryState } from '@/hooks/useQueryState';
import { HStack, Input } from '@chakra-ui/react';
import ResultField from './ResultField';

type Props = {};

export default function Main (props: Props) {
  const {  } = props;
  const [keyword, setKeyword] = useQueryState<string>("s", { lazyTime: 1e3 });

  return (
    <>
      <HStack w="100%">
        <Input placeholder="Search..." value={keyword} onChange={e => setKeyword(e.target.value)} />
      </HStack>
      <ResultField keyword={keyword} />
    </>
  );
}
