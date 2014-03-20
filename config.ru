require 'bundler'
Bundler.setup

require 'rack/contrib'
require_relative "marvel"

use Rack::PostBodyContentTypeParser

run Marvel
