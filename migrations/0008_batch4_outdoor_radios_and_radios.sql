-- Batch 4 of the content upgrade: features + in-depth, SEO-minded
-- descriptions for every Outdoor Radios and Radios item from the 0004 import.

-- OUTDOOR RADIOS

update catalogue_items set
  features = '5GHz ePMP subscriber radio
Pairs with ePMP 1000/2000 access points
Integrated antenna
Outdoor rated, weatherproof
PoE powered',
  description = 'The Cambium Force 200 is an ePMP subscriber radio for the 5GHz band, built to connect to Cambium ePMP 1000 or 2000 series access points as part of a point to multipoint wireless network. It is commonly deployed by internet service providers and businesses across Kenya to deliver last mile connectivity to customer sites without running fiber or copper to every location.

Its integrated antenna and weatherproof housing keep installation straightforward, needing only a mounting bracket and a line of sight back to the access point.

Antofity Concepts supplies and installs the Force 200 as part of complete ePMP wireless networks for last mile connectivity across Kenya.'
where name = 'Cambium Force 200 Outdoor Radio';


update catalogue_items set
  features = 'Third generation Cambium ePMP subscriber radio
Up to 600Mbps on 5GHz
Integrated high gain antenna
Pairs with ePMP 3000 series access points
Outdoor rated, weatherproof',
  description = 'The Cambium Force 300 is a third generation ePMP subscriber radio, supporting up to 600Mbps on the 5GHz band with an integrated high gain antenna for longer range links than the Force 200. It is built to pair with Cambium ePMP 3000 series access points, giving higher capacity point to multipoint links suited to customers needing more bandwidth than entry level wireless links provide.

As with other Cambium subscriber radios, its weatherproof housing and integrated antenna keep installation simple, needing only a clear line of sight back to the access point.

Antofity Concepts supplies and installs the Force 300 for internet service providers and businesses across Kenya needing higher capacity last mile wireless links.'
where name = 'Cambium Force 300 Outdoor Radio';


update catalogue_items set
  features = 'Integrated 13dBi antenna
5GHz airMAX ac radio
Point to point and point to multipoint use
Outdoor rated, weatherproof
PoE powered',
  description = 'The Ubiquiti LiteAP AC combines an airMAX ac radio with an integrated 13dBi antenna, giving a compact, weatherproof option for point to point or point to multipoint wireless links on the 5GHz band. It is commonly used as either a subscriber radio connecting back to a Rocket or Sector access point, or as one end of a direct point to point link between two sites.

Antofity Concepts supplies and installs the LiteAP AC for outdoor wireless links across Kenya where a compact, all in one radio and antenna solution is preferred over a separate radio and dish.'
where name = 'Ubiquiti LiteAP AC LAP-120 Access Point';


update catalogue_items set
  features = 'Integrated dish antenna
5GHz airMAX ac radio
Long range point to point links
Outdoor rated, weatherproof
PoE powered',
  description = 'The Ubiquiti LiteBeam AC Gen2 pairs an airMAX ac radio with an integrated dish antenna, giving it a longer effective range than radios with smaller integrated antennas such as the LiteAP AC. It is built for point to point wireless links, commonly used to connect two buildings, a customer site back to an internet service provider, or a remote camera location back to a main network.

Antofity Concepts installs the LiteBeam AC Gen2 for long range point to point wireless links across Kenya where running physical cable between sites is not practical or cost effective.'
where name = 'Ubiquiti LiteBeam AC Gen2';


update catalogue_items set
  features = 'Integrated dish antenna
5GHz airMAX M series radio
Affordable point to point and point to multipoint option
Outdoor rated, weatherproof
PoE powered',
  description = 'The Ubiquiti LiteBeam M5 is an earlier generation, more affordable radio in the airMAX line, still widely used for point to point and point to multipoint wireless links on the 5GHz band. Its integrated dish antenna keeps installation simple, and its lower cost makes it a practical option where budget matters more than the higher throughput of newer ac generation radios.

Antofity Concepts supplies the LiteBeam M5 for cost sensitive outdoor wireless link projects across Kenya.'
where name = 'Ubiquiti LiteBeam M5';


update catalogue_items set
  features = 'High power outdoor base station radio
Built for long range point to multipoint links
Outdoor rated, weatherproof',
  description = 'This is a high power outdoor wireless base station radio built for long range point to multipoint links, typically used by internet service providers to serve multiple subscriber radios from a single elevated location.

Please confirm the exact model and specification with our team before ordering, as this listing was difficult to match precisely to a specific current product line from the name supplied.

Antofity Concepts can recommend a confirmed base station radio to match your coverage and capacity requirements before you order.'
where name = 'Airmax 400 Series Wireless Radio';


-- RADIOS

update catalogue_items set
  features = '5GHz PMP 450b subscriber module
Pairs with PMP 450 platform access points
Point to multipoint wireless
Licensed and unlicensed spectrum options
Outdoor rated, weatherproof',
  description = 'The Cambium PMP 450b is a subscriber module for the 5GHz band, connecting to a PMP 450 platform access point as part of a licensed or unlicensed point to multipoint wireless network. The PMP 450 platform is widely used by wireless internet service providers for its interference resistance and ability to maintain performance in busy radio environments.

Antofity Concepts supplies the PMP 450b for internet service providers and businesses across Kenya running or joining a PMP 450 based wireless network.'
where name = 'Cambium Networks 5GHz 450b Radio';


update catalogue_items set
  features = 'Compact integrated antenna radio
2.4GHz airMAX M series
Point to point and point to multipoint use
Outdoor rated, weatherproof
PoE powered',
  description = 'The Ubiquiti NanoStation Loco M2 is a compact, integrated antenna radio for the 2.4GHz band, offering an affordable option for shorter range point to point and point to multipoint wireless links. Its smaller size and lower cost make it popular for last mile customer connections and shorter backhaul links where a larger, higher gain radio is not necessary.

Antofity Concepts supplies the NanoStation Loco M2 for shorter range wireless links across Kenya where a compact, budget friendly radio fits the job.'
where name = 'Ubiquiti NanoStation Loco M2 2.4GHz';


update catalogue_items set
  features = 'Compact integrated antenna radio
5GHz airMAX M series
Point to point and point to multipoint use
Outdoor rated, weatherproof
PoE powered',
  description = 'The Ubiquiti NanoStation Loco M5 offers the same compact, affordable design as the M2 version but operates on the 5GHz band, which is often less congested than 2.4GHz in built up areas. It suits shorter range point to point and point to multipoint links where a smaller radio is preferred over a larger dish antenna model.

Antofity Concepts supplies the NanoStation Loco M5 for cost effective wireless links across Kenya on the 5GHz band.'
where name = 'Ubiquiti NanoStation Loco M5 5GHz';


update catalogue_items set
  features = 'Integrated antenna
airMAX ac radio, higher throughput than the M series
Point to point and point to multipoint use
Outdoor rated, weatherproof
PoE powered',
  description = 'The Ubiquiti NanoStation AC upgrades the NanoStation line to the airMAX ac chipset, offering higher throughput than the older M series NanoStation radios while keeping the same integrated antenna, weatherproof design. It suits wireless links where more bandwidth is needed than the older M series can comfortably provide.

Antofity Concepts supplies the NanoStation AC for wireless links across Kenya that need more throughput than entry level M series radios offer.'
where name = 'Ubiquiti NanoStation AC';


update catalogue_items set
  features = 'Integrated antenna, higher gain than the Loco variant
2.4GHz airMAX M series
Point to point and point to multipoint use
Outdoor rated, weatherproof',
  description = 'The Ubiquiti NanoStation M2 offers a higher gain integrated antenna than the compact Loco variant, giving it somewhat longer range on the 2.4GHz band while remaining an affordable, easy to install radio. It suits point to point and point to multipoint links where a bit more range is needed than the Loco M2 can provide.

Antofity Concepts supplies the NanoStation M2 for wireless links across Kenya needing a step up in range from the entry level Loco models.'
where name = 'Ubiquiti NanoStation M2 2.4GHz';


update catalogue_items set
  features = 'Integrated antenna, higher gain than the Loco variant
5GHz airMAX M series
Point to point and point to multipoint use
Outdoor rated, weatherproof',
  description = 'The Ubiquiti NanoStation M5 pairs a higher gain integrated antenna with the 5GHz band, giving longer range than the Loco M5 while staying within the same affordable M series line. It remains a popular choice for point to point and point to multipoint wireless links where 5GHz spectrum is available and a bit more range than the Loco variant is needed.

Antofity Concepts supplies the NanoStation M5 for outdoor wireless links across Kenya needing extended range on the 5GHz band.'
where name = 'Ubiquiti NanoStation M5 5GHz';


update catalogue_items set
  features = 'Integrated dish antenna
airMAX ac radio
Long range point to point links
Outdoor rated, weatherproof',
  description = 'The Ubiquiti PowerBeam AC combines an airMAX ac radio with an integrated dish antenna, built for longer range point to point wireless links than radios with smaller integrated antennas. It commonly connects two buildings, a tower site back to a network operations centre, or a remote location back to the main network over a longer distance.

Antofity Concepts installs the PowerBeam AC for longer range point to point wireless links across Kenya where terrain or distance rules out cable.'
where name = 'Ubiquiti PowerBeam AC';


update catalogue_items set
  features = 'Improved integrated dish antenna and radio design
airMAX ac radio
Long range point to point links
Outdoor rated, weatherproof',
  description = 'The second generation Ubiquiti PowerBeam AC improves on the original design with a refined integrated dish antenna and radio, offering better performance for long range point to point wireless links. It suits the same use cases as the original PowerBeam AC but with improved reliability and throughput over longer distances.

Antofity Concepts supplies the PowerBeam AC Gen2 for demanding long range point to point wireless links across Kenya.'
where name = 'Ubiquiti PowerBeam AC Gen2';


update catalogue_items set
  features = 'Integrated dish antenna
5GHz airMAX M series radio
Affordable long range point to point option
Outdoor rated, weatherproof',
  description = 'The Ubiquiti PowerBeam M5 is an earlier generation, more affordable long range radio, still capable of solid point to point links on the 5GHz band where budget is a bigger factor than the extra throughput of newer ac generation radios. It remains a dependable choice for straightforward point to point links across a longer distance.

Antofity Concepts supplies the PowerBeam M5 for cost effective long range wireless links across Kenya.'
where name = 'Ubiquiti PowerBeam M5';


update catalogue_items set
  features = 'Mix of Gigabit and Fast Ethernet ports
Integrated 2.4GHz wireless radio
Runs RouterOS
Suited to combined routing and wireless needs',
  description = 'The MikroTik RouterBOARD 2011UiAS-2HnD combines multiple Gigabit and Fast Ethernet ports with an integrated 2.4GHz wireless radio, giving a single device that can act as both a wired router and a wireless access point for smaller sites. Running RouterOS, it supports the same routing, firewalling and VPN features found across the MikroTik range.

Antofity Concepts supplies the RB2011UiAS-2HnD for small networks in Kenya wanting combined wired routing and basic wireless coverage from one device.'
where name = 'MikroTik RouterBOARD 2011UiAS-2HnD';


update catalogue_items set
  features = '60GHz gigabit wireless
Compact access point
Short range, high capacity wireless backhaul or coverage
Part of the Ubiquiti Wave product line',
  description = 'The Ubiquiti Wave AP Micro operates on the 60GHz band, part of the Ubiquiti Wave line built for high capacity, short range wireless links where gigabit speeds are needed over a shorter distance than typical 5GHz airMAX radios cover. It suits applications such as connecting nearby buildings at high speed or providing dense short range coverage where interference on lower frequency bands is a concern.

Antofity Concepts supplies the Wave AP Micro for high capacity short range wireless deployments across Kenya where gigabit speeds are needed over shorter links.'
where name = 'Ubiquiti Wave AP Micro Access Point';
