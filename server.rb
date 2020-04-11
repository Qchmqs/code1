require 'sinatra'
require 'sinatra/json'

get '/load' do 

end

post '/save' do
	payload = params
    payload = JSON.parse(request.body.read) unless params[:name]

    logger.info "Saving #{payload[:name]} with #{payload[:age]}" 
    json payload
end