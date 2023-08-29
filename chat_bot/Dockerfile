FROM golang:latest

WORKDIR /app

COPY go.mod ./
COPY go.sum ./
RUN test -f ./chat.db && rm ./chat.db || true
RUN go mod download

COPY . .

RUN go build -o main .

EXPOSE 8080

ENTRYPOINT ["./main"]
