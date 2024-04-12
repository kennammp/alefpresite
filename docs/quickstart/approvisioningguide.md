# AP Provisioning Guide

## Provision your mobile APs

Once you have set up your mobile network infrastructure, you can provision your APs. Although it is possilble to provision APs when you first bring up your mobile network infrastructure, it's usually preferable to provision APs once the infrastructure is up and running.


:::tip

You will be using the [**`mobile-access-point`**](https://app.swaggerhub.com/apis-docs/MMCKENN72_1/alef-mobile_network_api/1.0.0-oas3-mm1#/Create%20mobile-access-point/create_mobile-network_ran_mobile-access-point_mobile-access-point_by_id) endpoint to carry out the tasks in this section. 

:::

Provision a mobile AP:

```json

{
  "_id": "string",
  "mobile-access-point_name": "string",
  "access-point-id": "string",
  "cell": [
    {
      "cell-id": "string"
    }
  ],
  "ip-addr": "string",
  "manufacturer": {
    "name": "string",
    "support-contact": "string",
    "cbrs-sas-account": "string"
  }
}

  ```

  ### Examples

  #### Python `POST`

```python
import requests
import json

url = "https://api.alefedge.com/connectivity/v1/mobile-network/{name}/ran/mobile-access-point/{mobile_access_point_name}?authorization=<API_KEY>"

payload = json.dumps(
[{
 "ran" : [ {
      "_id" : "string",
      "site" : "string",
      "tac" : [ "string" ],
      "mobile-access-point" : [ {
        "_id" : "string",
        "name" : "string",
        "access-point-id" : "string",
        "cell" : [ {
          "cell-id" : "string"
        } ],
        "ip-addr" : "string",
        "manufacturer" : {
          "name" : "string",
          "support-contact" : "string",
          "cbrs-sas-account" : "string"
        }
      } ]
    } ]
  } ]
)


headers = {
'Accept': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
```

## Viewing your mobile APs

You can either list all your currently configured mobile AP names, or view the configuration for a given AP specified by name.

### View a list of all your APs by name

#### Examples

##### Python

```python

import requests

url = "https://api.alefedge.com/connectivity/v1/mobile-network/{name}/ran/mobile-access-point/?authorization=<API_KEY>""

payload={}
headers = {
'Accept': 'application/json'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

```

### View the configuration for a given AP specified by name


#### Examples

##### Python

```python

import requests

url = "https://api.alefedge.com/connectivity/v1/mobile-network/{name}/ran/mobile-access-point/{mobile_access_point_name}?authorization=<API_KEY>""

payload={}
headers = {
'Accept': 'application/json'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

```

