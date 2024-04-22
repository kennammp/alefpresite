
# Set up your Alef Edge Private Mobile Network

Once you have completed the tasks in the above section, you're ready to set up your first Alef Edge Private Mobile Network. The steps are as follows:
 
1. [**Check your account details**](#checkaccount)
2. [**Create site address**](#createsite)
3. [**Order a mobile network**](#ordernetwork)
4. [**Configure your mobile APs**](#configaps)

 



## 1. Check your account details {#checkaccount}
-----------------------------

To check your account details you must provide your ``<ACCOUNT_ID>`` and ``<API_KEY>``
 
You will be using the **/connectivity/v1/account** endpoint with the GET method. 

**Examples:**

curl

```bash
curl --location --request GET 'https://api.alefedge.com/connectivity/v1/account?account_id=<ACCOUNT_ID>&Authorization=<API_KEY>' \
--header 'Accept: application/json'
```

Python

```python
import requests

url = "https://api.alefedge.com/connectivity/v1/account?account_id=<ACCOUNT_ID>&Authorization=<API_KEY>"

payload={}
headers = {
'Accept': 'application/json'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
```

Sample response

```json
[
    {
        "account_id": "62cd07fb8918c140d8355555",
        "account_name": "ACloudenterprise Inc.",
        "account_address": [
            {
                "line1": "7 address Tower",
                "line2": "100 address St",
                "city": "Hebron",
                "state": "KY",
                "country": "US",
                "postal_code": "41048",
                "_id": "62cd07fb8918c140d8355555"
            }
        ],
        "billing_address": [
            {
                "line1": "7 address Tower",
                "line2": "100 address St",
                "city": "Hebron",
                "state": "KY",
                "country": "US",
                "postal_code": "41048",
                "_id": "62cd07fb8918c140d8355555"
            }
        ],
        "contract_id": "d40c867624ede53ef9012345",
        "billing_entity": "ACloudenterprise Inc.",
        "billing_contact": [
            {
                "email": "john@doe.com",
                "name": "John Doe",
                "contact_number": "+918007012345",
                "_id": "62cd07fb8918c140d8312345"
            }
        ]
    }
]
```


## 2. Create a site address {#createsite}


In order to connect to an Alef Edge Point, you must first create a site address where you intend on ordering services to.  
 
To create your site you must provide your ``<API_KEY>`` and your site details.
 
You will be using the **/connectivity/v1/account/customersiteaddress** endpoint with the POST method.

**Examples:**

curl

```bash
curl --location --request POST 'https://api.alefedge.com/connectivity/v1/account/customersiteaddress?Authorization=<API_KEY>' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
"customer_site_name": "NYC east office site",
"customer_site_address": {
    "line1": "7 address Tower",
    "line2": "100 address St",
    "city": "Hebron",
    "state": "KY",
    "postal_code": "41048",
    "country": "US"
},
"contact_details": {
    "name": "Alex Hales",
    "phone_number": "+12223334444",
    "email": "your@email.com"
},
"is_default_shipping_address": true
}'
```


Python

```python
import requests
import json

url = "https://api.alefedge.com/connectivity/v1/account/customersiteaddress?Authorization=<API_KEY>"

payload = json.dumps({
"customer_site_name": "NYC east office site",
"customer_site_address": {
    "line1": "7 address Tower",
    "line2": "100 address St",
    "city": "Hebron",
    "state": "KY",
    "postal_code": "41048",
    "country": "US"
},
"contact_details": {
    "name": "Alex Hales",
    "phone_number": "+12223334444",
    "email": "your@email.com"
},
"is_default_shipping_address": True
})
headers = {
'Content-Type': 'application/json',
'Accept': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
```
 
 
Sample response

```json
{
    "customer_site_address_id": "62cd0a274e6842854ad12345",
    "createdAt": "2022-07-12T05:44:07.992Z"
}
```

## 3. Order a Mobile network {#ordernetwork}


Please contact us to create your order. We will need the following information from you:

 - ``pdn_name`` An optional value that we would use to generate your dedicated APN name if you order one.
 - ``bandwidth`` The bandwidth you will require between the Alef Edge Point and your network
 - ``preferred_carrier`` The preferred carrier for connectivity between your network and the Alef Edge Point
 - ``ue_ip_pool`` If you are ordering a dedicated APN you can define the IP address pool that will be used by your mobile devices (UEs)
 - ``ip_subnets_for_enb`` The range of ip addresses that can be allocated to APs on the network. This is required when ``access_point_quantity`` is set, but should be left blank otherwise.
 - ``epc_provider`` The mobile core you will use for attaching to the mobile network and signalling. Options are ``OPEN5GS`` or ``RFCONNECT``. Default is ``OPEN5GS``. 
 

You will be using the **/connectivity/v1/order** endpoint with the POST method. 

:::note
- When using the **Production** environment to place an order, there will be a 10 minute window where you can change your order details, during which time the order will be in `RECEIVED` state. Once the 10 minutes elapses, the order state will change to `PROCESSING`, and any further attempt to change to your order using the API will fail with a `valid order not found` message.
- When using the **Sandbox** environment, the behavior will be similar, but the window where you can change your order details will only be 1 minute.
:::

**Examples:**

curl

```bash
curl --location --request POST 'https://api.alefedge.com/connectivity/v1/order?Authorization=<API_KEY>' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
"customer_site_id": "<SITE_ID>",
"order_type": "NORMAL_ORDER",
"use_as_shipping_address": false,
"shipping_address": {
    "line1": "address",
    "line2": "address",
    "city": "Beverly Hills",
    "state": "CA",
    "country": "US",
    "postal_code": "90210"
},
"epc_provider": "OPEN5GS"
"pdn_name": "Verizonpdnname",
"create_dedicated_apn": true,
"apn_name": "mmapn_name",
"shipping_contact_detail": {
    "name": "John Doe",
    "contact_number": "+12222384444"
},
"bandwidth": "200Mbps",
"preferred_carrier": "AT&T MPLS",
"access_point_quantity": 2,
"ue_ip_pool": [
    "192.168.1.30/24",
    "192.148.3.10/16"
],
"ip_subnets_for_enb": "192.168.1.30/24",
"esim_quantity": 1,
"sim_quantity": 1
}'
```

Python

```python
import requests
import json

url = "https://api.alefedge.com/connectivity/v1/order?Authorization=<API_KEY>"

payload = json.dumps({
"customer_site_id": "<SITE_ID>",
"order_type": "NORMAL_ORDER",
"use_as_shipping_address": False,
"shipping_address": {
    "line1": "your address",
    "line2": "your address",
    "city": "Beverly Hills",
    "state": "CA",
    "country": "US",
    "postal_code": "90210"
},
"epc_provider": "OPEN5GS"
"pdn_name": "Verizonpdnname",
"create_dedicated_apn": True,
"apn_name": "Verizonapn_name",
"shipping_contact_detail": {
    "name": "John Doe",
    "contact_number": "+1897712345"
},
"bandwidth": "200Mbps",
"preferred_carrier": "AT&T MPLS",
"access_point_quantity": 2,
"ue_ip_pool": [
    "192.168.1.30/24",
    "192.148.3.10/16"
],
"ip_subnets_for_enb": "192.168.1.30/24",
"esim_quantity": 1,
"sim_quantity": 1
})
headers = {
'Content-Type': 'application/json',
'Accept': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
```

Sample response:

```json
{
    "order_id": "62cd181a4321be80df612345",
    "status": "RECEIVED",
    "message": "Order Created",
    "updated_at": "2022-07-12T06:43:38.633Z"
}
```

:::tip
To view your order, use the GET method with the **/connectivity/v1/order** endpoint. 
:::

### Order confirmation and Service provisioning information


You will receive 2 emails around 10 minutes after you place your order:

**Order Details**<br/>
This email will contain links to Zip files containing the inventory details of any physical SIMs you have ordered. The password for these Zip files will be the first 4 digits of your Order ID,and the first 4 digits of your Account ID.

**Service Provisioning**<br/>
This email contains the details of your order, as well as mobile AP (eNodeB) configuration information. You will must use this information to configure your mobile APs connectivity to the EPC:

 - **TAC (Tracking Area Code)** Used with the PLMN to make up  a globally unique tracking identity for the AP
 - **PLMN (Public Land Mobile Network)** Used with the TAC to make up  a globally unique tracking identity for the AP
 - **MME IP** An IP address that your AP will use to connect to the EPC
 - **SGW**  This is not to be confused with the SecGW address (see below). You will not need to configure this on your AP, as the MME will inform the AP of this address, however, the AP will then be communicating with the SGW so you need to ensure this is permitted on your firewalls.

If you are using IPSec to connect to the Alef Edge Point (see [**Edge Point - mobile AP Connectivity Options**](../advanced/#apconn-options), we will also contact you directly with the **Security Gateway (SecGW)** address to configure on your AP. This will be the address of the nearest Alef Edgepoint to the location of the APs.

If you have ordered a private APN, the order will take 15 days. When the order is complete you will receive an email.

### Breakout configuration

When we receive your order we will begin working with your chosen carrier (who you specified in the ``preferred_carrier`` field) to provision network connectivity between the Edge Point and your enterprise site, and route your mobile user traffic back to your network.



## 4. Configure your mobile AP connectivity {#configaps}


Refer to the AP configuration information you received from us, and configure your AP with:

 - **TAC**
 - **PLMN**
 - **MME IP**
 - **SecGW IP** (If you are using IPsec to connect to the Alef Edge Point.)

:::note
We will also send you the SGW IP. You do not need to configure this on your AP, but your AP will communicate with the SGW so you will need to ensure this IP is permitted on your firewalls.
:::


Once your SIMs are installed and the cellular plan is activated, your mobile device is ready to connect to the private edge network. Once the breakout connectivity has been provisioned, your mobile user traffic will be routed from the Alef Edge Point back to your network. 
 

