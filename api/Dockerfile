FROM ruby:2.7.1-alpine

RUN apk update && apk add bash build-base nodejs postgresql-dev tzdata git openssh

RUN mkdir /api
WORKDIR /api

COPY Gemfile /api/
COPY Gemfile.lock /api/
COPY entrypoint.sh /api/

# Port to expose
EXPOSE 3000
CMD chmod +x entrypoint.sh
RUN gem install bundler --no-document
RUN bundle install --no-binstubs --jobs $(nproc) --retry 3

ENTRYPOINT ["sh", "entrypoint.sh"]