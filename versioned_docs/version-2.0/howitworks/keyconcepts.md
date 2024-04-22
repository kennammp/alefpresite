# Key mobile concepts



Before we get into the details of our private mobile edge solution, you should understand the basics of two key mobile networking concepts; spectrum and the mobile core.


## What is spectrum?


Spectrum sharing is what makes private edge mobile networking possible. It is revolutionizing mobile networking due to sharing frameworks that have been put in place to assign certain frequencies to certain entities at certain locations. 

Many countries have opened up a band of frequencies for private use, and specific frequencies within this band are assigned to private organizations in given locations either statically by arrangement with the local regulator, or dynamically via automated systems such as the Spectrum Access System (SAS) in the US. This means that although the available spectrum of frequencies is limited, each frequency can be used many times by many enterprises in different locations. The mobile (4/5G) access points you will use in your private mobile network will be using a frequency that has been assigned to them via such a spectrum sharing initiative.

The general availability of these broadband frequencies is a major step towards making 4G and 5G technology accessible to a wide audience and decoupling 5G access from major cellular network providers. 

The United States is currently leading the way in spectrum sharing, with the Citizen’s Broadband Radio Service (CBRS).


**CBRS** <br/>
CBRS is a band of frequencies between 3550 MHz and 3700 MHz that the US Federal Communications Commission (FCC) has recently opened up to general users in the US. This is managed by a network of Spectrum Access Systems (SAS) that communicates with all CBRS mobile APs, instructing them in real-time which frequency they can use ensuring that each enterprise has interference free use of a given frequency in a given location. This means that as an enterprise CBRS user, you do not need to be concerned with RF management of your CBRS APs, as this is taken care of by the SAS. There are several SAS operators, the choice of which will be up to your CBRS AP vendor.

## What is the Mobile Core?

The mobile core consists of multiple orchestrated elements that are responsible for the user auth, session management, and mobility management for mobile networks. Mobile  APs need to communicate with the mobile core to complete the installation of the private mobile network. The 4G mobile core is referred to as the 'Evolved Packet Core' (EPC), and the 5G core is referred to as the 5GC. 

:::note

Unlike a 'classic' mobile core, the mobile core in our [**Enterprise Mobile Gateway**](alefnetwork#enterprise-mobile-gateway) uses the enterprise IAM for authentication and authorization.