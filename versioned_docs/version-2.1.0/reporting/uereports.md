# Mobile Device (UE) Reports

The following ``metric`` and ``dimension`` combinations are possible for Mobile Device (UE) reports.


*Metrics*

 - ``downlink_bandwidth_usage``  (Bandwidth usage from the customer data network to the UE)
 - ``uplink_bandwidth_usage``   (Bandwidth usage from the UE to the customer data network)
 - ``ue_session_duration_seconds``
 - ``ue_session_downlink_bytes``
 - ``ue_session_downlink_packet``
 - ``ue_session_uplink_bytes``
 - ``ue_session_uplink_packets``
 - ``ue_connections``
 - ``ue_online_status``

:::info

If the above reports are used with ``customer_id``, ``device``, or ``enb_ip`` dimension, in most cases the response will be the data for a single UE within that dimension, *not* for that dimension as a whole. For instance, a ``ue_session_downlink_bytes`` report requesting MAX for a ``device`` (the device being an Edge Point) will return the downlink bytes of the top talking UE connected to that Edge Point for each time period (as specified by ``granularity``) during the time window. The exception is where the ``COUNT`` aggregator is used, in which case the result will be the total count for all UEs in each time period.

:::

*Dimensions*
 - ``customer_id``
 - ``device`` (Edge Point)
 - ``enb_ip`` (Mobile Access Point IP)
 - ``seid`` (Session ID)
 - ``ue_ip``

## Examples

### UE Session Duration in seconds 

```curl
curl --request POST \
  --url 'https://api.dev.alefedge.com/connectivity/v2/report?Authorization=SI8v9KHJmDF3jCRmxxxxxxxxxxxxx' \
  --header 'accept: application/json' \
  --header 'content-type: application/json' \
  --data '{
  "start_date_time": "2023-10-27T19:19:19-04:00",
  "end_date_time": "2023-10-27T20:19:19-04:00",
  "granularity": "HOUR",
  "dimension_filter_clauses": [
    {
      "filters": [
        {
          "dimension_name": "account_id",
          "operator": "EXACT",
          "expressions": [
            "00000000000000000000000000000001"
          ]
        }
      ]
    }
  ],
  "metrics": [
    {
      "name": "ue_session_duration_seconds",
      "aggregation_type": "COUNT"
    }
  ]
}'
```

*Response*

```
{
  "result": [
    [
      {
        "time_stamp": "2023-10-27T20:00:00-04:00",
        "value": 0,
        "name": "ue_session_duration_seconds",
        "aggregation_type": "COUNT"
      },
      {
        "time_stamp": "2023-10-27T20:19:19-04:00",
        "value": 0,
        "name": "ue_session_duration_seconds",
        "aggregation_type": "COUNT"
      }
    ]
  ],
  "account_id": "00000000000000000000000000000001"
}
```


### MAX UE downlink usage in bytes

```
curl --request POST \
--url 'https://api.dev.alefedge.com/connectivity/v2/report?Authorization=SI8v9KHJmDF3jCRmxxxxxxxxxxxxxxxxxx' \
--header 'accept: application/json' \
--header 'content-type: application/json' \
--data '{
  "start_date_time": "2023-11-27T19:19:19-04:00",
  "end_date_time": "2023-11-27T20:19:19-04:00",
  "granularity": "HOUR",
  "dimension_filter_clauses": [
    {
      "filters": [
        {
          "dimension_name": "account_id",
          "operator": "EXACT",
          "expressions": [
            "00000000000000000000000000000001"
          ]
        }
      ]
    }
  ],
  "metrics": [
    {
      "name": "ue_session_downlink_bytes",
      "aggregation_type": "MAX"
    }
  ]
}'
```

*Response*

```
{
  "result": [
    [
      {
        "time_stamp": "2023-11-27T20:00:00-04:00",
        "value": 100557,
        "name": "ue_session_downlink_bytes",
        "aggregation_type": "MAX"
      },
      {
        "time_stamp": "2023-11-27T20:19:19-04:00",
        "value": 130051,
        "name": "ue_session_downlink_bytes",
        "aggregation_type": "MAX"
      }
    ]
  ],
  "account_id": "00000000000000000000000000000001"
}
```


### UE connections

```curl
curl --request POST \
  --url 'https://api.dev.alefedge.com/connectivity/v2/report?Authorization=SI8v9KHJmDF3jCRmxxxxxxxxxxxxxx' \
  --header 'accept: application/json' \
  --header 'content-type: application/json' \
  --data '{
    "start_date_time": "2023-10-27T19:19:19-04:00",
    "end_date_time": "2023-10-27T20:19:19-04:00",
    "granularity": "HOUR",
    "dimension_filter_clauses": [
      {
        "filters": [
          {
            "dimension_name": "account_id",
            "operator": "EXACT",
            "expressions": [
              "00000000000000000000000000000001"
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

*Response*

```
  {
  "result": [
    [
      {
        "time_stamp": "2023-10-27T20:00:00-04:00",
        "value": 23,
        "name": "ue_connections",
        "aggregation_type": "COUNT"
      },
      {
        "time_stamp": "2023-10-27T20:19:19-04:00",
        "value": 25,
        "name": "ue_connections",
        "aggregation_type": "COUNT"
      }
    ]
  ],
  "account_id": "00000000000000000000000000000001"
}
```


### UE Online status

```
curl --request POST \
--url 'https://api.dev.alefedge.com/connectivity/v2/report?Authorization=SI8v9KHJmDF3jCRmxxxxxxxxxxxxxxxxxx' \
--header 'accept: application/json' \
--header 'content-type: application/json' \
--data '{
  "start_date_time": "2023-11-27T19:19:19-04:00",
  "end_date_time": "2023-11-27T20:19:19-04:00",
  "granularity": "HOUR",
  "dimension_filter_clauses": [
    {
      "filters": [
        {
          "dimension_name": "account_id",
          "operator": "EXACT",
          "expressions": [
            "00000000000000000000000000000001"
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

*Result*

```
{
  "result": [
    [
      {
        "time_stamp": "2023-11-27T20:00:00-04:00",
        "value": 1,
        "name": "ue_online_status",
        "aggregation_type": "EXISTS"
      },
      {
        "time_stamp": "2023-11-27T20:19:19-04:00",
        "value": 1,
        "name": "ue_online_status",
        "aggregation_type": "EXISTS"
      }
    ]
  ],
  "enb_ip": "10.159.8.146",
  "ue_ip": "10.50.50.2",
  "lr_id": "NONE",
  "account_id": "00000000000000000000000000000001"
}
```

