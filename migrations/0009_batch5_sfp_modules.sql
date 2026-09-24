-- Batch 5 of the content upgrade: features + descriptions for every
-- SFP Modules item from the 0004 import.

update catalogue_items set
  features = '1310nm single mode optics
1.25G (Gigabit) speed
Up to 10km reach
Compatible with Huawei and many third party switches',
  description = 'This Huawei eSFP transceiver operates at 1310nm on single mode fiber, supporting Gigabit Ethernet links up to 10km. It is a common choice for connecting buildings or floors over fiber where the distance is too far for copper cabling but does not need the reach of long haul optics.

Antofity Concepts supplies this transceiver for Gigabit fiber links across Kenya, and can confirm compatibility with your existing switch platform before you order.'
where name = 'Huawei eSFP 1310nm 1.25G 10km Optical Transceiver';


update catalogue_items set
  features = 'Single mode optics
1.25G (Gigabit) speed
Up to 20km reach
Compatible with MikroTik and many third party switches',
  description = 'The MikroTik S-31DLC20D is a single mode SFP transceiver rated for Gigabit Ethernet links up to 20km, giving longer reach than standard short haul optics for connecting sites further apart over fiber. It is commonly paired with MikroTik switches and routers but works with most SFP compatible equipment from other brands too.

Antofity Concepts supplies this transceiver for longer distance Gigabit fiber links across Kenya.'
where name = 'MikroTik S-31DLC20D SFP Module 20km Single Mode';


update catalogue_items set
  features = 'Single mode optics
10 Gigabit speed
Up to 10km reach
SFP+ form factor',
  description = 'This Huawei SFP+ transceiver supports 10 Gigabit Ethernet over single mode fiber up to 10km, a common choice for switch to switch or switch to server links where 10 Gigabit speed is needed over a moderate distance.

Antofity Concepts supplies this transceiver for 10 Gigabit fiber uplinks across Kenya, and can confirm compatibility with your switch platform before you order.'
where name = 'Huawei SFP+ Transceiver 10G Single Mode 10km';


update catalogue_items set
  features = 'Single mode optics
10 Gigabit speed
Up to 40km reach
Long haul SFP+ transceiver',
  description = 'This long haul SFP+ transceiver supports 10 Gigabit Ethernet over single mode fiber up to 40km, suited to links between sites a significant distance apart, such as connecting two premises across a town or linking to an upstream provider point of presence.

Antofity Concepts supplies this transceiver for long distance 10 Gigabit fiber links across Kenya.'
where name = '10G 40km Single Mode SFP';


update catalogue_items set
  features = '10GBASE-LRM standard
Designed for existing multimode fiber
Longer reach than standard short reach optics on multimode
Cisco branded, compatible with Cisco switches',
  description = 'The Cisco SFP-10G-LRM uses the 10GBASE-LRM standard, designed specifically to run 10 Gigabit Ethernet over existing multimode fiber runs that were originally installed for slower speeds, extending their useful reach further than a standard 10GBASE-SR short reach transceiver would allow. This makes it a practical upgrade path for buildings with older multimode fiber already in place rather than needing to install new single mode fiber.

Antofity Concepts supplies the SFP-10G-LRM for organisations in Kenya upgrading existing multimode fiber links to 10 Gigabit speed.'
where name = 'Cisco SFP-10G-LRM 10GBASE-LRM SFP+';


update catalogue_items set
  features = 'Multimode optics, 850nm
10 Gigabit speed
Up to 300m reach
Short reach SFP+ transceiver',
  description = 'This Huawei SFP+ transceiver operates at 850nm on multimode fiber, supporting 10 Gigabit Ethernet over short distances up to 300m. It suits switch to switch or switch to server links within the same building or data centre rack, where long distance reach is not needed.

Antofity Concepts supplies this transceiver for short reach 10 Gigabit fiber links within a building or data centre in Kenya.'
where name = 'Huawei SFP+ Transceiver 10G-SR 850nm 0.3km';


update catalogue_items set
  features = '10 Gigabit speed
SFP+ form factor
Cisco branded, compatible with Cisco switches
Suited to short to medium reach fiber links',
  description = 'This Cisco 10GBASE SFP+ transceiver provides a 10 Gigabit fiber uplink option for Cisco switches, suited to short to medium reach links between switches in the same building or data centre.

Antofity Concepts supplies genuine Cisco optics for organisations in Kenya standardising on Cisco networking equipment, and can confirm the exact standard and reach needed for a given link.'
where name = 'Cisco 10GBASE SFP+ Module';


update catalogue_items set
  features = 'Single mode optics
2.5 Gigabit speed
Up to 15km reach
SFP form factor',
  description = 'This Huawei SFP transceiver supports 2.5 Gigabit Ethernet over single mode fiber up to 15km, a speed tier between standard Gigabit and 10 Gigabit optics, used on equipment that supports 2.5G uplinks for a bit more bandwidth than Gigabit without moving to full 10 Gigabit infrastructure.

Antofity Concepts supplies this transceiver for 2.5 Gigabit fiber links across Kenya where supported by the switch or router platform in use.'
where name = 'Huawei SFP Transceiver 2.5G Single Mode 15km';


update catalogue_items set
  features = 'Multimode optics, 850nm
25 Gigabit speed
Up to 300m reach
Short reach SFP28 transceiver',
  description = 'This Huawei transceiver supports 25 Gigabit Ethernet over multimode fiber up to 300m, a speed tier increasingly used in data centres and server rooms needing more bandwidth than 10 Gigabit without moving to 40 or 100 Gigabit infrastructure.

Antofity Concepts supplies 25 Gigabit optics for data centre and server room deployments across Kenya, and can confirm switch and server compatibility before you order.'
where name = 'Huawei SFP+ Transceiver 25G-SR 850nm 0.3km';


update catalogue_items set
  features = '40 Gigabit speed
QSFP+ form factor
Used on switch and router uplink ports',
  description = 'This Huawei QSFP+ transceiver provides a 40 Gigabit uplink option for switches and routers with QSFP+ ports, commonly used for high bandwidth links between core or aggregation switches where 10 Gigabit uplinks are not enough.

Antofity Concepts supplies 40 Gigabit optics for organisations in Kenya building higher bandwidth network cores.'
where name = 'Huawei QSFP 40G Transceiver';


update catalogue_items set
  features = '40 Gigabit speed
Bidirectional, works over standard duplex multimode fiber
QSFP+ form factor
Cisco branded, compatible with Cisco switches',
  description = 'The Cisco QSFP-40G-SR-BD is a bidirectional 40 Gigabit transceiver that works over standard duplex multimode fiber, the same type of fiber typically used for existing 10 Gigabit short reach links, rather than requiring the wider ribbon fiber some 40 Gigabit optics need. This makes it a practical way to upgrade an existing fiber link to 40 Gigabit without replacing the fiber itself.

Antofity Concepts supplies the QSFP-40G-SR-BD for organisations in Kenya upgrading existing duplex fiber links to 40 Gigabit speed.'
where name = 'Cisco QSFP-40G-SR-BD';


update catalogue_items set
  features = '1000BASE-T copper standard
Works over standard Cat5e/6 cable
Adds a Gigabit copper port to SFP only switch slots
Finisar branded, broadly compatible',
  description = 'The Finisar FCLF-8521-3 is a copper SFP transceiver supporting 1000BASE-T over standard Cat5e or Cat6 cable, letting an SFP only switch port accept a normal copper Ethernet connection instead of fiber. This is useful when a switch has spare SFP slots but no free RJ45 ports, or when only fiber uplinks were originally planned for a rack.

Antofity Concepts supplies copper SFP transceivers for organisations in Kenya needing to add copper ports to fiber only switch equipment.'
where name = 'Finisar FCLF-8521-3 1000BASE-T Copper SFP';


update catalogue_items set
  features = 'Single mode optics
Gigabit speed
Compatible with major switch brands
FS branded',
  description = 'This FS single mode Gigabit SFP transceiver provides a fiber uplink option for switches with SFP slots, compatible with equipment from most major switch brands. FS is a well known optics supplier offering compatible transceivers at a lower cost than original equipment manufacturer branded modules while maintaining solid reliability.

Antofity Concepts supplies FS optics as a cost effective alternative to original equipment manufacturer transceivers for Gigabit fiber links across Kenya.'
where name = 'FS Single Mode 1G SFP';


update catalogue_items set
  features = '1000BASE-T copper standard
Works over standard copper cable
Adds a Gigabit copper port to SFP only switch slots
FS branded',
  description = 'This FS copper SFP transceiver supports Gigabit Ethernet over standard copper cable, letting an SFP only switch port accept a normal Ethernet connection. It offers the same function as branded copper SFPs from Cisco or Huawei at a more accessible price point.

Antofity Concepts supplies FS copper SFPs for organisations in Kenya needing an affordable way to add copper ports to fiber only switch equipment.'
where name = 'FS Copper RJ45 SFP';


update catalogue_items set
  features = '1000BASE-T copper standard
Works over standard Cat5e/6 cable
Adds a Gigabit copper port to SFP only switch slots
Huawei branded',
  description = 'This Huawei copper SFP transceiver supports Gigabit Ethernet over standard Cat5e or Cat6 cable, letting an SFP only switch port accept a normal copper Ethernet connection instead of fiber.

Antofity Concepts supplies genuine Huawei copper SFPs for organisations in Kenya standardising on Huawei networking equipment.'
where name = 'Huawei 1000BASE-T Copper SFP Module';


update catalogue_items set
  features = 'Multimode optics
Gigabit speed
Short reach fiber links
Cisco branded, compatible with Cisco switches',
  description = 'The Cisco GLC-SX-MMD is a Gigabit SFP transceiver for short reach multimode fiber links, one of the most widely used Cisco optics for connecting switches within the same building over fiber rather than copper.

Antofity Concepts supplies genuine Cisco GLC-SX-MMD transceivers for organisations in Kenya running Cisco switches with fiber uplinks.'
where name = 'Cisco GLC-SX-MMD Transceiver Module';


update catalogue_items set
  features = 'Supports both single mode and multimode fiber
Gigabit speed
Longer reach than the GLC-SX-MMD
Cisco branded, compatible with Cisco switches',
  description = 'The Cisco GLC-LH-SMD is a Gigabit SFP transceiver that works over both single mode and multimode fiber, giving longer reach than the GLC-SX-MMD and more flexibility on which fiber type is available at a site.

Antofity Concepts supplies genuine Cisco GLC-LH-SMD transceivers for longer distance Gigabit fiber links across Kenya.'
where name = 'Cisco GLC-LH-SMD Transceiver Module';
