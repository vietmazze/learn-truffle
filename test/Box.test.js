const { expect } = require("chai");

// Load compiled artifacts
const Box = artifacts.require("Box");

//Start test block

//contract == describe()
contract("Box", () => {
	beforeEach(async () => {
		// Deploy a new contract for each test
		this.box = await Box.new();
	});

	it("retrieve value", async () => {
		await this.box.store(42);

		expect((await this.box.retrieve()).toString()).to.equal("42");
	});
});
