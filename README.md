# Gepety Scan Action

A GitHub action that triggers a security code review on a pull request by GPT. 

## Usage

Use this action in your project by adding the following to a new or existing GitHub workflow:

```yaml

name: Invoke Gepety Scan Action

on:
  push:
    branches: [ '*' ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout target repo
      uses: actions/checkout@v4
      with:
        path: ${{ github.repository }}

    - name: Scan with Gepety
      uses: MetaMask/gepety-scan-action@main
      with:
        repo-name: ${{ github.repository }}

```

## Running locally

You can run the script locally by executing `yarn start`. Note that you will need to pass in any environment variables normally passed in by the GitHub action when doing so.


## Disclaimer

This is part of a Winter hackathon project, and support is not guarenteed.