# Information checklist


Before we begin setting up your Alef Private Mobile network, we will need the following information:

 - RAN Site location (If your Edge Point is going to be on an Alef Location, we will work with you to identify the best Alef Location for the Site that will be served by your Edge Point)
 - PLMN ID 
 - If you are ordering your SIMs from a 3rd party, the SIM ID information (IMSI, K, Opc)
 - TAC 
 - Cell Ids (Optional)
 - UE subnet(s)
 - The IP address of your Mobile Gateway (MME)

:::note

If you do not know the above mobile ID values, we can provide them for you.
:::

 - IP subnet of your APs
 - If you are connecting to the Edge Point using IPSEC you can provide us with the following, or we can provide you with default addresses:
    - Phase 1 and 2 TEP addresses and keys
    - Point to point subnet for the GRE link
    - Other IPSEC information (Refer to the [**IPSEC VPN**](setupguide#ipsecvpn) section for full list)
 - If you are connecting to the Edge Point using MPLS we will work with you and your MPLS provider to set up your Edge Point as a branch site
 - If you want the Edge Point to join your routing protocol, we will need to work with you to configure the required settings. Currently we support BGP, please discuss other routing protocol requirements with us.
 - You must ensure that packets destined for the Mobile Gateway and UE subnet will be routed via the physical or virtual connection you will set up to the Edge Point.

Once we have received the above information we can begin provisioning your Alef network, starting with bringing up connectivity between the site where your RAN is located and the Edge Point.