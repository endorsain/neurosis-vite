import { useState } from 'react';
import { PageLayout } from '../../../layouts';
import { CurrentBody } from './body/CurrentBody';
import { CurrentHeader } from './header/CurrentHeader';

export default function CurrentPage() {
  const [change, setChange] = useState('store');

  return (
    <PageLayout>
      <CurrentHeader change={change} setChange={setChange} />
      <CurrentBody change={change}>
        <div>Leisure content</div>
        <div>Graph content</div>
        <div>Store content</div>
      </CurrentBody>
    </PageLayout>
  );
}
