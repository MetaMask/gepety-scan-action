import { GitHubClient, PullRequestData, PullRequestPayload } from "../types";
import PullRequest from "./pull-request";

export async function processPullRequest(github: GitHubClient, prData: PullRequestData) {
    const pullRequest = new PullRequest(github, prData);
    const diff = await pullRequest.diff()
    console.log(diff);
}