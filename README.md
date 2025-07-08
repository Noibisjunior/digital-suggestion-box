# Digital Suggestion Box for NIHUB

A modern web application that allows users at NIHUB to submit, track, and manage suggestions anonymously or with attribution to help improve our workspace, programs, and experience.

---

## Project Overview

The **Digital Suggestion Box** is designed to streamline how feedback and ideas are shared across NIHUB. It replaces the old-fashioned paper box with a digital system that is:

- Easy to use
- Anonymous-friendly
- Insightful for admins and leadership

Whether you are an intern, staff member, or visitor, this platform gives you a voice.

---

## Objectives

- Allow users to submit suggestions easily
- Support anonymous or identified submissions
- Enable admins to categorize and respond to suggestions
- Provide secure admin-only access for managing entries
- Track and monitor suggestion trends over time

---

## Tech Stack

| Layer       | Tech Used           |
|-------------|---------------------|
| Frontend    | ReactJS + Tailwind CSS |
| Backend     | Node.js + Express   |
| Database    | PostgreSQL          |
| Auth        | JWT-based login (admin only) |
| Versioning  | Git + GitHub        |
| Hosting     | NIHUB On-Prem Server (deployment phase) |

---

## Architecture Overview

- **Frontend**: A single-page React app for both users and admins.
- **Backend**: RESTful Node.js API that handles suggestion submission, admin authentication, and status management.
- **Database**: PostgreSQL stores suggestion data and user records.

---

## How It Works (Non-Technical aspect)

1. A user visits the suggestion portal (on the NIHUB website or internal link)
2. They fill out a short form optionally anonymous and submit their idea.
3. The backend saves it securely in the database.
4. Admins (authenticated staff) log in to view, filter, and update suggestions.
5. If the suggestion is attributed (not anonymous), users can be notified of responses.

---

## Screens/Interfaces

### For Users:
- **Home Page**: Form for submitting ideas
- **Success Page**: Confirmation after submitting

### For Admins:
- **Login Page**: Secure admin access
- **Dashboard**: View and filter suggestions
- **Suggestion Detail**: Update status and leave comments

---

