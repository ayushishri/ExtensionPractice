# Ensure your pyOpenSSL pip package is up to date
# Example posting a text URL:

import requests
import json

def sentiment():
	endpoint = "https://api.deepai.org/api/sentiment-analysis"
	url = 'https://www.cnn.com/2019/10/11/politics/donald-trump-court-rulings-bad-day/index.html'

	d = {'text': "democrats appreciate Trump hate speech",}
	h = {'api-key': 'adf37e8f-0482-469a-b28f-88ec3353ef61'}
	r = requests.post(endpoint,data=d,headers=h)
	print(r.json())
	# data = json.loads(r.text)
	# print (data)

sentiment()