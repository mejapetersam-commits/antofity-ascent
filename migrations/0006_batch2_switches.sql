-- Batch 2 of the content upgrade: features + in-depth, SEO-minded
-- descriptions for every Switch item from the 0004 import.

update catalogue_items set
  features = '12 Gigabit SFP ports
StackWise stacking support
Layer 2/3 switching
Redundant power supply option
Rack mountable, 1U',
  description = 'The Cisco Catalyst 3750G-12S is a fiber only switch, built with 12 Gigabit SFP ports rather than copper RJ45 ports, making it a natural fit for aggregation points where every connection runs over fiber. As part of the well proven 3750 family it supports Cisco StackWise stacking, letting several 3750 switches be joined and managed as a single logical unit for easier administration and resilience.

Layer 2 and Layer 3 switching give network designers the flexibility to run it purely as a switch or bring in routing between VLANs where needed. Because every port is SFP based, it suits data centre style racks, ISP points of presence and campus core rooms where copper runs are not practical.

Antofity Concepts supplies the 3750G-12S for organisations in Kenya building out a fiber based network core or aggregation layer.'
where name = 'Cisco Catalyst 3750G-12S 12 Port SFP Switch (WS-C3750G-12S-S)';


update catalogue_items set
  features = '24 Fast Ethernet or Gigabit ports
Layer 2 switching
Cisco IOS management
Rack mountable
Widely supported, well documented platform',
  description = 'The Cisco Catalyst 2960 24 Port Switch is one of the most recognisable names in networking, and remains a dependable Layer 2 access switch for offices, schools and small data closets across Kenya. It runs Cisco IOS, the same command line environment used across most of the Cisco switching range, which keeps configuration and troubleshooting familiar for anyone who has worked with Cisco gear before.

With 24 ports it comfortably serves a floor of desks, a computer lab or a row of offices, and its Layer 2 focus keeps it simple to deploy without the added complexity of routing features most small networks do not need.

Antofity Concepts supplies and configures the 2960 24 Port Switch as a reliable, no frills access switch for straightforward office networks.'
where name = 'Cisco Catalyst 2960 24 Port Switch';


update catalogue_items set
  features = '24 PoE+ ports
Gigabit Ethernet
Layer 2 switching with FlexStack option
Cisco IOS management
Powers phones, access points and cameras',
  description = 'The Cisco Catalyst 2960-S with 24 PoE Plus ports brings power over Ethernet to the well known 2960 platform, letting a single switch supply both data and power to IP phones, wireless access points and IP cameras without separate power adapters at every device. PoE Plus offers a higher per port power budget than standard PoE, covering more demanding devices such as pan tilt zoom cameras.

The 2960-S generation added FlexStack support on selected models, allowing switches to be stacked for simpler management as a network grows. It remains a Layer 2 access switch at heart, keeping day to day operation straightforward for IT teams supporting an office or small campus.

Antofity Concepts fits the 2960-S 24 Port PoE Plus Switch where an office is rolling out VoIP phones, Wi-Fi access points or IP cameras and needs PoE across a meaningful number of ports.'
where name = 'Cisco Catalyst 2960-S 24 Port PoE Plus Switch';


update catalogue_items set
  features = '48 PoE ports
Gigabit Ethernet
Layer 2 switching
Cisco IOS management
Suited to larger offices and multiple wiring closets',
  description = 'The Cisco Catalyst 2960P with 48 PoE ports scales up the 2960 platform for larger offices that need power over Ethernet across many more devices than a 24 port switch can serve. It keeps the same familiar Layer 2 switching and Cisco IOS management as the smaller 2960 models, so a network already using Cisco access switches can grow without introducing a different management experience.

With 48 ports it can serve an entire floor of a building on its own, powering IP phones, wireless access points and cameras from a single wiring closet.

Antofity Concepts supplies the 2960P 48 Port PoE Switch for larger offices, schools and commercial buildings across Kenya consolidating many PoE devices onto fewer switches.'
where name = 'Cisco Catalyst 2960P 48 Port PoE Switch';


update catalogue_items set
  features = '24 PoE ports
Gigabit Ethernet
Layer 2 switching
Cisco IOS management
Powers phones, access points and cameras',
  description = 'The Cisco Catalyst 2960 24 Port PoE Switch pairs the dependable 2960 platform with power over Ethernet across all 24 ports, a straightforward option for offices that need to power IP phones, access points or cameras without stepping up to the higher PoE Plus budget of the 2960-S. It runs standard Cisco IOS, keeping configuration consistent with the rest of the Cisco switching range.

Layer 2 switching keeps the feature set focused on what most small and medium offices actually use day to day, without the added complexity of routing.

Antofity Concepts installs the 2960 24 Port PoE Switch as an affordable way to bring PoE into an existing or new office network.'
where name = 'Cisco Catalyst 2960 24 Port PoE Switch';


update catalogue_items set
  features = '48 Gigabit PoE+ ports
FlexStack stacking option
Layer 2 switching
Cisco IOS management
Higher PoE budget for demanding devices',
  description = 'The Cisco Catalyst 2960S with 48 Gigabit PoE Plus ports combines full Gigabit speed on every port with the higher PoE Plus power budget, making it suited to larger deployments of power hungry devices such as pan tilt zoom cameras and higher end wireless access points alongside standard IP phones. Selected 2960S models support FlexStack, allowing multiple switches to be joined into a single manageable stack as a network grows.

As part of the well established 2960 family it runs Cisco IOS, keeping day to day management familiar for teams already working with Cisco equipment.

Antofity Concepts supplies the 2960S 48 Port Gigabit PoE+ Switch for larger offices and campuses in Kenya that need both Gigabit speed and a generous PoE budget across many ports.'
where name = 'Cisco Catalyst 2960S 48 Port Gigabit PoE+ Switch';


update catalogue_items set
  features = '48 Gigabit data ports
Dual uplinks
Layer 2 switching, non PoE
Cisco IOS management
FlexStack ready',
  description = 'The Cisco Catalyst 2960S WS-C2960S-48TD-L is a non PoE, 48 port Gigabit access switch built for networks that need high port density and full Gigabit speed but do not require power over Ethernet on this particular switch, for example where PoE devices are already served by a separate switch elsewhere on site. Its dual uplink ports allow a resilient or higher bandwidth connection back to a core switch.

Like other 2960S models it is FlexStack ready and runs standard Cisco IOS, fitting cleanly into an existing Cisco managed network.

Antofity Concepts supplies the WS-C2960S-48TD-L for data only access layer deployments needing 48 Gigabit ports without the added cost of PoE.'
where name = 'Cisco 2960S 48 Port Gigabit Switch (WS-C2960S-48TD-L)';


update catalogue_items set
  features = '48 PoE ports
Gigabit Ethernet
FlexStack Plus stacking
Layer 2/3 lite switching
Cisco IOS management with improved efficiency over the 2960-S',
  description = 'The Cisco Catalyst 2960-X is the next generation after the 2960-S, bringing improved switching performance, better power efficiency and FlexStack Plus stacking to the same familiar 48 port PoE form factor. It adds Layer 3 lite routing features on top of core Layer 2 switching, giving a bit more flexibility for networks that need basic routing between VLANs without a full Layer 3 switch.

The larger PoE budget and Gigabit throughput make it well suited to offices standardising on Cisco access switches for phones, access points and cameras across many ports.

Antofity Concepts supplies the 2960-X 48 Port PoE Switch for organisations in Kenya upgrading from older 2960 or 2960-S switches to a more capable, more efficient platform.'
where name = 'Cisco Catalyst 2960-X 48 Port PoE Switch';


update catalogue_items set
  features = '24 PoE ports
Gigabit Ethernet
Full Layer 3 routing (IP Lite/IP Base depending on license)
FlexStack Plus stacking
Cisco IOS management',
  description = 'The Cisco Catalyst 2960-XR builds on the 2960-X platform with fuller Layer 3 routing support, useful for smaller sites that need some inter VLAN routing or basic dynamic routing without deploying a separate router. With 24 PoE ports and Gigabit speed it suits a medium sized office or branch site running IP phones and wireless access points alongside standard data devices.

FlexStack Plus stacking allows it to be combined with other 2960-X or 2960-XR switches for a larger, more resilient access layer as a site grows.

Antofity Concepts fits the 2960-XR 24 Port PoE Switch where a branch office or medium site needs PoE together with more routing capability than a plain Layer 2 switch offers.'
where name = 'Cisco Catalyst 2960-XR 24 Port PoE Switch';


update catalogue_items set
  features = '48 PoE+ ports
Gigabit Ethernet
Full Layer 3 routing
Modular uplink options
Cisco IOS management',
  description = 'The Cisco Catalyst 3560X is a Layer 3 switch built for the distribution layer of a campus network, combining 48 PoE Plus ports with full routing capability rather than the Layer 2 or Layer 3 lite feature set found on access switches. That makes it a good fit for a site that wants to bring routing, VLANs and PoE together on a single switch rather than running a separate router.

Modular uplink options let it take fiber or higher speed copper uplinks depending on how the rest of the network is built.

Antofity Concepts supplies the 3560X 48 Port PoE Plus Switch for schools, offices and campuses in Kenya that need a capable distribution layer switch with a generous PoE budget.'
where name = 'Cisco Catalyst 3560X 48 Port PoE Plus Switch';


update catalogue_items set
  features = '48 PoE ports
Gigabit Ethernet
Full Layer 3 managed routing
Cisco IOS XE, supports later software features than older Catalyst switches
Stacking support',
  description = 'The Cisco Catalyst 3650-48PS-E runs Cisco IOS XE, the newer software base shared with more recent Cisco platforms, giving it a longer support runway and access to more current features than the older IOS based 2960 and 3560 switches. With 48 PoE ports, Gigabit Ethernet and full Layer 3 managed routing, it works well as either a capable access switch or a distribution switch for a mid sized network.

Stacking support lets several 3650 switches be managed together, simplifying operations as a site adds more switches over time.

Antofity Concepts supplies the 3650-48PS-E for organisations in Kenya that want a modern, fully managed Layer 3 switch with strong long term software support.'
where name = 'Cisco Catalyst 3650-48PS-E L3 Managed Switch';


update catalogue_items set
  features = '24 PoE ports
Gigabit Ethernet
StackWise stacking
Layer 2/3 switching
Cisco IOS management',
  description = 'The Cisco Catalyst WS-C3750-24P is part of the long running 3750 family, a platform many Kenyan businesses already have experience running. With 24 PoE ports it suits a medium sized office needing power for IP phones and access points, and StackWise stacking allows it to be joined with other 3750 switches for shared management and resilient uplinks.

Layer 2 and Layer 3 capability gives some flexibility for VLAN routing without moving to a dedicated router.

Antofity Concepts supplies the WS-C3750-24P for businesses standardising on the well proven 3750 platform for PoE access switching.'
where name = 'Cisco Catalyst WS-C3750-24P PoE Switch';


update catalogue_items set
  features = '48 Gigabit ports
StackWise stacking
Layer 2/3 switching
Cisco IOS management
Fiber and copper uplink options',
  description = 'The Cisco Catalyst WS-C3750G-48TS-S is a 48 port Gigabit switch from the established 3750 family, supporting StackWise stacking and Layer 2/3 switching for offices and campuses that need high port density with the option of routing between VLANs.

Please note that the listed price for this item is noticeably higher than similar 3750 series switches elsewhere in our catalogue and is worth confirming with our team before ordering, as it may need to be corrected.

Antofity Concepts can advise on whether this model or a comparable 3750 series switch best fits a given network before you order.'
where name = 'Cisco Catalyst WS-C3750G-48TS-S PoE Switch';


update catalogue_items set
  features = '24 Gigabit ports
StackWise stacking
Layer 2/3 switching
Cisco IOS management',
  description = 'The Cisco Catalyst WS-C3750-24P Gigabit Switch is a 24 port Gigabit switch from the 3750 family with StackWise stacking and Layer 2/3 capability. This listing appears alongside another WS-C3750-24P entry in our catalogue at a different price, so please confirm with our team exactly which configuration and condition you are ordering before checkout.

Antofity Concepts can clarify the exact specification and confirm current pricing for this model before you order.'
where name = 'Cisco Catalyst WS-C3750-24P Gigabit Switch';


update catalogue_items set
  features = '48 PoE ports
Gigabit Ethernet
Full Layer 3 IP Services license
StackWise Plus stacking
Cisco IOS management',
  description = 'The Cisco Catalyst WS-C3750X-48P-E is a higher end member of the 3750 family, running the IP Services license that unlocks full Layer 3 routing features beyond what entry level 3750 switches offer. With 48 PoE ports and StackWise Plus stacking, it is built for demanding campus networks that need both high port density and advanced routing on the same switch.

Antofity Concepts supplies the WS-C3750X-48P-E for larger organisations in Kenya that need a capable, fully featured distribution or core switch with a strong PoE budget.'
where name = 'Cisco Catalyst WS-C3750X-48P-E 48 Port PoE Switch';


update catalogue_items set
  features = '48 PoE ports
Gigabit Ethernet
Full Layer 3 routing, Cisco IOS XE
StackWise stacking
Common core or distribution switch',
  description = 'The Cisco Catalyst 3850 is a widely used core and distribution switch, running Cisco IOS XE for longer term software support and access to more modern features than older IOS based Catalyst switches. With 48 PoE ports, Gigabit Ethernet and full Layer 3 routing, it suits enterprise networks that need a capable switch at the heart of the network rather than at the edge.

StackWise stacking allows multiple 3850 switches to be combined for higher availability and simpler management.

Antofity Concepts supplies the Catalyst 3850 48 Port PoE Switch for medium and larger organisations across Kenya building out a resilient network core.'
where name = 'Cisco Catalyst 3850 48 Port PoE Switch';


update catalogue_items set
  features = '8 Gigabit ports, full PoE budget across all ports
Compact desktop or wall mount form factor
Web based management
Cisco Business series
Suited to small offices needing PoE for a handful of devices',
  description = 'The Cisco C1300 8 Port switch is part of the Cisco Business range, aimed at small offices that need a compact, easy to manage switch rather than a full enterprise platform. With full PoE budget across all 8 Gigabit ports, it can comfortably power a small number of access points, phones or cameras without running into power budget limits, which can happen on cheaper switches that only offer a shared PoE pool.

Management is handled through a straightforward web interface rather than a command line, making it approachable for smaller IT teams or generalist staff.

Antofity Concepts supplies the C1300 8 Port switch for small offices in Kenya that want business grade reliability with simple, web based management.'
where name = 'Cisco C1300 8 Port Full PoE Gigabit Switch';


update catalogue_items set
  features = '48 PoE ports
Gigabit Ethernet
StackWise stacking
Layer 2/3 switching
Cisco IOS management',
  description = 'The Cisco Catalyst 3750 48P brings the well proven 3750 platform to a 48 port PoE configuration, suited to larger offices consolidating many PoE devices, such as phones, access points and cameras, onto fewer switches. StackWise stacking allows it to be joined with other 3750 switches to build a larger, more resilient access layer as a network grows.

Layer 2 and Layer 3 capability give some flexibility for VLAN routing without a separate router.

Antofity Concepts supplies the 3750 48P PoE Switch for organisations in Kenya that already run 3750 series switches elsewhere on their network.'
where name = 'Cisco Catalyst 3750 48P PoE Switch';


update catalogue_items set
  features = '24 PoE+ ports
4 Gigabit SFP uplinks
Current generation Cisco access switch platform
Cisco IOS XE
StackWise stacking',
  description = 'The Cisco Catalyst C9200 is the current generation Cisco access switch platform, replacing the older 2960 and 3650 families with improved performance, security and software support. This 24 port PoE Plus model includes 4 dedicated Gigabit SFP uplink ports, keeping uplink bandwidth separate from the access ports used for phones, access points and computers.

Running Cisco IOS XE, it benefits from ongoing feature updates and longer term support than older IOS based switches, and supports StackWise stacking for networks that need to grow without adding switch management complexity.

Antofity Concepts recommends the C9200 range for organisations in Kenya standardising on a current generation Cisco platform for new deployments.'
where name = 'Cisco Catalyst C9200 24 Port PoE Plus Switch (4x1G SFP)';


update catalogue_items set
  features = '24 PoE+ ports
4 10 Gigabit SFP+ uplinks
Current generation Cisco access switch platform
Cisco IOS XE
StackWise stacking',
  description = 'This Cisco Catalyst C9200 configuration pairs 24 PoE Plus access ports with 4 10 Gigabit SFP+ uplinks, giving considerably more uplink bandwidth than the 1 Gigabit uplink variant, useful where a switch needs to feed a lot of traffic back to a busy core or into a data centre. It shares the same Cisco IOS XE software base and StackWise stacking support as the rest of the C9200 range.

The extra uplink capacity makes it a good fit for busier access layer locations, such as a floor with many PoE access points or a server adjacent wiring closet.

Antofity Concepts supplies this C9200 configuration for sites in Kenya where uplink bandwidth is likely to become a bottleneck on a standard 1 Gigabit uplink switch.'
where name = 'Cisco Catalyst C9200 24 Port PoE Plus Switch (4x10G SFP)';


update catalogue_items set
  features = '48 PoE+ ports
4 10 Gigabit SFP+ uplinks
Current generation Cisco access switch platform
Cisco IOS XE
StackWise stacking',
  description = 'The 48 port version of the Cisco Catalyst C9200 with 4 10 Gigabit SFP+ uplinks combines high port density with fast uplinks, suited to larger deployments that need to serve many PoE devices from one switch while still keeping uplink bandwidth well ahead of access layer demand. As with the rest of the C9200 range it runs Cisco IOS XE and supports StackWise stacking.

Antofity Concepts supplies this configuration for larger offices, schools and campuses in Kenya that need a current generation Cisco platform at scale.'
where name = 'Cisco Catalyst C9200 48 Port PoE Plus Switch (4x10G SFP)';


update catalogue_items set
  features = '24 10 Gigabit ports plus additional high speed uplinks
Data centre and campus core switch platform
Layer 3 routing
High switching capacity
Centrally managed alongside other Huawei network equipment',
  description = 'The Huawei CloudEngine S6730-H24X6C is built for the core or aggregation layer of a data centre or campus network, offering 24 10 Gigabit ports plus additional high speed uplinks to handle heavy east west traffic between servers or between distribution switches. As a core platform it supports full Layer 3 routing and the higher switching capacity needed to avoid becoming a bottleneck at the centre of a busy network.

It fits into a wider Huawei networking environment, managed alongside other CloudEngine switches and Huawei network controllers.

Antofity Concepts supplies the S6730-H24X6C for organisations in Kenya building or upgrading a data centre or campus core on the Huawei platform.'
where name = 'Huawei CloudEngine S6730-H24X6C Core Switch';


update catalogue_items set
  features = 'Data centre and campus core switch platform
High throughput switching capacity
Layer 3 routing
Centrally managed alongside other Huawei network equipment
Built for aggregation and core roles',
  description = 'The Huawei CloudEngine 6881-4S6CQ is another member of the CloudEngine core switch family, built for data centre and campus core deployments that need high throughput switching between distribution switches or servers. Like other CloudEngine models it supports full Layer 3 routing and integrates into a wider Huawei managed network environment.

Antofity Concepts supplies CloudEngine core switches for organisations in Kenya standardising their data centre or campus core on Huawei networking equipment, and can help confirm the exact configuration and port layout for a given deployment before ordering.'
where name = 'Huawei CloudEngine 6881-4S6CQ Core Switch';


update catalogue_items set
  features = 'PoE ports with web based smart management
Gigabit Ethernet
VLAN and QoS support
Compact rack mountable design
Suited to small and medium office networks',
  description = 'The D-Link DGS-1210-26PS-E is a smart managed switch, sitting between a fully unmanaged switch and a full enterprise managed switch in terms of features. Its web based management interface allows basic VLAN configuration, QoS prioritisation and PoE port control without needing command line experience, making it approachable for smaller IT teams.

PoE across its ports allows it to power access points, phones or cameras directly, and its compact rack mountable design fits comfortably into a small office wiring closet or cabinet.

Antofity Concepts supplies the DGS-1210-26PS-E for small and medium offices in Kenya that want some managed features without the cost or complexity of an enterprise switch.'
where name = 'D-Link DGS-1210-26PS-E Smart Managed PoE Switch';


update catalogue_items set
  features = '28 PoE capable ports
Gigabit Ethernet
Web based smart management
VLAN and QoS support
Compact rack mountable design',
  description = 'The D-Link DGS-1210-28P offers 28 PoE capable ports with the same web smart management approach as the rest of the DGS-1210 range, giving VLAN, QoS and basic monitoring features through a browser based interface rather than a command line. It suits offices that have outgrown a basic unmanaged switch but do not need the full feature set or cost of an enterprise grade platform.

Antofity Concepts supplies the DGS-1210-28P for offices in Kenya that want PoE across a larger number of ports with straightforward web based management.'
where name = 'D-Link DGS-1210-28P PoE Web Smart Switch';


update catalogue_items set
  features = '28 Gigabit ports, non PoE
Web based smart management
VLAN and QoS support
Compact rack mountable design
Lower cost than the PoE equivalent',
  description = 'The D-Link DGS-1210-28 is the non PoE version of the DGS-1210-28P, offering the same 28 port Gigabit switching and web smart management features at a lower cost for networks that do not need power over Ethernet on this particular switch, for example where PoE devices are already served elsewhere on site.

Antofity Concepts supplies the DGS-1210-28 for data only access layer needs where managed features are wanted but PoE is not required.'
where name = 'D-Link DGS-1210-28 Non-PoE Web Smart Gigabit Switch';


update catalogue_items set
  features = '8 PoE capable Gigabit ports
Web based smart management
Compact desktop or wall mount design
VLAN and QoS support
Suited to small networks',
  description = 'This compact D-Link 8 port switch brings PoE and web smart management to smaller networks that do not need the port density of the larger DGS-1210 models. It suits a small office, a single room deployment of a few access points and cameras, or as a satellite switch feeding a handful of PoE devices from a central network.

Antofity Concepts supplies this switch for small scale PoE deployments across Kenya where a full sized rack switch would be more capacity than needed.'
where name = 'D-Link 8 Port PoE Web Smart Gigabit Switch';


update catalogue_items set
  features = '16 Gigabit PoE ports
Unmanaged, plug and play
Commonly used with Dahua IP cameras
Compact rack mountable design',
  description = 'The Dahua 16 Port Gigabit PoE Switch is an unmanaged switch built to work straight out of the box with Dahua IP cameras and other PoE devices, without needing any configuration. Its 16 Gigabit PoE ports make it a practical choice for CCTV installations covering a medium number of cameras from one location.

Antofity Concepts supplies and installs this switch as part of complete CCTV systems for homes and businesses across Kenya, alongside Dahua cameras and recorders.'
where name = 'Dahua 16 Port Gigabit PoE Switch';


update catalogue_items set
  features = '8 Gigabit PoE ports
Unmanaged, plug and play
Commonly used with Dahua IP cameras
Compact design',
  description = 'The Dahua 8 Port Gigabit PoE Switch is a smaller, unmanaged option for CCTV and access point deployments covering fewer devices, offering the same plug and play simplicity as the 16 port version in a more compact footprint. It works well as a dedicated switch for a smaller camera system or as a satellite switch extending PoE to a specific area of a building.

Antofity Concepts supplies this switch for smaller CCTV and PoE device deployments across Kenya.'
where name = 'Dahua 8 Port Gigabit PoE Switch';


update catalogue_items set
  features = '8 PoE ports, Fast Ethernet
Unmanaged, plug and play
Lower cost option for smaller camera installations
Compact design',
  description = 'This Dahua 8 Port PoE Switch offers Fast Ethernet PoE ports rather than full Gigabit, making it a lower cost option for smaller camera installations where Fast Ethernet bandwidth is sufficient for the cameras being used. It shares the same unmanaged, plug and play simplicity as the rest of the Dahua switch range.

Antofity Concepts supplies this switch for budget conscious CCTV installations across Kenya where Gigabit speed is not essential.'
where name = 'Dahua 8 Port PoE Switch';


update catalogue_items set
  features = '48 Gigabit PoE+ ports
500W PoE power budget
Layer 2/3 managed switch
Managed through EdgeSwitch UI or the UniFi Network application
SFP+ uplinks on select models',
  description = 'The Ubiquiti EdgeSwitch ES-48-500W is a managed Layer 2/3 switch with 48 Gigabit PoE Plus ports and a generous 500W total PoE budget, enough to comfortably power a large number of access points, phones and cameras from a single switch. It sits within Ubiquiti EdgeMAX and UniFi ecosystems, and can be managed either through its own EdgeSwitch interface or integrated into the UniFi Network application alongside UniFi access points and routers.

Antofity Concepts supplies the ES-48-500W for larger UniFi and EdgeMAX based networks across Kenya that need high port density with a strong PoE budget.'
where name = 'Ubiquiti EdgeSwitch 48 Port PoE+ (ES-48-500W)';


update catalogue_items set
  features = '5 Gigabit Ethernet ports
1 SFP slot
Unmanaged, plug and play
Compact design for small office or home use',
  description = 'The MikroTik RB260GS is a compact, unmanaged 5 port Gigabit switch with a single SFP slot, useful for extending a small network with a fiber uplink option. It requires no configuration, making it a straightforward choice for a home office, small business or as a satellite switch feeding a specific room or rack.

Antofity Concepts supplies the RB260GS for small office and home networks across Kenya needing a simple, low cost Gigabit switch with an SFP option.'
where name = 'MikroTik RB260GS SOHO Gigabit Switch';


update catalogue_items set
  features = '5 Gigabit Ethernet ports with PoE output
Smart switch with some management features
SFP slot
Compact design for small office or home use',
  description = 'The MikroTik RB260GSP adds PoE output to the RB260GS design, letting it power a small number of access points or cameras directly from the switch without a separate injector. Its smart switch features allow some basic configuration beyond a purely unmanaged switch, while remaining simple enough for smaller deployments.

Antofity Concepts supplies the RB260GSP for small networks in Kenya that need to power a handful of PoE devices without stepping up to a full rack switch.'
where name = 'MikroTik RB260GSP 5 Port Gigabit PoE Smart Switch';


update catalogue_items set
  features = '48 10 Gigabit ports
Full Layer 3 routing
Built for aggregation and core roles
High switching capacity',
  description = 'The Huawei S6320-54C-EI-48S is a Layer 3 aggregation switch with 48 10 Gigabit ports, built for networks that need to aggregate traffic from multiple access switches or servers at high speed before it reaches the network core. Its Layer 3 routing capability lets it handle inter VLAN traffic efficiently at the aggregation layer rather than passing everything up to a separate core switch.

Antofity Concepts supplies the S6320-54C-EI-48S for larger networks in Kenya that need a high capacity aggregation layer switch ahead of the network core.'
where name = 'Huawei S6320-54C-EI-48S Layer 3 Aggregation Switch';


update catalogue_items set
  features = '28 Gigabit PoE ports
Layer 3 lite managed switch
Cisco Small Business series
Web and CLI management',
  description = 'The Cisco SG300-28P is part of the Cisco Small Business range, built to bring managed switching, VLANs and basic Layer 3 routing to small and medium businesses without the cost of a full Catalyst switch. With 28 Gigabit PoE ports it can power phones, access points and cameras while still offering VLAN segmentation and other managed features through either a web interface or the command line.

Antofity Concepts supplies the SG300-28P for small and medium businesses in Kenya that want managed switch features at a more accessible price point than the Catalyst range.'
where name = 'Cisco SG300-28P Gigabit PoE Managed Switch';


update catalogue_items set
  features = '24 Gigabit ports
Unmanaged, plug and play
Compact rack mountable design
Affordable option for straightforward network expansion',
  description = 'The TP-Link 24 Port Gigabit Switch is a straightforward, unmanaged switch built for offices that simply need to add more Gigabit ports without any configuration. It works well as a low cost way to expand a network, connect a room full of desktop computers, or extend an existing switch when its ports are full.

Antofity Concepts supplies the TP-Link 24 Port Gigabit Switch for budget conscious network expansions across Kenya where advanced managed features are not required.'
where name = 'TP-Link 24 Port Gigabit Switch';


update catalogue_items set
  features = '8 Gigabit PoE ports
Layer 2 managed switch
Managed via the UniFi Network application
Compact design for small offices',
  description = 'The Ubiquiti UniFi Switch 8 PoE brings PoE and centralised management to smaller UniFi networks, letting a handful of access points, phones or cameras be powered directly from the switch. It is managed through the same UniFi Network application as UniFi access points and routers, so a small office can monitor and configure its entire network from one dashboard rather than separate tools for switches and Wi-Fi.

Antofity Concepts fits the UniFi Switch 8 PoE into smaller UniFi deployments across Kenya where a compact, centrally managed switch is needed alongside UniFi access points.'
where name = 'Ubiquiti UniFi Switch 8 PoE (Layer 2)';


update catalogue_items set
  features = '24 Gigabit ports
Fiber SFP uplinks
Managed switch
Suited to mid sized network deployments needing a fiber backbone connection',
  description = 'The Wi-Tek WI-PMS326GF is a managed Gigabit switch with 24 access ports and fiber SFP uplinks, giving it a fiber backbone connection option that many budget switches in this port range do not offer. This makes it useful in deployments where a building or floor needs to connect back to a central switch over fiber rather than copper, for example across a larger site or between buildings on the same compound.

Antofity Concepts supplies the WI-PMS326GF for mid sized network deployments across Kenya that need a fiber uplink option without moving to a higher cost enterprise switch.'
where name = 'Wi-Tek WI-PMS326GF 24 Port Gigabit Switch';
