from nltk.corpus import words
import random

from flask import Blueprint
word_api = Blueprint('word_api', __name__)

LIMIT = 15

@word_api.route("/words")
def get_words():
    return {
        "words": " ".join(random.sample(words.words(), LIMIT))
    }