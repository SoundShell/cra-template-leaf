import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { AsyncButton, Button, Container, Loader, Value } from './Counter.style';
import {
  decrement,
  increment,
  incrementAsync,
  selectCount,
} from './counterSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const status = useSelector((state: RootState) => state.counter.status);
  const appState = useSelector(selectCount) as number;

  return (
    <Container>
      <AsyncButton
        onClick={() => status === 'idle' && dispatch(incrementAsync(1))}
      >
        {status === 'loading' ? (
          <Loader>
            <FormattedMessage id='counter.loader' />
          </Loader>
        ) : (
          <FormattedMessage id='counter.button' />
        )}
      </AsyncButton>
      <Button onClick={() => dispatch(increment())}>
        <FormattedMessage id='counter.increment' />
      </Button>
      <Value>{appState}</Value>
      <Button onClick={() => dispatch(decrement())}>
        <FormattedMessage id='counter.decrement' />
      </Button>
    </Container>
  );
};

export default Counter;
