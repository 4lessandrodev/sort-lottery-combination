export interface ChildRelation {
	label: string;
	value: number;
	repeat: number;
}

export interface MainStruct {
	label: string;
	value: number;
	relation: ChildRelation[]
}

export class Struct implements MainStruct {
	constructor(
		public label: string,
		public value: number,
		public relation: ChildRelation[],
	){}
}

export class Child implements ChildRelation {
	constructor(
		public label: string,
		public value: number,
		public repeat: number,
	){}
}
