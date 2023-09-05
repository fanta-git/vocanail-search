import { HStack, Input } from '@chakra-ui/react'
import { useState } from 'react';
import ResultThumbnails from './ResultThumbnails';

type Props = {};

export default function Main (props: Props) {
  const {  } = props;
  const [keyword, setKeyword] = useState("");

  return (
    <>
      <HStack w="100%">
        <Input placeholder="Search..." value={keyword} onChange={e => setKeyword(e.target.value)} />
      </HStack>
      <ResultThumbnails keyword={keyword} />
    </>
  );
}
