#
# GeoIP sprinkler, originally written by Ben Brock.
#

require 'json'

"""
countries = ['Bendonia', 'Johnville', 'Calebian', 'Nickton',
             'Jamedon', 'Olsonia', 'Brocktown', 'Republic of Burnum',
             'United Finney', 'People\'s Republic of Ben Olson',
             'Finnland', 'Ben Olson\'s Svedka']
"""

"""
countries = ['United States', 'China', 'Japan', 'Israel', 'Cuba',
                  'Burma', 'Pakistan', 'Barbados']
"""

countries = ["AE", "AF", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BD", "BE", "BF",
             "BG", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD",
             "CF", "CG", "CH", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CY", "CZ", "DE",
             "DJ", "DK", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FK", "FI",
             "FJ", "FR", "GA", "GB", "GE", "GF", "GH", "GL", "GM", "GN", "GQ", "GR", "GT",
             "GW", "GY", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IR", "IS",
             "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KP", "KR", "XK", "KW", "KZ", "LA",
             "LB", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MD", "ME", "MG", "MK",
             "ML", "MM", "MN", "MR", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NG", "NI",
             "NL", "NO", "NP", "NZ", "OM", "PA", "PE", "PG", "PH", "PL", "PK", "PR", "PS",
             "PT", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SD", "SE", "SI", "SJ",
             "SK", "SL", "SN", "SO", "SR", "SS", "SV", "SY", "SZ", "TD", "TF", "TG", "TH",
             "TJ", "TL", "TM", "TN", "TR", "TT", "TW", "TZ", "UA", "UG", "US", "UY", "UZ",
             "VE", "VN", "VU", "YE", "ZA", "ZM", "ZW"]

geoip = Hash.new

netflow = JSON.parse(File.read('convertcsv.json'))

netflow.each do |flow|
  if !geoip.has_key? flow['firstSeenSrcIp']
    geoip[flow['firstSeenSrcIp']] = countries.sample
  end

  if !geoip.has_key? flow['firstSeenDestIp']
    geoip[flow['firstSeenDestIp']] = countries.sample
  end

  flow['srcIpCountry'] = geoip[flow['firstSeenSrcIp']]
  flow['dstIpCountry'] = geoip[flow['firstSeenDestIp']]
end

puts JSON.pretty_generate(netflow)
