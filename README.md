# Puppeteer  and Jasmine for WebSite e2e Testing

ensure you have installed puppeteer and jasmine

for using the package.json script **npm test** ensure a global installation of **Jasmine**

    npm install -g jasmine

you can run the test suite by using **jasmine** in your cli

    jasmine

to debug attach a jasmine debugger to your vscode by editing the launch.json file

    {
		"type": "node",
		"request": "launch",
		"name": "Jasmine Debugger",
		"program": "${workspaceRoot}\\node_modules\\jasmine\\bin\\jasmine.js"
	}
