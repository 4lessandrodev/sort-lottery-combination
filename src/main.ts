import { MainStruct, Struct, ChildRelation, Child } from "./models/struct";
import { IData } from './data/data';
import { FindIndexOfValueChild, IncrementValueOnChildIndex, IsValueOnResult } from "./helpers";
import { writeFileSync } from "fs";
import path from "path";


export class Main {
	private _structs: MainStruct[] = [];
	
	constructor() {
		this.generateSixtyStructs();
	}
	
	private generateSixtyStructs() {
		const total = 60;
		for (let index = 1; index <= total; index++) {
			const children = this.generateSixtyChildren(index);
			const struct = new Struct(`N${index}`, index, children);
			this._structs.push(struct);
		}
	}

	private generateSixtyChildren(exception: number) {
		const children: ChildRelation[] = [];
		const total = 60;
		for (let index = 1; index <= total; index++) {
			if (index !== exception) {
				children.push(new Child(`N${index}`, index, 0));
			}
		}
		return children;
	}

	runForData(data: IData): void {
		
		this._structs.forEach((struct) => {

			data.forEach((game) => {

				const isValueOnGame = IsValueOnResult(struct.value, game);

				if (isValueOnGame) {
					game.forEach((number) => {
						const index = FindIndexOfValueChild(number, struct.relation);
						IncrementValueOnChildIndex(index, struct.relation);
					});
				}

			});
		});

		this.sortByRepeat();
		this.saveResult('result.json');
		this.generateResume();
		this.saveResult('resume.json');
		this.printResume();
	}

	private sortByRepeat():void {
		return this._structs.forEach((struct) => {
			struct.relation = struct.relation.sort((a, b) => b.repeat - a.repeat)
		});
	}

	private generateResume(): void {
		return this._structs.forEach((struct) => {
			struct.relation = struct.relation.slice(0, 3)
		});
	}

	private printResume(): void {
		const makeResult = (label: string, values: number[]) => ({ label, values });
		const result:Array<{ label: string, values: number[] }> = [];

		const structs = this._structs;
		structs.forEach((str) => {
			const numbers = str.relation.map((child) => child.value);
			const rel = makeResult(`Dezena: ${str.value} =>`, numbers);
			result.push(rel);
		});

		console.table(result);
	}

	private saveResult(filename: string): void {
		const local = path.join(__dirname, 'data', filename);
		writeFileSync(local, JSON.stringify(this.structs), { encoding: 'utf-8' });
	}

	get structs(): MainStruct[] {
		return this._structs;
	}

}

export default Main;
