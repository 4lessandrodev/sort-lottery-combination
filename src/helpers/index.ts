import { ChildRelation } from "../models/struct";

export const IsValueOnResult = (value: number, result: number[]): boolean => result.includes(value);

export const FindIndexOfValueChild = (value: number, children: ChildRelation[]): number => {
	return children.findIndex((e) => e.value === value);
}

export const IncrementValueOnChildIndex = (index: number, children: ChildRelation[]): void => {
	if (children[index]?.repeat !== undefined && index !== -1) {
		children[index].repeat++;
	}
}
