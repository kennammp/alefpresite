
# Current mobile device status


## Current subscriber device status (IMSI)

curl

```bash
curl --location --request POST 'https://api.alefedge.com/connectivity/v1/report?apikey=<API_KEY>' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
"start_date_time": "NOW",
"end_date_time": "NOW",
"dimensions": [
    "enodeb_ip",
    "ue_ip",
    "lr_id"
],
"dimension_filter_clauses": [
    {
    "filters": [
        {
        "dimension_name": "account_id",
        "operator": "EXACT",
        "expressions": [
            "62c40843c7a190970912345"
        ]
        },
        {
        "dimension_name": "imsi",
        "operator": "EXACT",
        "expressions": [
            "310550000012345"
        ]
        }
    ]
    }
],
"metrics": [
    {
    "name": "ue_online_status",
    "aggregation_type": "EXISTS"
    }
]
}'
```

Python

```python
import requests
import json

url = "https://api.alefedge.com/connectivity/v1/report?apikey=<API_KEY>"

payload = json.dumps({
"start_date_time": "NOW",
"end_date_time": "NOW",
"dimensions": [
    "enodeb_ip",
    "ue_ip",
    "lr_id"
],
"dimension_filter_clauses": [
    {
    "filters": [
        {
        "dimension_name": "account_id",
        "operator": "EXACT",
        "expressions": [
            "62c40843c7a190970912345"
        ]
        },
        {
        "dimension_name": "imsi",
        "operator": "EXACT",
        "expressions": [
            "310550000012345"
        ]
        }
    ]
    }
],
"metrics": [
    {
    "name": "ue_online_status",
    "aggregation_type": "EXISTS"
    }
]
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
    "start_time": "2022-07-12T08:48:20+00:00",
    "end_time": "2022-07-12T08:53:20+00:00",
    "ue_online_status": "YES",
    "enodeb_ip": "172.25.20.1",
    "ue_ip": "10.50.50.2",
    "lr_id": "PP-DSS-31",
    "imsi": "3105500000112345",
    "account_id": "62c40843c7a1909709155555"
}