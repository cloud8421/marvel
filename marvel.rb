require 'sinatra'
require 'dotenv'
require 'redis'
require 'virtus'

Dotenv.load

RACK_ENV ||= 'development'

class Comic
  include Virtus.model

  attribute :id, Integer
  attribute :added_at, Time

  def to_json
    {
      id: id,
      added_at: Time.at(added_at)
    }
  end
end

module WishListStore

  def self.add(comic_id)
    store.zadd store_key, Time.now.to_i, comic_id
  end

  def self.get
    sorted_ids = store.zrange store_key, 0, -1, with_scores: true
    sorted_ids.map do |id, added_at|
      Comic.new(id: id, added_at: added_at).to_json
    end
  end

  private

  def self.store
    @@store ||= Redis.new
  end

  def self.store_key
    @@store_key ||= ['marvel', RACK_ENV, 'wishlist'].join
  end

end


class Marvel < Sinatra::Base

  configure do
    set :root, File.dirname(__FILE__)
  end

  get '/' do
    erb :index
  end

  post '/wish_list_items' do
    WishListStore.add params[:id]
    get_wish_list_items
  end

  get '/wish_list_items' do
    get_wish_list_items
  end

  private

  def get_wish_list_items
    comic_ids = WishListStore.get
    { comics: comic_ids }.to_json
  end

end
