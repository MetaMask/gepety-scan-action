import { GitHubClient, GitHubContext, PullRequestData } from "./types";
import { getOctokit } from "@actions/github";
import * as dotenv from "dotenv";

dotenv.config();

const entrypoint = require('./entrypoint');
const client: GitHubClient = getOctokit(process.env.LOCAL_GITHUB_ACCESS_TOKEN!);
const mockPullRequestData: PullRequestData = {
  number: 1,
  head: {
    // branch that we assume this is running on
    ref: "gpt-test",
    repo: {
      full_name: "MetaMask/Appsec-Playground",
      name: "Appsec-Playground",
      owner: {
        login: "MetaMask",
      },
    },
  },
  base: {
    // Branch we assume the PR is merging against
    ref: "main",
    repo: {
      full_name: "MetaMask/Appsec-Playground",
      name: "Appsec-Playground",
      owner: {
        login: "MetaMask",
      },
    },
  },
};

const context = {
    "payload": {
      "pull_request": mockPullRequestData,
    },
    "eventName": "pull_request",
    "sha": "",
    "ref": "",
    "workflow": "Invoke Gepety Scan Action",
    "action": "",
    "actor": "",
    "job": "build",
    "runNumber": 6,
    "runId":1,
    "apiUrl": "https://api.github.com",
    "serverUrl": "https://github.com",
    "graphqlUrl": "https://api.github.com/graphql",
    "issue": {},
    "repo": {
      "owner": "MetaMask",
      "repo": "Appsec-Playground",
      "repoUrl": "", 
    }
};

console.log("----Running entrypoint locally to simulate a pull request opened");

entrypoint({ github: client, context: context }).then(() => {
  console.log("----Done");
});