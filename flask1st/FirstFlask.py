from flask import Flask, render_template
import json
import requests

app=Flask(__name__,template_folder="/home/sendnuggets/Desktop/Learning-Web-Dev/firstFlask")

def get_meme():
    url="https://meme-api.com/gimme"
    response=json.loads(requests.request("GET",url).text)
    Bmeme= response["preview"][-2]
    subreddit=response["subreddit"]
    return Bmeme, subreddit


@app.route("/")

def test():
    meme_chosen, subreddit = get_meme()
    return render_template("meme.html",meme_chosen=meme_chosen,subreddit=subreddit)

app.run(host="0.0.0.0",port=5000)