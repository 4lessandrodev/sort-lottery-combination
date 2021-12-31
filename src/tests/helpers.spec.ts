import { FindIndexOfValueChild, IncrementValueOnChildIndex, IsValueOnResult } from "../helpers";
import { ChildRelation } from "../models/struct";

describe('helpers', () => {

	describe('IsValueOnResult', () => {

		it('should value to be on result', () => {
			const value = 10;
			const result = [2, 8, 10, 25, 33, 45];
			const payload = IsValueOnResult(value, result);
			expect(payload).toBeTruthy();
		});

		it('should value not to be on result', () => {
			const value = 60;
			const result = [2, 8, 10, 25, 33, 45];
			const payload = IsValueOnResult(value, result);
			expect(payload).toBeFalsy();
		});

	});

	describe('FindIndexOfValueChild', () => {
		
		it('should find index on child for a provided value', () => {
			const children: ChildRelation[] = [
				{
					label: 'N1',
					repeat: 0,
					value: 1
				},
				{
					label: 'N2',
					repeat: 0,
					value: 2
				}
			];
			const value = 2;
			const index = FindIndexOfValueChild(value, children);

			expect(index).toBe(1);
		});

		it('should return -1 if index is not found', () => {
			const children: ChildRelation[] = [
				{
					label: 'N1',
					repeat: 0,
					value: 1
				},
				{
					label: 'N2',
					repeat: 0,
					value: 2
				}
			];
			const value = 25;
			const index = FindIndexOfValueChild(value, children);

			expect(index).toBe(-1);
		});

	});

	describe('IncrementValueOnChildIndex', () => {
		
		it('should increment 1 for index 1', () => {
			const children: ChildRelation[] = [
				{
					label: 'N1',
					repeat: 0,
					value: 1
				},
				{
					label: 'N2',
					repeat: 0,
					value: 2
				}
			];
			const index = 1;

			expect(children[index].repeat).toBe(0);

			IncrementValueOnChildIndex(index, children);

			expect(children[index].repeat).toBe(1);
		});

		it('should not increment if index is not found', () => {
			const children: ChildRelation[] = [
				{
					label: 'N1',
					repeat: 0,
					value: 1
				},
				{
					label: 'N2',
					repeat: 0,
					value: 2
				}
			];
			const index = 10;

			expect(children[0].repeat).toBe(0);
			expect(children[1].repeat).toBe(0);

			IncrementValueOnChildIndex(index, children);

			expect(children[0].repeat).toBe(0);
			expect(children[1].repeat).toBe(0);
		});

	});
})