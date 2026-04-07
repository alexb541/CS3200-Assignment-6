Overview
In this assignment you will be using Node to interact with an in-memory Redis Database. For this we will be building on the Mongo Database you used for Assignment 5.

Tasks

Query1: (20pts) How many tweets are there? Create a tweetCount key that contains the total number of tweets in the database. For this, initialize tweetCount in 0 (SET), then query the tweets collection in Mongo and increase (INCR) tweetCount. Once the query is done, get the last value of tweetCount (GET) and print it in the console with a message that says "There were ### tweets", with ### being the actual number

Query2: (20pts) Compute and print the total number of favorites in the dataset. For this apply the same process as before, query all the tweets, start a favoritesSum key (SET), increment it by the number of favorites on each tweet (INCRBY), and then get the value (GET) and print it on the screen.

Query3: (20pts) Compute how many distinct users are there in the dataset. For this use a set by the screen_name, e.g. screen_names

Query4: (20pts) Create a leaderboard with the top 10 users with more tweets. Use a sorted set called leaderboard

Query5: (30pts) Create a structure that lets you get all the tweets for an specific user. Use lists for each screen_name e.g. a list with key tweets:duto_guerra that points to a list of all the tweet ids for duto_guerra, e.g. [123, 143, 173, 213]. and then a hash that links from tweetid to the tweet information e.g. tweet:123 which points to all the tweet attributes (i.e. user_name, text, created_at, etc)

Please submit a zip file with the folder containing the five queries in individual js files, and a package.json with the requirements. Do not include the node_modules folder

Creates js queries for the tweets database from assignment 5 using redis and MongoDB
