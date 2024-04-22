
# Mobile device, user or SIM counts



## Average and Peak Active mobile device (UE) connections


curl

```bash
curl --location --request POST 'https://api.alefedge.com/connectivity/v1/report?apikey=<API_KEY>' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
"start_date_time": "2022-07-11T11:26:00+05:30",
"end_date_time": "2022-07-11T12:26:00+05:30",
"granularity": "HOUR",
"dimension_filter_clauses": [
    {
    "filters": [
        {
        "dimension_name": "account_id",
        "operator": "EXACT",
        "expressions": [
            "62c40843c7a190970912345"
        ]
        }
    ]
    }
],
"metrics": [
    {
    "name": "ue_connections",
    "aggregation_type": "MAX"
    },
    {
    "name": "ue_connections",
    "aggregation_type": "AVG"
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
"start_date_time": "2022-07-11T11:26:00+05:30",
"end_date_time": "2022-07-11T12:26:00+05:30",
"granularity": "HOUR",
"dimension_filter_clauses": [
    {
    "filters": [
        {
        "dimension_name": "account_id",
        "operator": "EXACT",
        "expressions": [
            "62c40843c7a190970912345"
        ]
        }
    ]
    }
],
"metrics": [
    {
    "name": "ue_connections",
    "aggregation_type": "MAX"
    },
    {
    "name": "ue_connections",
    "aggregation_type": "AVG"
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
    "result": [
        [
            {
                "time_stamp": "2022-07-11T10:30:00+05:30",
                "name": "ue_connections",
                "value": 1,
                "aggregation_type": "AVG"
            },
            {
                "time_stamp": "2022-07-11T11:30:00+05:30",
                "name": "ue_connections",
                "value": 1,
                "aggregation_type": "AVG"
            },
            {
                "time_stamp": "2022-07-11T12:30:00+05:30",
                "name": "ue_connections",
                "value": 1,
                "aggregation_type": "AVG"
            }
        ],
        [
            {
                "time_stamp": "2022-07-11T10:30:00+05:30",
                "name": "ue_connections",
                "value": 1,
                "aggregation_type": "MAX"
            },
            {
                "time_stamp": "2022-07-11T11:30:00+05:30",
                "name": "ue_connections",
                "value": 2,
                "aggregation_type": "MAX"
            },
            {
                "time_stamp": "2022-07-11T12:30:00+05:30",
                "name": "ue_connections",
                "value": 1,
                "aggregation_type": "MAX"
            }
        ]
    ],
    "account_id": "62c40843c7a190970912345"
}
```

## Active SIM count

curl:

```bash
curl --location --request POST 'https://api.alefedge.com/connectivity/v1/report?apikey=<API_KEY>' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
"start_date_time": "2022-07-07T09:50:00+05:30",
"end_date_time": "2022-07-08T09:50:00+05:30",
"dimension_filter_clauses": [
    {
    "filters": [
        {
        "dimension_name": "account_id",
        "operator": "EXACT",
        "expressions": [
            "62c40843c7a190970912345"
        ]
        }
    ]
    }
],
"metrics": [
    {
    "name": "sim",
    "aggregation_type": "COUNT"
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
"start_date_time": "2022-07-07T09:50:00+05:30",
"end_date_time": "2022-07-08T09:50:00+05:30",
"dimension_filter_clauses": [
    {
    "filters": [
        {
        "dimension_name": "account_id",
        "operator": "EXACT",
        "expressions": [
            "62c40843c7a190970912345"
        ]
        }
    ]
    }
],
"metrics": [
    {
    "name": "sim",
    "aggregation_type": "COUNT"
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
[
    {
        "date": "07-07-2022",
        "physical": 1,
        "esim": 1
    },
    {
        "date": "08-07-2022",
        "physical": 1,
        "esim": 1
    }
]
```

## Successful mobile device (UE) Connection Establishment for Subscriber (IMSI)


curl

```bash
curl --location --request POST 'https://api.alefedge.com/connectivity/v1/report?apikey=<API_KEY>' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
"start_date_time": "2022-07-07T09:50:00+05:30",
"end_date_time": "2022-07-08T09:50:00+05:30",
"granularity": "DAY",
"dimensions": [
    "imsi"
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
            310550000012345
        ]
        }
    ]
    }
],
"metrics": [
    {
    "name": "ue_connections",
    "aggregation_type": "COUNT"
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
"start_date_time": "2022-07-07T09:50:00+05:30",
"end_date_time": "2022-07-08T09:50:00+05:30",
"granularity": "DAY",
"dimensions": [
    "imsi"
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
            310550000012345
        ]
        }
    ]
    }
],
"metrics": [
    {
    "name": "ue_connections",
    "aggregation_type": "COUNT"
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
    "result": [
        [
            {
                "time_stamp": "2022-07-07T05:30:00+05:30",
                "name": "ue_connections",
                "value": 11,
                "aggregation_type": "COUNT"
            },
            {
                "time_stamp": "2022-07-08T05:30:00+05:30",
                "name": "ue_connections",
                "value": 3,
                "aggregation_type": "COUNT"
            },
            {
                "time_stamp": "2022-07-09T05:30:00+05:30",
                "name": "ue_connections",
                "value": 10,
                "aggregation_type": "COUNT"
            }
        ]
    ],
    "imsi": 310550000012345,
    "account_id": "62c40843c7a190970912345"
}
```



## Successful mobile device (UE) Connection Establishment for Enterprise

curl

```bash
curl --location --request POST 'https://api.alefedge.com/connectivity/v1/report?apikey=<API_KEY>' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
"start_date_time": "2022-07-07T09:50:00+05:30",
"end_date_time": "2022-07-08T09:50:00+05:30",
"granularity": "DAY",
"dimension_filter_clauses": [
    {
    "filters": [
        {
        "dimension_name": "account_id",
        "operator": "EXACT",
        "expressions": [
            "62c40843c7a190970912345"
        ]
        }
    ]
    }
],
"metrics": [
    {
    "name": "ue_connections",
    "aggregation_type": "COUNT"
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
"start_date_time": "2022-07-07T09:50:00+05:30",
"end_date_time": "2022-07-08T09:50:00+05:30",
"granularity": "DAY",
"dimension_filter_clauses": [
    {
    "filters": [
        {
        "dimension_name": "account_id",
        "operator": "EXACT",
        "expressions": [
            "62c40843c7a190970912345"
        ]
        }
    ]
    }
],
"metrics": [
    {
    "name": "ue_connections",
    "aggregation_type": "COUNT"
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

```bash
{
    "result": [
        [
            {
                "time_stamp": "2022-07-07T05:30:00+05:30",
                "name": "ue_connections",
                "value": 11,
                "aggregation_type": "COUNT"
            },
            {
                "time_stamp": "2022-07-08T05:30:00+05:30",
                "name": "ue_connections",
                "value": 3,
                "aggregation_type": "COUNT"
            },
            {
                "time_stamp": "2022-07-09T05:30:00+05:30",
                "name": "ue_connections",
                "value": 10,
                "aggregation_type": "COUNT"
            }
        ]
    ],
    "account_id": "62c40843c7a190970912345"
}
```

## Concurrent Online mobile device (UE) Connections


curl

```bash
curl --location --request POST 'https://api.alefedge.com/connectivity/v1/report?apikey=<API_KEY>' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
"start_date_time": "NOW",
"end_date_time": "NOW",
"dimensions": [
    "customer_site_id"
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
        "dimension_name": "customer_site_id",
        "operator": "EXACT",
        "expressions": [
            "62c408aaadd8f757bf412345"
        ]
        }
    ]
    }
],
"metrics": [
    {
    "name": "ue_connections",
    "aggregation_type": "COUNT"
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
    "customer_site_id"
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
        "dimension_name": "customer_site_id",
        "operator": "EXACT",
        "expressions": [
            "62c408aaadd8f757bf412345"
        ]
        }
    ]
    }
],
"metrics": [
    {
    "name": "ue_connections",
    "aggregation_type": "COUNT"
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
    "start_time": "2022-07-12T08:58:31+00:00",
    "end_time": "2022-07-12T09:03:31+00:00",
    "ue_connections": 1,
    "customer_site_id": "62c408aaadd8f757bf412345",
    "account_id": "62c40843c7a190970912345"
}
```