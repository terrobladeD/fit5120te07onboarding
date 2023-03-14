from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd

api = Flask(__name__)
CORS(api)
collection_data= pd.read_csv('clean_data.csv',header=0)

@api.route('/profile',methods=["POST"])
def submit_input_value():
    headers = {
        'Access-Control-Allow-Origin': '*'
    }
    input_value = request.form['inputValue']
    # print(input_value)
    try:
        index = collection_data[collection_data['address'].str.contains(input_value)].index.tolist()[0]
    except:
        return  jsonify({})
    day = collection_data['collectionday'][index]
    nextwaste = collection_data['nextwaste'][index]
    nextrecycle = collection_data['nextrecycle'][index]
    nextgreen = collection_data['nextgreen'][index]
    response_data = {'day': day, 'landfilldate':nextgreen,'recycledate':nextrecycle,'fooddate':nextwaste}
    # print(response_data)
    test = input_value.upper()
    response_test = {'response': test,'response1': test}
    # print(response_test)
    return jsonify(response_data)

@api.route('/',methods=["GET"])
def hello_world():
    # print(request.args.get(name'))
    headers = {
        'Access-Control-Allow-Origin': '*'
    }
    return "<p>Hello, World!</p>"