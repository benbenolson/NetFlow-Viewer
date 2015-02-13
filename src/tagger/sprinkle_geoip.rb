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

countries = ['United States', 'China', 'Japan', 'Israel', 'Cuba',
                  'Burma', 'Pakistan', 'Barbados']

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
