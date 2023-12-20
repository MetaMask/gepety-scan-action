import { context as githubContext } from "@actions/github";

interface EntrypointArgs {
  github: any;
  context: typeof githubContext;
}

async function entrypoint({ github, context }: EntrypointArgs) {
    console.log("Here are the objects you can use to interact with GitHub:");
    console.log(JSON.stringify(github, null, 2));
    console.log("Here's the context that triggered the workflow:");
    console.log(JSON.stringify(githubContext, null, 2));
    console.log("Here's the context passed in:");
    console.log(JSON.stringify(context, null, 2));
    console.log("Environment variables:");
    console.log(JSON.stringify(process.env, null, 2));
}

module.exports = entrypoint;