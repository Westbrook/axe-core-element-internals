export default function generate(plop) {
	// create your generators here
	plop.setGenerator("role testing", {
		description: "Generate demos and tests covering the Element Internals implementation of an aria role.",
		prompts: [
			{
				type: "input",
				name: "role",
				message: "What role would you like to demonstrate? See https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles for more options.",
				validate: (answer) => {
					if (answer.length < 1) {
						return "You must have meant to put something here...";
					}
					return true;
				},
			},
		],
		actions: [
			{
				type: "add",
				path: "stories/role.{{role}}.stories.ts",
				templateFile: "templates/stories.ts.hbs",
			},
			{
				type: "add",
				path: "test/role.{{role}}.test.ts",
				templateFile: "templates/test.ts.hbs",
			},
		], // array of actions
	});
}
