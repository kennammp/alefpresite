
# Working with reports

This section provides examples in curl and python of how to use the [**Reporting API**](https://app.swaggerhub.com/apis-docs/MMCKENN72_1/reporting/1.0.0-oas3) to generate reports according to your preferences. You can define time window, granularity, metric, aggregation type, and apply a range of filter dimensions. 

When creating a report you will:

 - Define the time window.
 - Specify granularity, which is the time interval between data points.
 - Define your filters with the ``dimensions`` object, and the ``dimension_filter_clauses`` object which will contain an array of ``filter`` objects.
 - Request metrics such as connections, time usage, and data usage with the ``metrics`` object.
 - Use ``aggregation_type`` to choose which data within the raw report data you want to see.


:::tip
The example scripts in this section give a response in json format, however you can get responses in csv format with ``--header 'Accept: text/csv'``.
:::

<br/>

## Time windows

Some of the reports below require you to specify the time window over which to run the report.

The time window is set with ``start_date_time`` and ``end_date_time``. You can either specify actual times and dates, in the format ``YYYY-MM-DDTHH:mm:ss``, or request a set time block with ``LAST HOUR``, ``LAST DAY``, ``LAST WEEK``, ``LAST MONTH`` or ``NOW`` (returns the last 5 minutes). 

If you are requesting a set time block, this must be configured in both ``start_date_time`` and ``end_date_time``, for example:

```bash
"start_date_time": "LAST HOUR",
"end_date_time": "LAST HOUR",
```

You can also specify the data point frequency in your report with the ``granularity`` parameter, which can be ``HOUR`` or ``DAY`` (default is ``HOUR``).


## Dimensions and metrics

As mentioned above, you will request a report ``metric``, and filter it with ``dimensions``. Our reports are grouped into mobile device or 'UE' reports, and Edge Point reports. Refer to the [**Mobile Device (UE) Reports**](uereports) and [**Edge Point Reports**](epreports) sections for more details.

## Aggregation types

A report will gather many data points, and you decide which specific data you are interested in by defining the ``aggregation_type``. This may be a single data point, such as ``MAX`` or ``MIN``, or a calculation derived from multiple data points, such as ``AVG``.

Supported aggregation types are:
 - ``EXISTS`` (for status reports)
 - ``COUNT`` (sum of data points)
 - ``MAX`` 
 - ``MIN``
 - ``AVG`` 

Different ``metrics`` support different ``aggregation_types``:

**``ue_online_status``:** 
  - ``EXISTS``

**``ue_connections``:**
 - ``COUNT`` 
 - ``MAX`` 
 - ``AVG``

**All other metrics:**
 - ``COUNT``
 - ``MAX``
 - ``MIN``
 - ``AVG``




<!--

## Bandwidth calculation

:::note
Bandwidth values are displayed in Mbps down to 2 decimal places. Values below 0.01 Mbps are rounded up or down accordingly, such that any value >=0.005 Mbps will be rounded up to 0.01 Mbps, and anything <0.005 Mbps will be rounded down to zero.
:::

### Average bandwidth

During a time period (as specified by the `granularity` parameter), we count:

- Each second during which traffic was seen during the time period
- Total traffic seen during that time period. 

To calculate the average bandwidth during the time period, we divide the *total traffic* seen during the time period (in bytes) by the *number of seconds during which traffic was seen*, and provide this value in megabits per second.

>  ***For example:***
>
> Time period (`granularity`) 1 hour <br/>
> Traffic direction: Uplink
> 
> During the hour we counted:
> 
> - 1750 seconds during which traffic was seen
> - A total traffic of 25900000 bytes 
> 
> Therefore the average bandwidth for that hour will be calculated thus:
> 
> 25900000 / 1750 = 14800 bytes per second <br/>
> 14800 bytes per second = 0.1184 megabits per second.
> 
> As we round up to 2 decimal places, the average uplink bandwidth for that hour will be shown as: **0.12 megabits per second**
>

### Maximum bandwidth

The specified time period (eg. 1 hour) is split into 5 minute windows, and we record the highest throughput per second seen during each 5 minute window. Once the time period has elapsed, the highest throughput recorded is displayed in Mbps as the maximum bandwidth for the time period.

### Minimum bandwidth

The specified time period (eg. 1 hour) is split into 5 minute windows, and we record the lowest throughput per second seen during each 5 minute window. Once the time period has elapsed, the lowest throughput  is displayed in Mbps as the minimum bandwidth for the time period. If there is a 5 minute window during which no traffic is seen, minimum bandwidth for the time period will be zero.

-->



