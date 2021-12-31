import Main from "../main";

describe('main', () => {
	const main = new Main();
	it('should start with 60 structs', () => {
		const str = main.structs;
		expect(str).toHaveLength(60);
	});

	it('should each struct must have 59 children', () => {
		const str = main.structs;
		expect(str[0].relation).toHaveLength(59);
	});

	it('should structs have label NX', () => {
		const str = main.structs;
		const label = str[0].label;
		expect(label).toBe('N1');
	});

	it('should structs have value 2', () => {
		const str = main.structs;
		const value = str[0].value;
		expect(value).toBe(1);
	});

	it('should child have label N2', () => {
		const str = main.structs;
		const label = str[0].relation[0].label;
		expect(label).toBe('N2');
	});

	it('should child have value 2', () => {
		const str = main.structs;
		const value = str[0].relation[0].value;
		expect(value).toBe(2);
	});

	it('should child have repeat value 0', () => {
		const str = main.structs;
		const value = str[0].relation[0].repeat;
		expect(value).toBe(0);
	});

	describe('runForData', () => {
		it('should run for a fake data', () => {
			
			const fakeData = [
				[2,8,34,38,47,51],
				[4,11,19,25,37,55],
				[1,19,41,46,48,55],
				[5,15,28,32,38,54],
				[5,22,30,32,33,36],
				[1,2,14,28,40,51],
				[8,9,32,52,53,57],
				[7,29,38,40,44,52],
				[8,11,22,25,26,36],
				[19,26,39,45,46,56],
				[11,37,53,55,56,60],
				[3,9,25,28,29,39],
				[3,19,25,37,44,56],
				[5,11,24,27,32,57],
				[10,31,38,46,49,54],
				[3,16,17,37,38,53],
				[16,18,38,48,51,60]
			];

			main.runForData(fakeData);
		})
	})
});
