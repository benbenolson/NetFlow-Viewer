#
# NetFlow stream receiver, originally written by Ben Brock.
#
# TODO
# Store input in SQL database
# Add encryption
#

require 'socket'
require 'getoptlong'

opts = GetoptLong.new(
  ['--help', '-h', GetoptLong::NO_ARGUMENT],
  ['--port', '-p', GetoptLong::OPTIONAL_ARGUMENT]
)

port = 4215
host = nil

opts.each do |opt, arg|
  case opt
    when '--help'
      puts <<-EOF
Usage: receive [options] <host>

-h, --help:
    show help

-p <port>
    specify port number; default 4215

host:
    streaming host
      EOF
      exit 0
    when '--port'
      if arg != ''
        port = arg
      end
  end
end

if ARGV.length != 1
  puts "No host specified. Try -h."
  exit 0
end

host = ARGV.shift

client = TCPSocket.new host, port

while snippet = client.gets
  puts snippet
end

client.close
