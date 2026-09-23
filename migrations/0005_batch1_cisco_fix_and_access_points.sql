-- Batch 1 of the content upgrade: features + in-depth, SEO-minded
-- descriptions. This batch covers the live Cisco C9200L switch (fixing the
-- broken sentence left over from the original supplier copy) plus every
-- Access Point item from the 0004 import. Further batches (Switches,
-- Routers, Radios, SFP Modules, etc.) will follow once this style is
-- confirmed.

update catalogue_items set
  description = 'The Cisco C9200L-24P-4X-E Catalyst Switch delivers enterprise grade networking for medium businesses. With 24 Gigabit Ethernet PoE+ ports and 4 10G SFP+ uplinks, it offers a 370W PoE budget to power devices like IP phones and cameras. Kenyan enterprises benefit from its Network Essentials features, Layer 2/3 management, and robust security, ensuring scalable, high speed connectivity.

Businesses require secure, high speed networks to handle diverse applications. This switch provides Gigabit ports with 10G uplinks, PoE+ capabilities, and intuitive management via Cisco DNA Center, ideal for Kenyan professionals. Its advanced security and traffic optimization ensure efficient, protected operations across sectors.

Nairobi offices power VoIP phones and wireless access points, enhancing communication. Retail chains connect POS systems and IP cameras for secure transactions and surveillance. Schools link computer labs for e learning, maintaining stable networks. Healthcare facilities power medical devices and secure patient data. Data centers use the 10G uplinks for high speed server links.

This switch supports IEEE 802.3af/at PoE devices, standard Ethernet cables, and SFP+ transceivers. The 4 10G SFP+ slots enable high speed fiber uplinks for campus networks, and it integrates cleanly with existing Cisco and third party equipment. Management runs through Cisco DNA Center, a web UI, or the CLI, giving flexibility depending on how a team prefers to work.

With a 128 Gbps switching capacity and a 95.23 Mpps forwarding rate, it handles video streaming, cloud backups, and large transfers efficiently. VLANs, QoS, and link aggregation optimize traffic, and 802.1X authentication, ACLs, DHCP snooping, and TrustSec protect against threats. Cisco DNA Center adds centralized management and analytics, while Energy Efficient Ethernet lowers power use.

Antofity Concepts supplies and installs the C9200L-24P-4X-E for offices, schools, retail chains, and clinics across Kenya that need secure, scalable connectivity with room to grow.'
where name = 'Cisco C9200L-24P-4X-E Catalyst Switch';


update catalogue_items set
  features = 'Weatherproof outdoor enclosure
Wi-Fi 6 (802.11ax) chipset
Gigabit Ethernet port
Passive PoE powered
Suited to point to point and point to multipoint links',
  description = 'The MikroTik NetBox 5 ax is a compact, weatherproof outdoor wireless device built around a Wi-Fi 6 (802.11ax) chipset. Housed in a rugged, UV resistant enclosure, it is designed to survive direct sun, rain and dust while delivering a stable signal for outdoor deployments across Kenya.

The device runs RouterOS, giving installers full control over routing, firewalling, bridging and wireless settings from one familiar interface. A single Gigabit Ethernet port, powered by passive PoE, keeps installation simple since one cable carries both data and power up to a rooftop or pole mount.

Because it uses the newer ax chipset, the NetBox 5 ax performs better in congested radio environments than older 802.11ac hardware, making it a solid choice for internet service providers, estates and offices that need a dependable outdoor point to point or point to multipoint link. Antofity Concepts supplies, configures and installs the NetBox 5 ax as part of complete outdoor wireless links, including alignment, mounting and testing.'
where name = 'MikroTik NetBox 5 ax Wireless System';


update catalogue_items set
  features = 'Dual band 802.11ac Wi-Fi
2x2 MIMO with extended range
Managed via the UniFi Network application
Single Gigabit Ethernet port with PoE
Indoor ceiling or wall mount',
  description = 'The Ubiquiti UniFi UAP-AC-LR is one of the most widely deployed access points in offices, homes and small businesses across Kenya, and for good reason. It broadcasts on both the 2.4GHz and 5GHz bands at the same time, giving older and newer devices a strong, reliable connection whichever band they prefer.

The Long Range design pushes coverage further than a standard access point, so fewer units are needed to cover an open plan office, a row of classrooms or a family home. Every UAP-AC-LR is managed through the UniFi Network application, which lets an installer see every access point on site, monitor connected clients, set up guest Wi-Fi and push firmware updates from one dashboard.

Power and data both travel over a single Ethernet cable using PoE, keeping installation neat with no extra power sockets needed near the ceiling. Antofity Concepts supplies and installs the UAP-AC-LR either as a standalone access point or as part of a full UniFi network alongside UniFi switches and routers, sized correctly for the space it needs to cover.'
where name = 'Ubiquiti UniFi UAP-AC-LR Access Point';


update catalogue_items set
  features = 'Indoor or outdoor rated
Dual band 802.11ac
Wireless mesh or wired uplink
Weatherproof housing
PoE powered',
  description = 'The Ubiquiti UniFi Mesh UAP-AC-M is built to extend a UniFi Wi-Fi network into spaces a standard indoor access point cannot reach, whether that is a courtyard, a parking area or a second building on the same compound. Its weatherproof housing lets it be mounted outdoors while still working just as well inside.

Where running a new Ethernet cable is not practical, the Mesh AP can connect wirelessly to another UniFi access point and rebroadcast the signal, making it a fast way to extend coverage without extra cabling. Like the rest of the UniFi range it runs on dual band 802.11ac Wi-Fi and is managed through the UniFi Network application alongside every other access point, switch and router on site.

Antofity Concepts fits the UAP-AC-M for homes, estates and businesses in Nairobi that need to stretch reliable Wi-Fi coverage beyond the main building, and can pair it with a UniFi PoE injector or switch for a clean, single cable installation.'
where name = 'Ubiquiti UniFi Mesh Access Point UAP-AC-M';


update catalogue_items set
  features = 'Outdoor rated, higher gain antennas than the standard Mesh AP
Dual band 802.11ac
Longer range wireless mesh links
PoE powered
Weatherproof housing',
  description = 'The Ubiquiti UniFi Mesh Pro is the higher powered version of the outdoor mesh access point, built for sites that need to bridge a longer distance wirelessly or cover a wider outdoor area than the standard Mesh AP can manage.

Its higher gain antennas give it noticeably better range for outdoor to outdoor links, useful for connecting a second building, a warehouse yard or a large compound back to the main network without trenching cable across the property. It runs dual band 802.11ac Wi-Fi, is fully weatherproof, and is managed through the same UniFi Network application as every other UniFi device on site.

Antofity Concepts recommends the Mesh Pro over the standard Mesh AP wherever a wireless mesh link needs to cover more than a short gap, and installs it as part of complete UniFi networks across Nairobi and beyond.'
where name = 'Ubiquiti UniFi Mesh Pro Access Point';


update catalogue_items set
  features = 'Dual band 802.11ac with 3x3 MIMO
Dual Gigabit Ethernet ports
Managed via the UniFi Network application
PoE powered
Ceiling or wall mountable',
  description = 'The Ubiquiti UniFi AP AC PRO has been one of the standard access points for small and medium offices for years, offering solid dual band Wi-Fi performance with 3x3 MIMO for higher throughput than entry level access points.

Its dual Gigabit Ethernet ports allow it to also act as a network bridge, extending wired connectivity to a second device nearby, which is useful in offices where an extra port near the ceiling saves running a fresh cable. It is powered over Ethernet and managed centrally through the UniFi Network application, so firmware updates, guest networks and client monitoring are handled from one place across every access point on site.

Antofity Concepts fits the AP AC PRO in offices, schools and retail spaces across Kenya that need dependable Wi-Fi coverage backed by straightforward central management.'
where name = 'Ubiquiti UniFi AP AC PRO';


update catalogue_items set
  features = 'Wi-Fi 6 (802.11ax)
Dual band coverage
Enterprise grade, built for dense deployments
Centrally managed
PoE powered',
  description = 'The Huawei AirEngine 5760-51 is an enterprise grade Wi-Fi 6 access point built for environments where a large number of devices need fast, stable wireless coverage at the same time, such as busy offices, lecture halls and conference centres.

Wi-Fi 6 (802.11ax) improves how efficiently the access point serves many connected devices at once compared to older 802.11ac hardware, reducing congestion during peak hours. As part of the Huawei enterprise networking range, the AirEngine 5760-51 is designed to be centrally managed alongside Huawei switches and controllers, giving IT teams visibility over the whole network from one place.

Antofity Concepts supplies and installs the AirEngine 5760-51 for organisations in Kenya that are upgrading to Wi-Fi 6 and need enterprise grade reliability rather than consumer grade access points.'
where name = 'Huawei AirEngine 5760-51 Dual Band Indoor Access Point';


update catalogue_items set
  features = 'Weatherproof outdoor enclosure
2.4GHz radio
Runs RouterOS
PoE powered
Suited to point to point and point to multipoint links',
  description = 'The MikroTik BaseBox 2 is a rugged, weatherproof radio built for outdoor wireless links on the 2.4GHz band, commonly used to connect a router or switch on one building to a network elsewhere on a compound without running new cable across open ground.

Running RouterOS, it gives an installer the same routing, bridging and wireless configuration options found across the rest of the MikroTik range, in a compact enclosure designed to be mounted on a pole or wall and exposed to the weather.

Antofity Concepts uses the BaseBox 2 to build affordable outdoor point to point and point to multipoint wireless links for businesses, schools and estates across Kenya where trenching cable is not practical or cost effective.'
where name = 'MikroTik BaseBox 2 Outdoor 2.4GHz Wireless Device';


update catalogue_items set
  features = 'Wi-Fi 6 (802.11ax) on the 5GHz band
Built in 15dBi, 60 degree sector antenna
Weatherproof outdoor design
Runs RouterOS
PoE powered',
  description = 'The MikroTik mANTBox ax 15s combines a Wi-Fi 6 radio with a built in 15dBi sector antenna covering a 60 degree arc, making it a strong option for outdoor hotspot coverage across an estate, a market area or a school compound.

Because the antenna and radio are integrated into one weatherproof unit, installation is simpler than pairing a separate access point with an external antenna. Running RouterOS gives full control over wireless settings, access lists and bandwidth management, useful for public Wi-Fi or paid hotspot deployments.

Antofity Concepts installs the mANTBox ax 15s for outdoor Wi-Fi coverage projects across Kenya where a wide, weatherproof coverage area is needed from a single mounting point.'
where name = 'MikroTik mANTBox ax 15s Access Point';


update catalogue_items set
  features = 'Wi-Fi 6 (802.11ax), 2x2:2 radio design
Combined PHY rate up to 1.77Gbps
Supports up to 256 concurrent clients
Single Gigabit Ethernet port with PoE
Managed via Ruckus Cloud, SmartZone or standalone',
  description = 'The Ruckus R350 is an entry level enterprise Wi-Fi 6 access point built by Ruckus, a brand known for handling difficult, high interference wireless environments well. With a 2x2:2 radio design it reaches a combined PHY rate of up to 1.77Gbps and supports up to 256 concurrent clients, making it suited to small offices, retail stores, restaurants and classrooms.

Ruckus patented technologies such as BeamFlex help the R350 maintain a stronger signal in environments with a lot of interference from other wireless devices, a common challenge in busy Kenyan offices and commercial buildings. It can be managed from the Ruckus Cloud, an on premises SmartZone controller, or run standalone, giving flexibility depending on how the rest of the network is set up.

Antofity Concepts supplies and installs the Ruckus R350 for businesses wanting enterprise grade Wi-Fi 6 performance at an accessible price point.'
where name = 'Ruckus R350 Wi-Fi 6 Indoor Access Point';


update catalogue_items set
  features = 'Wi-Fi 6 (802.11ax)
2x2 MIMO on both bands
Compact indoor design
Managed via the UniFi Network application
PoE powered',
  description = 'The Ubiquiti UniFi U6-Lite is the most affordable way into Wi-Fi 6 within the UniFi range, offering 2x2 MIMO on both the 2.4GHz and 5GHz bands in a compact, unobtrusive indoor design.

It is a straightforward upgrade path for existing UniFi networks still running older 802.11ac access points, bringing the efficiency benefits of Wi-Fi 6 to smaller offices and homes without the cost of the higher end U6-Pro or U6-LR. Management runs through the same UniFi Network application as the rest of the range, so a mixed deployment of older and newer UniFi access points can still be monitored from one dashboard.

Antofity Concepts recommends the U6-Lite for smaller rooms and offices in Kenya that want Wi-Fi 6 performance without paying for coverage they do not need.'
where name = 'Ubiquiti UniFi U6-Lite Dual Band Wi-Fi 6 Access Point';


update catalogue_items set
  features = 'Wi-Fi 6 (802.11ax)
4x4 MIMO for higher capacity
Long range indoor coverage
Managed via the UniFi Network application
PoE powered',
  description = 'The Ubiquiti UniFi U6-LR steps up from the U6-Lite with 4x4 MIMO on both bands, giving it more capacity and range for larger rooms, open plan offices and busier networks where many devices connect at once.

It is built for indoor use and is one of the higher capacity access points in the UniFi Wi-Fi 6 range, suited to businesses that have outgrown entry level access points but do not yet need the outdoor rating of the U6-Mesh or U6-Pro. As with every UniFi access point, it is powered over Ethernet and managed through the UniFi Network application alongside the rest of the network.

Antofity Concepts fits the U6-LR in larger offices and commercial spaces across Kenya where both range and capacity matter.'
where name = 'Ubiquiti UniFi U6-LR Dual Band Wi-Fi 6 Access Point';


update catalogue_items set
  features = 'Wi-Fi 6 (802.11ax)
Weatherproof, outdoor rated
Dual band mesh coverage
Can connect wirelessly to extend a UniFi network
PoE powered',
  description = 'The Ubiquiti UniFi U6-Mesh brings Wi-Fi 6 performance outdoors, in a weatherproof housing built to extend coverage across courtyards, compounds and outdoor seating areas without running fresh cable to every point.

Like the UniFi AC Mesh before it, it can connect wirelessly back to another UniFi access point when a wired connection is not practical, while still supporting the newer, more efficient 802.11ax standard. It fits into an existing UniFi network and is managed through the same UniFi Network application as every other access point on site.

Antofity Concepts installs the U6-Mesh for homes, estates and businesses in Kenya that need Wi-Fi 6 coverage to reach beyond the walls of the main building.'
where name = 'Ubiquiti UniFi U6-Mesh Outdoor Wi-Fi 6 Access Point';


update catalogue_items set
  features = 'Wi-Fi 6 (802.11ax)
4x4 MIMO
Indoor and outdoor rated
Managed via the UniFi Network application
PoE powered',
  description = 'The Ubiquiti UniFi U6-Pro is built to work equally well indoors or outdoors, with 4x4 MIMO Wi-Fi 6 performance that sits between the compact U6-Lite and the longer range U6-LR.

Its indoor and outdoor rating gives some flexibility during installation, useful for covered outdoor areas or spaces where the exact mounting location is not yet finalised. It manages through the same UniFi Network application as the rest of the range and is powered over Ethernet for a clean installation.

Antofity Concepts fits the U6-Pro across offices, schools and covered outdoor spaces in Kenya that need dependable Wi-Fi 6 coverage in a single, versatile access point.'
where name = 'Ubiquiti UniFi U6-Pro Dual Band Wi-Fi 6 Access Point';


update catalogue_items set
  features = 'Wi-Fi 7 (802.11be), the newest wireless standard
Long range indoor coverage
Managed via the UniFi Network application
PoE powered
Backward compatible with older Wi-Fi devices',
  description = 'The Ubiquiti U7-LR is a move into Wi-Fi 7, the newest wireless standard, bringing higher potential throughput and improved efficiency over Wi-Fi 6 while remaining fully backward compatible with older phones, laptops and IoT devices still running 802.11ac or ax.

Its long range design suits larger rooms and busier networks that want to future proof their Wi-Fi ahead of more Wi-Fi 7 capable devices reaching the market in Kenya. It is managed through the UniFi Network application alongside any existing UniFi access points, switches and routers, so it can be introduced into a network gradually rather than requiring a full upgrade at once.

Antofity Concepts supplies the U7-LR for businesses in Kenya that want to be early adopters of Wi-Fi 7 technology.'
where name = 'Ubiquiti U7-LR Long Range Access Point';
