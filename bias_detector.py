import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import requests
import urllib.request
import time
import nltk
from bs4 import BeautifulSoup
import argparse

from google.cloud import languageact
from google.cloud.language import enums
from google.cloud.language import types

websites = ["foxnews.com","cnn.com", "wsj.com", "breitbart.com"]
keywords = ["conservative", "liberal", "democrat", "republican", "trump", "immigration",
            "immigrants", "obama", "abortion", "lgbt", "impeach", "impeachment", "border wall"
            "hunter", "joe biden", "biden", "aoc", "alexandria ocasio-cortez", "tariffs"]
left = ["liberal", "democrat", "immigration", "immigrants", "lgbt", "abortion", "impeach", "impeachment", "hunter", "biden", "obama", "aoc", "alexandria ocasio-cortez"]
right = ["conservative", "trump", "republican", "border wall", "tariffs"]

res = ""

url = "https://www.cnn.com/2019/10/11/politics/donald-trump-court-rulings-bad-day/index.html" #TODO taken  from javascript for the extension
newssite = False
blacklist = ['style', 'script']
for site in websites:
    if site in url:
        newssite = True
        break

if newssite:
    html = requests.get(url).text
    soup = BeautifulSoup(html, "lxml")
    text = res.join(str(t) for t in soup.find_all(text=True) if t.parent.name not in blacklist)
    text = text.split('\n')
    articleText = max(text, key=len)
    articleSentences = articleText.split('.')
    print(articleText)
    for sentence in articleSentences:
        print(sentence)
        for word in keywords:
            if word in sentence:
                #todo api call here
