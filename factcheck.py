def httpGetFactCheck(text):
	response = requests.get('https://factchecktools.googleapis.com/v1alpha1/claims:search?query='+str(text)+'?languageCode=en-US')
	dic = json.loads(response.text) 

	print(response.status_code)
	if not response:
		print("Error in Fact Check")
	else:
		print (dic)
		rval = dic['claimReview'] # this is a list
		print (len(rval))
		return rval[0]['textualRating']
return None



