# API REST CONDORLABS

this project expose a CRUD methods for the collections Specialty and Provider given for the company
## Getting Started

For run this project you most:

* Download the code from the repo 
* Open the project in a editor or command prompt 
* Run npm install, for install all dependencies that you needed to run the project 
* Run npm start for running the project in your localhost 
    
### Prerequisites

Before you wanna run the project Run:

```
npm install
```

### Installing

For get the project you can do it:

```
Visit: https://github.com/EverCabarcas/Condor-Backend-Test
```

And download or clone project


## Endpoint Created

then a explanation about the endpoints created

#### Get/Providers/

bring back all providers found in a Provider's collection

```
localhost:3000/providers/
```

#### Get/Providers/:id

bring back a specific provider found in a Provider's collection, send a _id like params
```
localhost:3000/providers/id
```

#### Post/Providers

Create a specific provider in a Provider's collection, and send it a body like this:
```
{
    "firstName": "String",
    "lastName": "String",
    "middleName": "String",
    "email": "String",
    "projectedStartDate": "Date",
    "employerId": "Number",
    "providerType": "String",
    "staffStatus": "String",
    "assignedTo": "Number",
    "status": "String",
    "createdBy": "Number",
    "createdAt": "Date",
    "updatedBy": "Number",
    "updatedAt": "Date",
    "specialty": "String"
    }
```
#### Put/Providers/id

Update a specific provider in a Provider's collection, send a _id like params and send it a body like this:
```
{
    "firstName": "String",
    "lastName": "String",
    "middleName": "String",
    "email": "String",
    "projectedStartDate": "Date",
    "employerId": "Number",
    "providerType": "String",
    "staffStatus": "String",
    "assignedTo": "Number",
    "status": "String",
    "createdBy": "Number",
    "createdAt": "Date",
    "updatedBy": "Number",
    "updatedAt": "Date",
    "specialty": "String"
    }
```

#### Delete/Providers/id

Delete a specific provider in a Provider's collection, send a _id like params


## Built With

* [MongoBD](https://www.mongodb.com/es/) - Used to create a document database
* [Mongoose](http://mongoosejs.com/) - MongoDB object modeling tool designed to work in an asynchronous environment
* [NodeJs](https://nodejs.org/en/) - JavaScript runtime built
* [Express](http://expressjs.com/) - The web framework used

## Authors

* **Ever Cabarcas** - *Initial work* - [Github](https://github.com/EverCabarcas)

## License

This project is licensed under the MIT License
