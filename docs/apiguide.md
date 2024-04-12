# 

:::tip
This section contains links to our [**API Specifications**](https://developer.alefedge.com/) and is aimed at users who have already gone through our Quickstart Guide but want to dig deeper. If you are new to using the Alef APIs, please refer back to [**Set up your first Alef Connect mobile network**](/quickstart/setup) in the Quickstart Guide.
:::

## The API environments

There are currently 3 API environments:
- **Production** You will use this when you go live with your Alef Edge Platform.
- **Sandbox** This is where you can try out our APIs. To get access to the Sandbox environment, just go to https://www.alefedge.com/, click **REQUEST A DEMO**, and fill out the form. 
- **PoC** This will become available to customers in the near future. It will consist of a fully functioning test environment.




## Network Setup API

:::note
- When using the **Production** environment to place an order, there will be a 10 minute window where you can change your order details, during which time the order will be in `RECEIVED` state. Once the 10 minutes elapses, the order state will change to `PROCESSING`, and any further attempt to change to your order using the API will fail with a `valid order not found` message.
- When using the **Sandbox** environment, the behavior will be similar, but the window where you can change your order details will only be 1 minute.
:::

**Use this API to**

- [**Create order**](https://developer.alefedge.com/default/documentation/orders#/Set%20up%20a%20mobile%20network/createOrder)

- [**Get all your orders**](https://developer.alefedge.com/default/documentation/orders#/Set%20up%20a%20mobile%20network/getOrders)

- [**Get Order Provisioning Details by order ID**](https://developer.alefedge.com/default/documentation/orders#/Set%20up%20a%20mobile%20network/getOrder)

- [**Update order**](https://developer.alefedge.com/default/documentation/orders#/Set%20up%20a%20mobile%20network/updateOrder)

- [**Cancel order**](https://developer.alefedge.com/default/documentation/orders#/Set%20up%20a%20mobile%20network/cancelOrder)


## Account Management API


**Use this API to:**

- [**Get account details**](https://developer.alefedge.com/default/documentation/accounts#/Manage%20your%20account/getAccountDetail)

- [**Update Account Details**](https://developer.alefedge.com/default/documentation/accounts#/Manage%20your%20account/updateAccount)

- [**Create/Add Customer Site Address**](https://developer.alefedge.com/default/documentation/accounts#/Set%20up%20and%20manage%20sites/createCustomerSiteAddress)

- [**Get all customer site details**](https://developer.alefedge.com/default/documentation/accounts#/Set%20up%20and%20manage%20sites/listCustomerSiteAddresses)

- [**Get Customer Site details Address ID**](https://developer.alefedge.com/default/documentation/accounts#/Set%20up%20and%20manage%20sites/getAddress)

- [**Update Customer Site**](https://developer.alefedge.com/default/documentation/accounts#/Set%20up%20and%20manage%20sites/updateCustomerSiteAddress)

- [**Delete Customer Site**](https://developer.alefedge.com/default/documentation/accounts#/Set%20up%20and%20manage%20sites/deleteAddress)



## SIM Management API 


**Use this API to:**

- [**Get all your SIM details**](https://developer.alefedge.com/default/documentation/esim#/Manage%20SIMs/getSimByOrderId)

- [**Get SIM status**](https://developer.alefedge.com/default/documentation/esim#/Manage%20SIMs/getSimStatus)

- [**Manage SIM status**](https://developer.alefedge.com/default/documentation/esim#/Enable%20or%20Disable%20an%20SIM/updateSimStatus)


## Reporting API


- [**Reporting API**](https://developer.alefedge.com/default/documentation/reporting#/Create%20and%20view%20reports/getReports) (Refer to the [**Reporting Guide**](reporting) for more information)