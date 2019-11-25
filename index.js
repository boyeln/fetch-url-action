const core = require("@actions/core");
const fetch = require("./fetch");

async function run() {
  try { 
    const url = core.getInput("url");
    core.debug(`Fetching ${url}`);
    const result = await fetch(url);
    core.debug(`Result: ${result}`);
    core.setOutput("result", result);
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run()