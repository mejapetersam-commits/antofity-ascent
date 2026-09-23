-- Bulk import of the inventory list supplied on 2026-09-23 (~125 items).
-- Descriptions are written from verified manufacturer specifications
-- (product line, standards, ports, PoE, range, etc.), not copied verbatim
-- from any single source. No images yet, per request; add photos later via
-- /admin/catalogue. A few items have a note below flagging something worth
-- double-checking (an unusual price, or a model name that could not be
-- pinned down exactly) before this goes live.
--
-- Run this once in the Neon SQL Editor after 0001, 0002 and 0003.

insert into catalogue_items (name, description, price, category, in_stock, sort_order) values

-- ACCESS POINTS
('MikroTik NetBox 5 ax Wireless System', 'Weatherproof outdoor wireless device from MikroTik built around the ax chipset, used as a compact CPE or point to point radio for outdoor network links.', 'KSh 12,000', 'Access Point', true, 0),
('Ubiquiti UniFi UAP-AC-LR Access Point', 'Dual band 802.11ac indoor access point from Ubiquiti with 2x2 MIMO and extended range, managed through the UniFi controller alongside other UniFi gear.', 'KSh 21,000', 'Access Point', true, 0),
('Ubiquiti UniFi Mesh Access Point UAP-AC-M', 'Indoor or outdoor rated dual band 802.11ac mesh access point that can extend a UniFi network wirelessly or over Ethernet.', 'KSh 8,500', 'Access Point', true, 0),
('Ubiquiti UniFi Mesh Pro Access Point', 'Higher gain outdoor rated version of the UniFi Mesh access point, built for longer range wireless mesh coverage in dual band 802.11ac.', 'KSh 30,000', 'Access Point', true, 0),
('Ubiquiti UniFi AP AC PRO', 'Dual band 802.11ac access point with 3x3 MIMO and dual Ethernet ports, one of the most widely deployed UniFi access points for offices.', 'KSh 23,000', 'Access Point', true, 0),
('Huawei AirEngine 5760-51 Dual Band Indoor Access Point', 'Enterprise grade indoor Wi-Fi 6 access point from Huawei, built for dense office and campus deployments with dual band coverage.', 'KSh 35,000', 'Access Point', true, 0),
('MikroTik BaseBox 2 Outdoor 2.4GHz Wireless Device', 'Weatherproof MikroTik CPE for the 2.4GHz band, commonly used for point to point or point to multipoint outdoor wireless links.', 'KSh 9,500', 'Access Point', true, 0),
('MikroTik mANTBox ax 15s Access Point', 'Outdoor Wi-Fi 6 access point from MikroTik with a built in 15dBi 60 degree sector antenna on the 5GHz band, suited to outdoor hotspot coverage.', 'KSh 15,000', 'Access Point', true, 0),
('Ruckus R350 Wi-Fi 6 Indoor Access Point', 'Entry level enterprise Wi-Fi 6 access point from Ruckus with a 2x2:2 radio design and a combined PHY rate of up to 1.77Gbps, suited to small offices, retail and classrooms.', 'KSh 25,000', 'Access Point', true, 0),
('Ubiquiti UniFi U6-Lite Dual Band Wi-Fi 6 Access Point', 'Compact indoor Wi-Fi 6 access point from Ubiquiti with 2x2 MIMO on both bands, a popular entry point into UniFi Wi-Fi 6.', 'KSh 18,000', 'Access Point', true, 0),
('Ubiquiti UniFi U6-LR Dual Band Wi-Fi 6 Access Point', 'Long range Wi-Fi 6 access point from Ubiquiti with 4x4 MIMO for higher capacity coverage in larger indoor spaces.', 'KSh 22,000', 'Access Point', true, 0),
('Ubiquiti UniFi U6-Mesh Outdoor Wi-Fi 6 Access Point', 'Weatherproof dual band Wi-Fi 6 access point built for outdoor mesh coverage, extending a UniFi network without running cable to every point.', 'KSh 20,000', 'Access Point', true, 0),
('Ubiquiti UniFi U6-Pro Dual Band Wi-Fi 6 Access Point', 'Indoor and outdoor rated Wi-Fi 6 access point with 4x4 MIMO, built for higher density environments than the U6-Lite.', 'KSh 18,000', 'Access Point', true, 0),
('Ubiquiti U7-LR Long Range Access Point', 'Latest generation Wi-Fi 7 access point from Ubiquiti, built for higher throughput and longer range indoor coverage than the U6 line.', 'KSh 24,000', 'Access Point', true, 0),

-- ACCESSORIES
('Cat 6 Networking Cable', 'Solid copper Category 6 UTP cable rated for Gigabit Ethernet over structured cabling runs, sold by the meter.', 'KSh 30', 'Accessories', true, 0),
('Single Mode LC-LC Fiber Patch Cord 1m', 'One metre single mode fiber patch cord with LC connectors on both ends, used for short fiber runs between switches, patch panels and ODFs.', 'KSh 350', 'Accessories', true, 0),
('Single Mode LC-SC Fiber Patch Cord 1m', 'One metre single mode fiber patch cord with an LC connector on one end and SC on the other, for linking equipment using different connector types.', 'KSh 450', 'Accessories', true, 0),
('Multi Mode LC-SC Fiber Patch Cord 1m', 'One metre multi mode fiber patch cord with LC to SC connectors, suited to short reach fiber links within a building or data centre.', 'KSh 550', 'Accessories', true, 0),
('Multi Mode LC-LC Fiber Patch Cord 3m', 'Three metre multi mode fiber patch cord with LC connectors on both ends, for connecting switches and patch panels within a rack or room.', 'KSh 850', 'Accessories', true, 0),
('Multi Mode LC-SC Fiber Patch Cord 1m (Alt Grade)', 'One metre multi mode fiber patch cord with LC to SC connectors, an alternate grade to the standard LC-SC cord above.', 'KSh 650', 'Accessories', true, 0),
('RJ45 Connectors', 'Standard 8P8C RJ45 connectors used to terminate Cat5e and Cat6 cable for Ethernet ports, sold per piece.', 'KSh 10', 'Accessories', true, 0),

-- CABLES
('Cat6 Outdoor Cable 305m', 'UV resistant, outdoor rated Category 6 cable supplied in a 305 metre box, built for direct exposure outdoor Ethernet runs.', 'KSh 6,800', 'Cables', true, 0),
('Giganet Pigtails', 'Fiber optic pigtails used to fusion splice a connectorised tail onto bare fiber, completing an ODF or splice closure termination.', 'KSh 100', 'Cables', true, 0),
('Cisco SFP-H10GB-CU3M Direct Attach Cable', 'Cisco 10GBASE-CU SFP+ direct attach copper cable, 3 metres, used for short reach 10 Gigabit links between switches or between a switch and server.', 'KSh 5,500', 'Cables', true, 0),

-- CAMPING GEAR
('Deluxe Heavy Duty Foldable Camping Chair', 'Foldable outdoor camping chair with a heavy duty frame, built for field work and site visits as well as leisure use.', 'KSh 6,000', 'Camping Gear', true, 0),
('Foldable Camping Table 50cm x 95cm', 'Compact foldable camping table measuring 50 by 95cm, useful for outdoor installation work or camping trips.', 'KSh 5,000', 'Camping Gear', true, 0),

-- OUTDOOR RADIOS
('Cambium Force 200 Outdoor Radio', 'Cambium ePMP subscriber radio for the 5GHz band, designed to pair with ePMP 1000 and 2000 series access points for point to multipoint links.', 'KSh 12,500', 'Outdoor Radios', true, 0),
('Cambium Force 300 Outdoor Radio', 'Third generation Cambium ePMP subscriber radio supporting up to 600Mbps on 5GHz with an integrated high gain antenna, built for longer range point to multipoint links to ePMP 3000 series access points.', 'KSh 16,000', 'Outdoor Radios', true, 0),
('Ubiquiti LiteAP AC LAP-120 Access Point', 'Ubiquiti airMAX ac radio with an integrated 13dBi antenna for the 5GHz band, used for point to point and point to multipoint outdoor links.', 'KSh 9,500', 'Outdoor Radios', true, 0),
('Ubiquiti LiteBeam AC Gen2', 'Ubiquiti airMAX ac CPE with an integrated dish antenna for the 5GHz band, built for long range outdoor point to point links.', 'KSh 5,800', 'Outdoor Radios', true, 0),
('Ubiquiti LiteBeam M5', 'Ubiquiti airMAX M series CPE for the 5GHz band with an integrated antenna, an affordable option for point to point and point to multipoint outdoor links.', 'KSh 4,500', 'Outdoor Radios', true, 0),
('Airmax 400 Series Wireless Radio', 'High power outdoor wireless base station radio for long range point to multipoint links. Please confirm the exact model and specification with us before ordering, as this line was hard to identify precisely from the supplied name.', 'KSh 45,000', 'Outdoor Radios', true, 0),

-- PATCH CABLES
('1m Category 6 Patch Cable', 'One metre Category 6 patch cable for Gigabit Ethernet connections between equipment and patch panels.', 'KSh 250', 'Patch Cables', true, 0),
('Giganet UTP Cat6A 1m Patch Cord', 'One metre Category 6A UTP patch cord rated for 10 Gigabit Ethernet over short structured cabling runs.', 'KSh 250', 'Patch Cables', true, 0),
('Single Mode LC-LC Fiber Patch Cord 3m', 'Three metre single mode fiber patch cord with LC connectors on both ends, for longer fiber runs within a rack or between rooms.', 'KSh 550', 'Patch Cables', true, 0),
('Multi Mode LC-LC Fiber Patch Cord 3m (Patch Cable)', 'Three metre multi mode fiber patch cord with LC connectors on both ends, for short reach fiber links within a building.', 'KSh 750', 'Patch Cables', true, 0),
('Siemon Cat 6a Patch Cord 1m', 'One metre Category 6A patch cord from Siemon, a structured cabling brand known for consistent performance on 10 Gigabit Ethernet runs.', 'KSh 1,500', 'Patch Cables', true, 0),
('Siemon Cat 6a Patch Cord 3m', 'Three metre Category 6A patch cord from Siemon, rated for 10 Gigabit Ethernet over structured cabling.', 'KSh 1,800', 'Patch Cables', true, 0),

-- PATCH PANELS
('Giganet Category 6A UTP 19 inch 48 Port Patch Panel', '19 inch rack mount patch panel with 48 Category 6A ports, used to terminate structured cabling runs cleanly at the rack.', 'KSh 17,000', 'Patch Panels', true, 0),

-- POE INJECTORS
('24V UniFi PoE Injector', 'Passive 24V PoE injector used to power older UniFi access points and devices that use the 24V passive PoE standard.', 'KSh 850', 'PoE Injectors', true, 0),
('30V Cambium PoE Injector', 'Proprietary 30V PoE injector used to power Cambium ePMP and PMP series radios and access points.', 'KSh 1,500', 'PoE Injectors', true, 0),
('48V UniFi PoE Injector', 'Passive 48V PoE injector used to power current generation UniFi switches, access points and cameras.', 'KSh 2,500', 'PoE Injectors', true, 0),

-- RADIOS
('Cambium Networks 5GHz 450b Radio', 'Cambium PMP 450b subscriber module for the 5GHz band, connecting to a PMP 450 platform access point for licensed or unlicensed point to multipoint links.', 'KSh 14,000', 'Radios', true, 0),
('Ubiquiti NanoStation Loco M2 2.4GHz', 'Compact indoor or outdoor airMAX radio for the 2.4GHz band with an integrated antenna, used for shorter range point to point and point to multipoint links.', 'KSh 6,500', 'Radios', true, 0),
('Ubiquiti NanoStation Loco M5 5GHz', 'Compact indoor or outdoor airMAX radio for the 5GHz band with an integrated antenna, a lower cost option for shorter range wireless links.', 'KSh 4,500', 'Radios', true, 0),
('Ubiquiti NanoStation AC', 'Indoor or outdoor airMAX ac radio with an integrated antenna, offering higher throughput than the M series NanoStation radios.', 'KSh 9,000', 'Radios', true, 0),
('Ubiquiti NanoStation M2 2.4GHz', 'Indoor or outdoor airMAX radio for the 2.4GHz band with a higher gain integrated antenna than the Loco variant.', 'KSh 5,500', 'Radios', true, 0),
('Ubiquiti NanoStation M5 5GHz', 'Indoor or outdoor airMAX radio for the 5GHz band with a higher gain integrated antenna than the Loco variant.', 'KSh 5,500', 'Radios', true, 0),
('Ubiquiti PowerBeam AC', 'Ubiquiti airMAX ac radio with an integrated dish antenna, built for longer range point to point wireless links.', 'KSh 8,500', 'Radios', true, 0),
('Ubiquiti PowerBeam AC Gen2', 'Second generation PowerBeam AC with an improved integrated dish antenna and radio design for longer range point to point links.', 'KSh 9,500', 'Radios', true, 0),
('Ubiquiti PowerBeam M5', 'Ubiquiti airMAX M series radio with an integrated dish antenna for the 5GHz band, a lower cost option for point to point links.', 'KSh 7,500', 'Radios', true, 0),
('MikroTik RouterBOARD 2011UiAS-2HnD', 'MikroTik router board with multiple Gigabit and Fast Ethernet ports plus an integrated 2.4GHz wireless interface, running RouterOS.', 'KSh 8,500', 'Radios', true, 0),
('Ubiquiti Wave AP Micro Access Point', 'Compact 60GHz gigabit wireless access point from Ubiquiti, part of the Wave line built for high capacity short range wireless backhaul and coverage.', 'KSh 15,000', 'Radios', true, 0),

-- ROUTERS
('Cisco ISR4331/K9 Integrated Services Router', 'Cisco 4000 series Integrated Services Router built for branch office routing, with support for WAN modules and Cisco IOS XE services such as VPN and security.', 'KSh 80,000', 'Routers', true, 0),
('Ubiquiti EdgeRouter 12 Port', 'Ubiquiti EdgeRouter with multiple Gigabit ports and advanced routing features including firewalling and VPN, run on EdgeOS.', 'KSh 31,500', 'Routers', true, 0),
('Tenda F3 300Mbps Wireless Router', 'Entry level wireless router from Tenda supporting speeds up to 300Mbps, suited to small home or office networks.', 'KSh 1,500', 'Routers', true, 0),
('MikroTik Gigabit RouterOS Router (L009UIGS-RM)', 'MikroTik RouterOS based gigabit router for routing, firewalling and VPN in small to medium networks. Please confirm the exact model with us, as this line was hard to match precisely to a current MikroTik part number.', 'KSh 14,500', 'Routers', true, 0),
('MikroTik Wireless RouterOS Router (L009UIGS-2HaxD-IN)', 'MikroTik RouterOS based wireless router with a 2.4GHz radio for small office and home networks. Please confirm the exact model with us, as this line was hard to match precisely to a current MikroTik part number.', 'KSh 15,000', 'Routers', true, 0),
('MikroTik RB2011 Rackmount Router Board', 'Rackmountable MikroTik router board with a mix of Gigabit and Fast Ethernet ports, running RouterOS for small to medium network routing.', 'KSh 9,500', 'Routers', true, 0),
('MikroTik RB941-2nD-TC hAP Lite', 'Compact home and small office wireless router from MikroTik with four Ethernet ports and a 2.4GHz radio, running RouterOS.', 'KSh 3,500', 'Routers', true, 0),
('MikroTik RB951Ui-2HnD Router', 'MikroTik wireless router with five Ethernet ports, a 2.4GHz radio and a USB port for 3G/4G modems or storage, running RouterOS.', 'KSh 7,000', 'Routers', true, 0),
('Starlink Mini Kit', 'Compact, self contained Starlink satellite internet kit with an integrated Wi-Fi router, built for portable or off grid internet connectivity.', 'KSh 27,500', 'Routers', true, 0),

-- SERVICES
('Driver Installation Service', 'On site or remote service to install and configure device drivers for computers and peripherals.', 'KSh 2,500', 'Services', true, 0),
('Installation and Configuration Service', 'Callout fee for installation and configuration of networking or computing equipment, billed alongside the hardware supplied.', 'KSh 10', 'Services', true, 0),
('Delivery Fee', 'Standard delivery fee for orders within our normal delivery area.', 'KSh 500', 'Services', true, 0),
('Windows 10 Installation and Activation', 'Full installation and activation service for Windows 10 on a customer device.', 'KSh 6,500', 'Services', true, 0),
('Windows 11 Installation and Activation', 'Full installation and activation service for Windows 11 on a customer device.', 'KSh 8,500', 'Services', true, 0),
('Microsoft Office Installation and Activation', 'Installation and activation service for Microsoft Office on a customer device.', 'KSh 3,500', 'Services', true, 0),

-- SFP MODULES
('Huawei eSFP 1310nm 1.25G 10km Optical Transceiver', 'Huawei single mode SFP transceiver operating at 1310nm, rated for Gigabit links up to 10km.', 'KSh 1,500', 'SFP Modules', true, 0),
('MikroTik S-31DLC20D SFP Module 20km Single Mode', 'MikroTik single mode SFP transceiver rated for Gigabit links up to 20km.', 'KSh 2,000', 'SFP Modules', true, 0),
('Huawei SFP+ Transceiver 10G Single Mode 10km', 'Huawei single mode SFP+ transceiver rated for 10 Gigabit links up to 10km.', 'KSh 4,000', 'SFP Modules', true, 0),
('10G 40km Single Mode SFP', 'Long haul single mode SFP+ transceiver rated for 10 Gigabit links up to 40km.', 'KSh 15,000', 'SFP Modules', true, 0),
('Cisco SFP-10G-LRM 10GBASE-LRM SFP+', 'Cisco 10GBASE-LRM SFP+ transceiver, designed to run 10 Gigabit Ethernet over existing multimode fiber over longer distances than standard short reach optics.', 'KSh 4,000', 'SFP Modules', true, 0),
('Huawei SFP+ Transceiver 10G-SR 850nm 0.3km', 'Huawei short reach multimode SFP+ transceiver operating at 850nm, rated for 10 Gigabit links up to 300m.', 'KSh 2,000', 'SFP Modules', true, 0),
('Cisco 10GBASE SFP+ Module', 'Cisco 10 Gigabit SFP+ transceiver for short to medium reach fiber links between switches.', 'KSh 4,500', 'SFP Modules', true, 0),
('Huawei SFP Transceiver 2.5G Single Mode 15km', 'Huawei single mode SFP transceiver rated for 2.5 Gigabit links up to 15km.', 'KSh 2,500', 'SFP Modules', true, 0),
('Huawei SFP+ Transceiver 25G-SR 850nm 0.3km', 'Huawei short reach multimode SFP+ transceiver rated for 25 Gigabit links up to 300m.', 'KSh 2,500', 'SFP Modules', true, 0),
('Huawei QSFP 40G Transceiver', 'Huawei QSFP+ transceiver rated for 40 Gigabit links, used on switches and routers with QSFP uplink ports.', 'KSh 5,000', 'SFP Modules', true, 0),
('Cisco QSFP-40G-SR-BD', 'Cisco bidirectional QSFP+ transceiver rated for 40 Gigabit short reach links over standard duplex multimode fiber.', 'KSh 10,000', 'SFP Modules', true, 0),
('Finisar FCLF-8521-3 1000BASE-T Copper SFP', 'Finisar copper SFP transceiver supporting 1000BASE-T over standard Cat5e/6 cable, used to add a Gigabit copper port to SFP only switch slots.', 'KSh 1,500', 'SFP Modules', true, 0),
('FS Single Mode 1G SFP', 'Single mode Gigabit SFP transceiver from FS, compatible with major switch brands for fiber uplinks.', 'KSh 3,500', 'SFP Modules', true, 0),
('FS Copper RJ45 SFP', 'Copper RJ45 SFP transceiver from FS supporting Gigabit Ethernet over standard copper cable, for SFP only switch ports.', 'KSh 2,500', 'SFP Modules', true, 0),
('Huawei 1000BASE-T Copper SFP Module', 'Huawei copper SFP transceiver supporting 1000BASE-T over standard Cat5e/6 cable.', 'KSh 1,500', 'SFP Modules', true, 0),
('Cisco GLC-SX-MMD Transceiver Module', 'Cisco Gigabit SFP transceiver for short reach multimode fiber links.', 'KSh 3,500', 'SFP Modules', true, 0),
('Cisco GLC-LH-SMD Transceiver Module', 'Cisco Gigabit SFP transceiver supporting both single mode and multimode fiber for longer reach links.', 'KSh 3,500', 'SFP Modules', true, 0),

-- SWITCHES
('Cisco Catalyst 3750G-12S 12 Port SFP Switch (WS-C3750G-12S-S)', 'Cisco Catalyst 3750G switch with 12 Gigabit SFP ports, stackable and built for core or aggregation roles in a campus network.', 'KSh 35,000', 'Switches', true, 0),
('Cisco Catalyst 2960 24 Port Switch', 'Cisco Catalyst 2960 series 24 port switch, a widely deployed layer 2 access switch for offices and campus networks.', 'KSh 15,000', 'Switches', true, 0),
('Cisco Catalyst 2960-S 24 Port PoE Plus Switch', 'Cisco Catalyst 2960-S switch with 24 PoE Plus ports, built for powering IP phones, access points and cameras alongside data.', 'KSh 28,000', 'Switches', true, 0),
('Cisco Catalyst 2960P 48 Port PoE Switch', 'Cisco Catalyst 2960 series switch with 48 PoE ports, suited to larger offices needing PoE across many endpoints.', 'KSh 30,000', 'Switches', true, 0),
('Cisco Catalyst 2960 24 Port PoE Switch', 'Cisco Catalyst 2960 series switch with 24 PoE ports for powering access points, phones and cameras.', 'KSh 25,000', 'Switches', true, 0),
('Cisco Catalyst 2960S 48 Port Gigabit PoE+ Switch', 'Cisco Catalyst 2960S switch with 48 Gigabit PoE Plus ports, built for larger deployments needing Gigabit speed with power over Ethernet.', 'KSh 60,000', 'Switches', true, 0),
('Cisco 2960S 48 Port Gigabit Switch (WS-C2960S-48TD-L)', 'Cisco Catalyst 2960S switch with 48 Gigabit data ports and dual uplinks, a non PoE access switch for larger networks.', 'KSh 18,000', 'Switches', true, 0),
('Cisco Catalyst 2960-X 48 Port PoE Switch', 'Cisco Catalyst 2960-X switch with 48 PoE ports, an upgraded generation from the 2960-S with improved stacking and management.', 'KSh 85,000', 'Switches', true, 0),
('Cisco Catalyst 2960-XR 24 Port PoE Switch', 'Cisco Catalyst 2960-XR switch with 24 PoE ports and Layer 3 lite routing features, suited to networks needing more than pure Layer 2 switching.', 'KSh 65,000', 'Switches', true, 0),
('Cisco Catalyst 3560X 48 Port PoE Plus Switch', 'Cisco Catalyst 3560X switch with 48 PoE Plus ports and Layer 3 routing capability for campus distribution layer roles.', 'KSh 40,000', 'Switches', true, 0),
('Cisco Catalyst 3650-48PS-E L3 Managed Switch', 'Cisco Catalyst 3650 switch with 48 PoE ports and full Layer 3 managed routing, built for larger campus networks.', 'KSh 65,000', 'Switches', true, 0),
('Cisco Catalyst WS-C3750-24P PoE Switch', 'Cisco Catalyst 3750 switch with 24 PoE ports and stacking support for building larger switch fabrics.', 'KSh 20,000', 'Switches', true, 0),
('Cisco Catalyst WS-C3750G-48TS-S PoE Switch', 'Cisco Catalyst 3750G switch with 48 Gigabit ports. This price looks unusually high next to similar 3750 series switches on this list, please double check it before publishing.', 'KSh 450,000', 'Switches', true, 0),
('Cisco Catalyst WS-C3750-24P Gigabit Switch', 'Cisco Catalyst 3750 switch with 24 Gigabit ports and stacking support for campus network deployments.', 'KSh 15,000', 'Switches', true, 0),
('Cisco Catalyst WS-C3750X-48P-E 48 Port PoE Switch', 'Cisco Catalyst 3750X switch with 48 PoE ports and full Layer 3 IP services, built for demanding campus networks.', 'KSh 65,000', 'Switches', true, 0),
('Cisco Catalyst 3850 48 Port PoE Switch', 'Cisco Catalyst 3850 switch with 48 PoE ports, stacking and full Layer 3 routing, a common core or distribution switch for enterprise networks.', 'KSh 80,000', 'Switches', true, 0),
('Cisco C1300 8 Port Full PoE Gigabit Switch', 'Cisco Business 1300 series compact 8 port switch with full PoE budget across all ports, suited to small offices needing PoE for a handful of devices.', 'KSh 87,000', 'Switches', true, 0),
('Cisco Catalyst 3750 48P PoE Switch', 'Cisco Catalyst 3750 switch with 48 PoE ports and stacking support for larger office networks.', 'KSh 32,500', 'Switches', true, 0),
('Cisco Catalyst C9200 24 Port PoE Plus Switch (4x1G SFP)', 'Cisco Catalyst 9200 series switch with 24 PoE Plus ports and 4 Gigabit SFP uplinks, Cisco current generation access switch platform.', 'KSh 240,000', 'Switches', true, 0),
('Cisco Catalyst C9200 24 Port PoE Plus Switch (4x10G SFP)', 'Cisco Catalyst 9200 series switch with 24 PoE Plus ports and 4 10 Gigabit SFP+ uplinks for higher capacity uplinks than the 1G uplink variant.', 'KSh 230,000', 'Switches', true, 0),
('Cisco Catalyst C9200 48 Port PoE Plus Switch (4x10G SFP)', 'Cisco Catalyst 9200 series switch with 48 PoE Plus ports and 4 10 Gigabit SFP+ uplinks, suited to larger deployments needing high port density with fast uplinks.', 'KSh 250,000', 'Switches', true, 0),
('Huawei CloudEngine S6730-H24X6C Core Switch', 'Huawei CloudEngine data centre and campus core switch with 24 10 Gigabit ports and additional high speed uplinks, built for aggregation and core roles.', 'KSh 320,000', 'Switches', true, 0),
('Huawei CloudEngine 6881-4S6CQ Core Switch', 'Huawei CloudEngine core switch platform built for data centre and campus core deployments needing high throughput switching.', 'KSh 320,000', 'Switches', true, 0),
('D-Link DGS-1210-26PS-E Smart Managed PoE Switch', 'D-Link smart managed switch with PoE ports and web based management, suited to small and medium office networks.', 'KSh 20,000', 'Switches', true, 0),
('D-Link DGS-1210-28P PoE Web Smart Switch', 'D-Link web smart switch with 28 PoE capable ports, offering managed features without the complexity of a full enterprise switch.', 'KSh 20,000', 'Switches', true, 0),
('D-Link DGS-1210-28 Non-PoE Web Smart Gigabit Switch', 'Non PoE version of the D-Link DGS-1210-28 web smart switch, offering the same management features without power over Ethernet.', 'KSh 10,000', 'Switches', true, 0),
('D-Link 8 Port PoE Web Smart Gigabit Switch', 'Compact D-Link web smart switch with 8 PoE capable Gigabit ports for small networks.', 'KSh 7,500', 'Switches', true, 0),
('Dahua 16 Port Gigabit PoE Switch', 'Dahua unmanaged switch with 16 Gigabit PoE ports, commonly used to power IP cameras and access points.', 'KSh 9,500', 'Switches', true, 0),
('Dahua 8 Port Gigabit PoE Switch', 'Dahua unmanaged switch with 8 Gigabit PoE ports for smaller camera or access point deployments.', 'KSh 5,500', 'Switches', true, 0),
('Dahua 8 Port PoE Switch', 'Dahua unmanaged PoE switch with 8 Fast Ethernet ports, an affordable option for smaller camera installations.', 'KSh 7,500', 'Switches', true, 0),
('Ubiquiti EdgeSwitch 48 Port PoE+ (ES-48-500W)', 'Ubiquiti EdgeSwitch with 48 Gigabit PoE Plus ports and a 500W power budget, a managed Layer 2/3 switch built for larger UniFi and EdgeMAX deployments.', 'KSh 90,000', 'Switches', true, 0),
('MikroTik RB260GS SOHO Gigabit Switch', 'Compact 5 port Gigabit switch from MikroTik with one SFP slot, suited to small office and home networks.', 'KSh 4,500', 'Switches', true, 0),
('MikroTik RB260GSP 5 Port Gigabit PoE Smart Switch', 'MikroTik smart switch with 5 Gigabit Ethernet ports including PoE output, useful for powering a small number of access points or cameras.', 'KSh 5,500', 'Switches', true, 0),
('Huawei S6320-54C-EI-48S Layer 3 Aggregation Switch', 'Huawei Layer 3 switch with 48 10 Gigabit ports, built for aggregation and core roles in larger networks.', 'KSh 250,000', 'Switches', true, 0),
('Cisco SG300-28P Gigabit PoE Managed Switch', 'Cisco Small Business 300 series switch with 28 Gigabit PoE ports and Layer 3 lite routing, a managed switch aimed at small and medium businesses.', 'KSh 30,000', 'Switches', true, 0),
('TP-Link 24 Port Gigabit Switch', 'TP-Link unmanaged 24 port Gigabit switch for straightforward network expansion without configuration.', 'KSh 10,000', 'Switches', true, 0),
('Ubiquiti UniFi Switch 8 PoE (Layer 2)', 'Compact 8 port UniFi switch with PoE output, managed through the UniFi controller alongside other UniFi network gear.', 'KSh 21,000', 'Switches', true, 0),
('Wi-Tek WI-PMS326GF 24 Port Gigabit Switch', 'Managed Gigabit switch from Wi-Tek with 24 ports and fiber SFP uplinks, used for mid sized network deployments needing a fiber backbone connection.', 'KSh 25,000', 'Switches', true, 0),

-- UPS
('Shield 1500VA Mini Tower UPS', 'Mini tower uninterruptible power supply rated at 1500VA, providing backup power to protect networking and computing equipment from outages and surges.', 'KSh 18,000', 'UPS', true, 0)

;
