#
# NetFlow streamer, originally written by Ben Brock.
#
# TODO 
# Support multiple clients
# Add encryption
#

require 'socket'
require 'getoptlong'
require 'csv'

class String
  def numeric?
    return true if self =~ /^\d+$/
    true if Float(self) rescue false
  end
end

opts = GetoptLong.new(
  ['--help', '-h', GetoptLong::NO_ARGUMENT],
  ['--port', '-p', GetoptLong::OPTIONAL_ARGUMENT]
)

file = nil
port = 4215

opts.each do |opt, arg|
  case opt
    when '--help'
      puts <<-EOF
Usage: stream [options] <file>

-h, --help:
    show help

-p <port>
    specify port number; default 4215

file:
    file to parse and stream
      EOF
      exit 0
    when '--port'
      if arg != ''
        port = arg
      end
  end
end

if ARGV.length != 1
  puts "No file specified. Try -h."
  exit 0
end

file = ARGV.shift

# Create server, get a client.
server = TCPServer.new port
client = server.accept

init_time = Time.now.to_f
csv_init_time = nil

CSV.foreach(file) do |entry|
  if entry[0].numeric?
    if csv_init_time == nil
      csv_init_time = entry[0].to_f
    end

    elapsed = Time.now.to_f - init_time
    csv_elapsed = entry[0].to_f - csv_init_time

    if csv_elapsed > elapsed
      sleep [csv_elapsed - elapsed, 0].max
    end
  end
  client.puts entry.to_csv
end

client.close
server.close
