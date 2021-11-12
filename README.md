# caps-cloud

## Author

Antoine Charette

## Problem Domain

In this lab we are tasked with making a serverless caps api which uses the sns and sqs services to handle certain needs.

## UML

</img src="./images/lab19-uml" alt="lab-19-uml" >

## Clients

Vendor:

- Publishes to pickup topic
- Is a consumer of the in-transit and deliveries SQS

Driver:

- Publishes to in-transit and delivered topics
- Is a consumer of the packages SQS
