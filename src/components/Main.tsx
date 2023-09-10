import { useQueryState } from '@/hooks/useQueryState';
import { HStack, Input } from '@chakra-ui/react';
import ResultField from './ResultField';
import ScrollToTop from './ScrollToTop';

type Props = {};

export default function Main (props: Props) {
  const {  } = props;
  const [keyword = "", setKeyword] = useQueryState("s", { lazyTime: 1e3 });

  return (
    <>
      <HStack w="100%">
        <Input placeholder="Search..." value={keyword} onChange={e => setKeyword(e.target.value)} />
      </HStack>
      <ResultField keyword={keyword} />
      <ScrollToTop />
    </>
  );
}
