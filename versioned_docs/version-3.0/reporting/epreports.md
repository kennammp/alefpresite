# Edge Point Reports


The following ``metric`` and ``dimension`` combinations are possible for Edge Point reports

*Metrics*

 - ``customer_vlan_breakout_egress_bytes``
 - ``customer_vlan_breakout_egress_packets``
 - ``customer_vlan_breakout_ingress_bytes``
 - ``customer_vlan_breakout_ingress_packets``
 - ``customer_vlan_ran_egress_bytes``
 - ``customer_vlan_ran_egress_packets``
 - ``customer_vlan_ran_ingress_bytes``
 - ``customer_vlan_ran_ingress_packets``

*Dimensions*
 - ``customer_name``
 - ``device`` (Edge Point)

## Examples



### User data traffic egressing Edge Point towards customer network in bytes

```curl
curl --request POST \
  --url 'https://api.dev.alefedge.com/connectivity/v2/report?Authorization=SI8v9KHJmDF3jCRmxxxxxxxxxxxxxxx' \
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
          "dimension_name": "customer_name",
          "operator": "EXACT",
          "expressions": [
            "upp1"
          ]
        }
      ]
    }
  ],
  "metrics": [
    {
      "name": "customer_vlan_breakout_egress_bytes",
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
        "value": 23452,
        "name": "customer_vlan_breakout_egress_bytes",
        "aggregation_type": "COUNT"
      },
      {
        "time_stamp": "2023-10-27T20:19:19-04:00",
        "value": 48374,
        "name": "customer_vlan_breakout_egress_bytes",
        "aggregation_type": "COUNT"
      }
    ]
  ],
  "customer_name": "upp1",
  "account_id": ""
}
```


### Mobile AP traffic egressing Edge Point in bytes 

```curl
curl --request POST \
  --url 'https://api.dev.alefedge.com/connectivity/v2/report?Authorization=SI8v9KHJmDF3jCRmxxxxxxxxxxxxxxx' \
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
          "dimension_name": "customer_name",
          "operator": "EXACT",
          "expressions": [
            "upp1"
          ]
        }
      ]
    }
  ],
  "metrics": [
    {
      "name": "customer_vlan_ran_egress_bytes",
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
        "value": 84738,
        "name": "customer_vlan_ran_egress_bytes",
        "aggregation_type": "COUNT"
      },
      {
        "time_stamp": "2023-10-27T20:19:19-04:00",
        "value": 48394,
        "name": "customer_vlan_ran_egress_bytes",
        "aggregation_type": "COUNT"
      }
    ]
  ],
  "customer_name": "upp1",
  "account_id": ""
}
```