# Contributing to Bodiless-JS

Bodiless-JS is an open source project being actively developed at Johnson &
Johnson. We welcome contributions from the community, and are committed to
transparency.  

## Issues

Every feature or bugfix should have an associated GitHub issue. This should be
created prior to beginning development and, ideally, should be tagged as
"accepted for development" before any actual work is begun.

For bugs, the issue should clearly specify:
- Steps to reproduce
- Expected behavior
- Actual behavior
- Artifacts (screenshots, video, logs)
- Execution (version, OS, browser, important libraries)

Anyone can create an issue in the Bodiless-JS project.

For features, the issue should clearly specify:
- The high level description of the feature expressed as a user story
- A narrative description of the value of the feature and an intended approach to delivery.
- A clear list of acceptance criteria which can be used to define whether the feature is complete
  (note that this will generally be written and/or refined by the Bodiless product team).

Once an issue is created, it will be reviewed by the Bodiless product team who will determine
whether or not it should be accepted for development.  The team may request further details or
suggest alterations in the requirements. Once a decision is made, the issue will be given one
of the following dispositions:

- "won't fix": The issue will not be addressed, and associated pull requests will not be considered.
- "accepted": The issue is accepted for development, and pull requests are welcome. Capacity for
  review and testing of such PRs will be allocated as available, depending on priority set by
  the product team.
- "priority": The issue is accepted for development and will be prioritized by the core team.  Pull
  requests are welcome, but the issue will likely be assigned a developer from the core team and be
  included in an upcoming sprint.

## Pull Requests

All work must be submitted in the form of a pull request to the master branch.

- Each pull request must contain a description matching the pull request
  template, and include a reference to the associated GitHub issue.
- Each pull request must be thoroughly tested by the submitter.
- Once an issue is accepted for development, the pull request will be assigned a
  reviewer and tester from the core team. Both must approve the PR before it can
  be merged.
- A pull request should be opened in "draft" mode as early as possible after the
  issue is accepted. This allows members of the core team and other contributors
  to gain early visibility into the progress of the work.
- Where possible, unit tests should be written first and submitted in the draft
  pull request.
- Unless explicitly stated in the associated issue, all pull requests must
  - Include relevant unit and integration tests
  - Include relevant documentation updates.
  - Adhere to our [Coding Standards](Development/Release/Quality).

Once a pull request receives the required approvals, it will be merged to the
master branch.

## Releases

While we adhere to the principles of [Semantic Versioning](https://semver.org/),
please note that we are currently in ["Major Version Zero"](https://semver.org/#spec-item-4)
status, meaning that *stability or backwards compatibility is not guaranteed.*,

During this phase:

- All Bodiless packages will maintain a common version line at `0.y.z`.
- New "patch" versions (0.y.Z) will be published every two weeks, coinciding
  with our internal sprint cadence.
- In exceptional circumstances (critical bugfixes), we may publish a new version
  mid-sprint.
- New "minor" versions (0.Y.0) will be released periodically as we hit major
  milestones on our roadmap.

Once we achieve a stable major release (1.0.0), future versions will follow SemVer standards.
