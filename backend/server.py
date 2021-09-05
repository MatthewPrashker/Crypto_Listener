from flask import Flask


app = Flask(__name__)

#Change later
app.config['DEBUG'] = True


def main():
    app.run()

if(__name__ == 'main'):
    main()

