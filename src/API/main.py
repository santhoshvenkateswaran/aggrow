#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Application: A Recommendation System For Crop Prediction
@author: Santhosh [santhoshs1998@gmail.com]
"""

# Imports section
# Machine Learning packages
import numpy as np
import pandas as pd
from sklearn.tree import DecisionTreeClassifier
from sklearn.svm import SVC
from sklearn.ensemble import VotingClassifier, GradientBoostingClassifier

# Flask packages
from flask import Flask
from flask import request, jsonify
from flask_cors import CORS, cross_origin
import json


# Flask configuration
app = Flask(__name__)
app.config["DEBUG"] = True
CORS(app)


# ML Algorithm setup
isTrained = False
dt_cls = DecisionTreeClassifier(max_depth=8)
svc_cls = SVC(gamma='auto', probability=True)
gb_cls = GradientBoostingClassifier(n_estimators=20, learning_rate=0.25,
                                     max_features=3, max_depth=2,
                                     random_state=0)
vote_cls = VotingClassifier(estimators=[('SVC', svc_cls),
                                         ('DTree', dt_cls),
                                         ('BoostingReg', gb_cls)], voting='soft')


# Dataset fetch & setup
data = pd.read_csv("Dataset.csv")
global crops_list
crops_list = data['crop'].unique()
x = data.drop('crop', axis=1)
y = data['crop']


# Model train
vote_cls.fit(x, y)
isTrained = True


# User input
user_ip = [[0, 0, 0]]


# API home
@app.route('/', methods=['GET'])
def api_home():
    return '''<h4>Recommendation System for Crop Prediction</h4>
<p>A prototype application for crop prediction.</p>'''


# API train response
@app.route('/api/train', methods=['GET'])
def api_train():
    return json.loads('{"success":"'+ str(isTrained) +'"}')


# API predict
@app.route('/api/predict', methods=['POST'])
def api_predict():
    s = json.loads(request.get_data())
    user_ip[0][0] = s['rainfall']
    user_ip[0][1] = s['temperature']
    user_ip[0][2] = s['pH']
    global vote_cls
    vote_result = vote_cls.predict_proba(user_ip)[0]
    global crops_list
    probabilities = pd.DataFrame(list(zip(vote_result, crops_list)),
                                  columns =['vote', 'crops'])
    probabilities.sort_values("vote", axis = 0, ascending = False,
                              inplace = True, na_position ='last')
    predictions = list(probabilities['crops'].head(3))
    return json.loads('{' + '"crop1":"' + predictions[0] + '","crop2":"' + predictions[1] + '","crop3":"' + predictions[2] + '"}')


# API application run
app.run()
