# Lab 03 — UML Diagrams

## Aim
Model the Student Help Desk System using Use Case and Class Diagrams.

## Use Case Diagram
Actors:
- Student
- Admin
- Support Staff

Use cases:
- Register Account
- Login
- Submit Complaint
- Track Complaint
- View Status
- Update Profile
- View All Complaints
- Assign Priority
- Update Status
- Generate Reports
- Respond to Complaint
- Close Complaint

## Class Diagram
Suggested classes:
- User (abstract)
- Student
- Admin
- SupportStaff
- Complaint
- Category
- Comment
- Notification

Suggested relationships:
- Student submits complaints.
- Admin manages complaints and assigns priority.
- SupportStaff handles/responds to assigned complaints.
- Complaint belongs to a Category.
- Complaint may have multiple Comments.
- A Notification is associated with a user and/or complaint.

## Submission
Place the two separately saved diagram images in this folder or in a top-level `Diagrams` folder. Review all class names, spellings, associations, and multiplicities before submission.
