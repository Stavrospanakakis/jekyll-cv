FROM ruby:2.7-alpine

RUN apk add --update --no-cache build-base nodejs

WORKDIR /srv/jekyll

COPY Gemfile .

RUN gem update --system '3.2.3'

RUN bundle install

EXPOSE 4000

CMD ["jekyll", "serve", "--host", "0.0.0.0", "--watch", "--force_polling"]