import { context } from "@actions/github";
import { GitHub } from "@actions/github/lib/utils"

export type GitHubClient = InstanceType<typeof GitHub>;
export type GitHubContext = typeof context;

export interface RepositoryData extends NonNullable<typeof context.payload.repository>  {
    // Adding more properties from the repository payload as needed from the actual output
    full_name: string;
    name: string;
    owner: {
        login: string;
    };
}

export interface PullRequestData extends NonNullable<typeof context.payload.pull_request> {
    // Adding more properties from the payload as needed from the actual output
    head: {
        ref: string;
        repo: RepositoryData
    };
    base: {
        ref: string;
        repo: RepositoryData
    };
}

export interface PullRequestPayload extends NonNullable<typeof context.payload> {
    action: string;
    number: number;
    pull_request: PullRequestData;
}