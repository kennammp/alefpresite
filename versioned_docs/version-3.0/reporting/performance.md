
# Network performance

Network performance reports.

## Real-time network latency


curl

```bash
curl --location --request POST '<DOMAIN>/connectivity/v1/report?apikey=<API Key>' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
"start_date_time": "NOW",
"end_date_time": "NOW",
"dimension_filter_clauses": [
    {
    "filters": [
        {
        "dimension_name": "account_id",
        "operator": "EXACT",
        "expressions": [
            "628f12886f8307435f7b7c59"
        ]
        },
        {
        "dimension_name": "customer_site_id",
        "operator": "EXACT",
        "expressions": [
            "628f18f83076c594f8735f7b"
        ]
        }
    ]
    }
],
"metrics": [
    {
    "name": "packet_latency",
    "aggregation_type": "AVG"
    }
]
}'



Python

```python
import requests
import json

url = "<DOMAIN>/connectivity/v1/report?apikey=<API Key>"

payload = json.dumps({
"start_date_time": "NOW",
"end_date_time": "NOW",
"dimension_filter_clauses": [
    {
    "filters": [
        {
        "dimension_name": "account_id",
        "operator": "EXACT",
        "expressions": [
            "628f12886f8307435f7b7c59"
        ]
        },
        {
        "dimension_name": "customer_site_id",
        "operator": "EXACT",
        "expressions": [
            "628f18f83076c594f8735f7b"
        ]
        }[`
    ]
    }
],
"metrics": [
    {
    "name": "packet_latency",
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
"start_time": "2022-06-22T09:37:45+00:00",
"end_time": "2022-06-22T09:42:45+00:00",
"packet_latency": 0.11,
"customer_site_id": "628f18f83076c594f8735f7b",
"account_id": "62a06a1866a8e6620bcd4bdd",
"lr_id": "PP-AAP-143"
}
```

## Average, minimum and maximum packet latency


curl

```bash
curl --location --request POST '<DOMAIN>/connectivity/v1/report?apikey=<API Key>' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
"start_date_time": "2022-06-22T17:00:00+05:30",
"end_date_time": "2022-06-22T18:00:00+05:30",
"granularity": "HOUR",
"dimension_filter_clauses": [
    {
    "filters": [
        {
        "dimension_name": "account_id",
        "operator": "EXACT",
        "expressions": [
            "62b00f5695c2cd8c530548e5"
        ]
        },
        {
        "dimension_name": "customer_site_id",
        "operator": "EXACT",
        "expressions": [
            "628f12886f8307435f7b7c59"
        ]
        }
    ]
    }
],
"metrics": [
    {
    "name": "packet_latency",
    "aggregation_type": "AVG"
    },
    {
    "name": "packet_latency",
    "aggregation_type": "MIN"
    },
    {
    "name": "packet_latency",
    "aggregation_type": "MAX"
    }
]
}'
```


Python

```python
import requests
import json

url = "<DOMAIN>/connectivity/v1/report?apikey=<API Key>"

payload = json.dumps({
"start_date_time": "2022-06-22T17:00:00+05:30",
"end_date_time": "2022-06-22T18:00:00+05:30",
"granularity": "HOUR",
"dimension_filter_clauses": [
    {
    "filters": [
        {
        "dimension_name": "account_id",
        "operator": "EXACT",
        "expressions": [
            "62b00f5695c2cd8c530548e5"
        ]
        },
        {
        "dimension_name": "customer_site_id",
        "operator": "EXACT",
        "expressions": [
            "628f12886f8307435f7b7c59"
        ]
        }
    ]
    }
],
"metrics": [
    {
    "name": "packet_latency",
    "aggregation_type": "AVG"
    },
    {
    "name": "packet_latency",
    "aggregation_type": "MIN"
    },
    {
    "name": "packet_latency",
    "aggregation_type": "MAX"
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
        "time_stamp": "2022-06-22T16:30:00+05:30",
        "name": "packet_latency",
        "value": 28.13,
        "aggregation_type": "AVG"
    },
    {
        "time_stamp": "2022-06-22T17:30:00+05:30",
        "name": "packet_latency",
        "value": 45.01,
        "aggregation_type": "AVG"
    },
    {
        "time_stamp": "2022-06-22T18:30:00+05:30",
        "name": "packet_latency",
        "value": 36.39,
        "aggregation_type": "AVG"
    }
    ],
    [
    {
        "time_stamp": "2022-06-22T16:30:00+05:30",
        "name": "packet_latency",
        "value": 2.13,
        "aggregation_type": "MIN"
    },
    {
        "time_stamp": "2022-06-22T17:30:00+05:30",
        "name": "packet_latency",
        "value": 4.01,
        "aggregation_type": "MIN"
    },
    {
        "time_stamp": "2022-06-22T18:30:00+05:30",
        "name": "packet_latency",
        "value": 3.39,
        "aggregation_type": "MIN"
    }
    ],
    [
    {
        "time_stamp": "2022-06-22T16:30:00+05:30",
        "name": "packet_latency",
        "value": 38.13,
        "aggregation_type": "MAX"
    },
    {
        "time_stamp": "2022-06-22T17:30:00+05:30",
        "name": "packet_latency",
        "value": 55.01,
        "aggregation_type": "MAX"
    },
    {
        "time_stamp": "2022-06-22T18:30:00+05:30",
        "name": "packet_latency",
        "value": 43.39,
        "aggregation_type": "MAX"
    }
    ]
],
"customer_site_id": "628f12886f8307435f7b7c59",
"account_id": "62a06a1866a8e6620bcd4bdd",
"lr_id": "PP-AAP-143"
}
```



## Real-time network jitter


curl

```bash
curl --location --request POST '<DOMAIN>/connectivity/v1/report?apikey=<API Key>' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
"start_date_time": "NOW",
"end_date_time": "NOW",
"dimensions": [
    "lr_id"
],
"dimension_filter_clauses": [
    {
    "filters": [
        {
        "dimension_name": "account_id",
        "operator": "EXACT",
        "expressions": [
            "628f12886f8307435f7b7c59"
        ]
        },
        {
        "dimension_name": "customer_site_id",
        "operator": "EXACT",
        "expressions": [
            "628f18f83076c594f8735f7b"
        ]
        }
    ]
    }
],
"metrics": [
    {
    "name": "jitter",
    "aggregation_type": "AVG"
    }
]
}'
```


Python

```python
import requests
import json

url = "<DOMAIN>/connectivity/v1/report?apikey=<API Key>"

payload = json.dumps({
"start_date_time": "NOW",
"end_date_time": "NOW",
"dimensions": [
    "lr_id"
],
"dimension_filter_clauses": [
    {
    "filters": [
        {
        "dimension_name": "account_id",
        "operator": "EXACT",
        "expressions": [
            "628f12886f8307435f7b7c59"
        ]
        },
        {
        "dimension_name": "customer_site_id",
        "operator": "EXACT",
        "expressions": [
            "628f18f83076c594f8735f7b"
        ]
        }
    ]
    }
],
"metrics": [
    {
    "name": "jitter",
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
"start_time": "2022-06-22T09:37:45+00:00",
"end_time": "2022-06-22T09:42:45+00:00",
"jitter": 0.19,
"customer_site_id": "628f18f83076c594f8735f7b",
"account_id": "62a06a1866a8e6620bcd4bdd",
"lr_id": "PP-AAP-143"
}
```


## Average, minimum and maximum packet loss



curl

```bash
curl --location --request POST '<DOMAIN>/connectivity/v1/report?apikey=<API Key>' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
"start_date_time": "2022-06-22T17:00:00+05:30",
"end_date_time": "2022-06-22T18:00:00+05:30",
"granularity": "HOUR",
"dimension_filter_clauses": [
    {
    "filters": [
        {
        "dimension_name": "account_id",
        "operator": "EXACT",
        "expressions": [
            "62b00f5695c2cd8c530548e5"
        ]
        },
        {
        "dimension_name": "customer_site_id",
        "operator": "EXACT",
        "expressions": [
            "628f12886f8307435f7b7c59"
        ]
        }
    ]
    }
],
"metrics": [
    {
    "name": "packet_loss",
    "aggregation_type": "AVG"
    },
    {
    "name": "packet_loss",
    "aggregation_type": "MIN"
    },
    {
    "name": "packet_loss",
    "aggregation_type": "MAX"
    }
]
}'
```


Python

```python
import requests
import json

url = "<DOMAIN>/connectivity/v1/report?apikey=<API Key>"

payload = json.dumps({
"start_date_time": "2022-06-22T17:00:00+05:30",
"end_date_time": "2022-06-22T18:00:00+05:30",
"granularity": "HOUR",
"dimension_filter_clauses": [
    {
    "filters": [
        {
        "dimension_name": "account_id",
        "operator": "EXACT",
        "expressions": [
            "62b00f5695c2cd8c530548e5"
        ]
        },
        {
        "dimension_name": "customer_site_id",
        "operator": "EXACT",
        "expressions": [
            "628f12886f8307435f7b7c59"
        ]
        }
    ]
    }
],
"metrics": [
    {
    "name": "packet_loss",
    "aggregation_type": "AVG"
    },
    {
    "name": "packet_loss",
    "aggregation_type": "MIN"
    },
    {
    "name": "packet_loss",
    "aggregation_type": "MAX"
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
        "time_stamp": "2022-06-22T16:30:00+05:30",
        "name": "packet_loss",
        "value": 3.13,
        "aggregation_type": "AVG"
    },
    {
        "time_stamp": "2022-06-22T17:30:00+05:30",
        "name": "packet_loss",
        "value": 4.51,
        "aggregation_type": "AVG"
    },
    {
        "time_stamp": "2022-06-22T18:30:00+05:30",
        "name": "packet_loss",
        "value": 3.79,
        "aggregation_type": "AVG"
    }
    ],
    [
    {
        "time_stamp": "2022-06-22T16:30:00+05:30",
        "name": "packet_loss",
        "value": 2.13,
        "aggregation_type": "MIN"
    },
    {
        "time_stamp": "2022-06-22T17:30:00+05:30",
        "name": "packet_loss",
        "value": 4.01,
        "aggregation_type": "MIN"
    },
    {
        "time_stamp": "2022-06-22T18:30:00+05:30",
        "name": "packet_loss",
        "value": 3.39,
        "aggregation_type": "MIN"
    }
    ],
    [
    {
        "time_stamp": "2022-06-22T16:30:00+05:30",
        "name": "packet_loss",
        "value": 8.13,
        "aggregation_type": "MAX"
    },
    {
        "time_stamp": "2022-06-22T17:30:00+05:30",
        "name": "packet_loss",
        "value": 5.01,
        "aggregation_type": "MAX"
    },
    {
        "time_stamp": "2022-06-22T18:30:00+05:30",
        "name": "packet_loss",
        "value": 3.39,
        "aggregation_type": "MAX"
    }
    ]
],
"customer_site_id": "628f12886f8307435f7b7c59",
"account_id": "62a06a1866a8e6620bcd4bdd"
}
```

## Real-time packet loss



curl

```bash
curl --location --request POST '<DOMAIN>/connectivity/v1/report?apikey=<API Key>' \
        --header 'Content-Type: application/json' \
        --header 'Accept: application/json' \
        --data-raw '{
        "start_date_time": "NOW",
        "end_date_time": "NOW",
        "dimension_filter_clauses": [
            {
            "filters": [
                {
                "dimension_name": "account_id",
                "operator": "EXACT",
                "expressions": [
                    "62b00f5695c2cd8c530548e5"
                ]
                },
                {
                "dimension_name": "customer_site_id",
                "operator": "EXACT",
                "expressions": [
                    "628f12886f8307435f7b7c59"
                ]
                }
            ]
            }
        ],
        "metrics": [
            {
            "name": "packet_loss",
            "aggregation_type": "AVG"
            }
        ]
        }'
```

Python

```python
import requests
import json

url = "<DOMAIN>/connectivity/v1/report?apikey=<API Key>"

payload = json.dumps({
"start_date_time": "NOW",
"end_date_time": "NOW",
"dimension_filter_clauses": [
    {
    "filters": [
        {
        "dimension_name": "account_id",
        "operator": "EXACT",
        "expressions": [
            "62b00f5695c2cd8c530548e5"
        ]
        },
        {
        "dimension_name": "customer_site_id",
        "operator": "EXACT",
        "expressions": [
            "628f12886f8307435f7b7c59"
        ]
        }
    ]
    }
],
"metrics": [
    {
    "name": "packet_loss",
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
"start_time": "2022-06-22T09:37:45+00:00",
"end_time": "2022-06-22T09:42:45+00:00",
"packet_loss": 50,
"customer_site_id": "628f18f83076c594f8735f7b",
"account_id": "62a06a1866a8e6620bcd4bdd"
}
```
