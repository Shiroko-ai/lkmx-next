# LKMX Next Test

This is a technical preview using Next.js, Postgresql, Docker and Prisma as an ORM.
## Getting Started

First, run docker using the Dockerfile.dev using:

```bash
    docker-compose -f docker-compose.dev.yml up --build
```

This command will build and start all the development containers and set up the development enviroment creating a migration using prisma and you can access the website in Nextjs using the port
```bash
    http://localhost:3000
```
Please make sure that there are not process on the port 3000

## Running Tests

To run tests, use the following command:

```bash
    npm run test
```

## Architecture

This project separates the business, data and components layers into folders, the data folder is called Prisma as it is using a preview feature to separate all the models and client files

The services folder on the other hand contains all the business logic, such as processing data and preventing the potential users to send unformatted data to the database. This ensures that all data stored is consistent and adheres to the defined schema.

Finally, the components folder contains 3 main folders: `ui`, `containers` and `hooks` the `ui` folder contains all the presentational components, the `containers` folder contains components that centers elements, and the `hooks` folder contains custom hooks that encapsulate reusable logic such calling an API.


## Enviroment Variables

There are a few enviroment variables listed on the `.env.demo` which are
1. `DB_PORT` this is the port used for access the database, it is recommended to use the 5432
2. `POSTGRES_USER` The designed user for the database
3. `POSTGRES_PASSWORD` The designed password for the database
4. `POSTGRES_DB` The selected database for all the process inside the API
5. `DATABASE_URL` The database url used for the migrations and process in Prisma
6. `NEXT_PUBLIC_API_URL`= The URL used for testing


## Build the project

Using docker you can build the project so you can deploy it, to do that you can run

```bash
    docker-compose --build
```

This will build the production containers and prepare it to deploy

## Deploying using Google Cloud Run

1. Fork this project
2. Go to console.cloud.google.com and from there go to Cloud Run
3. Create a service
4. Click on continuosly deploy from a repository
5. Connect your GitHub account
6. Select your repository
7. Select Dockerfile
8. Configure the container port as 3000 for nextjs
9. Specify all the variables contained in .env.demo

From now on, everytime you push a change into your forked GitHub repository it will update and show all the new data

## Testing

Theres only one test set up for check the health in the endpoint, however there are dependencies for mocking the unit testings using prisma
