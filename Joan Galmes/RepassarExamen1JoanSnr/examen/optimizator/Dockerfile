FROM debian:11

RUN apt-get update
RUN apt-get install bash
RUN apt-get install ImageMagick

#He trobat ImageMagick que crec que funciona per a l'exercici pero no entenc perque no
#executa be la comanda de apt-get install ImageMagick


WORKDIR /

CMD ["/usr/local/bin/optimize.sh"]
