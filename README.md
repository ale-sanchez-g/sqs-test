# sqs-test
how to test an SQS que

## Prerequisites

```
- node
- docker
```


## Instructions

In order to run this example you 

Build
```
docker build -t sqs-mock .
```

Run
```
docker run --name sqs-mock -p 9324:9324 -p 9325:9325 -d sqs-mock
```


## Reference

https://github.com/softwaremill/elasticmq