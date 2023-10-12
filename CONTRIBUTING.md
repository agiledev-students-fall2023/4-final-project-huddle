# Guide to Contributing

## Team values
- Team will work together asynchronously 
-Members who need help can solicit other team members by directly messaging them on discord
- Scrum master initiates discussion.
- Upon disagreement on direction, the team will come to a consensus. 
- Team members are expected to answer questions directed at them within the day

## Sprint cadence
Sprint = 2 weeks
Usually anywhere from 1-4 weeks long, preferably on the shorter side.
too short sprints create panic and struess.
too long creates overly relaxed mood.
just right is in the middle... in our case 2 weeks.

## Daily standups
- Standups should occur whenever members deem necessary, all members should arrive promptly at designated times. Ideally twice a week to check on progress.
- Members expected to be present synchronously.
- Agreement that members will not cover for other members who do not participate.
- Agreement that a member who makes no progress on a task for two standups or more in a row will be reported to management.

## Coding standards
- Designate a code editor and code linter all team members will use to standardize code formatting.
- Don't over-engineer. Write minimum code to get things working end to end, only then iterate to improve. - Code for each task and spike must be peer-reviewed and pass tests before merging into the main branch of code.
- Always push working code, if you break the pipeline/build then fix it.
- Make granular and small commits, per feature or per bug fix.
- Provide descriptive commit messages.
- Write self documenting code. Use descriptive variable and function names. Avoid unnecessary name shortening.
- Don't leave dead/commented out code behind. If you see such code, delete it.
- Write automated tests to cover critical integration points and functionality (once you learn how to do that).

## Instructions on Setting up local development Environment
- Fork this repo
- Clone your forked repo to a local repo on your machine
- Run 'npm init' in your local repo in folders 'back-end' and 'front-end'
