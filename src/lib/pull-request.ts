import {
  GitHubClient,
  GitHubContext,
  PullRequestData,
  PullRequestPayload,
} from "../types";

export default class PullRequest {
  private client: GitHubClient;
  private ref: string;
  private base_ref: string;
  private repo_name: string;
  private owner_name: string;

  constructor(githubClient: GitHubClient, prData: PullRequestData) {
    this.client = githubClient;
    this.ref = prData.head.ref;
    this.base_ref = prData.base.ref;
    this.repo_name = prData.head.repo.name;
    this.owner_name = prData.head.repo.owner.login;
  }

  async getDiff(): Promise<any> {
    const { data } = await this.client.rest.repos.compareCommits({
      base: this.base_ref,
      head: this.ref,
      owner: this.owner_name,
      repo: this.repo_name,
      mediaType: {
        format: "diff",
      },
    });

    // Value is a string when diff format is provided
    return data as unknown as string;
  }
}
