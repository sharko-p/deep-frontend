import { StateSchema } from 'app/providers/StoreProvider';
import { counterReducer, counterActions } from './counterSlice';
import { CounterSchema } from '../types/counterSchema';

describe('counterSlice.test', () => {
    test('decrement', () => {
        const state: CounterSchema = { value: 10 };
        expect(
            counterReducer(state, counterActions.decrement()),
        )
            .toEqual({ value: 9 });
    });
    test('increment', () => {
        const state: CounterSchema = { value: 10 };
        expect(
            counterReducer(state, counterActions.increment()),
        )
            .toEqual({ value: 11 });
    });
    test('should work with empty state', () => {
        expect(
            counterReducer(undefined, counterActions.increment()),
        )
            .toEqual({ value: 1 });
    });
});
