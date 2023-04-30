# Float Backend NestJS Solution Template

Welcome to the Float Candidate Assessment for backend developers. We have detailed instructions on how to get started and what a successful solution will entail. Please read and follow the enclosed instructions.

## What are we building?

### Background & Introduction

You've been recently hired by __CBT of Lakeshore__ to help create an API service that will be used to integrate their custom electronic health records (EHR) to work with the Float payments product. For this integration effort, the first step is to make a __Verification of Benefits (VOB)__ a digital request that for a given name, dob, and insurance provider, will indicate if the Patient has coverage and the details of that coverage.  

You're initial task is to begin the implementation of a proof-of-concept API Service that exposes a `POST /check_vob` that returns `{"is_valid": true}` when a patient/user has coverage results.  This endpoint is for starters just a proxy for the underlying Float integration using their [platform api](https://developers.floatfi.com/) specifically the [eligibility endpoint](https://developers.floatfi.com/request-eligiblity/make-an-eligibility-request).  You can get started with this [sample-fixture](https://developers.floatfi.com/request-eligiblity/sample-fixtures).  We've provided an `API_KEY` in the email initial email assignment the assessment.


### Expectations

The expectation is that this solution template provided (or feel free to create our own) is submitted as a newly created github repository with a `POST /check_vob`.    Imagine you are responsible for presenting this _proof-of-concept_ at an upcoming engineering-sync / architecture discussion.  The repository should be documented for this presentation to facilitate conversations around archiecture decisions -- (advantages/dis-advantages, scalability, deployments, concerns, etc) and lastly, what are the next steps for implementation.

#### Requirements

- You have nodejs `14.x` or greater running locally with `npm > 5.x`
- You have a registered Github Account

#### Grading Rubric

We want to ensure you submit a successful solution so here is our assessment grading rubric.

|  | Task / Skill-Check   | Description                                                                         |
|---|-------------------|-------------------------------------------------------------------------------------|
| :thumbsup: | Code Complete        | Did you complete the assessment in it's entirety in terms of functionality          |
| :satellite: | API / Network Comms. | Were networking communications properly configured and handled                                 |
| :thought_balloon: | Pull-Request         | Open up a proper PR, **_read the submission process below_**                            |
| :shipit: | Commit History       | We value [conventional-commits](https://www.conventionalcommits.org/en/v1.0.0)      |

#### Submitting a Solution

##### 1. Setting Up Your Solution

> __IMPORTANT:__ When you receive this zip file create your repository and __COMMIT__ the code as the `initial commit` inside of the _default branch_ `main` or `master`.

##### 2. Create a Branch & PR

You should begin to build your solution on a new branch (_we don't care what you call it we recommend_ --  `solution`).  Once you are code complete, create a private repository and push up both branches.  And open up a pull-request against the _default branch_ `main|master`.

##### 3. Finalize & Submit

Invite `mgan59`, `CMitchell08`, `ramirog89` to your repository so we can see your pull-request.  We also recommend assigning the PR to for review  so that we get notifications in our github-ui.

##### 4. Review Process

Once the reviewers are added to the repository, we will conduct a quick PR review and setup a time to go over the code together.


## What We Provide

This solution template repository provides the following:

1. A [nestjs](https://nestjs.com/) application generated using `nest new tha-platform-partner-solution-key`
2. An updated `Readme` with assignment instructions and grading rubric
3. External [developer documentation](https://developers.floatfi.com/) for our __Float API -- VOB__  and [starting fixture](https://developers.floatfi.com/request-eligiblity/sample-fixtures)
4. An `API_KEY` will be generated for the individual candidate to be used for their request(s)

---

## Solution Template Getting Started

### Repository Contents

- Generated NestJS app
- Added `github-action` to run `npm tests`
- Added and configured [Validation / Pipes](https://docs.nestjs.com/pipes#schema-based-validation) _globally_ in `src/main.ts`
- ... coverage service and test stubs



### Installation

```bash
$ npm install
```

### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

### Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


### Hit API

```
curl -d '{"example":"hello world"}'  http://localhost:3000/check_vob
```




