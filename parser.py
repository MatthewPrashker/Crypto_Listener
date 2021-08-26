import urllib
import xmltodict
import feedparser

base_url = 'http://export.arxiv.org/api/query?'


def create_query_string(author:str, title_keywords:list[str], max_results:int) -> str:
    base_query = 'search_query'
    tail_query = ''



    return base_url + base_query + tail_query



