# Lab 01 — Requirements Analysis

## Aim
Identify the requirements for a University Student Help Desk System.

## Problem Statement
Students may have difficulty submitting complaints, tracking their status, and knowing which department is handling a request. The proposed system provides a central interface to submit and track support requests.

## Actors / Stakeholders
- Student: creates an account, signs in, submits complaints, and checks status.
- Administrator: reviews complaints, sets priority, and updates complaint status.
- Support Staff: responds to assigned complaints and records resolution.

## Functional Requirements
- FR-01: The system shall allow a student to register with a name, email, and password.
- FR-02: The system shall validate login inputs.
- FR-03: The system shall allow a student to submit a complaint with a category, subject, and description.
- FR-04: The system shall show a complaint reference and current status in the prototype.
- FR-05: The administrator shall be able to review complaints and update status in the proposed system.
- FR-06: Support staff shall be able to add a response to a complaint in the proposed system.
- FR-07: The Contact Us page shall validate the contact form.

## Non-Functional Requirements
- NFR-01 Usability: pages should have clear labels and navigation.
- NFR-02 Accessibility: form fields should have visible labels and readable contrast.
- NFR-03 Security: a real deployment must use server-side validation, secure password hashing, authorization, and HTTPS.
- NFR-04 Reliability: invalid form data should not be accepted.
- NFR-05 Maintainability: HTML, CSS, and JavaScript should be organized into separate files.

## Deliverables
Requirements document and list of actors.
