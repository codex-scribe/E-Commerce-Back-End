# E-Commerce Backend

## Description
This project contains an entire functional, connected backend deployment for an e-commerce website.  It uses MySQL to create databases containing information on products, grouping them by categories, and associating them by tags.  Using Insomnia software, a user can create, read, update, or delete products, categories, and tags in the database.  It is ready to be linked to a front-end website for customer use as well.

## Instructions
On a command line, open the root directory of the repository.  Navigate to the /db folder, open MySQL, and run `SOURCE schema.sql` to create the database.  
Exit MySQL and navigate back up to the root level.  If you want to populate the database with example seed data, run the command `npm run seed`.  Then start the server by running `node server.js`.
Open an API testing app, such as Insomnia, and follow the API routes in the `routes` folder to access the database entries.  You can then create, read, update, and delete products, categories, and tags for the products.

## Required software
Besides a software environment for running node javascript, Insomnia is required.

## Video Demonstration
A video walkthrough of the app is available here: [Demonstration video](https://drive.google.com/file/d/1tMpT4xTR-rtaOuZWo0W5YczsTKSPXWve/view)

## Creator
This application was created by Matt Brandenburgh.  It can be found at github.com/codex-scribe.  Contact him there for any further questions.

## License
The repository is made available under the MIT License.