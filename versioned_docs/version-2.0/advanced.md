
# Advanced

## Edge Point - mobile AP Connectivity Options {#apconn-options}


Your mobile AP will communicate with the EPC via the Alef Edge Point over a GTP (GPRS Tunneling Protocol) tunnel for mobile devices user plane traffic. The Alef Edge Point will break out the user plane traffic and send it back to the enterprise network. 

The connectivity between the mobile AP and the Alef Edge Point can be done either:

**With IPSEC**

- The mobile AP gets private IP from the enterprise network
- Direct P2P IPSec tunnel connects the mobile AP to the Alef Edge Point
- The Alef Edge Point assigns a 2nd IP to be used on the mobile AP for its communications with the EPC. This IP will be from the 100.64.0.0/16 , an EPC reserved address space.
- A GTP tunnel is brought up between the mobile AP's EPC assigned address and the EPC

**Without IPSEC**

- The mobile AP gets an EPC assigned IP from Alef
- A GTP tunnel is brought up between the mobile AP's EPC assigned address and the EPC.





 


