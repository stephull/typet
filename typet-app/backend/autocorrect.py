# SOURCE: https://python-bloggers.com/2020/09/spelling-recommender-with-nltk/

import nltk
from nltk.corpus import words
from nltk.util import ngrams
from nltk.metrics.distance import edit_distance, jaccard_distance

entries = []
entry = str(input("Enter a misspelled word ('-1' to cancel) >> "))
while entry != '-1':
	entries.append(entry)
	entry = str(input("Continue (another word) >> "))

for en in entries:
	temp = [(jaccard_distance(set(ngrams(en, 2)), set(ngrams(w, 2))), w) for w in words.words() if w[0] == en[0]]
	print(sorted(temp, key = lambda val: val[0])[0][1])
