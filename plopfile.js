module.exports = plop => {
  plop.setHelper(
    "firstCharUpperCase",
    compName => compName.charAt(0).toUpperCase() + compName.slice(1)
  );
  const templateLocation = ["template/*.js", "template/*.md"];

  // Declare a new generator called "newApp" for use with our atomic-component app
  plop.setGenerator("atomic-component-generator", {
    // Succintly describes what generator does.
    description: "Create a new atomic component",

    // Get inputs from the user.
    // That's Inquirer.js doing the job behind the hood.
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your atomic component name?"
      }
    ],

    // List of actions to take.
    // Here we "add" new files from our templates or boilerplates.
    actions: [
      {
        type: "addMany",
        skipIfExists: false,
        destination: "components/{{firstCharUpperCase name}}",
        base: "template",
        templateFiles: templateLocation
      },
      {
        type: "add",
        path:
          "components/{{firstCharUpperCase name}}/tests/{{lowerCase name}}.test.js",
        templateFile: "template/tests/index.test.js"
      },
      {
        type: "modify",
        path:
          "components/{{firstCharUpperCase name}}/tests/{{lowerCase name}}.test.js",
        pattern: /##_COMP_NAME_##/gi,
        template: "{{lowerCase name}}"
      },
      {
        type: "modify",
        path: "components/{{firstCharUpperCase name}}//index.js",
        pattern: /##_COMP_NAME_##/gi,
        template: "{{firstCharUpperCase name}}"
      },
      {
        type: "modify",
        path: "components/{{firstCharUpperCase name}}//README.md",
        pattern: /##_COMP_NAME_##/gi,
        template: "{{firstCharUpperCase name}}"
      }
    ]
  });
};
