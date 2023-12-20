import { GitHubClient, GitHubContext, PullRequestData, PullRequestPayload } from "./types";
import { processPullRequest } from "./lib/handler";
interface EntrypointArgs {
  github: GitHubClient;
  context: GitHubContext;
}

function isPullRequestPayload(payload: any): payload is PullRequestPayload {
    return payload && typeof payload === 'object' && 'pull_request' in payload;
}

async function entrypoint({ github, context }: EntrypointArgs) {
    if (isPullRequestPayload(context.payload)) {
       await processPullRequest(github, context.payload.pull_request);
    } 
    else {
        throw new Error("This action only supports pull_request events");
    }
}

module.exports = entrypoint;