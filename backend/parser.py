import json
import requests
from requests.exceptions import ConnectionError, Timeout, TooManyRedirects
import hidden

'''
@param currency - ticker string of cryptocurrency
Returns latest price, or -1 if unable to get price
'''
def get_latest_price(currency: str) -> float:

    base_url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'
    API_key = hidden.key

    #Data needed to connect to API
    headers = {
        'Accepts': 'application/json',
        'X-CMC_PRO_API_KEY': API_key,
    }
    
    #Data for API query
    parameters = {

    }
    
    #Create a Session object and request data
    session = requests.Session()
    try:
        res = session.get(url, params=parameters)
        data = json.loads(res.text)
    except:
        return -1
    




