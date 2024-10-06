import CounterComponent from "./counter-component";

describe("CounterComponent Tests", () => {
	it("mounts", () => {
		cy.mount(<CounterComponent />);
	});
	it("should display the initial count as 0", () => {
		// Mount the React component for the About page
		cy.mount(<CounterComponent />);

		// Check if the initial count is 0
		cy.get("#count-output").contains("0");
	});

	const counterSelector = "#count-output";
	const incrementSelector = "#increment";
	const decrementSelector = "#decrement";
	it("Two Time Increment then decrement the count ", () => {
		cy.mount(<CounterComponent />);

		//Two time Increment the Count
		cy.get(incrementSelector).click();
		cy.get(incrementSelector).click();

		// Assert
		cy.get(counterSelector).should("contain.text", 2);

		//Do the decrement
		cy.get(decrementSelector).click();

		// Assert
		cy.get(counterSelector).should("have.text", "1");
	});
	it("Two Time decrement then Increment the count ", () => {
		cy.mount(<CounterComponent />);

		//Two time decrement the count
		cy.get(decrementSelector).click();
		cy.get(decrementSelector).click();
		// Assert
		cy.get(counterSelector).should("have.text", "0");

		//Then increment the count
		cy.get(incrementSelector).click();

		cy.get(counterSelector).should("have.text", "1");
	});
});
