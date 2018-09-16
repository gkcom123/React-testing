import {reducer} from './reducer';
import {expect} from 'chai';

describe('reducer testing',()=>{
    describe('ADD_TODO',()=>{
        it('should be able to add new item',()=>{
            const initialState = ['Item 1'];
            const action = {
                type:'ADD_TODO',
                data: 'Item 2'
            };
            const nextState = reducer(initialState,action);
            expect(nextState).to.deep.equal(['Item 1','Item 2'])
        })
    });
    describe('DELETE_TODO',()=>{
        it('should be able to delete item',()=>{
            const initialState = ['Item 1','Item 2'];
            const action = {
                type:'DELETE_TODO',
                data: 'Item 2'
            };
            const nextState = reducer(initialState,action);
            expect(nextState).to.deep.equal(['Item 1'])
        })
    });
})