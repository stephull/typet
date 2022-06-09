from nltk.corpus import words
from random import sample

from flask import Blueprint
word_api = Blueprint('word_api', __name__)

LIMIT = 50
return_words = " ".join(sample(words.words(), LIMIT))

@word_api.route("/words")
def get_words():
    return {
        "words": return_words
    }