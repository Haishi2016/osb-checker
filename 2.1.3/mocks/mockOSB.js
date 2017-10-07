const express = require('express')
const app = express()

//Catalog Management
//- GET /v2/catalog
app.get('/v2/catalog', function (req,res) {
    if (!req.header('X-Broker-API-Version') || req.header('X-Broker-API-Version') != '2.13')
      res.sendStatus(412);
    else 
      res.send(
        {
            "services": [{
              "name": "fake-service",
              "id": "acb56d7c-XXXX-XXXX-XXXX-feb140a59a66",
              "description": "fake service",
              "tags": ["no-sql", "relational"],
              "requires": ["route_forwarding"],
              "bindable": true,
              "metadata": {
                "provider": {
                  "name": "The name"
                },
                "listing": {
                  "imageUrl": "http://example.com/cat.gif",
                  "blurb": "Add a blurb here",
                  "longDescription": "A long time ago, in a galaxy far far away..."
                },
                "displayName": "The Fake Broker"
              },
              "dashboard_client": {
                "id": "398e2f8e-XXXX-XXXX-XXXX-19a71ecbcf64",
                "secret": "277cabb0-XXXX-XXXX-XXXX-7822c0a90e5d",
                "redirect_uri": "http://localhost:1234"
              },
              "plan_updateable": true,
              "plans": [{
                "name": "fake-plan-1",
                "id": "d3031751-XXXX-XXXX-XXXX-a42377d3320e",
                "description": "Shared fake Server, 5tb persistent disk, 40 max concurrent connections",
                "free": false,
                "metadata": {
                  "max_storage_tb": 5,
                  "costs":[
                      {
                         "amount":{
                            "usd":99.0
                         },
                         "unit":"MONTHLY"
                      },
                      {
                         "amount":{
                            "usd":0.99
                         },
                         "unit":"1GB of messages over 20GB"
                      }
                   ],
                  "bullets": [
                    "Shared fake server",
                    "5 TB storage",
                    "40 concurrent connections"
                  ]
                },
                "schemas": {
                  "service_instance": {
                    "create": {
                      "parameters": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "type": "object",
                        "properties": {
                          "billing-account": {
                            "description": "Billing account number used to charge use of shared fake server.",
                            "type": "string"
                          }
                        }
                      }
                    },
                    "update": {
                      "parameters": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "type": "object",
                        "properties": {
                          "billing-account": {
                            "description": "Billing account number used to charge use of shared fake server.",
                            "type": "string"
                          }
                        }
                      }
                    }
                  },
                  "service_binding": {
                    "create": {
                      "parameters": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "type": "object",
                        "properties": {
                          "billing-account": {
                            "description": "Billing account number used to charge use of shared fake server.",
                            "type": "string"
                          }
                        }
                      }
                    }
                  }
                }
              }, {
                "name": "fake-plan-2",
                "id": "0f4008b5-XXXX-XXXX-XXXX-dace631cd648",
                "description": "Shared fake Server, 5tb persistent disk, 40 max concurrent connections. 100 async",
                "free": false,
                "metadata": {
                  "max_storage_tb": 5,
                  "costs":[
                      {
                         "amount":{
                            "usd":199.0
                         },
                         "unit":"MONTHLY"
                      },
                      {
                         "amount":{
                            "usd":0.99
                         },
                         "unit":"1GB of messages over 20GB"
                      }
                   ],
                  "bullets": [
                    "40 concurrent connections"
                  ]
                }
              }]
            }]
          }
    )
})
app.listen(3000, function(){
    console.log('Example app listening on port 3000!')
})