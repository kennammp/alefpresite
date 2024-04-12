# Time, bandwidth or byte counts



## Time usage for enterprise


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
            "62c40843c7a1909709112345"
        ]
        }
    ]
    }
],
"metrics": [
    {
    "name": "time_usage_seconds",
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
    "name": "time_usage_seconds",
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
                "name": "time_usage_seconds",
                "value": 23933.017647058823,
                "aggregation_type": "COUNT"
            },
            {
                "time_stamp": "2022-07-08T05:30:00+05:30",
                "name": "time_usage_seconds",
                "value": 39650,
                "aggregation_type": "COUNT"
            },
            {
                "time_stamp": "2022-07-09T05:30:00+05:30",
                "name": "time_usage_seconds",
                "value": 32366,
                "aggregation_type": "COUNT"
            }
        ]
    ],
    "account_id": "62c40843c7a190970912345"
}
```

## Time usage for mobile subscriber (MSISDN)


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
    "msisdn"
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
        "dimension_name": "msisdn",
        "operator": "EXACT",
        "expressions": [
            8020010012345
        ]
        }
    ]
    }
],
"metrics": [
    {
    "name": "time_usage_seconds",
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
    "msisdn"
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
        "dimension_name": "msisdn",
        "operator": "EXACT",
        "expressions": [
            8020010012345
        ]
        }
    ]
    }
],
"metrics": [
    {
    "name": "time_usage_seconds",
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
                "name": "time_usage_seconds",
                "value": 23933.017647058823,
                "aggregation_type": "COUNT"
            },
            {
                "time_stamp": "2022-07-08T05:30:00+05:30",
                "name": "time_usage_seconds",
                "value": 39650,
                "aggregation_type": "COUNT"
            },
            {
                "time_stamp": "2022-07-09T05:30:00+05:30",
                "name": "time_usage_seconds",
                "value": 32366,
                "aggregation_type": "COUNT"
            }
        ]
    ],
    "msisdn": 8020010012345,
    "account_id": "62c40843c7a190970912345"
}
```

## Daily and Monthly Usage for mobile subscriber (MSISDN) in bytes


curl

```bash
curl --location --request POST 'https://api.alefedge.com/connectivity/v1/report?apikey=<API_KEY>' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
"start_date_time": "2022-07-07T09:50:00+05:30",
"end_date_time": "2022-07-08T09:50:00+05:30",
"granularity": "HOUR",
"dimensions": [
    "msisdn"
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
        "dimension_name": "msisdn",
        "operator": "EXACT",
        "expressions": [
            8020010012345
        ]
        }
    ]
    }
],
"metrics": [
    {
    "name": "uplink_bytes",
    "aggregation_type": "COUNT"
    },
    {
    "name": "downlink_bytes",
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
"granularity": "HOUR",
"dimensions": [
    "msisdn"
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
        "dimension_name": "msisdn",
        "operator": "EXACT",
        "expressions": [
            8020010012345
        ]
        }
    ]
    }
],
"metrics": [
    {
    "name": "uplink_bytes",
    "aggregation_type": "COUNT"
    },
    {
    "name": "downlink_bytes",
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
                "time_stamp": "2022-07-07T09:30:00+05:30",
                "name": "uplink_bytes",
                "value": 73130,
                "aggregation_type": "COUNT"
            },
            {
                "time_stamp": "2022-07-07T10:30:00+05:30",
                "name": "uplink_bytes",
                "value": 73954,
                "aggregation_type": "COUNT"
            },
            {
                "time_stamp": "2022-07-07T11:30:00+05:30",
                "name": "uplink_bytes",
                "value": 22196.5,
                "aggregation_type": "COUNT"
            },
            {
                "time_stamp": "2022-07-07T12:30:00+05:30",
                "name": "uplink_bytes",
                "value": 73748,
                "aggregation_type": "COUNT"
            },

… Output removed for brevity

        {
                "time_stamp": "2022-07-08T10:30:00+05:30",
                "name": "downlink_bytes",
                "value": 2991011980,
                "aggregation_type": "COUNT"
            }
        ]
    ],
    "msisdn": 8020010012345,
    "account_id": "62c40843c7a190970912345"
}
```



## Real-time Network Bandwidth


curl

```bash
curl --location --request POST 'https://api.alefedge.com/connectivity/v1/report?apikey=<API_KEY>' \
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
    "name": "uplink_bandwidth",
    "aggregation_type": "AVG"
    },
    {
    "name": "downlink_bandwidth",
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
"start_date_time": "NOW",
"end_date_time": "NOW",
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
    "name": "uplink_bandwidth",
    "aggregation_type": "AVG"
    },
    {
    "name": "downlink_bandwidth",
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
    "start_time": "2022-07-12T09:08:48+00:00",
    "end_time": "2022-07-12T09:13:48+00:00",
    "downlink_bandwidth": 283.9409664,
    "uplink_bandwidth": 4.1809904,
    "customer_site_id": "62c408aaadd8f757bf412345",
    "account_id": "62c40843c7a190970912345"
}
```

## Monthly Bandwidth Usage


curl

```bash
curl --location --request POST 'https://api.alefedge.com/connectivity/v1/report?apikey=<API_KEY>' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
"start_date_time": "2022-07-11T14:40:00+05:30",
"end_date_time": "2022-08-11T14:40:00+05:30",
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
    "name": "uplink_bandwidth",
    "metric_filter_clauses": [
        {
        "filters": [
            {
            "operator": "PERCENTILE",
            "comparison_value": 1
            }
        ]
        }
    ]
    },
    {
    "name": "downlink_bandwidth",
    "metric_filter_clauses": [
        {
        "filters": [
            {
            "operator": "PERCENTILE",
            "comparison_value": 1
            }
        ]
        }
    ]
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
"start_date_time": "2022-07-11T14:40:00+05:30",
"end_date_time": "2022-08-11T14:40:00+05:30",
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
    "name": "uplink_bandwidth",
    "metric_filter_clauses": [
        {
        "filters": [
            {
            "operator": "PERCENTILE",
            "comparison_value": 1
            }
        ]
        }
    ]
    },
    {
    "name": "downlink_bandwidth",
    "metric_filter_clauses": [
        {
        "filters": [
            {
            "operator": "PERCENTILE",
            "comparison_value": 1
            }
        ]
        }
    ]
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
                "time_stamp": "2022-07-12T00:25:00+05:30",
                "name": "uplink_bandwidth",
                "value": 0.0003111608391608391
            },
            {
                "time_stamp": "2022-07-11T16:00:00+05:30",
                "name": "uplink_bandwidth",
                "value": 0.00034236619718309855
            },
            {
                "time_stamp": "2022-07-12T12:25:00+05:30",
                "name": "uplink_bandwidth",
                "value": 0.00034236619718309855
            },
            {
                "time_stamp": "2022-07-11T18:45:00+05:30",
                "name": "uplink_bandwidth",
                "value": 0.00034285314685314684
            },

... Output removed for brevity

            },
            {
                "time_stamp": "2022-07-12T14:40:00+05:30",
                "name": "downlink_bandwidth",
                "value": 319.57010848351644
            }
        ]
    ],
    "customer_site_id": "62c408aaadd8f757bf412345",
    "account_id": "62c40843c7a190970912345"
}
}
```


## Maximum network bandwidth by IMSI


curl

```bash
curl -X 'POST' \
'<DOMAIN>/connectivity/v1/report?apikey=<API_KEY>' \
-H 'accept: application/json' \
-H 'Content-Type: application/json' \
-d '{
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
        "dimension_name": "imsi",
        "operator": "EXACT",
        "expressions": [
            310550000010232
        ]
        }
    ]
    }
],
"metrics": [
    {
    "name": "uplink_bandwidth",
    "aggregation_type": "MAX"
    },
    {
    "name": "downlink_bandwidth",
    "aggregation_type": "MAX"
    }
]
}'
```

Python

```python
import requests
import json

url = "<DOMAIN>/connectivity/v1/report?apikey=<API_KEY>"

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
        "dimension_name": "imsi",
        "operator": "EXACT",
        "expressions": [
            310550000010232
        ]
        }
    ]
    }
],
"metrics": [
    {
    "name": "uplink_bandwidth",
    "aggregation_type": "MAX"
    },
    {
    "name": "downlink_bandwidth",
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
"start_time": "2022-06-22T09:37:45+00:00",
"end_time": "2022-06-22T09:42:45+00:00",
"downlink_bandwidth": 3.11,
"uplink_bandwidth": 4.89,
"imsi": 310550000010232,
"account_id": "62a06a1866a8e6620bcd4bdd"
}
```

## Maximum network bandwidth by MSISDN


curl

```bash
curl -X 'POST' \
'<DOMAIN>/connectivity/v1/report?apikey=<API_KEY>' \
-H 'accept: application/json' \
-H 'Content-Type: application/json' \
-d '{
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
        "dimension_name": "msisdn",
        "operator": "EXACT",
        "expressions": [
            8120012300987
        ]
        }
    ]
    }
],
"metrics": [
    {
    "name": "uplink_bandwidth",
    "aggregation_type": "MAX"
    },
    {
    "name": "downlink_bandwidth",
    "aggregation_type": "MAX"
    }
]
}'
```

Python

```python
import requests
import json

url = "<DOMAIN>/connectivity/v1/report?apikey=<API_KEY>"

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
        "dimension_name": "msisdn",
        "operator": "EXACT",
        "expressions": [
            8120012300987
        ]
        }
    ]
    }
],
"metrics": [
    {
    "name": "uplink_bandwidth",
    "aggregation_type": "MAX"
    },
    {
    "name": "downlink_bandwidth",
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
"start_time": "2022-06-22T09:37:45+00:00",
"end_time": "2022-06-22T09:42:45+00:00",
"downlink_bandwidth": 3.11,
"uplink_bandwidth": 4.89,
"msisdn": 8120012300987,
"account_id": "62a06a1866a8e6620bcd4bdd"
}
```

## Average, minimum and maximum network bandwidth


curl

```bash
curl -X 'POST' \
'<DOMAIN>/connectivity/v1/report?apikey=<API_KEY>' \
-H 'accept: application/json' \
-H 'Content-Type: application/json' \
-d '{
"start_date_time": "2022-06-22T15:30:00+05:30",
"end_date_time": "2022-06-22T18:30:00+05:30",
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
    "name": "uplink_bandwidth",
    "aggregation_type": "AVG"
    },
    {
    "name": "downlink_bandwidth",
    "aggregation_type": "AVG"
    },
    {
    "name": "uplink_bandwidth",
    "aggregation_type": "MIN"
    },
    {
    "name": "downlink_bandwidth",
    "aggregation_type": "MIN"
    },
    {
    "name": "uplink_bandwidth",
    "aggregation_type": "MAX"
    },
    {
    "name": "downlink_bandwidth",
    "aggregation_type": "MAX"
    }
]
}'
```


Python

```python
import requests
import json

url = "<DOMAIN>/connectivity/v1/report?apikey=<API_KEY>"

payload = json.dumps({
"start_date_time": "2022-06-22T15:30:00+05:30",
"end_date_time": "2022-06-22T18:30:00+05:30",
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
    "name": "uplink_bandwidth",
    "aggregation_type": "AVG"
    },
    {
    "name": "downlink_bandwidth",
    "aggregation_type": "AVG"
    },
    {
    "name": "uplink_bandwidth",
    "aggregation_type": "MIN"
    },
    {
    "name": "downlink_bandwidth",
    "aggregation_type": "MIN"
    },
    {
    "name": "uplink_bandwidth",
    "aggregation_type": "MAX"
    },
    {
    "name": "downlink_bandwidth",
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
            "name": "downlink_bandwidth",
            "value": 280894.13,
            "aggregation_type": "AVG"
        },
        {
            "time_stamp": "2022-06-22T17:30:00+05:30",
            "name": "downlink_bandwidth",
            "value": 4578.01,
            "aggregation_type": "AVG"
        },
        {
            "time_stamp": "2022-06-22T18:30:00+05:30",
            "name": "downlink_bandwidth",
            "value": 3673.39,
            "aggregation_type": "AVG"
        }
    ],
    [
        {
            "time_stamp": "2022-06-22T16:30:00+05:30",
            "name": "uplink_bandwidth",
            "value": 322238.82,
            "aggregation_type": "AVG"
        },
        {
            "time_stamp": "2022-06-22T17:30:00+05:30",
            "name": "uplink_bandwidth",
            "value": 7025.94,
            "aggregation_type": "AVG"
        },
        {
            "time_stamp": "2022-06-22T18:30:00+05:30",
            "name": "uplink_bandwidth",
            "value": 6452.01,
            "aggregation_type": "AVG"
        }
    ],
    [
        {
            "time_stamp": "2022-06-22T16:30:00+05:30",
            "name": "downlink_bandwidth",
            "value": 28089.13,
            "aggregation_type": "MIN"
        },
        {
            "time_stamp": "2022-06-22T17:30:00+05:30",
            "name": "downlink_bandwidth",
            "value": 457.01,
            "aggregation_type": "MIN"
        },
        {
            "time_stamp": "2022-06-22T18:30:00+05:30",
            "name": "downlink_bandwidth",
            "value": 367.39,
            "aggregation_type": "MIN"
        }
    ],
    [
        {
            "time_stamp": "2022-06-22T16:30:00+05:30",
            "name": "uplink_bandwidth",
            "value": 32223.82,
            "aggregation_type": "MIN"
        },
        {
            "time_stamp": "2022-06-22T17:30:00+05:30",
            "name": "uplink_bandwidth",
            "value": 702.94,
            "aggregation_type": "MIN"
        },
        {
            "time_stamp": "2022-06-22T18:30:00+05:30",
            "name": "uplink_bandwidth",
            "value": 645.01,
            "aggregation_type": "MIN"
        }
    ],
    [
        {
            "time_stamp": "2022-06-22T16:30:00+05:30",
            "name": "downlink_bandwidth",
            "value": 380894.13,
            "aggregation_type": "MAX"
        },
        {
            "time_stamp": "2022-06-22T17:30:00+05:30",
            "name": "downlink_bandwidth",
            "value": 5578.01,
            "aggregation_type": "MAX"
        },
        {
            "time_stamp": "2022-06-22T18:30:00+05:30",
            "name": "downlink_bandwidth",
            "value": 4673.39,
            "aggregation_type": "MAX"
        }
    ],
    [
        {
            "time_stamp": "2022-06-22T16:30:00+05:30",
            "name": "uplink_bandwidth",
            "value": 422238.82,
            "aggregation_type": "MAX"
        },
        {
            "time_stamp": "2022-06-22T17:30:00+05:30",
            "name": "uplink_bandwidth",
            "value": 8025.94,
            "aggregation_type": "MAX"
        },
        {
            "time_stamp": "2022-06-22T18:30:00+05:30",
            "name": "uplink_bandwidth",
            "value": 7452.01,
            "aggregation_type": "MAX"
        }
    ]
],
"customer_site_id": "628f12886f8307435f7b7c59",
"account_id": "62a06a1866a8e6620bcd4bdd"
}
```