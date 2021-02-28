# sw-cv - In Progress

University assignment about the development of my CV using Jekyll.

## Run

### Docker
You should have [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/) installed.

```
# Clone the repository
$ git clone https://github.com/Stavrospanakakis/sw-cv.git

# Navigate to the project folder
$ cd sw-cv

# Run server
$ docker-compose up --build
```
Browse to http://localhost:4000


### Manually
- Install all [prerequisites](https://jekyllrb.com/docs/installation/)
- Install the jekyll and [bundler gems](https://jekyllrb.com/docs/ruby-101/#gems)

```
# Clone the repository
$ git clone https://github.com/Stavrospanakakis/sw-cv.git

# Navigate to the project folder
$ cd sw-cv

# Run server
$ bundle exec jekyll serve
```
Browse to http://localhost:4000
