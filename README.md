## **Project Overview**

The User Management App is a small React application built as part of an internship challenge.

It demonstrates the use of components, state management, routing, forms, and data fetching in React.

The app allows you to view, search, add, sort, update, and delete users with a clean and responsive user interface

## **Features**

**1. User List**

   Fetch users from an API.

   Display users in cards showing:

     -Name

    -Email

    -Company name

    -Company catchPhrase

   Store fetched data in component state.

**2. Search**

   Client-side search by name or email.

**3. User Details Page**

   Clicking a user navigates to a details page.

   Displays additional information including:
  
    -Username

    -Address

    -Phone number

    -Website

    -Geo coordinates (latitude & longitude)

**4. Add a New User (Local Only)**

  Form with validation (name and email are required).

  New users are added at the top of the list (local only, not persisted).

**5. Sorting**

  Sort the list of users (A-Z / Z-A).

**6. Redux State Management** 

 Global state management using Redux Toolkit.

 Supports:

    -Update user

    -Delete user

**5. Responsive desingn**

  Fully responsive layout for all devices:

    -Laptops: 4 cards per row

    -Tablets: 3 cards per row

    -Small tablets / large phones: 2 cards per row

    -Smartphones: 1 card per row

## **Technologies Used**

    React – UI Library

    -Vite– Build Tool

    -Redux Toolkit – State Management

    -React Router – Routing

    -React Redux – Redux bindings for React

    -React Icons – Icon library

    -React Modal – Modal component

    -CSS – Styling and responsive design


## **Installation and usage**

1. Clone the repository:
   
   git clone https://github.com/Freskinaa/UserManagementApp.git
   
   cd UserManagementApp

3. Install dependencies:

   npm install

4. Create a .env file with the following variables:

   VITE_API_BASE_URL=your_api

5. Start the app:

   npm run dev



   
