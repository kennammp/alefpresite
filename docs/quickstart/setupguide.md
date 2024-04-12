# Setup Guide





Once the information checklist is completed, you can create your Private Mobile Network following these steps: 

1. [**Get your API Key**](#get-your-api-key)
1. [**Create your mobile network infrastructure**](#create-your-mobile-network-infrastructure)
1. [**Provision connectivity between your network and the Edge Point**](#provision-connectivity-between-your-network-and-the-edge-point)
1. [**Configure your radius client (Enterprise Mobile Gateway only)**](#configure-your-radius-client-enterprise-mobile-gateway-only)
1. [**Apply site RANs to your Mobile Gateway**](#apply-site-rans-to-your-mobile-gateway)
1. [**SIM provisioning**](#sim-provisioning)


:::tip 

The following section contains mobile network terminology, so if you are not familiar with working with mobile network technologies please ensure you have read the [**How it all works**](../howitworks/keyconcepts) section. You can also refer to the [**Glossary**](../glossary.md).

:::

:::tip

You will be using the Alef Mobile Network API to carry out the tasks in this section. Refer to the [**API reference documentation**](https://app.swaggerhub.com/apis-docs/MMCKENN72_1/alef-mobile_network_api/1.0.0-oas3-mm1) to discover more about the API such as the schema and descriptions of the values you will be using. You can also try out requests against the mock API without an API key.

:::

## Get your API Key

Please liaise with your Alef representative to get your API key. If you don't have a valid key, you will get an `invalid request` error. You will use your API key to authenticate any request you make to the Alef API. 



## Create your mobile network infrastructure

Your Mobile Network infrastructure consists of the following elements:

The **mobile core** where your mobile network session management takes place. This will always reside on an Alef Cloud location.

```json

            {
                "_id": "string",
                "name": "string",
                "network-integration": true,
                "plmn": [
                    "string"
                ],
                "mobile-network-displayed-name": "string",
                "mme": [
                    {
                        "group-id": "string",
                        "code": "string",
                        "ip-addr": "string",
                        "name": "string"
                    }
                ],
                "sgw-ip-addr": [
                    "string"
                ],
                "tac-range": {
                    "start": "string",
                    "end": "string"
                }
            }
```




The **Mobile Gateway** where your mobile network traffic will be presented to your network. The Mobile Gateway will present mobile traffic to your network at the Edge Point that you have connected to your network.

```json
            {
                "_id": "string",
                "name": "string",
                "logical-system": "string",
                "routing-instance": "string",
                "edgepoint": "string",
                "mme-group-id": "string",
                "mme-code": "string",
                "sgw-ip-addr": "string"
            }
```

### Examples

#### Python `POST`

```python

import requests
import json

url = "https://api.alefedge.com/connectivity/v1/mobile-network/?authorization=<API_KEY>"

payload = json.dumps({

        "_id": "string",
        "name": "yournetworkname",
        "account": "your-account",
        "backbone-network": [
            "string"
        ],
        "mobile-core": [
            {
                "_id": "string",
                "name": "string",
                "network-integration": True,
                "plmn": [
                    "string"
                ],
                "mobile-network-displayed-name": "string",
                "mme": [
                    {
                        "group-id": "string",
                        "code": "string",
                        "ip-addr": "string",
                        "name": "string"
                    }
                ],
                "sgw-ip-addr": [
                    "string"
                ],
                "tac-range": {
                    "start": "string",
                    "end": "string"
                },
                "mobile-gateway": [
                    {
                        "_id": "string",
                        "name": "string",
                        "logical-system": "string",
                        "routing-instance": "string",
                        "edgepoint": "string",
                        "mme-group-id": "string",
                        "mme-code": "string",
                        "sgw-ip-addr": "bla",
                    }
                ]
            }
        ]
    }
)

headers = {
'Accept': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
```


## Provision connectivity between your network and the Edge Point

In order to connect the Site where your Radio Access Network (RAN) resides to an Edge Point, you will work with us to provision private network connectivity from your site to the Interconnect service on the Edge Point. The Interconnect supports most transport options, including IPSEC VPN, MPLS (L2VPN or L3VPN) or you can use a direct ethernet connection if your Edge Point is on-prem, or you have footprint at the colo where the Alef infrastructure is.

Once this is complete, your private network will extend to your Edge Point, so all services on the Edge Point, as well as your mobile devices (UEs) will use IP addresses within your internal address space.


### Routing

As your services running on the Edge Point will be within your address space, you need to provide us with a routable IP address for the Mobile Gateway (MME). You can either manually create a static route for this on your edge router/firewall, or we can exchange routing updates with your BGP AS.

You must ensure that:
 - Packets ingressing your network from the Edge Point with UE subnet source addresses are permitted access to the resources required by UE applications.
 - Packets returning to the UE subnet are routed back down the tunnel towards the Edge Point.

Your mobile APs will communicate with:
 - The Mobile Gateway over the private link that you have set up to the Edge Point
 - Your SAS provider over the internet.


### Transport Options

#### IPSEC VPN

To bring up IPSec connectivity to an Alef Location, we will work with you to provision your IPSEC phase 1 and 2 tunnels, and a point to point GRE link that will run over the IPSEC tunnel.  

All traffic between your Site and the Edge Point will run across the GRE point to point link.


:::note

By default, the following filter is applied to The GRE tunnel:
- Permit IP SCTP port 36412 S1AP and GTP-u UDP port 2152 traffic to the Mobile Gateway
- Permit all traffic from/to UE IP subnets

:::

Please provide our engineers with the following information so we can work with you to bring up the IPSECand GRE tunnels:

 - Peer IP
 - Phase I IKE parameters 
 - IKE version 
 - IKE mode
 - Pre-shared key
 - Diffie-Hellman group
 - Authentication Algorithms
 - Encryption Algorithms
 - Life-time
 - Phase II IPSec parameters
 - protocol: ESP
 - PFS PFS Perfect Forward Secrecy: Diffie-Hellman Group 
 - Authentication Algorithms
 - Encryption Algorithms
 - GRE tunnel IP information


#### MPLS VPN

We support L2VPN and L3VPN, the Edge Point being seen by your MPLS provider network as another branch office. In order to bring up MPLS connectivity to the Edge Point, our engineers will work with you and your MPLS provider to provision the Edge Point as if it is a new branch site on your MPLS network.

#### Direct Connect
If you have footprint at a colo that is also hosting Alef infrastructure, the Interconnect service can connect directly with your CE router over ethernet at L2 or L3. This also applies if you are installing an Edge Point on-prem, which we refer to as a *Customer Location* Edge Point.

##  Configure your Radius Client (Enterprise Mobile Gateway only)

If you are using an [**Enterprise Mobile Gateway**](../howitworks/alefnetwork#enterprise-mobile-gateway), your mobile core will use your IAM for mobile endpoint auth via your radius client. 

:::note

You will need ensure that your IAM can operate with the EMG’s Radius client. We can provide guidance on this.

:::

You will need to configure your radius client to communicate with your Radius servers, firstly by configuring the client settings, then configuring the servers it will communicate with. You can either provision the radius client when you first create the Mobile Gateway with `POST`, or later on with `PUT`:

Configure **radius client** settings:

```json
{
    "radius-client" : {
    "nas-ip-address" : "string",
    "nas-ipv6-address" : "string",
    "nas-identifier" : "string",
    "dynamic-authorization" : {
        "local-endpoint" : [ {
        "address" : "string",
        "port" : "string",
        "transport" : "udp"
        } ],
        "allowed-client" : [ {
        "address" : "string",
        "shared-key" : "string",
        "allow-coa-requests" : true,
        "allow-disconnect-requests" : true
        } ]
        }
    }
}
```

Configure **Radius Servers** (You can configure up to three servers for each client, which you can either provision when you first configure the Mobile Gateway (`POST`), or later on (`PUT`):

```json
{
"auth-server" : [ {
    "source-address" : "string",
    "shared-key" : "string",
    "priority" : "string",
    "transport" : {
    "udp" : {
        "timeout" : "string",
        "max-retries" : "string"
    }
    },
    "reconnect-time" : "string",
    "dead-interval" : "string",
    "send-status-server" : true,
    "name" : "string"
} ],
"accounting-server" : [ {
    "name" : "string",
    "priority" : "string"
} ]
}
```

### Examples

#### Python `PUT`

```python

import requests
import json

url = "https://api.alefedge.com/connectivity/v1/mobile-network/?authorization=<API_KEY>"

payload = json.dumps({

        "_id": "string",
        "name": "yournetworkname",
        "account": "your-account",
        "backbone-network": [
            "string"
        ],
        "mobile-core": [
            {
                "mobile-gateway": [
                    {
                        "radius-client" : {
                        "nas-ip-address" : "string",
                        "nas-ipv6-address" : "string",
                        "nas-identifier" : "string",
                        "dynamic-authorization" : {
                            "local-endpoint" : [ {
                            "address" : "string",
                            "port" : "string",
                            "transport" : "udp"
                            } ],
                            "allowed-client" : [ {
                            "address" : "string",
                            "shared-key" : "string",
                            "allow-coa-requests" : True,
                            "allow-disconnect-requests" : True
                            } ]
                        },
                        "auth-server" : [ {
                            "source-address" : "string",
                            "shared-key" : "string",
                            "priority" : "string",
                            "transport" : {
                            "udp" : {
                                "timeout" : "string",
                                "max-retries" : "string"
                            }
                            },
                            "reconnect-time" : "string",
                            "dead-interval" : "string",
                            "send-status-server" : True,
                            "name" : "string"
                        } ],
                        "accounting-server" : [ {
                            "name" : "string",
                            "priority" : "string"
                        } ]
                    }
                    }
                ]
            }
        ]
    }
)

headers = {
'Accept': 'application/json'
}

response = requests.request("PUT", url, headers=headers, data=payload)

print(response.text)
```

## Apply site RANs to your Mobile Gateway

Once you have configured the mobile network infrastructure, you can attach it to the site or sites where your APs and mobile endpoints will reside. Your onsite APs make up a RAN at each site, therefore, you need to tell your Mobile Gateway about the site RANs it will be serving. A Mobile gateway can serve many sites, which you can either provision when you first configure the Mobile Gateway (`POST`), or later on (`PUT`).

Configure a **site RAN**:

```json
{
            "_id" : "string",
            "name" : "string",
            "site" : "string",
            "generation" : "4",
            "mme-ip-addr" : [ "string" ],
            "mobile-core-name" : "string",
            "number-of-access-points" : "string",
            "ran-ip-subnet" : "string",
            "manufacturer" : {
                "name" : "string",
                "support-contact" : "string",
                "cbrs-sas-account" : "string"
            },
            }
```

### Examples

#### Python `PUT`

```python
import requests
import json

url = "https://api.alefedge.com/connectivity/v1/mobile-network/?authorization=<API_KEY>"

payload = json.dumps({

        "_id": "string",
        "name": "yournetworkname",
        "account": "your-account",
        "backbone-network": [
            "string"
        ],
            "ran" : [ {
            "_id" : "string",
            "name" : "string",
            "site" : "string",
            "generation" : "4",
            "mme-ip-addr" : [ "string" ],
            "mobile-core-name" : "string",
            "number-of-access-points" : "string",
            "ran-ip-subnet" : "string",
            "manufacturer" : {
                "name" : "string",
                "support-contact" : "string",
                "cbrs-sas-account" : "string"
            },
            } ]
        } )



headers = {
'Accept': 'application/json'
}

response = requests.request("PUT", url, headers=headers, data=payload)

print(response.text)
```




## View your Alef Mobile Network configuration

Now you have configured your Alef mobile network, you can view the whole configuration:

### Examples

#### Python

```python

import requests

url = "https://api.alefedge.com/connectivity/v1/mobile-network/?authorization=<API_KEY>"

payload={}
headers = {
'Accept': 'application/json'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

```


## IP Management

You will configure IP pools on the Mobile Gateway from which UEs will be assigned IP addresses, block these out on your IPAM and advise us of the range used for the pool.  Dynamically assigning IP UE IP addresses via your IPAM is on our roadmap, please contact us for details.



:::note

Best practice is to statically assign AP addresses via your IPAM such that a given AP will always get the same address.

:::


## SIM Provisioning

If you are using the [**Enterprise Mobile Gateway**](../howitworks/alefnetwork#enterprise-mobile-gateway), you will need to provision your SIMs and keys into your existing ID store. 

If you are using the [**Classic Mobile Gateway**](../howitworks/alefnetwork#classic-mobile-gateway), assuming you are ordering your SIMs from a 3rd party, once you have the SIM information (IMSI, K, Opc) as well as your PLMN, you will send this to us and we will add this information to the ID store in your Mobile Gateway. If we are providing the SIMs, we will do this for you.

## Full mobile network provisioning example 

If you are ready to provision everything with a single `POST` request, the example below brings all the above steps together. 


#### Python `POST`

```python

import requests
import json

url = "https://api.alefedge.com/connectivity/v1/mobile-network/?authorization=<API_KEY>"

payload = json.dumps({
  "_id": "string",
  "name": "yournetworkname",
  "account": "your-account",
  "backbone-network": [
    "string"
  ],
  "mobile-core": [
    {
      "_id": "string",
      "name": "string",
      "network-integration": True,
      "plmn": [
        "string"
      ],
      "mobile-network-displayed-name": "string",
      "mme": [
        {
          "group-id": "string",
          "code": "string",
          "ip-addr": "string",
          "name": "string"
        }
      ],
      "sgw-ip-addr": [
        "string"
      ],
      "tac-range": {
        "start": "string",
        "end": "string"
      },
      "mobile-gateway": [
        {
          "_id": "string",
          "name": "string",
          "logical-system": "string",
          "routing-instance": "string",
          "edgepoint": "string",
          "mme-group-id": "string",
          "mme-code": "string",
          "sgw-ip-addr": "string",
          "radius-client": {
            "nas-ip-address": "string",
            "nas-ipv6-address": "string",
            "nas-identifier": "string",
            "dynamic-authorization": {
              "local-endpoint": [
                {
                  "address": "string",
                  "port": "string",
                  "transport": "udp"
                }
              ],
              "allowed-client": [
                {
                  "address": "string",
                  "shared-key": "string",
                  "allow-coa-requests": True,
                  "allow-disconnect-requests": True
                }
              ]
            },
            "auth-server": [
              {
                "source-address": "string",
                "shared-key": "string",
                "priority": "string",
                "transport": {
                  "udp": {
                    "timeout": "string",
                    "max-retries": "string"
                  }
                },
                "reconnect-time": "string",
                "dead-interval": "string",
                "send-status-server": True,
                "name": "string"
              }
            ],
            "accounting-server": [
              {
                "name": "string",
                "priority": "string"
              }
            ],
            "nac-session": [
              {
                "index": "string",
                "imsi": "string",
                "ue-ip": "string",
                "rc": "string",
                "mg": "string",
                "site": "string"
              }
            ],
            "nac-log": [
              {
                "index": "string",
                "item": "string"
              }
            ],
            "acl": [
              {
                "index": "string",
                "item": "string"
              }
            ]
          },
          "sgi": {
            "interface": [
              {
                "name": "string",
                "ip-addr": "string",
                "gateway-ip-addr": "string"
              }
            ]
          },
          "transport": {
            "name": "string"
          }
        }
      ]
    }
  ],
  "ran": [
    {
      "_id": "string",
      "name": "string",
      "site": "string",
      "generation": "4",
      "mme-ip-addr": [
        "string"
      ],
      "mobile-core-name": "string",
      "number-of-access-points": "string",
      "ran-ip-subnet": "string",
      "manufacturer": {
        "name": "string",
        "support-contact": "string",
        "cbrs-sas-account": "string"
      },
      "tac": [
        "string"
      ],
      "mobile-access-point": [
        {
          "_id": "string",
          "name": "string",
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
      ]
    }
  ]
}
)

headers = {
'Accept': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
```